import {useRouter} from 'next/router'

function Doc(){
    const router=useRouter()
    const {params=[]}=router.query
    console.log(params)

    if(params.length===2){
        return (
            <h2>documents of Feature {params[0]} and Concept {params[1]}</h2>
        )
    }else if(params.length === 1){
        return (
            <h2>documents of Feature {params[0]}</h2>
        )
    }
    return <h1>Document are available</h1>
}
export default Doc