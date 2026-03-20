"use server"

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export interface EmailService {
  send(data: ContactFormData): Promise<void>
}

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const emailService = getEmailService()
    await emailService.send(data)
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Erro ao enviar mensagem. Tente novamente." }
  }
}

function getEmailService(): EmailService {
  return new NoOpEmailService()
}

class NoOpEmailService implements EmailService {
  async send(data: ContactFormData): Promise<void> {
    console.log("📧 Email received:", {
      to: process.env.CONTACT_EMAIL_TO || "not configured",
      from: process.env.CONTACT_EMAIL_FROM || "not configured",
      subject: `Novo contato de ${data.name}`,
      data,
    })
  }
}
