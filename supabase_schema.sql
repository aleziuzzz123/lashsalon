
-- Services
create table if not exists services (
  id text primary key,
  name text not null,
  category text not null,
  description text,
  price_mxn numeric not null,
  duration_min int not null,
  active boolean default true
);

-- Products
create table if not exists products (
  id text primary key,
  name text not null,
  price_mxn numeric not null,
  stock int default 0,
  active boolean default true
);

-- Staff
create table if not exists staff (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  skills text[] default '{}',
  active boolean default true
);

-- Bookings
create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  customer_name text,
  customer_email text,
  customer_phone text,
  service_id text references services(id),
  staff_id uuid references staff(id),
  start_at timestamptz not null,
  end_at timestamptz not null,
  status text check (status in ('pending','confirmed','cancelled','completed')) default 'pending',
  deposit_amount numeric default 0,
  balance_due numeric default 0,
  mp_payment_id text,
  created_at timestamptz default now()
);
