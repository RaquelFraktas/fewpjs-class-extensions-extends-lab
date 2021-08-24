// Your code here
class Polygon{
    constructor(integers){
        this.integers= integers
    }

    get countSides(){
        return this.integers.length;
    }

    get perimeter(){
        return this.integers.reduce((accumulator, currentValue) => accumulator + currentValue);
    }
}

class Triangle extends Polygon {

    get isValid() {
        // console.log("this", this.integers)
        let side1 = this.integers[0];
        let side2 = this.integers[1];
        let side3 = this.integers[2];


        // if (!Array.isArray(this.integers)) console.log(false, "array");
        if (this.integers.length !== 3) return ;
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1));
           
      
    }
     
}

class Square extends Polygon{

    get isValid(){
        if (!Array.isArray(this.integers)) return;
        if (this.countSides !== 4) return;
        let side1 = this.integers[0];
        let side2 = this.integers[1];
        let side3 = this.integers[2];
        let side4 = this.integers[3];
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }

    get area(){
        let side1 = this.integers[0];
        let side2 = this.integers[1];
        let side3 = this.integers[2];
        let side4 = this.integers[3];

         let bigNum = Math.max(...this.integers);
         let smollNum = Math.min(...this.integers);
         return bigNum * smollNum

    }


}