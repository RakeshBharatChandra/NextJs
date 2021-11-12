module.exports = {
  reactStrictMode: true,
  redirects: async () =>{
    return [
      {
        source:'/redirect',
        destination:'/',
        //permanent:true
        permanent:false
      }
    ]
  }
}
