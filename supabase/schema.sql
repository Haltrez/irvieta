-- irvieta — waitlist table
-- Run this in the Supabase SQL editor (Dashboard → SQL Editor → New query).

create extension if not exists "pgcrypto";

-- Role the signup is interested in.
do $$
begin
  if not exists (select 1 from pg_type where typname = 'waitlist_role') then
    create type waitlist_role as enum ('sender', 'driver', 'both');
  end if;
end
$$;

create table if not exists public.waitlist (
  id          uuid primary key default gen_random_uuid(),
  email       text not null unique,
  role        waitlist_role not null default 'both',
  created_at  timestamptz not null default now(),
  source      text,        -- which form the signup came from ('hero', 'cta', ...)
  ip_country  text         -- coarse analytics only, from Vercel's edge header
);

-- Case-insensitive uniqueness: the app lowercases before inserting, this is the
-- backstop so 'A@b.lv' and 'a@b.lv' can't both land.
create unique index if not exists waitlist_email_lower_idx
  on public.waitlist (lower(email));

create index if not exists waitlist_created_at_idx
  on public.waitlist (created_at desc);

-- RLS on, with NO policies for anon or authenticated.
--
-- NOTE: this deliberately differs from "allow anonymous insert". Signups are
-- written server-side with the service role key (which bypasses RLS), so anon
-- never needs write access — and without it, the public anon key cannot be used
-- to stuff or read the table.
alter table public.waitlist enable row level security;

revoke all on public.waitlist from anon, authenticated;
