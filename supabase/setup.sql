-- Run once in the Supabase SQL Editor. No student names, code, or IP addresses are stored.
create table if not exists public.practice_visitors (
 browser_id uuid primary key,
 first_seen timestamptz not null default now(),
 last_seen timestamptz not null default now(),
 visits bigint not null default 1 check (visits > 0),
 darray_completed boolean not null default false,
 dll_completed boolean not null default false
);
alter table public.practice_visitors enable row level security;
revoke all on public.practice_visitors from anon, authenticated;

create or replace function public.record_practice_activity(p_browser_id uuid, p_darray boolean default false, p_dll boolean default false)
returns void language sql security definer set search_path = public as $$
 insert into public.practice_visitors(browser_id, darray_completed, dll_completed)
 values (p_browser_id, p_darray, p_dll)
 on conflict (browser_id) do update set
 visits = practice_visitors.visits + case when practice_visitors.last_seen <= now() - interval '30 minutes' then 1 else 0 end,
 last_seen = now(),
 darray_completed = practice_visitors.darray_completed or excluded.darray_completed,
 dll_completed = practice_visitors.dll_completed or excluded.dll_completed;
$$;
create or replace function public.practice_statistics()
returns jsonb language sql security definer set search_path = public as $$
 select jsonb_build_object(
  'visits', coalesce(sum(visits),0),
  'browsers', count(*),
  'returning', count(*) filter (where visits > 1),
  'darray', count(*) filter (where darray_completed),
  'dll', count(*) filter (where dll_completed),
  'both', count(*) filter (where darray_completed and dll_completed),
  'updatedAt', now()
 ) from public.practice_visitors;
$$;
revoke all on function public.record_practice_activity(uuid,boolean,boolean) from public, anon, authenticated;
revoke all on function public.practice_statistics() from public, anon, authenticated;
grant execute on function public.record_practice_activity(uuid,boolean,boolean) to service_role;
grant execute on function public.practice_statistics() to service_role;

-- Run this once on your existing Supabase project to add SLL tracking.
alter table public.practice_visitors add column if not exists sll_completed boolean not null default false;
create or replace function public.record_practice_activity_v2(p_browser_id uuid, p_darray boolean default false, p_dll boolean default false, p_sll boolean default false)
returns void language sql security definer set search_path = public as $$
 insert into public.practice_visitors(browser_id,darray_completed,dll_completed,sll_completed)
 values (p_browser_id,p_darray,p_dll,p_sll)
 on conflict(browser_id) do update set
 visits=practice_visitors.visits+case when practice_visitors.last_seen <= now()-interval '30 minutes' then 1 else 0 end,
 last_seen=now(),
 darray_completed=practice_visitors.darray_completed or excluded.darray_completed,
 dll_completed=practice_visitors.dll_completed or excluded.dll_completed,
 sll_completed=practice_visitors.sll_completed or excluded.sll_completed;
$$;
revoke all on function public.record_practice_activity_v2(uuid,boolean,boolean,boolean) from public,anon,authenticated;
grant execute on function public.record_practice_activity_v2(uuid,boolean,boolean,boolean) to service_role;
create or replace function public.practice_statistics()
returns jsonb language sql security definer set search_path = public as $$
 select jsonb_build_object(
 'visits',coalesce(sum(visits),0),'browsers',count(*),'returning',count(*) filter(where visits>1),
 'darray',count(*) filter(where darray_completed),'dll',count(*) filter(where dll_completed),
 'sll',count(*) filter(where sll_completed),
 'both',count(*) filter(where darray_completed and dll_completed),
 'all',count(*) filter(where darray_completed and dll_completed and sll_completed),'updatedAt',now()
 ) from public.practice_visitors;
$$;
revoke all on function public.practice_statistics() from public,anon,authenticated;
grant execute on function public.practice_statistics() to service_role;
