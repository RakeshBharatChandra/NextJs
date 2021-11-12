import Link from "next/link"

function ProductList({products}){
    return (
        <div>
            <h1>List Of Products</h1>
            {products.map((product)=>{
                return(
                    <div key={product.id}>
                        <Link href={`Products/${product.id}`} passHref>
                        <h2>
                            {product.id} {product.title} {product.price}
                        </h2>
                        </Link>
                        
                        <hr/>
                    </div>
                )
            })}     
        </div>
    )
}
export default ProductList

export async function getStaticProps() {
    console.log('generating / regenerating ProductList')
    const response = await fetch("http://localhost:4000/products")
    const data = await response.json()
    console.log(data)

    return {
        props: {
            products:data,
        },
        revalidate:10
    }
}