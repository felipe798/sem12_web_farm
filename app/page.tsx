import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Sistema de Gestión de Farmacia
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Gestiona categorías y medicamentos de forma eficiente
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <Link href="/categorias" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-50">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Categorías</h2>
          <p className="text-gray-600">Administra las categorías de medicamentos</p>
        </Link>
        
        <Link href="/medicamentos" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-50">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Medicamentos</h2>
          <p className="text-gray-600">Gestiona el inventario de medicamentos</p>
        </Link>
      </div>
    </div>
  )
}