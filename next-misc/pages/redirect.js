import Footer from "../Components/layout/Footer"
import Header from "../Components/layout/Header"
import Head from 'next/head'

function Redirect(){
    return(
        <div className='content'>
            <>
            <Head>
                <title>Redirected Page </title>
                <meta name='description' content='This page is redirected'/>
            </Head>
            </>
            <h3>Redirect</h3>
        </div>
    )
}
export default Redirect

Redirect.getLayout=function PageLayout(page){
    return(
        <>
        <Header/>
        {page}
        <Footer/>
        </>
    )
}