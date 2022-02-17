function ArrayChallenge(arr) { 

    var doubleSum = 0;
    
    for(var i = 0 ; i < arr.length ; i++){
      doubleSum += 2*arr[i];
    }
    var maxOfArray = Math.max.apply(null, arr);
    var secondMaxOfArray = Math.max.apply(null, arr.splice(arr.indexOf(maxOfArray), 1));
    
    var greatMultiply = maxOfArray * secondMaxOfArray;
    if(greatMultiply > doubleSum){
      return true;
    }else{
      return false;
    }
    
      // code goes here  
      
    
    }
       
    // keep this function call here 
    console.log(ArrayChallenge(readline()));