function factorial(x){
  if (x < 0){
      return -1;
  }else if(x == 0){
      return 1;
  }else if(x > 0){
    for( var i = x-1 ; i >= 1 ; i--){
      x = x * i;
      }
  }
  return x;
}
let factorialResult = factorial(4);
console.log("n! = ", factorialResult);

