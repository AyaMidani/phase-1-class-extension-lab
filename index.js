// Your code here
class Polygon{
    constructor(ArrayOfInteger)
    {
        this.ArrayOfInteger=ArrayOfInteger
    }
    get countSides () {
        return this.ArrayOfInteger.length
      }
    get perimeter(){
        return this.ArrayOfInteger.reduce(function(acc, val) { return acc + val; }, 0)
      }
}

class Triangle extends Polygon{
    get isValid ()
    {
        if(this.ArrayOfInteger.length==3)
        {
            let a=this.ArrayOfInteger[0]
            let b=this.ArrayOfInteger[1]
            let c=this.ArrayOfInteger[2]
            if (a + b <= c || a + c <= b || b + c <= a){return false}
            else {return true}
        }
    }
}

class Square extends Polygon{
    get isValid(){
        if((this.ArrayOfInteger[0])==(this.ArrayOfInteger[1])&&(this.ArrayOfInteger[2])==(this.ArrayOfInteger[3]))
        {
            return true
        }
        else{
            return false
        }
    }
    get area(){
        return this.ArrayOfInteger[0]*this.ArrayOfInteger[0]
    }
}