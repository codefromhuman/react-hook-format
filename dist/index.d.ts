import { ChangeEvent } from 'react';

declare const useFormat: () => {
    pattern: (name: string, formatPattern: string) => {
        name: string;
        onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    };
};

export { useFormat };
