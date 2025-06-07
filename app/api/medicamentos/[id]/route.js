import { prisma } from '../../../../lib/prisma'
import { NextResponse } from 'next/server'

// GET - Obtener medicamento por ID
export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id)
    const medicamento = await prisma.medicamento.findUnique({
      where: { id },
      include: {
        categoria: true
      }
    })

    if (!medicamento) {
      return NextResponse.json(
        { error: 'Medicamento no encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json(medicamento)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener medicamento' },
      { status: 500 }
    )
  }
}

// PUT - Actualizar medicamento
export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id)
    const body = await request.json()
    const { nombre, descripcion, precio, stock, categoriaId } = body

    const medicamento = await prisma.medicamento.update({
      where: { id },
      data: {
        nombre,
        descripcion,
        precio: parseFloat(precio),
        stock: parseInt(stock),
        categoriaId: parseInt(categoriaId)
      },
      include: {
        categoria: true
      }
    })

    return NextResponse.json(medicamento)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al actualizar medicamento' },
      { status: 500 }
    )
  }
}

// DELETE - Eliminar medicamento
export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id)

    await prisma.medicamento.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Medicamento eliminado' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al eliminar medicamento' },
      { status: 500 }
    )
  }
}