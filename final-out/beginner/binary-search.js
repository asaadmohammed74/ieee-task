"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "binarySearch", {
    enumerable: true,
    get: ()=>binarySearch
});
function print_binary_search_progress(list, element, startIndex, endIndex, mid) {
    var listString = list.map((element, _)=>{
        return `${element}`.padStart(8);
    }).join('');
    var indices = list.map((_, index)=>{
        return `${index}`.padStart(8);
    }).join('');
    var arrows = list.map((_, index)=>{
        var ss = '';
        if (index === startIndex) {
            ss += 'S';
        }
        if (index === mid) {
            ss += 'M';
        }
        if (index === endIndex) {
            ss += 'E';
        }
        if (ss.length === 0) {
            ss = '    ';
        }
        return ss.padStart(8);
    }).join('');
    console.log('index:\t', indices);
    console.log('items:\t', listString);
    console.log('\t', arrows);
    console.log('-'.padEnd(list.length * 8 + 12, '-'));
}
function binarySearch_impl(list, element, startIndex, endIndex) {
    if (startIndex > endIndex) {
        return -1;
    }
    var mid = Math.floor((startIndex + endIndex) / 2);
    print_binary_search_progress(list, element, startIndex, endIndex, mid);
    if (list[mid] === element) {
        return mid;
    }
    if (list[mid] > element) {
        return binarySearch_impl(list, element, startIndex, mid - 1);
    } else {
        return binarySearch_impl(list, element, mid + 1, endIndex);
    }
}
function binarySearch(list, element) {
    if (list.length === 0) {
        return -1;
    }
    return binarySearch_impl(list, element, 0, list.length - 1);
}

//# sourceMappingURL=binary-search.js.map