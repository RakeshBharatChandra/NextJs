function ArticleListByCategory({articles,category}){
    return(
        <div>
            <h1>
                News about the category <i>{category}</i>
            </h1>
            {
                articles.map((article)=>{
                    return(
                        <div key={article.id}> 
                            <h2>
                                {article.id} {article.title}
                            </h2>
                            <p>{article.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ArticleListByCategory

export async function getServerSideProps(context){
    const {params,req,res,query}=context
    console.log(query)
    //http://localhost:3000/News/Cinema?subcategory=Hollywood
    console.log(req.headers.cookie)
    res.setHeader('set-cookie',['name=Rakesh'])
    const {category}=params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data=await response.json()
    console.log(`Pre-rendering news article for the category ${category}`)
    return{
        props:{
            articles:data,
            category,
        }
    }
}