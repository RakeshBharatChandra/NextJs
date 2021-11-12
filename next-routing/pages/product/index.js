import Link from 'next/link'

function Product({ProductId=21}){
    return (
        <>
            <h1>Product Page</h1>
            <Link href='/'>
            <a>Home</a>
            </Link>
            <h2>
                <Link href='/product/1' replace>
                    <a>Product 1</a>
                </Link>
            </h2>
            <h2>
                <Link href='/product/2'>
                    <a>Product 2</a>
                </Link>
            </h2>
            <h2>
                <Link href='/product/3'>
                    <a>Product 3</a>
                </Link>
            </h2>
            <h2>
                <Link href={`/product/${ProductId}`}>
                    <a>Product {ProductId}</a>
                </Link>
            </h2>
            
        </>
    )
}
export default Product