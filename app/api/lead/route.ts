import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data')
const leadsFile = path.join(dataDir, 'leads.json')

async function ensureDataFile() {
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }

  try {
    await fs.access(leadsFile)
  } catch {
    await fs.writeFile(leadsFile, JSON.stringify([], null, 2))
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureDataFile()

    const body = await request.json()
    const { name, email, phone, type, city, message, sourcePage } = body

    // Validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    const lead = {
      name,
      email,
      phone: phone || '',
      type: type || '',
      city: city || '',
      message: message || '',
      sourcePage: sourcePage || '',
      timestamp: new Date().toISOString(),
    }

    // Read existing leads
    const existingData = await fs.readFile(leadsFile, 'utf-8')
    const leads = JSON.parse(existingData)

    // Add new lead
    leads.push(lead)

    // Write back to file
    await fs.writeFile(leadsFile, JSON.stringify(leads, null, 2))

    // TODO: Integrate with CRM or email service here
    // Example: await sendEmail(lead)
    // Example: await addToCRM(lead)

    return NextResponse.json({ success: true, message: 'Lead saved successfully' })
  } catch (error) {
    console.error('Error saving lead:', error)
    return NextResponse.json(
      { error: 'Failed to save lead' },
      { status: 500 }
    )
  }
}

