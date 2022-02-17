function palindrome(str) {

    let strArranged = str.toLowerCase().replace(/[^a-z0-9]/gi,'');

    var len = strArranged.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (strArranged[i] !== strArranged[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
console.log(palindrome("almostomla"));