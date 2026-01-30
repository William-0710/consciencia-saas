import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ConsciencIA - Tecnologia para Fisioterapia',
  description: 'Organize sua clínica de fisioterapia com inteligência.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // O ClerkProvider envolve todo o app para permitir autenticação
    <ClerkProvider>
      <html lang="pt-BR">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}