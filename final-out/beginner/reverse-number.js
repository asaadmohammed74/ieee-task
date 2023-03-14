"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "reverseNumber", {
    enumerable: true,
    get: ()=>reverseNumber
});
function reverseNumber(n) {
    var reversed = 0;
    while(n !== 0){
        var lastDigit = n % 10;
        n = Math.floor(n / 10);
        reversed = reversed * 10 + lastDigit;
    }
    return reversed;
}

//# sourceMappingURL=reverse-number.js.map