import { ChangeEvent } from "react";

export const useFormat = () => {
  const pattern = (name: string, formatPattern: string) => {
    const applyPattern = () => {
      const inputElement = document.getElementsByName(name)[0] as HTMLInputElement;

      if (!inputElement || !inputElement.value) return '';

      const formattedValue = String(inputElement.value).replace(/\D/g, '');

      return formatPattern
        .split('')
        .map((char) => (char === '#' ? formattedValue.charAt(0) || '' : char))
        .join('');
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