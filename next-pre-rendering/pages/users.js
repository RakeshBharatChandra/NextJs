import User from "../Components/User"

function UserList({users}){
    return(
        <>
            <h1>List of Users</h1>
            {users.map((user)=>{
                return(
                    /*
                        <div key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    */
                    <User key={user.id} user={user}/>
                )
            })}
        </>
    )
}
export default UserList

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data)

    return {
        props: {
            users:data,
        },
    }
}