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
    
    if(firstTimeAMPM == secondTimeAMPM && firstHour > secondHour){
      minuteDifference = (firstHour * 60 + firstMinute) - (secondHour * 60 + secondMinute);
    }
    else if (firstTimeAMPM = secondTimeAMPM && firstHour < secondHour){
      minuteDifference = (secondHour * 60 + secondMinute) - (firstHour * 60 + firstMinute);
    }
    else if(firstTimeAMPM == 'am'){
      minuteDifference = ((secondHour + 12) * 60 + secondMinute) - (firstHour * 60 + firstMinute);
    }
    else{
      minuteDifference = ((firstHour + 12) * 60 + firstMinute) - (secondHour * 60 + secondMinute);
    }
    
    
      // code goes here  
      return minuteDifference; 
    
    }
       
    // keep this function call here 
    console.log(StringChallenge(readline()));


    /*String Challenge
Have the function StringChallenge(str) take the str parameter being passed which will be two times 
(each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of 
minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am 
then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.
Examples
Input: "12:30pm-12:00am"
Output: 690
Input: "1:23am-1:08am"
Output: 1425*/