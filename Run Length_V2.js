function RunLength(str) { 

    var finalArray = [];
    if(str.length > 0){
    var letterCount = 1;
    var holdValue = str[0];
    for(var i = 1; i<str.length; i++){
      if(holdValue == str[i]){
        letterCount += 1;
      
        }else{
          finalArray = finalArray + (letterCount);
          finalArray = finalArray + (holdValue);
          letterCount = 1;
          holdValue = str[i];
        }
    
    }
    finalArray = finalArray + (letterCount);
    finalArray = finalArray + (holdValue);
    }
    // code goes here  
    return finalArray; 
  
  
  }  
  // keep this function call here 
  let item = (aaabbcccc);
  console.log(RunLength(item));
  