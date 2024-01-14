import { ChangeEvent } from "react";
export declare const useFormat: () => {
    pattern: (name: string, pattern: string) => {
        value: string;
        onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    };
};
