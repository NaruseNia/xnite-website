import './reboot.min.css'
import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Xnite',
  description: 'The multi-area creator group based on Tokyo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
