"use strict";
var resultField = null;
var input = '';
function updateResult() {
    if (input.length === 0) {
        resultField.innerHTML = '0';
        return;
    }
    try {
        // @ts-ignore
        var res = evaluateString(input);
        if (res !== null && res.toString() !== input) {
            resultField.innerHTML = `${input} = ${res}`;
            return;
        }
    } catch (e) {}
    resultField.innerHTML = `${input}`;
}
window.onload = function() {
    resultField = document.getElementById('result');
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = document.getElementsByClassName('calc-btn')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var btn = _step.value;
            btn.onclick = onBtnPress;
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
    reset();
};
function onBtnPress(e) {
    var text = e.target.innerHTML.trim();
    if (text === 'Clear') {
        reset();
        return;
    }
    handleKey(text);
}
function handleKey(key) {
    if (key === 'Backspace') {
        input = input.slice(0, -1);
    } else {
        input += `${key}`;
    }
    updateResult();
}
function reset() {
    input = '';
    updateResult();
}
document.addEventListener('keydown', function(event) {
    var key = event.key;
    if (!Number.isNaN(+key) || key === '+' || key === '-' || key === '*' || key === '/' || key === 'Backspace') {
        handleKey(key);
    }
});

//# sourceMappingURL=script.js.map