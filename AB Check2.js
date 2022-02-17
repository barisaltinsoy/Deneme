function ABCheck(str) { 

    for(var i = 0 ; i < str.length - 4 ; i++){
      if((str[i].match(/[aA]/) && str[i+4].match(/[bB]/)) || 
      (str[i].match(/[bB]/) && str[i+4].match(/[aA]/))){
        return true;
        }
      }
        return false; 
      }