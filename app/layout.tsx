import './globals.css'
import { Inter } from 'next/font/google'
import StarBackground from './components/StarBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Space Portfolio',
  description: 'A cosmic journey through my work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0118]`}>
        <StarBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}

