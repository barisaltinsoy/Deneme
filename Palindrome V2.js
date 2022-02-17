function palindrome(str) {

    let strArranged = str.toLowerCase().replace(/[^a-z0-9]/gi,'');
    let len = strArranged.legth;
    let mid = Math.floor(len/2);
    
    for(var i = 0 ; i <= mid ; i++){
      if(strArranged[i] !== strArranged[len - 1 - i]){
        return false;
      }
      else{
          return true;
      }
    }
    
      
    }
    
    console.log(palindrome("almostomla"));