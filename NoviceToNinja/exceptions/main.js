(function () {
    'use strict';
//function three() {
//    unicorn();
//}
//function two() {
//    three();
//}
//function one() {
//    two();
//}
//
//one();
//    var pi = 3.142;
//    if (window.holoDeck) {
//        virtualReality.activate();
//    }
//    function amIOldEnough(age) {
//        if (age < 12) {
//            window.alert(age);
//            return 'No, Sorry.';
//        } else if (age < 18) {
//            return 'Only if you are accompanied by an Adult';
//        } else {
//            return 'Yep, Come on in !';
//        }
//    }
//    
//    window.console.log(amIOldEnough(21));
    
    function squareRoot(number) {
        if (number < 0) {
            throw new RangeError('You can\'t find the square of negative numbers ');
        }
        return Math.sqrt(number);
    }
    
    function imaginarySquareRoot(number) {
        try {
            return squareRoot(number);
        } catch (error) {
            return squareRoot(-number) + 'i';
        }
    }
    console.log(imaginarySquareRoot(-121));

}());