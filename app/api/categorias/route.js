import { prisma } from '../../../lib/prisma'
import { NextResponse } from 'next/server'

// GET - Obtener todas las categorías
export async function GET() {
  try {
    const categorias = await prisma.categoria.findMany({
      include: {
        medicamentos: true
      }
    })
    return NextResponse.json(categorias)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener categorías' },
      { status: 500 }
    )
  }
}

// POST - Crear nueva categoría
export async function POST(request) {
  try {
    const body = await request.json()
    const { nombre, descripcion } = body

    const categoria = await prisma.categoria.create({
      data: {
        nombre,
        descripcion
      }
    })

    return NextResponse.json(categoria, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al crear categoría' },
      { status: 500 }
    )
  }
}