function Palindrome(str) { 

    strAlpha = str.toLowerCase().replace(/[^a-z0-9]/gi,'');
    
  
    for(let i = 0; i<(strAlpha.length)/2; i++){
      if(strAlpha[i !== strAlpha[strAlpha.length - 1 -i]]){
        return false;
      }
    }
    return str;
  }
     
  // keep this function call here 
  console.log(Palindrome(readline()));