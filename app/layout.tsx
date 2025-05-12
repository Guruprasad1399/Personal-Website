import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeRegistry from './components/ThemeRegistry/ThemeRegistry';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Guruprasad Venkatraman - Website",
  description: "Personal website of Guruprasad Venkatraman, showcasing skills, projects, and professional experience.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
