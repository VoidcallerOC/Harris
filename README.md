# Harris in Wonderland

Static rebuild of the Canton, CT **reptile specialty shop**.

Source material scraped from the 2000s `harrisinwonderland.com` pages (about, reptiles, available-animals lists) plus current public listings (address, phones, hours, reviews).

- Repo: https://github.com/VoidcallerOC/Harris
- Pattern: FORGE client-site-starter (zero-build HTML/CSS/JS)
- Old domain: harrisinwonderland.com
- Live stock: https://my-hiwsite-6573.square.site

## Pages

- `/` herp-first homepage: live collection, specimen cases, beginner chooser, keepers
- `/reptiles` snakes, lizards, amphibians, feeders, care sheets, beginner chooser, how to buy
- `/visit` hours, snake-handle door, birthday programs, contact
- `/fish` quieter secondary page (freshwater, marine, ponds, gliders)

## Facts on the site

- 364 Albany Turnpike, Canton, CT
- Shop (860) 674-0160 · booking / mobile (860) 888-5130
- Adam@harrisinwonderland.com and Seth@harrisinwonderland.com
- Hours: Sun 12–4, Mon closed, Tue–Thu 10–7:30, Fri 10–7, Sat 10–6
- Seth Harris (founder, fish, taught biology), Adam Harris (reptiles, breeding, field time), Ashlee Carlson (husbandry)
- Captive-bred stock, care sheets, birthday programs, snake-handle door
- No birds. No 2015 price list.

## Photos

Old-site files, committed under the slot names the pages already use:

- `assets/img/hero.jpg` from `images/giant-day.JPG` (1600x1200)
- `assets/img/case-snakes.jpg` from `images/Ball1.jpg`
- `assets/img/case-lizards.jpg` from `images/panther2.jpg`
- `assets/img/case-amphibians.jpg` from `images/red-eye.JPG`
- `assets/img/bdaysnake55.jpg` birthday / education shot

## Before launch

1. Point Vercel to this repo (static, no framework).

## Local

```bash
python3 -m http.server 8000
```

Paths are absolute (`/assets/...`), so serve from the project root.
