import { prisma } from '../../../../lib/prisma'
import { NextResponse } from 'next/server'

// GET - Obtener categoría por ID
export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id)
    const categoria = await prisma.categoria.findUnique({
      where: { id },
      include: {
        medicamentos: true
      }
    })

    if (!categoria) {
      return NextResponse.json(
        { error: 'Categoría no encontrada' },
        { status: 404 }
      )
    }

    return NextResponse.json(categoria)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener categoría' },
      { status: 500 }
    )
  }
}

// PUT - Actualizar categoría
export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id)
    const body = await request.json()
    const { nombre, descripcion } = body

    const categoria = await prisma.categoria.update({
      where: { id },
      data: {
        nombre,
        descripcion
      }
    })

    return NextResponse.json(categoria)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al actualizar categoría' },
      { status: 500 }
    )
  }
}

// DELETE - Eliminar categoría
export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id)

    await prisma.categoria.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Categoría eliminada' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al eliminar categoría' },
      { status: 500 }
    )
  }
}