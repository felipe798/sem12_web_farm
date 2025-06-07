import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Farmacia Sistema
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/categorias" 
              className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Categorías
            </Link>
            <Link 
              href="/medicamentos" 
              className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Medicamentos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}