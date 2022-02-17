let movie = {
    
    name: 'La La Land',

    thisInArrow:() => {
        console.log("Movie Name is " + this.name);
    },

    thisInRegular(){
        console.log("Movie Name is " + this.name);
    }

};

movie.thisInArrow();
movie.thisInRegular();
