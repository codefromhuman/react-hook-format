import { ChangeEvent, InputHTMLAttributes } from "react";

export const useFormat = () => {
  const pattern = (name: string, pattern: string) => {
    const applyPattern = (value: string) => {
      const formattedValue = value.replace(/\D/g, '');

      return pattern
        .split('')
        .map((char) => (char === '#' ? formattedValue.charAt(0) || '' : char))
        .join('');
    }

    const inputElement = document.getElementsByName(name) as InputHTMLAttributes<HTMLInputElement>;

    const newValue = applyPattern(String(inputElement.value));

    return {
      value: newValue,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        e.target.value = applyPattern(String(inputElement.value))
      }
    }
  }

  return ({ pattern })
}