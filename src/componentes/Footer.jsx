
const Footer = () => {
 
    return(
        <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">TiendaVirtual</h3>
              <p className="text-gray-300">
                Tu tienda online de confianza para productos tecnológicos de alta calidad.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Sobre nosotros</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contacto</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Política de privacidad</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Términos y condiciones</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Contáctanos</h3>
              <address className="not-italic text-gray-300">
                Calle Principal 123<br />
                Ciudad, CP 28000<br />
                Email: info@tiendavirtual.com<br />
                Teléfono: (123) 456-7890
              </address>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} TiendaVirtual. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    )

}

export default Footer;