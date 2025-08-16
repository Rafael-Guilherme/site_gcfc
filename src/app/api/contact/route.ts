import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  fullName: string
  email: string
  cnpj: string
  whatsapp: string
  sector: string
  employees: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    
    const requiredFields = ['fullName', 'email', 'cnpj', 'whatsapp', 'sector', 'employees']
    for (const field of requiredFields) {
      if (!body[field as keyof ContactFormData] || body[field as keyof ContactFormData].trim() === '') {
        return NextResponse.json(
          { message: `Campo ${field} é obrigatório` },
          { status: 400 }
        )
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { message: 'Email inválido' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true para 465, false para outras portas
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'sac@gcfcbrasil.com.br',
      subject: 'Nova Inscrição - Concorrer a Premiação GCFC',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Nova Inscrição para Premiação
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Dados do Candidato</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 150px;">Nome Completo:</td>
                <td style="padding: 8px 0; color: #1f2937;">${body.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">E-mail:</td>
                <td style="padding: 8px 0; color: #1f2937;">${body.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">CNPJ:</td>
                <td style="padding: 8px 0; color: #1f2937;">${body.cnpj}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">WhatsApp:</td>
                <td style="padding: 8px 0; color: #1f2937;">${body.whatsapp}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Setor:</td>
                <td style="padding: 8px 0; color: #1f2937;">${body.sector}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Funcionários:</td>
                <td style="padding: 8px 0; color: #1f2937;">${body.employees}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
            <p style="margin: 0; color: #065f46; font-size: 14px;">
              <strong>Data e Hora:</strong> ${new Date().toLocaleString('pt-BR', { 
                timeZone: 'America/Sao_Paulo',
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; color: #92400e; font-size: 14px;">
              <strong>Observação:</strong> Este é um email automático enviado pelo sistema de inscrição do site GCFC.
            </p>
          </div>
        </div>
      `,
      text: `
Nova Inscrição para Premiação GCFC

Dados do Candidato:
- Nome Completo: ${body.fullName}
- E-mail: ${body.email}
- CNPJ: ${body.cnpj}
- WhatsApp: ${body.whatsapp}
- Setor: ${body.sector}
- Funcionários: ${body.employees}

Data e Hora: ${new Date().toLocaleString('pt-BR', { 
  timeZone: 'America/Sao_Paulo',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}

Este é um email automático enviado pelo sistema de inscrição do site GCFC.
      `
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Formulário enviado com sucesso! Entraremos em contato em breve.' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erro ao processar formulário:', error)
    
    return NextResponse.json(
      { message: 'Erro interno do servidor. Tente novamente mais tarde.' },
      { status: 500 }
    )
  }
}
