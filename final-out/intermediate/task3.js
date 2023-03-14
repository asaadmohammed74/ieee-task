"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "sumPositive", {
    enumerable: true,
    get: ()=>sumPositive
});
function sumPositive(list) {
    return list.reduce((prev, curr)=>{
        if (curr > 0) {
            return prev + curr;
        }
        return prev;
    }, 0);
}

//# sourceMappingURL=task3.js.map