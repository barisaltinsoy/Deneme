function StringChallenge(str) { 

    var minuteDifference = 0;
    
    const timeSplit = str.split('-');
    
    const firstTime = timeSplit[0];
    const secondTime = timeSplit[1];
    
    var firstTimeAMPM = firstTime.slice(-2);
    var secondTimeAMPM = secondTime.slice(-2);
    
    var firstSplitHM = firstTime.split(':');
    var firstHour = firstSplitHM[0];
    var firstHour = parseInt(firstHour);
    var firstMinuteAndRest = firstSplitHM[1];
    var firstMinuteSplit = firstMinuteAndRest.split(/[a-zA-Z]/);
    var firstMinute = firstMinuteSplit[0];
    var firstMinute = parseInt(firstMinute);
    
    var secondSplitHM = secondTime.split(':');
    var secondHour = secondSplitHM[0];
    var secondHour = parseInt(secondHour);
    var secondMinuteAndRest = secondSplitHM[1];
    var secondMinuteSplit = secondMinuteAndRest.split(/[a-zA-Z]/);
    var secondMinute = secondMinuteSplit[0];
    var secondMinute = parseInt(secondMinute);
    
    if(firstHour == 12 && firstTimeAMPM == 'am'){
      firstHour = 0;
    }
    if(secondHour ==12 && secondTimeAMPM == 'am'){
      secondHour = 0;
    }
    
    if(firstTimeAMPM == 'am' && secondTimeAMPM == 'am' && firstHour >= secondHour && firstMinute > secondMinute){
      minuteDifference = (24 * 60) - ((firstHour * 60 + firstMinute) - (secondHour * 60 + secondMinute));
    }
    else if (firstTimeAMPM == 'am' && secondTimeAMPM == 'am' && firstHour >= secondHour){
      minuteDifference = (secondHour * 60 + secondMinute) - (firstHour * 60 + firstMinute);
    }
    else if(firstTimeAMPM == 'am'){
      minuteDifference = ((secondHour + 12) * 60 + secondMinute) - (firstHour * 60 + firstMinute);
    }
    else{
      minuteDifference = ((24 - firstHour) * 60 - firstMinute) - (secondHour * 60 + secondMinute);
    }
    
    
      // code goes here  
      return minuteDifference; 
    
    }
       
    // keep this function call here 
    console.log(StringChallenge(readline()));