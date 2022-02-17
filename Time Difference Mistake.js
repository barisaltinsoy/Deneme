function StringChallenge(str) { 

    var strSplitTwo = str.split('-');
    var firstTime = strSplitTwo[0];
    var secondTime = strSplitTwo[1];
    var firstTimeStatus = firstTime.slice(-2);
    var secondTimestatus = secondTime.slice(-2);
    var hourMinuteSplit1 = firstTime.split(':');
    var firstHour = hourMinuteSplit1[0];
    var firstMinute = hourMinuteSplit1[1];
    var hourMinuteSplit2 = secondTime.split(':');
    var secondHour = hourMinuteSplit2[0];
    var secondMinute = hourMinuteSplit2[1];
    //am-pm equal
    
    if(firstTimeStatus == secondTimestatus){
      if(firstHour == 12 && firstTime =='am'){
        minuteDifference = 0;
      }
      if(secondHour == 12 && secondTime =='am'){
        minuteDifference = firstHour * 60 + firstMinute;
      }else{
      minuteDifference = (firstHour * 60 + firstMinute) - (secondHour * 60 + secondMinute);
      }
    }
    //am-pm not equal
    else{
      minuteDifference = ((firstHour + 12) * 60 + firstMinute) - (secondHour * 60 + secondMinute);
    }
    
      // code goes here  
      return minuteDifference; 
      
    
    }
       
    // keep this function call here 
    console.log(StringChallenge(readline()));