var useFormat = function () {
	var pattern = function (name, pattern) {
		var applyPattern = function () {
			var inputElement = document.getElementsByName(name);
			if (!inputElement || !inputElement.value) return '';
			var formattedValue = String(inputElement.value).replace(/\D/g, '');
			return pattern
				.split('')
				.map(function (char) {
					return char === '#' ? formattedValue.charAt(0) || '' : char;
				})
				.join('');
		};
		return {
			name: name,
			onChange: function (e) {
				e.target.value = applyPattern();
			},
		};
	};
	return { pattern: pattern };
};

export { useFormat };
//# sourceMappingURL=index.js.map
