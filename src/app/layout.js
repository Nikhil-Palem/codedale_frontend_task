import './globals.css'

export const metadata = {
  title: 'Codedale',
  description: 'Codedale frontend task',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
