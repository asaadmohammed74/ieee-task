"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findTwoLargest", {
    enumerable: true,
    get: ()=>findTwoLargest
});
function findTwoLargest(list) {
    if (list.length < 2) {
        return null;
    }
    var largest = 0;
    var secondLargest = 0;
    for(var i = 0; i < list.length; i++){
        if (largest < list[i]) {
            secondLargest = largest;
            largest = list[i];
        } else if (secondLargest < list[i]) {
            secondLargest = list[i];
        }
    }
    return [
        largest,
        secondLargest
    ];
}

//# sourceMappingURL=task1.js.map