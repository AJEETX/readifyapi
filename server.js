const index=require('./routes/index'), 
express=require('express')(),
swaggerUi=require('swagger-ui-express'),
doc=require('./swagger.json'),
morgan=require('morgan'),
router=require('./routes/router'),
port=process.env.PORT || 9000;

const server=(express,index,port,morgan,router,swaggerUi,doc)=>{

    express.use(morgan('combined'))
    
    express.use('/swagger',swaggerUi.serve,swaggerUi.setup(doc))

    index.routes(express,router);

    express.listen(port,()=> console.log(`express running port ${port}`))
    
    return express;
}

server(express,index,port,morgan,router,swaggerUi,doc);

module.exports=server;