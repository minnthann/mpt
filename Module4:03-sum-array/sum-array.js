var sumArray = function(arr) {
    var result = 0;

    for (var i= 0; i <arr.length; i++){
        var currentNumber = arr[i];
        result += currentNumber;
    }
    return result;
};