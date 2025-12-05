import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data')
const newsletterFile = path.join(dataDir, 'newsletter.json')

async function ensureDataFile() {
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }

  try {
    await fs.access(newsletterFile)
  } catch {
    await fs.writeFile(newsletterFile, JSON.stringify([], null, 2))
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureDataFile()

    const body = await request.json()
    const { email, firstName } = body

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const subscription = {
      email,
      firstName: firstName || '',
      timestamp: new Date().toISOString(),
    }

    // Read existing subscriptions
    const existingData = await fs.readFile(newsletterFile, 'utf-8')
    const subscriptions = JSON.parse(existingData)

    // Check if email already exists
    if (subscriptions.some((sub: { email: string }) => sub.email === email)) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 400 }
      )
    }

    // Add new subscription
    subscriptions.push(subscription)

    // Write back to file
    await fs.writeFile(newsletterFile, JSON.stringify(subscriptions, null, 2))

    // TODO: Integrate with email service here
    // Example: await addToEmailList(email, firstName)

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
    })
  } catch (error) {
    console.error('Error saving newsletter subscription:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}

