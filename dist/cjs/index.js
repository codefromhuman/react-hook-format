'use strict';

var useFormat = function () {
    var pattern = function (name, formatPattern) {
        var applyPattern = function () {
            var inputElement = document.getElementsByName(name)[0];
            if (!inputElement || !inputElement.value)
                return '';
            var formattedValue = String(inputElement.value).replace(/\D/g, '');
            var result = '';
            var valueIndex = 0;
            for (var _i = 0, formatPattern_1 = formatPattern; _i < formatPattern_1.length; _i++) {
                var char = formatPattern_1[_i];
                if (char === '#') {
                    result += formattedValue[valueIndex] || '';
                    valueIndex += 1;
                }
                else {
                    result += char;
                }
            }
            return result;
        };
        return {
            name: name,
            value: applyPattern(),
            onChange: function (e) {
                e.target.value = applyPattern();
            },
        };
    };
    return { pattern: pattern };
};

exports.useFormat = useFormat;
//# sourceMappingURL=index.js.map
