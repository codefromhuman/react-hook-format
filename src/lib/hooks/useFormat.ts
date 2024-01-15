import { ChangeEvent } from 'react';

export const useFormat = <T>() => {
	const pattern = (name: keyof T, formatPattern: string) => {
		const applyPattern = () => {
			const inputElement = document.getElementsByName(
				String(name)
			)[0] as HTMLInputElement;

			if (!inputElement || !inputElement.value) return '';

			const formattedValue = String(inputElement.value).replace(/\D/g, '');

			return formatPattern.split('').reduce((result, char) => {
				return (
					result +
					(char === '#' ? formattedValue.charAt(result.length) || '' : char)
				);
			}, '');
		};

		return {
			name,
			onChange: (e: ChangeEvent<HTMLInputElement>) => {
				e.target.value = applyPattern();
			},
		};
	};

	return { pattern };
};
