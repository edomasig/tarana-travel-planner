import Link from 'next/link'
import { getCurrentSeason } from '@/lib/seasonal-service'

const seasons: { slug: string; label: string }[] = [
  { slug: 'holiday', label: 'Holiday' },
  { slug: 'summer', label: 'Summer' },
  { slug: 'rainy', label: 'Rainy' },
  { slug: 'dry', label: 'Dry' },
]

export function SeasonSwitcher({ active }: { active?: string }) {
  const current = active || getCurrentSeason()
  return (
    <div className="flex flex-wrap gap-2 justify-center mt-6">
      {seasons.map(s => {
        const isActive = s.slug === current
        return (
          <Link
            key={s.slug}
            href={`/seasonal?season=${s.slug}`}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${isActive ? 'bg-purple-600 text-white border-purple-600 shadow' : 'bg-white text-gray-700 hover:bg-purple-50 border-gray-300'}`}
            prefetch={false}
          >
            {s.label}
          </Link>
        )
      })}
    </div>
  )
}
