
import BookingWidget from "@/components/BookingWidget";

export const metadata = { title: "Reservar | THE LASH & CO" };

export default function Page() {
  return (
    <div className="section container">
      <h1 className="mb-2">Reserva tu cita</h1>
      <p className="mb-8">Aparta con 30% de anticipo. El resto se paga en el salón.</p>
      <BookingWidget />
      <p className="mt-6 text-sm text-gray-600">
        Cambios o cancelaciones con más de 24h: crédito en tienda. Con menos de 24h o no-show: se pierde el depósito.
      </p>
    </div>
  );
}
