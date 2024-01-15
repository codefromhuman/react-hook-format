import { ChangeEvent } from 'react';

declare const useFormat: () => {
    pattern: (name: string, formatPattern: string) => {
        name: string;
        value: string;
        onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    };
};

export { useFormat };
