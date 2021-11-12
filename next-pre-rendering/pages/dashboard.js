import {useState,useEffect} from 'react'

function Dashboard(){
    const [isLoading,setIsLoading]=useState(true)
    const [dashboardData,setDashboardData]=useState(null)
    useEffect(() => {
        async function FetchDashboardData() {
            const response = await fetch('http://localhost:4000/dashboard')
            const data = await response.json()
            console.log('fetching done')
            setDashboardData(data)
            console.log('data retrived')
            setIsLoading(false)
        } 
       FetchDashboardData()
       console.log('fuction fetchDashboard is done')
    }, [])

    if(isLoading){
        return(
            <h3>Loading.......!</h3>
        )
    }
    console.log(dashboardData)
    return(
        <div>
            <h1>Dashboard</h1>
            <h2>Posts - {dashboardData.posts}</h2>
            <h2>Likes - {dashboardData.likes}</h2>
            <h2>Followers - {dashboardData.followers}</h2>
            <h2>Following - {dashboardData.following}</h2>
        </div>
    )
}
export default Dashboard