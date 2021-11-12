import Navbar from '../Components/Navbar'
import '../styles/globals.css'
import '../Components/Navbar.css'
import {Provider} from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return(
    <Provider session={pageProps.session}>
      <Navbar/>
      <Component {...pageProps} />
    </Provider>
  ) 
}
export default MyApp
