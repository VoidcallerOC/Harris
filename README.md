# Harris in Wonderland

Static rebuild of the Canton, CT reptile and exotic-pet shop site.

Source material scraped from the 2000s `harrisinwonderland.com` pages (about, reptiles, available-animals lists) plus current public listings (address, phone, hours, reviews).

- Repo: https://github.com/VoidcallerOC/Harris
- Pattern: FORGE client-site-starter (zero-build HTML/CSS/JS)
- Old domain: harrisinwonderland.com

## Pages

- `/` story, collection, hours tease
- `/reptiles` herps + how to buy
- `/fish` freshwater, marine, ponds, gliders
- `/visit` hours, map, parties, contact form

## Before launch

1. Confirm Friday hours (public listings disagree: some say 10–7, Yelp March 2026 says 4:30–7:30).
2. Confirm a public email. Form currently opens a mailto to `harrisinwonderland@gmail.com` — replace in `assets/js/main.js` if wrong.
3. Drop real store photos into `assets/img/` and wire them into the hero panel / tiles.
4. Point Vercel to this repo (static, no framework).

## Local

```bash
python3 -m http.server 8000
```

Paths are absolute (`/assets/...`), so serve from the project root.
