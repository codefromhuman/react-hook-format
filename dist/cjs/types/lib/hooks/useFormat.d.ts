import { ChangeEvent } from "react";
export declare const useFormat: () => {
    pattern: (name: string, pattern: string) => {
        name: string;
        onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    };
};
