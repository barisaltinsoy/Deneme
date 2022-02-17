function ABCheck(str) { 

    for(var i = 0 ; i < str.length - 3 ; i++){
      if(str[i].match(/[aA]/) && str[i+4].match(/[bB]/)){
        return true;
      }
      else{
        return false;
      }
      }
    }
    
      // code goes here  
      
    
    
       
    // keep this function call here 
    console.log(ABCheck("after badly"));