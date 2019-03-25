const triangleType=(sides)=>{

    let side1=parseInt(sides[0]),side2=parseInt(sides[1]),side3=parseInt(sides[2]);

    if(isNaN(parseInt(side1)) || isNaN(parseInt(side2)) || isNaN(parseInt(side3)))  {
        return 'Error'
    }

    if(side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2){
        return "Error";
    }

    if(side1 == side2 && side2==side3){
        return 'Equilateral';
    }

    if(side1==side2 || side2==side3 || side1==side3){
        return 'Isosceles';
    }

    if(side1!= side2 && side2 != side3){
        return "Scalene";
    }
}
module.exports=triangleType;