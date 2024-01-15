import { InputHTMLAttributes } from 'react';

declare const useFormat: () => {
    pattern: (formatPattern: string) => InputHTMLAttributes<HTMLInputElement>;
    numeric: () => InputHTMLAttributes<HTMLInputElement>;
};

export { useFormat };
