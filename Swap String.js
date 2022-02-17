function StringChallenge(str) { 

    var swapString = "";
    
    for(var i = 0 ; i < str.length ; i++){
      if(/^[a-z]/.test(str[i])){
        swapString += str[i].toUpperCase();
      }else{
        swapString += str[i].toLowerCase();
      }
    }
    
      // code goes here  
      return swapString; 
    
    }
       
    // keep this function call here 
    console.log(StringChallenge(readline()));