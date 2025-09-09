
import "./../styles/globals.css";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { ReactNode } from "react";

export const metadata = {
  title: "THE LASH & CO — Cancún",
  description: "Reserva servicios de pestañas y compra productos de belleza.",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
