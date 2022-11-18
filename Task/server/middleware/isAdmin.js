const Admin=(req,res,next)=>{
    if(!req.user.isAdmin) return res.status(403).send({message:"Access denied your not right person to action"})
    next()
}

export default Admin