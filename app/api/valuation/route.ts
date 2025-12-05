import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data')
const valuationsFile = path.join(dataDir, 'valuations.json')

async function ensureDataFile() {
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }

  try {
    await fs.access(valuationsFile)
  } catch {
    await fs.writeFile(valuationsFile, JSON.stringify([], null, 2))
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureDataFile()

    const body = await request.json()
    const {
      name,
      email,
      phone,
      propertyAddress,
      propertyType,
      city,
      timing,
      message,
      sourcePage,
    } = body

    // Validation
    if (!name || !email || !propertyAddress) {
      return NextResponse.json(
        { error: 'Name, email, and property address are required' },
        { status: 400 }
      )
    }

    const valuation = {
      name,
      email,
      phone: phone || '',
      propertyAddress,
      propertyType: propertyType || '',
      city: city || '',
      timing: timing || '',
      message: message || '',
      sourcePage: sourcePage || '',
      timestamp: new Date().toISOString(),
    }

    // Read existing valuations
    const existingData = await fs.readFile(valuationsFile, 'utf-8')
    const valuations = JSON.parse(existingData)

    // Add new valuation request
    valuations.push(valuation)

    // Write back to file
    await fs.writeFile(valuationsFile, JSON.stringify(valuations, null, 2))

    // TODO: Integrate with CRM or email service here
    // Example: await sendEmail(valuation)
    // Example: await addToCRM(valuation)

    return NextResponse.json({
      success: true,
      message: 'Valuation request saved successfully',
    })
  } catch (error) {
    console.error('Error saving valuation:', error)
    return NextResponse.json(
      { error: 'Failed to save valuation request' },
      { status: 500 }
    )
  }
}

