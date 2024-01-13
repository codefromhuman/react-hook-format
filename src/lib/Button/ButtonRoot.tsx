import React, { InputHTMLAttributes } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function ButtonRoot(props: Props) {
  return (
    <div>
      <span>{props.label}</span>
      <input {...props} />
    </div>
  );
}