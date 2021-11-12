import Footer from "../Components/layout/Footer"
import Head from 'next/head'

function About(){
    return(
        <div className='content'>
            <>
            <Head>
                <title>About Rakesh</title>
                <meta name='description' content='Rakesh is a nice Guy'/>
            </Head>
            </>
            <h3>About</h3>
        </div>
    )
}
export default About

About.getLayout=function PageLayout(page){
    return(
        <>
        {page}
        <Footer/>
        </>
    )
}