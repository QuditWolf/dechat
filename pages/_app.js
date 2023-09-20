import Layout from '@/comps/Layout'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({subsets: ["latin"]})

export default function App({ Component, pageProps }) {
  return (
  <main className={montserrat.className}>  
    <Layout>
  <Component {...pageProps} />
  </Layout>
  </main> 
  )
}
