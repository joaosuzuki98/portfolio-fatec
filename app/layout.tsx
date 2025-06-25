import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfólio Digital',
  description: 'Portfólio Digital do João Suzuki',
  icons: {
    icon: "/favicon.ico"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
