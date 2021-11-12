import Link from 'next/link'
import {useRouter} from 'next/router'

function Home(){

    const router=useRouter()

    const Clicked =()=>{
        console.log("placing your order")
        router.push('/product')
    }
    return ( 
        <>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <h1>Home Page</h1>  
            <Link href="/product">
                <a>Products</a>
            </Link>
            <button onClick={Clicked}>
                Place Order
            </button>
        </> 
    )
}
export default Home