const addStyle = function(selector, rule, pseudoElement) {
    var _sheetId = "customPseudoStyle";
    var _head = document.head || document.getElementsByTagName("head")[0];
    var _sheet =
        document.getElementById(_sheetId) || document.createElement("style");
    _sheet.id = _sheetId;

    function getRuleValue(rule) {
        let ruleString = "";
        let result = "";
        for (var key in rule) {
            ruleString += `${key}:${rule[key]};`;
        }
        result = `{${ruleString}}`;
        return result;
    }
    if (pseudoElement) {
        // pseudo element styling
        _sheet.innerHTML += `${selector}${pseudoElement}${getRuleValue(rule)}`;
    } else {
        // normal css
        _sheet.innerHTML += `${selector}${getRuleValue(rule)}`;
    }
    if (!document.getElementById(_sheetId)) {
        _head.appendChild(_sheet);
    }
};
