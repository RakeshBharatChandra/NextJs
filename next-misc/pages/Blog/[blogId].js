import Head from 'next/head'

function Blog({title,description}){
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
            </Head>
            <h1 className='content'>
                Blog
                <br/>
                <br/>
                User is {process.env.DB_USER}
                <br/>
                Password id {process.env.DB_PASSWORD}
                <br/>
                <br/>
                ENV analytics is {process.env.NEXT_PUBLIC_ANALYTICS_ID}
            </h1>
        </>
    )
}
export default Blog

export async function getServerSideProps(){
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD
    console.log(`Connecting DataBase with user ${user} and password ${password}`)
    return{
        props:{
            title:'Article Title',
            description:'Article description',
        },
    }
}