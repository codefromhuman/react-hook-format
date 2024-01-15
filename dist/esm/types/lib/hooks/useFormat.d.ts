import { InputHTMLAttributes } from 'react';
export declare const useFormat: () => {
    pattern: (formatPattern: string) => InputHTMLAttributes<HTMLInputElement>;
    numeric: () => InputHTMLAttributes<HTMLInputElement>;
};
