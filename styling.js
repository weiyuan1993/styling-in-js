const addStyle = function(selector, rule, pseudoElement) {
    const sheetId = "customPseudoStyle";
    const head = document.head || document.getElementsByTagName("head")[0];
    const styleSheet =
        document.getElementById(sheetId) || document.createElement("style");
    styleSheet.id = sheetId;

    function getRuleValue(rule) {
        let ruleString = "";
        let result = "";
        for (let key in rule) {
            ruleString += `${key}:${rule[key]};`;
        }
        result = `{${ruleString}}`;
        return result;
    }
    if (pseudoElement) {
        // pseudo element styling
        styleSheet.appendChild(
            document.createTextNode(
                `${selector}${pseudoElement}${getRuleValue(rule)}`
            )
        );
    } else {
        // normal css
        styleSheet.appendChild(
            document.createTextNode(`${selector}${getRuleValue(rule)}`)
        );
    }
    if (!document.getElementById(sheetId)) {
        head.appendChild(styleSheet);
    }
};
