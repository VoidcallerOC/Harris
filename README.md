# Harris in Wonderland

Static rebuild of the Canton, CT **reptile specialty shop**.

- Live: https://harrisinwonderland.com
- Preview: https://harris-sand.vercel.app
- Stock: https://my-hiwsite-6573.square.site

## Launch facts

- 364 Albany Turnpike, Canton CT 06019
- Shop (860) 674-0160 · booking (860) 888-5130
- Adam@harrisinwonderland.com · Seth@harrisinwonderland.com
- Hours: Mon closed · Tue–Fri 10–7 · Sat 10–6 · Sun 12–4
- Friday is 10–7 (live shop + directories), not 4:30–7:30
- Facebook https://www.facebook.com/profile.php?id=100063473713270
- Instagram https://www.instagram.com/harris_in_wonderland_pets/
- No birds. No 2015 price list. No Gmail. No Ashlee headshot.

## Pages

- `/` herp-first homepage, live-stock CTA, their animal photos
- `/reptiles` beginner chooser + collection
- `/care/*` corn, king, leopard gecko, bearded dragon, red-foot, White’s
- `/visit` hours, both phones, both emails, birthday booking
- `/fish` quieter footer-only room (no birds)

## Photos in `assets/img/`

Pulled from harrisinwonderland.com/images/ (directory listing 403s; files still serve). Not hotlinked.

## Local

```bash
python3 -m http.server 8000
```

Paths are absolute (`/assets/...`), so serve from the project root.
