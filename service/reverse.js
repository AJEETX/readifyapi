const reverse=(sentence)=>{
    
    return sentence.split("").reverse().join("").split(" ").reverse().join(" ")
}
module.exports=reverse