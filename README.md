# Harris in Wonderland

Static rebuild of the Canton, CT **reptile specialty shop**.

Source material scraped from the 2000s `harrisinwonderland.com` pages (about, reptiles, available-animals lists) plus current public listings (address, phones, hours, reviews).

- Repo: https://github.com/VoidcallerOC/Harris
- Pattern: FORGE client-site-starter (zero-build HTML/CSS/JS)
- Old domain: harrisinwonderland.com

## Pages

- `/` herp-first homepage: live collection, specimen cases, keepers
- `/reptiles` snakes, lizards, amphibians, feeders, care sheets, how to buy
- `/gallery` shop photography from the live collection
- `/visit` hours, snake-handle door, birthday programs, contact
- `/fish` quieter secondary page (freshwater, marine, ponds, gliders)

## Facts on the site

- 364 Albany Turnpike, Canton, CT
- (860) 674-0160 and (860) 888-5130
- Adam@harrisinwonderland.com and Seth@harrisinwonderland.com
- Seth Harris (founder, fish, taught biology), Adam Harris (reptiles, breeding, field time), Ashlee Carlson (husbandry)
- Captive-bred stock, care sheets, birthday programs, snake-handle door
- No birds. No 2015 price list.

## Before launch

1. Confirm Friday hours (public listings disagree: some say 10–7, Yelp March 2026 says 4:30–7:30).
2. Shop photography lives in `/assets/img/gallery/` (22 frames from the collection). Hero, case, visit, and fish pages pull from that set.
3. Point Vercel to this repo (static, no framework).

## Local

```bash
python3 -m http.server 8000
```

Paths are absolute (`/assets/...`), so serve from the project root.
