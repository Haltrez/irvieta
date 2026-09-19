# irvieta.lv

Landing page and waitlist for **irvieta** — a peer-to-peer parcel delivery
marketplace for Latvia. Someone is already driving your way; irvieta connects
people who need something moved with drivers already taking that route.

Built with Next.js 14 (App Router), TypeScript, TailwindCSS, Framer Motion and
Supabase. Copy is Latvian; no i18n layer yet.

## Quick start

```bash
npm install
cp .env.local.example .env.local   # fill in once Supabase is set up
npm run dev                        # http://localhost:3000
```

The site **builds and runs with no environment variables** — only the signup
submit returns a friendly "not connected yet" message until Supabase is wired.

Scripts: `npm run dev` · `build` · `start` · `lint` · `typecheck`

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. Open **SQL Editor → New query**, paste [`supabase/schema.sql`](supabase/schema.sql)
   and run it. That creates the `waitlist` table, the `waitlist_role` enum, a
   case-insensitive unique index on `email`, and enables RLS.
3. Copy your keys from **Project Settings → API** into `.env.local`:

   | Variable | Where it comes from |
   | --- | --- |
   | `SUPABASE_URL` | Project URL |
   | `SUPABASE_SERVICE_ROLE_KEY` | `service_role` key — **secret, server-only** |

### Why the service-role key, not the anon key

Signups are inserted from a server action (`app/actions/waitlist.ts`), never
from the browser. That lets `waitlist` keep RLS on with **no anon policies at
all**: the public anon key can neither read nor write the table, so scraping it
from the bundle buys an attacker nothing.

This is a deliberate departure from "allow anonymous insert" — since the write
already happens server-side, granting anon insert would only widen the attack
surface.

`SUPABASE_SERVICE_ROLE_KEY` bypasses RLS entirely. Never prefix it with
`NEXT_PUBLIC_`, never import `lib/supabase.ts` from a client component (the
`server-only` guard will fail the build if you try), and never commit it.

### Reading signups

Because anon has no read access, use the Supabase dashboard's table editor or a
server-side query with the service role. To export:

```sql
select email, role, source, ip_country, created_at
from public.waitlist
order by created_at desc;
```

## Deploying to Vercel

1. Push this repo and import it at [vercel.com/new](https://vercel.com/new).
   Framework preset **Next.js** is detected automatically; no build overrides.
2. **Project Settings → Environment Variables**, for Production *and* Preview:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY` (mark it as sensitive)
   - `NEXT_PUBLIC_SITE_URL` — e.g. `https://irvieta.lv`, used for canonical and
     OpenGraph URLs
3. Deploy, then add the `irvieta.lv` domain under **Settings → Domains** and
   point the DNS records Vercel gives you.

`ip_country` is populated from Vercel's `x-vercel-ip-country` edge header, so it
stays empty in local development. That's expected.

## Project structure

```
app/
  layout.tsx            fonts, metadata, WebSite JSON-LD
  page.tsx              section assembly
  icon.svg              favicon
  opengraph-image.tsx   generated OG card (placeholder)
  actions/waitlist.ts   server action: validate → rate limit → insert
components/
  Navbar · Hero · HowItWorks · ForWhom · Pricing
  WhyIrvieta · FAQ · SecondCTA · Footer
  SignupCard.tsx        shared by Hero and SecondCTA
  Reveal.tsx            scroll-into-view fade
  icons.tsx             inline SVGs
  ui/                   Button · Input · NeumorphicCard
lib/
  supabase.ts           server-only client (null when unconfigured)
  utils.ts              cn()
styles/globals.css      tokens, focus rings, reduced-motion
supabase/schema.sql     table + RLS
```

## Design notes

Hybrid: subtle neumorphism on interactive surfaces (signup cards, primary CTAs,
feature cards), flat modern everywhere else.

The neumorphic shadows are dual — white from the top-left, a desaturated green
from the bottom-right — and only read correctly on the warm off-white `#F5F5F0`
background or on white. **Don't use `shadow-neu*` on dark or coloured
surfaces**; the highlights turn to mud. Pressed states invert to `shadow-neu-inset`.
Never on text, only on containers.

Tokens live in `tailwind.config.ts`: `primary` (`#2D6A4F`), `bg`, `surface`,
`ink`/`ink-soft`, `accent`, plus `rounded-card|btn|input` and the `shadow-neu*`
family.

**Accessibility:** semantic landmarks, labels associated via `useId()`, a
visible `:focus-visible` ring on everything interactive, FAQ built on native
`<details>` for free keyboard support, and `prefers-reduced-motion` honoured
both in CSS and through Framer Motion's `useReducedMotion`. `#2D6A4F` against
white is ~6.5:1 (AA); `#6B7280` on `#F5F5F0` is ~4.7:1 and is not used below
14px.

## Known placeholders

- Social links (Instagram, Facebook, TikTok) and the Privātuma politika /
  Noteikumi links point at `#` — no accounts or legal pages exist yet.
- Kontakti links to `mailto:info@irvieta.lv`; change if that inbox differs.
- `app/opengraph-image.tsx` is a generated placeholder. To replace it, drop an
  `opengraph-image.png` (1200×630) into `app/` and delete the `.tsx`.
- Signup rate limiting is in-memory per serverless instance — a speed bump, not
  a real defence. Move it to Upstash or a Postgres counter if spam appears.
- Pricing CTAs both scroll to the waitlist form; there is nothing to subscribe
  to yet.
