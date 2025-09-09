
'use client';
import Link from 'next/link';
import { ShoppingBag, CalendarDays } from 'lucide-react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/services', label: 'Servicios' },
  { href: '/book', label: 'Reservar' },
  { href: '/shop', label: 'Tienda' },
  { href: '/about', label: 'Nosotras' },
  { href: '/contact', label: 'Contacto' },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-taupe/30">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-serif text-2xl">THE LASH & CO</Link>
        <nav className="hidden md:flex gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={clsx('hover:text-gold', pathname===l.href && 'text-gold')}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/book" className="btn btn-primary hidden md:inline-flex"><CalendarDays className="mr-2 h-4 w-4"/>Reservar</Link>
          <Link href="/shop" className="btn btn-outline"><ShoppingBag className="mr-2 h-4 w-4"/>Tienda</Link>
        </div>
      </div>
    </header>
  );
}
