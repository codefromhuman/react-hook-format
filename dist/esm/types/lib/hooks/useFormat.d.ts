import { ChangeEvent } from "react";
export declare const useFormat: () => {
    pattern: (name: string, formatPattern: string) => {
        name: string;
        onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    };
};
