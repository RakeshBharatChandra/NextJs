//import Footer from 'Components/layout/Footer'
//import Header from 'Components/layout/Header'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
//import Footer from '../Components/Footer'
//import Header from '../Components/Header'
import Head from 'next/head'
import '../styles/globals.css'
import '../styles/layout.css'

function MyApp({ Component, pageProps }) {

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
      <Head>
      <title>Rakesh</title>
      <meta name='description' content='Rakesh is a nice Guy'/>
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer/>

    </>
  )
}

export default MyApp
