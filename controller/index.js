const apis=require('../helper/index')

const index={

    main: (req,res)=>{
    
        let services={
            '/api/fibonacci':{ method:apis.Fibonacci,query: req.query.n},

            '/api/reverse':{method:apis.Reverse,query:req.query.sentence},

            '/api/token':{method:apis.Token,query:''},

            '/api/triangletype':{method:apis.TriangleType,query:[req.query.a,req.query.b,req.query.c]}
        };

        let service=services[req.baseUrl.toLowerCase()]
        
        let answer=service.method(service.query)

        res.status(200).send(answer)
    }
}

module.exports=index;