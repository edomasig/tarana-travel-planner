import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import { SeasonalData, getCurrentSeason } from './seasonal-service'

const readFile = promisify(fs.readFile)
const stat = promisify(fs.stat)

const SEASON_DIR = path.join(process.cwd(), 'content', 'seasonal')

interface CacheEntry { data: SeasonalData; mtimeMs: number }
const cache = new Map<string, CacheEntry>()

function splitAndTrim(value: string, delimiter = /;|,/): string[] {
  return value
    .split(delimiter)
    .map(s => s.trim())
    .filter(Boolean)
}

function parseMetadata(lines: string[], idxRef: { i: number }): Record<string, string> {
  const meta: Record<string, string> = {}
  while (idxRef.i < lines.length) {
    const line = lines[idxRef.i].trim()
    if (!line) { idxRef.i++; break }
    const match = line.match(/^([A-Za-z][A-Za-z0-9]*)\s*:\s*(.+)$/)
    if (match) {
      meta[match[1]] = match[2].trim()
      idxRef.i++
    } else {
      break
    }
  }
  return meta
}

function parseDestinations(lines: string[], idxRef: { i: number }) {
  const destinations: SeasonalData['destinations'] = []
  let current: any = null
  while (idxRef.i < lines.length) {
    const raw = lines[idxRef.i]
    const line = raw.trim()
    if (!line) { idxRef.i++; continue }
    if (line.startsWith('## ')) break // next major section
    if (line.startsWith('### ')) {
      if (current) {
        destinations.push(finalizeDestination(current))
      }
      current = { name: line.replace(/^###\s+/, '').trim() }
      idxRef.i++; continue
    }
    const kv = line.match(/^([A-Za-z][A-Za-z0-9]*)\s*:\s*(.*)$/)
    if (kv && current) {
      const key = kv[1]
      const value = kv[2].trim()
      if (key === 'highlights') current.highlights = splitAndTrim(value)
      else if (key === 'description') {
        // Multiline description: collect following indented/non key: lines until blank or heading
        const descLines: string[] = []
        idxRef.i++
        while (idxRef.i < lines.length) {
          const next = lines[idxRef.i]
            if (!next.trim()) { break }
            if (/^(### |## )/.test(next.trim())) break
            if (/^[A-Za-z][A-Za-z0-9]*\s*:/.test(next.trim())) break
            descLines.push(next.trim())
            idxRef.i++
        }
        current.description = descLines.join(' ').trim()
        continue
      } else {
        current[key] = value
      }
      idxRef.i++; continue
    }
    idxRef.i++
  }
  if (current) destinations.push(finalizeDestination(current))
  return destinations
}

function finalizeDestination(d: any) {
  return {
    name: d.name || 'Unknown',
    location: d.location || '',
    description: d.description || '',
    image: d.image || '/placeholder.jpg',
    rating: d.rating || 'N/A',
    bestTime: d.bestTime || '',
    budget: d.budget || '',
    highlights: Array.isArray(d.highlights) ? d.highlights : []
  }
}

function parseItinerary(lines: string[], idxRef: { i: number }) : SeasonalData['featuredItinerary'] {
  const baseMeta = parseMetadata(lines, idxRef)
  const days: SeasonalData['featuredItinerary']['days'] = []
  while (idxRef.i < lines.length) {
    let line = lines[idxRef.i].trim()
    if (!line) { idxRef.i++; continue }
    if (line.startsWith('## ')) break // next major
    if (line.startsWith('### Day')) {
      // Header pattern: ### Day 1 | Location | /image.png
      const headerParts = line.replace(/^###\s+/, '').split('|').map(p => p.trim())
      const dayMatch = headerParts[0].match(/Day\s+(\d+)/i)
      const dayNum = dayMatch ? parseInt(dayMatch[1], 10) : days.length + 1
      const location = headerParts[1] || headerParts[0].replace(/Day\s+\d+/i,'').trim()
      const image = headerParts[2] || '/placeholder.jpg'
      idxRef.i++
      const activities: any[] = []
      while (idxRef.i < lines.length) {
        line = lines[idxRef.i]
        const trimmed = line.trim()
        if (!trimmed) { idxRef.i++; continue }
        if (trimmed.startsWith('### Day') || trimmed.startsWith('## ')) break
        if (trimmed.startsWith('-')) {
          // - time | activity | type | cost | description | Tip: xxx
          const row = trimmed.replace(/^-/,'').split('|').map(s => s.trim())
          const time = row[0] || ''
          const activity = row[1] || ''
          const type = (row[2] || 'attraction') as any
          const cost = row[3] || ''
          // description may be index 4; tip may be index 5 containing Tip:
          let description = row[4] || ''
          let tips: string | undefined
          if (row[5] && /^Tip:/i.test(row[5])) {
            tips = row[5].replace(/^Tip:\s*/i,'').trim()
          } else if (row.length > 5) {
            // if more than 6 columns, join rest for description
            description = row.slice(4).join(' ')
          }
          activities.push({ time, activity, description, cost, type, ...(tips ? { tips } : {}) })
        }
        idxRef.i++
      }
      days.push({ day: dayNum, location, image, activities })
      continue
    }
    idxRef.i++
  }
  return {
    title: baseMeta.title || 'Itinerary',
    duration: baseMeta.duration || '',
    budget: baseMeta.budget || '',
    difficulty: baseMeta.difficulty || '',
    season: baseMeta.season || '',
    days
  }
}

function parseTips(lines: string[], idxRef: { i: number }): SeasonalData['tips'] {
  const packing: string[] = []
  const advice: string[] = []
  let mode: 'packing' | 'advice' | null = null
  while (idxRef.i < lines.length) {
    const line = lines[idxRef.i].trim()
    if (!line) { idxRef.i++; continue }
    if (line.startsWith('## ')) break
    if (line.startsWith('### ')) {
      const heading = line.replace(/^###\s+/,'').toLowerCase()
      if (heading.startsWith('packing')) mode = 'packing'
      else if (heading.startsWith('advice')) mode = 'advice'
      idxRef.i++; continue
    }
    if (line.startsWith('-')) {
      const item = line.replace(/^-[\s]*/,'').trim()
      if (mode === 'packing') packing.push(item)
      else if (mode === 'advice') advice.push(item)
    }
    idxRef.i++
  }
  return { packing, advice }
}

export function parseSeasonalMarkdown(raw: string): SeasonalData {
  const lines = raw.split(/\r?\n/)
  const idxRef = { i: 0 }
  const meta = parseMetadata(lines, idxRef)
  const seasonBlock: SeasonalData['season'] = {
    name: meta.name || 'Unknown Season',
    title: meta.title || '',
    description: meta.description || '',
    months: meta.months || '',
    temperature: meta.temperature || '',
    weather: meta.weather || '',
    bestFor: meta.bestFor || '',
    events: meta.events || ''
  }
  // advance to next major sections
  function advanceTo(section: string) {
    while (idxRef.i < lines.length) {
      const l = lines[idxRef.i].trim()
      if (l.toLowerCase() === section.toLowerCase()) { idxRef.i++; break }
      idxRef.i++
    }
  }

  advanceTo('## Destinations')
  const destinations = parseDestinations(lines, idxRef)
  advanceTo('## Featured Itinerary')
  const featuredItinerary = parseItinerary(lines, idxRef)
  advanceTo('## Tips')
  const tips = parseTips(lines, idxRef)

  return { season: seasonBlock, destinations, featuredItinerary, tips }
}

async function readSeasonFile(slug: string): Promise<SeasonalData | null> {
  const filePath = path.join(SEASON_DIR, `${slug}.md`)
  try {
    const [fileBuf, fileStat] = await Promise.all([readFile(filePath, 'utf8'), stat(filePath)])
    const cached = cache.get(slug)
    if (cached && cached.mtimeMs === fileStat.mtimeMs) return cached.data
    const data = parseSeasonalMarkdown(fileBuf)
    cache.set(slug, { data, mtimeMs: fileStat.mtimeMs })
    return data
  } catch {
    return null
  }
}

export async function loadSeason(slug?: string): Promise<SeasonalData | null> {
  const target = slug || getCurrentSeason()
  return await readSeasonFile(target)
}

export async function loadAllSeasons(): Promise<Record<string, SeasonalData>> {
  const result: Record<string, SeasonalData> = {}
  try {
    const files = fs.readdirSync(SEASON_DIR).filter(f => f.endsWith('.md'))
    for (const f of files) {
      const slug = f.replace(/\.md$/,'')
      const data = await readSeasonFile(slug)
      if (data) result[slug] = data
    }
  } catch {/* ignore */}
  return result
}
