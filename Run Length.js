function compressArray(array) {
    var result = [ ];
    if (array.length > 0) {
        var count = 1;
        var value = array[ 0 ];
        for (var i = 1; i < array.length; ++i) {
			var entry = array[ i ];
            if (entry == value) {
                count += 1;
            } else {
                result.push(count);
                result.push(value);
              	count = 1;
				value = entry;
            }
        }
        result.push(count);
        result.push(value);
    }
    return result;
}
console.log(compressArray(aaabbcccc));