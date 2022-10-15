import React from "react";
import "./Button2.scss";

export interface ButtonProps {
  label: string;
}

const Button2 = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button2;
