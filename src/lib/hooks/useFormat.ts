import { ChangeEvent } from "react";

export const useFormat = () => {
  const pattern = (name: string, formatPattern: string) => {
    const applyPattern = () => {
      const inputElement = document.getElementsByName(name)[0] as HTMLInputElement;

      if (!inputElement || !inputElement.value) return '';

      const formattedValue = String(inputElement.value).replace(/\D/g, '');
      let result = '';
      let valueIndex = 0;

      for (const char of formatPattern) {
        if (char === '#') {
          result += formattedValue[valueIndex] || '';
          valueIndex += 1;
        } else {
          result += char;
        }
      }

      return result;
    };

    return {
      name,
      value: applyPattern(),
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        e.target.value = applyPattern();
      },
    };
  };

  return { pattern };
};
