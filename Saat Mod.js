using System;

class MainClass {

  public static int StringChallenge(int num) {

    if (num < 0){
      return ("Negative Cannot Be Used");
    }else if(num <60){
      return "0:" + num;
    }else{
      int hour = num % 60;
      int remain = num - (mod*60);
      return mod + ":" + remain;
    }
    // code goes here  
    

  }

  static void Main() {  
    // keep this function call here
    Console.WriteLine(StringChallenge(Console.ReadLine()));
  } 

}