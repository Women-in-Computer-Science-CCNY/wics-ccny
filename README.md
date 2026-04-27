# WiCS @ CCNY — Official Website

The home of **Women in Computer Science at The City College of New York** — a student-led organization building a supportive community for women and underrepresented students in tech.

🌐 Live site: _coming soon_

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Quick start

```bash
git clone https://github.com/Women-in-Computer-Science-CCNY/wics-ccny.git
cd wics-ccny
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx          Root layout, metadata, page-wide background
│   ├── page.tsx            Homepage — assembles all sections
│   └── globals.css         Global styles, CSS variables, font imports
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      Sticky nav with mobile drawer
│   │   └── Footer.tsx      Footer with social links
│   │
│   ├── sections/
│   │   ├── Hero.tsx               Landing hero
│   │   ├── About.tsx              Mission + three pillars
│   │   ├── WhatWeDo.tsx           Activity cards grid
│   │   ├── BeaverHacksBanner.tsx  Hackathon spotlight
│   │   ├── WhyJoin.tsx            Reasons to join
│   │   ├── Events.tsx             Upcoming + past events tabs
│   │   ├── EBoard.tsx             E-board, switchable by school year
│   │   └── Join.tsx               CTA, Linktree QR, social cards
│   │
│   └── ui/
│       ├── AnimatedSection.tsx    Scroll-triggered fade-up wrapper
│       ├── Button.tsx             Reusable button with variants
│       ├── PixelCloud.tsx         Floating pixel-art cloud
│       └── SectionHeader.tsx      Eyebrow + title + subtitle
│
└── lib/
    ├── utils.ts            cn() helper
    └── data/
        ├── eboard.ts       E-board rosters by school year
        └── events.ts       Upcoming + past events
```

---

## Updating content

All editable content lives in `src/lib/data/` and a few component files. No CMS, no build step needed beyond `npm run dev`.

### Events

Edit [`src/lib/data/events.ts`](src/lib/data/events.ts). Add a new object to `upcomingEvents` or `pastEvents` with title, date, description, category, and optional link. After an event passes, move its object from `upcomingEvents` to `pastEvents`.

### E-Board (by school year)

Edit [`src/lib/data/eboard.ts`](src/lib/data/eboard.ts). Each school year is its own entry in the `boards` array:

```ts
{
  year: "2026-2027",
  members: [
    { name: "...", role: "Co-President", photo: "/eboard/name.jpg" },
    // ...
  ],
}
```

When a new board is elected each spring:

1. Add a new entry with the next school year.
2. Drop the new members into `members`.
3. Place each member's headshot in `public/eboard/` (square crop, ~400×400px).

The site automatically defaults to the most recent year that has members. Past years remain reachable via the year tabs.

### Social links

Update hrefs in:

- [`src/components/sections/Join.tsx`](src/components/sections/Join.tsx) — Instagram, Discord, LinkedIn, Linktree, contact email
- [`src/components/layout/Footer.tsx`](src/components/layout/Footer.tsx) — same set

### Linktree QR code

Replace the placeholder in [`Join.tsx`](src/components/sections/Join.tsx) with an `<Image>` pointing to `/qr-linktree.png` once you've generated it.

---

## Required assets

Files that live in `/public/`:

| File | Description |
|------|-------------|
| `wics-logo.png` | Brand logo — used in the navbar |
| `mascot.png` | Pixel beaver mascot — used in hero, footer, Join CTA |
| `cloud-deco.png` | Pixel-art cloud — repeated across sections as floating decoration |
| `eboard/<name>.jpg` | E-board member headshots (one per member) |

Recommended e-board headshot specs: square crop, ~400×400px, person centered.

---

## Design tokens

Brand colors are defined in [`tailwind.config.ts`](tailwind.config.ts):

- **Lavender** — primary
- **Sky** — secondary / cool accent
- **Blush** — warm accent
- **Violet Deep** (`#2D1B69`) — primary text
- **Cream** (`#FAFAFE`) — soft neutral

Typography:

- **Fraunces** — display & headings
- **Nunito** — body

The whole page sits on a single fixed `lavender → sky → blush` gradient defined in [`src/app/layout.tsx`](src/app/layout.tsx) — every section renders against it.

---

## Deployment

Recommended: deploy to Vercel.

```bash
npx vercel
```

Or connect the GitHub repo to Vercel for automatic deploys on every push to `main`.

---

## Contributing

This site is maintained by the WiCS @ CCNY e-board.

If you're a member and want to update content, fix something, or add a feature:

1. Fork the repo (or create a branch if you have write access).
2. Make your changes — see **Updating content** above for the most common edits.
3. Run `npm run dev` to verify locally.
4. Open a pull request.

Bugs and ideas can also be filed as [GitHub issues](https://github.com/Women-in-Computer-Science-CCNY/wics-ccny/issues).

---

## License

Released under the MIT License — see [LICENSE](LICENSE) for the full text.

---

Made with ♥ by the WiCS team at CCNY.
