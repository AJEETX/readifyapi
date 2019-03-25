
const index={
    routes:(server,router)=>{
    
        server.use('/api/Fibonacci',router)
        server.use('/api/Reverse',router)
        server.use('/api/Token',router)
        server.use('/api/TriangleType',router)
        
        server.use((req,res,next)=>{
            const err=new Error('Not Found')
            err.status=404;
            next(err)
        })
        server.use((err,req,res,next)=>{
            res.status(err.status || 500);
            res.send(err.message)
        })
    }
}

module.exports=index;
