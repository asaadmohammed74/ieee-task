// TODO: support ( )
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isOp: ()=>isOp,
    parseTokens: ()=>parseTokens,
    fixNegativeNumbers: ()=>fixNegativeNumbers,
    groupTokens: ()=>groupTokens,
    evaluateGroups: ()=>evaluateGroups,
    evaluateTokens: ()=>evaluateTokens,
    evaluateString: ()=>evaluateString
});
function isOp(c) {
    return c === '+' || c === '-' || c === '/' || c === '*' // || c === '(' || c === ')'
    ;
}
function parseTokens(str) {
    var tokens = [];
    var n = '';
    for(var i = 0; i < str.length; i++){
        var c = str[i];
        if (isOp(c)) {
            if (n.length !== 0) {
                tokens.push(+n);
                n = '';
            }
            tokens.push(c);
            continue;
        }
        n += c;
    }
    if (n.length !== 0) {
        tokens.push(+n);
    }
    return tokens;
}
function fixNegativeNumbers(tokens) {
    var newTokens = [];
    for(var i = 0; i < tokens.length; i++){
        var token = tokens[i];
        if (token === '-') {
            var next = tokens[i + 1];
            var prev = tokens[i - 1];
            if (typeof next === 'number' && typeof prev !== "number") {
                tokens[i + 1] = -next;
                continue;
            }
        }
        newTokens.push(token);
    }
    return newTokens;
}
function groupTokens(tokens) {
    var groups = [];
    for(var i = 0; i < tokens.length; i++){
        var token = tokens[i];
        var next = tokens[i + 1];
        if (next === '*' || next === '/') {
            groups.push([
                token,
                next,
                tokens[i + 2]
            ]);
            i += 2;
            continue;
        }
        groups.push([
            token
        ]);
    }
    return groups;
}
function evaluateGroups(tokenGroups) {
    var tokens = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = tokenGroups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var tokenGroup = _step.value;
            if (tokenGroup.length === 3) {
                tokens.push(evaluateTokens(tokenGroup));
            } else {
                tokens.push(...tokenGroup);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return tokens;
}
function evaluateTokens(tokens) {
    var res = tokens[0];
    if (typeof res !== 'number') {
        throw 'token stream must start with a number';
    }
    for(var i = 1; i < tokens.length; i += 2){
        var operation = tokens[i];
        var number = tokens[i + 1];
        if (typeof number !== 'number') {
            throw 'token stream must alternate between number and operation';
        }
        if (operation === '*') {
            res *= number;
        } else if (operation === '/') {
            res /= number;
        } else if (operation === '+') {
            res += number;
        } else if (operation === '-') {
            res -= number;
        }
    }
    return res;
}
function evaluateString(str) {
    var tokens = parseTokens(str);
    tokens = fixNegativeNumbers(tokens);
    var groups = groupTokens(tokens);
    var evaluatedGroups = evaluateGroups(groups);
    var finalValue = evaluateTokens(evaluatedGroups);
    return finalValue;
}

//# sourceMappingURL=math.js.map