
import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

export async function POST(req: NextRequest){
  const body = await req.json();
  const { title, description, amount_mxn, booking } = body || {};
  const token = process.env.MP_ACCESS_TOKEN;
  if(!token) return NextResponse.json({ error: "Missing MP_ACCESS_TOKEN"}, { status: 500 });
  
  const client = new MercadoPagoConfig({ accessToken: token });
  const preference = new Preference(client);

  const success = process.env.NEXT_PUBLIC_BASE_URL + "/book?status=success";
  const failure = process.env.NEXT_PUBLIC_BASE_URL + "/book?status=failure";
  const pending = process.env.NEXT_PUBLIC_BASE_URL + "/book?status=pending";

  const preferenceData = {
    items: [
      { 
        id: "deposit",
        title, 
        description, 
        quantity: 1, 
        currency_id: "MXN", 
        unit_price: Number(amount_mxn||0) 
      }
    ],
    metadata: { booking: JSON.stringify(booking) },
    back_urls: { success, failure, pending },
    auto_return: "approved",
    notification_url: process.env.MP_WEBHOOK_URL
  };

  const response = await preference.create({ body: preferenceData });
  return NextResponse.json(response);
}
