function NewsArticleList({articals}){
    return(
       <>
       <h1>Know the News Here</h1>
       {
           articals.map(article=>{
               return(
                    <div key={article.id}>
                        <h1>
                            {article.id} {article.title} {article.category}
                        </h1>
                    </div>
               )
           })
       }
       </>
    )
}
export default NewsArticleList

export async function getServerSideProps(){
    const response=await fetch("http://localhost:4000/news")
    const data=await response.json()
    console.log(`Pre-rendering NewsArticleList}`)

    return{
        props:{
            articals:data,
        }
    }
}