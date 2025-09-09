
export function Footer() {
  return (
    <footer className="mt-20 border-t border-taupe/30">
      <div className="container py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} THE LASH & CO · Cancún</p>
        <p>Políticas · Privacidad · Términos</p>
      </div>
    </footer>
  );
}
