#!/usr/bin/env node
// Usage: node scripts/post-to-fb.js <slug>
const fetch = require('node-fetch')
const slug = process.argv[2]
if (!slug) {
  console.error('Usage: node scripts/post-to-fb.js <slug>')
  process.exit(1)
}

const host = process.env.SITE_HOST || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const url = `${host}/api/fb-post`

;(async () => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }),
    })
    const json = await res.json()
    console.log(JSON.stringify(json, null, 2))
  } catch (err) {
    console.error(err)
    process.exit(2)
  }
})()
