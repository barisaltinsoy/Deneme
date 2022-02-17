function MathChallenge(num) { 

    if( num === 1){
      return true;
    }if( num % 2 !== 0 || num === 0){
      return false;
    }
      return MathChallenge( num / 2 );
    
      // code goes here  
       
    
    }
       
    // keep this function call here 
    console.log(MathChallenge(readline()));