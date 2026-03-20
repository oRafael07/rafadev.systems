"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Loader2, Mail, PhoneIcon, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { sendContactEmail, ContactFormData } from "@/actions/contact"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("idle")

    const result = await sendContactEmail(formData)

    setIsLoading(false)
    setStatus(result.success ? "success" : "error")

    if (result.success) {
      setFormData({ name: "", email: "", phone: "", message: "" })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <main className="min-h-[calc(100vh-100px)] px-4 py-10 md:px-20 lg:px-40">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Entre em <span className="text-green-500">Contato</span>
          </h1>
          <p className="mt-4 text-zinc-400">
            Tem um projeto em mente? Vamos conversar!
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <Card className="bg-zinc-950/50 p-6 border-zinc-800">
            <h2 className="mb-6 text-xl font-semibold text-white">
              Envie uma mensagem
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-zinc-300">
                  Nome
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-300">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-zinc-300">
                  WhatsApp
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-zinc-300">
                  Mensagem
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Como posso ajudar?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px]"
                  disabled={isLoading}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensagem"
                )}
              </Button>

              {status === "success" && (
                <div className="flex items-center gap-2 text-green-500 text-sm">
                  <CheckCircle className="h-4 w-4" />
                  Mensagem enviada com sucesso!
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  Erro ao enviar. Tente novamente.
                </div>
              )}
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="bg-zinc-950/50 p-6 border-zinc-800">
              <h2 className="mb-4 text-xl font-semibold text-white">
                Outras formas de contato
              </h2>

              <div className="space-y-4">
                <Link
                  href="mailto:rafadeveloper.contato@gmail.com"
                  className="flex items-center gap-3 text-zinc-300 hover:text-green-500 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  rafadeveloper.contato@gmail.com
                </Link>

                <Link
                  href="https://api.whatsapp.com/send/?phone=5592993647866"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-300 hover:text-green-500 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5" />
                  (92) 99364-7866
                </Link>

                <Separator className="bg-zinc-800" />

                <Link
                  href="https://www.linkedin.com/in/rafael-rocha-b6b745205/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-300 hover:text-green-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Link>

                <Link
                  href="https://github.com/oRafael07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-300 hover:text-green-500 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </Link>
              </div>
            </Card>

            <Card className="bg-zinc-950/50 p-6 border-zinc-800">
              <h2 className="mb-4 text-lg font-semibold text-white">
                Tempo de resposta
              </h2>
              <p className="text-zinc-400 text-sm">
                Geralmente respondo em até <span className="text-green-500">24 horas</span>.
                Para urgência, entre em contato pelo WhatsApp.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
