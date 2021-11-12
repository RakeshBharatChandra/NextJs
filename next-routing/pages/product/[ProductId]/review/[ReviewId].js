import {useRouter} from 'next/router'

function Review(){
    const router=useRouter()
    const { ProductId, ReviewId }=router.query
    return <h1>Product {ProductId} Review {ReviewId}</h1>
}
export default Review