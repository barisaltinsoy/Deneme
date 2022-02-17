function telephoneCheck(str) {

    var digitCounter = 0;

    for(var i = 0 ; i < str.length ; i++ ){
        if(str[i] % 1 >= 0){
            var result = true;
        }else{
            result = false;
        }
    }
    if(result == true && (digitCounter == 10 || digitCounter == 11)){
        return true;
    }else{
        return false;
    }
  }
  

telephoneCheck("555-555-5555");