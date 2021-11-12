import {useRouter} from 'next/router'

function ProductId(){
    const router=useRouter()
    const productid=router.query.ProductId
    return <h1>Details of the product {productid}</h1>
}
export default ProductId