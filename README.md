
# THE LASH & CO — Salon Website (Next.js + Tailwind + Mercado Pago)

A modern, feminine salon site with booking + deposit checkout via Mercado Pago.

## Quick start
```bash
pnpm i # or npm i / yarn
cp .env.example .env
# fill env vars (MP_ACCESS_TOKEN, NEXT_PUBLIC_BASE_URL, MP_WEBHOOK_URL)
npm run dev
```

## Booking & payments
- Clients reserve with **30% deposit** via **Mercado Pago Checkout Pro**.
- Webhook receives payment events at `/api/mp/webhook`.
- On `approved`, confirm the booking and send email/WhatsApp (stubs provided).

## Customize catalog
- Edit `data/services.json` and `data/products.json` (or use Supabase with `supabase_schema.sql`).

## Deploy
- Vercel recommended. Set environment variables in the project settings.
- Configure **Mercado Pago Webhooks** to your deployed `/api/mp/webhook` URL.
- Optional: add **Mercado Pago Point** in-salon for remaining balance.

## Notes
- This starter stores bookings in memory only (via webhook TODO). Use Supabase SQL for persistence.
- Replace placeholder WhatsApp/contacts in `/app/contact/page.tsx`.
- Add actual images in `/public` and update components.
