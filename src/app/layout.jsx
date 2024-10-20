import localFont from 'next/font/local'
import './globals.css'

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const poppins = localFont({
  src: './fonts/PoppinsVF.ttf',
  variable: '--font-poppins',
  weight: '100 900',
})

export const metadata = {
  title: "Flip n' Find",
  description: 'A memory card game',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} bg-animated-pattern animate-move bg-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  )
}
