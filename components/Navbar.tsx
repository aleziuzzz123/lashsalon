
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, CalendarDays, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-taupe/30">
      <div className="container flex items-center justify-between h-24 py-3">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo/lashlogo.png" 
            alt="THE LASH & CO" 
            width={360} 
            height={180} 
            className="h-36 w-auto"
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={clsx('hover:text-gold', pathname===l.href && 'text-gold')}>
              {l.label}
            </Link>
          ))}
        </nav>
        
        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/book" className="btn btn-primary"><CalendarDays className="mr-2 h-4 w-4"/>Reservar</Link>
          <Link href="/shop" className="btn btn-outline"><ShoppingBag className="mr-2 h-4 w-4"/>Tienda</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-charcoal hover:text-gold transition-colors"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-taupe/30">
          <nav className="container py-4 space-y-4">
            {links.map(l => (
              <Link 
                key={l.href} 
                href={l.href} 
                className={clsx(
                  'block py-2 text-lg hover:text-gold transition-colors',
                  pathname===l.href && 'text-gold font-semibold'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-taupe/30 space-y-3">
              <Link 
                href="/book" 
                className="btn btn-primary w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <CalendarDays className="mr-2 h-4 w-4"/>Reservar
              </Link>
              <Link 
                href="/shop" 
                className="btn btn-outline w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShoppingBag className="mr-2 h-4 w-4"/>Tienda
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
