"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "sequentialSearch", {
    enumerable: true,
    get: ()=>sequentialSearch
});
function sequentialSearch(list, element) {
    for(var i = 0; i < list.length; i++){
        if (list[i] === element) {
            return i;
        }
    }
    return -1;
}

//# sourceMappingURL=sequential-search.js.map