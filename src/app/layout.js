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
                  token: 'ygU0KDNon2BJSCiK'
                };
              `,
            }}
          />
          <script
            defer
            src="https://udify.app/embed.min.js"
            id="ygU0KDNon2BJSCiK"
          ></script>
          </body>
    </html>
  )
}
