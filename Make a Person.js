const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    
    var newName = firstAndLast;
    //first name
    this.getFirstName = function(){
      return newName.split(" ")[0];
    }
    //last name
    this.getLastName = function(){
      return newName.split(" ")[1];
    }
    //full name
    this.getFullName = function(){
      return newName;
    }
    // set first
    this.setFirstName = function(name){
      newName = name + " " + newName.split(" ")[1];
      return newName;
    }
    // set last
    this.setLastName = function(name){
      newName = newName.split(" ")[0] + " " + name
      return newName;
    }
    // set full
    this.setFullName = function(name){
      newName = name;
      return newName;
    } 
  }
  
  const bob = new Person('Bob Ross');
  bob.getFullName();
  console.log(bob.setLastName("Curry"));

