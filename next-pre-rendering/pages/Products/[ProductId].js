import {useRouter} from 'next/router'

function Product({products}){
    const router=useRouter()
     
    if(router.isFallback){
       return(
            <h2>Loading........!</h2>
       )
    }
    
     return (
         <div>
             <h2>
                 {products.id} {products.title} {products.price}
              </h2>
             <p>{products.description}</p>           
         </div>
     )
 }
 export default Product
 
 export async function getStaticPaths(){
     return{
         paths :[
             {
                 params : {ProductId:'1'}
             },    
         ],
        
        fallback:true
     }
 }
 
 export async function getStaticProps(context) {
     const {params}=context
     const response = await fetch(`http://localhost:4000/products/${params.ProductId}`)
     const data = await response.json()
     console.log(`Generating the product ${params.ProductId}`)
     console.log(data)

     if(!data.id){
        return{
            notFound:true
        }
            
    }
     
     return {
         props: {
             products:data,
         },
         revalidate:30,
     }
 }