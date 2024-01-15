var useFormat = function () {
    var pattern = function (formatPattern) {
        var applyPattern = function (e) {
            var newValue = e.currentTarget.value;
            var formattedValue = String(newValue).replace(/\D/g, '');
            var result = '';
            var valueIndex = 0;
            for (var _i = 0, formatPattern_1 = formatPattern; _i < formatPattern_1.length; _i++) {
                var char = formatPattern_1[_i];
                if (char === '#' && formattedValue[valueIndex] !== undefined) {
                    result += formattedValue[valueIndex];
                    valueIndex += 1;
                }
                else if (char !== '#') {
                    result += char;
                }
            }
            if (e.key !== 'Backspace')
                e.currentTarget.value = result;
        };
        return { onKeyUp: applyPattern, maxLength: formatPattern.length };
    };
    var numeric = function () {
        var applyPattern = function (e) {
            var formattedValue = String(e.target.value).replace(/[^\d.,]/g, '');
            e.target.value = String(formattedValue);
        };
        return { onChange: applyPattern };
    };
    return { pattern: pattern, numeric: numeric };
};

export { useFormat };
//# sourceMappingURL=index.js.map
