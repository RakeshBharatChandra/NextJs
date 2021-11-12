export default function handler(req,res){
    res.setPreviewData({user:'Raki'})
    //res.end('Preview Mode enable')
    res.redirect(req.query.redirect)
}