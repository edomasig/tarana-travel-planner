# Seasonal Content Format

All seasons are defined as markdown files: `holiday.md`, `summer.md`, `rainy.md`, `dry.md`.

Structure:
```
name: Holiday Season
title: ...
...metadata key: value lines (blank line ends metadata block)

## Destinations

### Destination Name
location: ...
rating: ...
highlights: A; B; C
prompt: Generate a 4-day family-focused itinerary highlighting A, B and C with budget tips.

description:
Multiline text until blank/key/heading.

(repeat destinations)

## Featured Itinerary
title: ...
prompt: Create a 5-day culturally rich rainy season retreat across Baguio and Sagada including budget estimates.
... itinerary meta

### Day 1 | Location | /image.png
- 8:00 AM | Activity | type | ₱100 | Description text. | Tip: Optional tip

(repeat days)

## Tips

### Packing
- Item 1

### Advice
- Advice line
```

Notes:
- Highlights use `;` or `,` separated list.
- Activities: columns: time | activity | type | cost | description | optional Tip: ...
- Types: attraction | food | transport | accommodation
- Missing fields fallback gracefully.
