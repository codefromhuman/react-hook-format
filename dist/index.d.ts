import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
declare function ButtonRoot(props: Props): React.JSX.Element;

declare const Button: {
    Root: typeof ButtonRoot;
};

export { Button };
