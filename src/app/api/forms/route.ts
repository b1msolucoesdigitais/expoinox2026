import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const webhookUrl =
      process.env.FORMS_WEBHOOK_URL || process.env.NEXT_PUBLIC_FORMS_WEBHOOK_URL

    if (!webhookUrl) {
      console.error('Webhook não configurado. Defina NEXT_PUBLIC_FORMS_WEBHOOK_URL no .env.')
      return NextResponse.json(
        { success: false, message: 'Webhook não configurado (ENV var ausente).' },
        { status: 500 },
      )
    }

    const resp = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (!resp.ok) {
      const errorText = await resp.text()
      console.error('Falha no n8n:', resp.status, errorText)
      return NextResponse.json(
        { 
          success: false, 
          message: `Erro do n8n: ${resp.status}`, 
          details: errorText 
        },
        { status: resp.status >= 500 ? 502 : 400 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro no endpoint /api/forms', error)
    return NextResponse.json(
      { success: false, message: 'Erro interno ao processar o formulário.' },
      { status: 500 },
    )
  }
}


