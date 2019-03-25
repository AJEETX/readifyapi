
const  Fibonacci='Fibonacci',Reverse='Reverse',Token='Token',TriangleType='TriangleType';

const apis={
    Fibonacci:require('../service/'+Fibonacci),
    Reverse:require('../service/'+Reverse),
    Token:require('../service/'+Token),
    TriangleType:require('../service/'+TriangleType)
}
module.exports=apis;