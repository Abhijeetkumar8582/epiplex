import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Epiplex',
  description: 'epiplex',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}
      <script
            dangerouslySetInnerHTML={{
              __html: `
                window.difyChatbotConfig = { 
                  token: 'n8i8DtjnEkU9VfOR'
                };
              `,
            }}
          />
          <script
            defer
            src="https://udify.app/embed.min.js"
            id="n8i8DtjnEkU9VfOR"
          ></script>
          </body>
    </html>
  )
}
