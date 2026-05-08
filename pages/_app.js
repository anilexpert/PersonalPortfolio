import '../styles/globals.css'
import CustomCursor from '../components/CustomCursor'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <div className="fixed inset-0 pointer-events-none z-[-2] overflow-hidden">
        <div className="blob w-[600px] h-[600px] bg-primary/20 top-[-200px] left-[-200px]" style={{ animationDelay: '0s' }} />
        <div className="blob w-[500px] h-[500px] bg-secondary/20 bottom-[-100px] right-[-100px]" style={{ animationDelay: '-7s' }} />
        <div className="blob w-[400px] h-[400px] bg-primary/10 top-[30%] left-[50%]" style={{ animationDelay: '-12s' }} />
      </div>
      <CustomCursor />
      <Component {...pageProps} />
    </main>
  )
}
