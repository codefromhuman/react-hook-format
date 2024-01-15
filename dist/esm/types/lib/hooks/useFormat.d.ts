import { ChangeEvent } from "react";
export declare const useFormat: () => {
    pattern: (name: string, formatPattern: string) => {
        name: string;
        value: string;
        onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    };
};
