
function calculator(num1,num2,operation){

  switch(operation){
    case "add":
      return num1+num2;

     case "multiplication":
         return num1 * num2;

      case "divide":
          return num1/num2;
    
   }
}


console.log(calculator(50,2,"divide"));
console.log(calculator(50,2,"multiplication"));
console.log(calculator(200,2,"divide"));



let key ="sub";

switch (key) {
    case "sum":
        const res1= 10+50;

    console.log("sum"); 
        break;

        case "sub":
            const res2 = 100-50;

            console.log(res2);
            break;

    default:
        console.log("not found");
        break;
}





let fruit = "watermelon";

switch (fruit) {
    case  "Mango":
        console.log("Mango");
        break;

        case "Apple":
        console.log("Apple");
        break;

        case "watermelon":
        console.log("watermelon");
        break;

    default:
        console.log("unknown fruit");
        break;
}