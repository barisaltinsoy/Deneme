const feedCat = (cat) => {
    if(cat === "hungry"){
        return "Feed the Cat";
    }else{
        return "Just Leave Cat Alone"; 
    }
}

catStatus = feedCat ("hungry")
console.log(catStatus)
