import {useState, usestate} from 'react'

function commentsPage(){
    const [comments,setComments]=useState([])
    const [comment,setComment]=useState('')
    const FetchComments=async()=>{
        const response=await fetch('/api/comments')
        const data=await response.json()
        setComments(data)
    }
    const SubmitComment=async()=>{
        const response=await fetch('/api/comments',{
            method:'POST',
            body:JSON.stringify({comment}),
            headers:{
                'content-type':'application/json'
            }
        })
        const data=await response.json()
        console.log(data)
    }
    const deleteComment=async(commentId)=>{
        const response=await fetch(`/api/comments/${commentId}`,{
            method:'DELETE'
        })
        const data=await response.json()
        console.log(data)
        FetchComments()
    }
    return(
        <div>
            <input
                type='text'
                value={comment}
                onChange={(e)=>setComment(e.target.value)}
            />
            <button onClick={SubmitComment}>Submit Comment</button>
            <button onClick={FetchComments}>Load Comments</button>
            {comments.map((comment=>{
                return(
                    <div key={comment.id}>
                        <h4>
                            {comment.id} | {comment.text}
                            <button onClick={()=>deleteComment(comment.id)}>Delete</button>
                        </h4>
                    </div>
                )
            }))}
        </div>
    )
}
export default commentsPage