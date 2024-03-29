import {useState} from "react"
import {useRouter} from 'next/router'

function EventList({eventlist}){
    const [events,setEvents]=useState(eventlist)
    const router=useRouter()
    const fetchSportsEvents=async()=>{
        const response=await fetch('http://localhost:4000/events?category=Sports')
        const data = await response.json()
        setEvents(data)
        router.push('events?category=Sports',undefined,{shallow:true})
        
    }
    return(
        <>
         <button onClick={fetchSportsEvents}>Sports Events</button>
            <h1>List of events</h1>
            {events.map(event=>{
                return(
                    <div key={event.id}>
                        <h2>{event.id} {event.title} {event.date} | {event.category}</h2>
                        <p>{event.description}</p>
                        <hr/>
                    </div>
                )
            })}
        </>
    )
}
export default EventList

export async function getServerSideProps(context){
    const {query}=context
    const {category}=query
    const querystring= category ? 'category:Sports' : ''
    const response = await fetch(`http://localhost:4000/events?${querystring}`)
    const data = await response.json()
    return{
        props:{
            eventlist:data,
        }
    }
}