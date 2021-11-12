import { getSession,useSession } from "next-auth/client"

function Blog({data}){
    const [session] = useSession()
    console.log({session})
    return <h2>Blog Page - {data}</h2>
}
export default Blog

export async function getServerSideProps(context){
    const session = await getSession(context)

    if(!session){
        return{
            redirect:{
                destination:`api/auth/signin?callbackUrl:http://localhost:3000/blog`,
                permanent:false
            },
        }
    }

    return{
        props:{
            session,
            data : session ? 'List of 100 Blogs' : 'List of free Blogs',
        },
    }
}