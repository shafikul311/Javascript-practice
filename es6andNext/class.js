class Calculation{
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;

        
    }
    get sum(){
       return this.calcSum();
    }


    calcSum() {
        return this.num1 + this.num2;
      }

      get sub(){
        return this.subtraction()
      }

      subtraction(){
        return this.num1 - this.num2;
      }
}

const cal = new Calculation(40.50, 30.20)
console.log('addition :', cal.sum , 'subtraction : ', cal.sub)