import '../styles/globals.css'
import { Roboto } from 'next/font/google'
import CustomCursor from '../components/CustomCursor'

const roboto = Roboto({ 
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'], 
  variable: '--font-roboto' 
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${roboto.className}`}>
      <CustomCursor />
      <Component {...pageProps} />
    </main>
  )
}
