

function Footer() {
  return (
    <footer className="bg-[#4A6032] text-white py-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;