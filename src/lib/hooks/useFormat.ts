import { ChangeEvent, InputHTMLAttributes } from 'react';

export const useFormat = () => {
	const pattern = (
		formatPattern: string
	): InputHTMLAttributes<HTMLInputElement> => {
		const applyPattern = (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === 'Backspace') return;

			const newValue = e.currentTarget.value;

			const formattedValue = String(newValue).replace(/\D/g, '');

			let result = '';
			let valueIndex = 0;

			for (const char of formatPattern) {
				if (char === '#' && formattedValue[valueIndex] !== undefined) {
					result += formattedValue[valueIndex];
					valueIndex += 1;
				} else if (char !== '#') {
					result += char;
				}
			}

			e.currentTarget.value = result;
		};

		return { onKeyUp: applyPattern, maxLength: formatPattern.length };
	};

	const numeric = (): InputHTMLAttributes<HTMLInputElement> => {
		const applyPattern = (e: ChangeEvent<HTMLInputElement>) => {
			const formattedValue = String(e.target.value).replace(/[^\d.,]/g, '');
			e.target.value = String(formattedValue);
		};

		return { onChange: applyPattern };
	};

	return { pattern, numeric };
};
