import React, { InputHTMLAttributes } from "react";
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
export declare function ButtonRoot(props: Props): React.JSX.Element;
