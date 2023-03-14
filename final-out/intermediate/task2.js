"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findLargestString", {
    enumerable: true,
    get: ()=>findLargestString
});
function findLargestString(list) {
    if (list.length === 0) {
        return null;
    }
    var largest = list[0];
    for(var i = 0; i < list.length; i++){
        if (largest.length < list[i].length) {
            largest = list[i];
        }
    }
    return largest;
}

//# sourceMappingURL=task2.js.map