import { prisma } from '../../../lib/prisma'
import { NextResponse } from 'next/server'

// GET - Obtener todos los medicamentos
export async function GET() {
  try {
    const medicamentos = await prisma.medicamento.findMany({
      include: {
        categoria: true
      }
    })
    return NextResponse.json(medicamentos)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener medicamentos' },
      { status: 500 }
    )
  }
}

// POST - Crear nuevo medicamento
export async function POST(request) {
  try {
    const body = await request.json()
    const { nombre, descripcion, precio, stock, categoriaId } = body

    const medicamento = await prisma.medicamento.create({
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

    return NextResponse.json(medicamento, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al crear medicamento' },
      { status: 500 }
    )
  }
}