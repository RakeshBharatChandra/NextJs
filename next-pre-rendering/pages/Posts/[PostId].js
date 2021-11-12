//import {useRouter} from 'next/router'

function Post({posts}){
   // const router=useRouter()
    
   // if(router.isFallback){
   //     return(
   //         <h2>Loading........!</h2>
   //     )
   // }
    return (
        <div>
            <h2>
                {posts.id} {posts.title}
             </h2>
            <p>{posts.body}</p>           
        </div>
    )
}
export default Post

export async function getStaticPaths(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json()
    const paths=data.map((post)=>{
        return{
            params:{
                PostId:`${post.id}`
            }
        }
    })
    return{
        paths :[
            {
                params : {PostId:'1'}
            },
            {
                params : {PostId:'2'}
            },
            {
                params : {PostId:'3'}
            },    
        ],
       //paths,
       //fallback:true
       //fallback:false
       fallback:'blocking'

    }
}

export async function getStaticProps(context) {
    const {params}=context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.PostId}`)
    const data = await response.json()
    console.log(data)
    if(!data.id){
        return{
            notFound:true,
        }
    }
    console.log(`Generating the page for /posts/${params.PostId}`)

    return {
        props: {
            posts:data,
        },
    }
}