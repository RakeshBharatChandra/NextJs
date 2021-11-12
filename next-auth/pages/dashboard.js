import {useState,useEffect} from 'react'
import {getSession,signIn} from 'next-auth/client'
function Dashboard(){
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        const securePage = async () =>{
            const session = await getSession()
            if(!session){
                signIn()
            }else{
                setLoading(false)
            }
        }
        securePage()
    }, [])
    if(loading){
        return <h3>Loading...!</h3>
    }
    return <h2>Dashboard Page</h2>
}
export default Dashboard


