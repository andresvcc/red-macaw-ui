import React from "react";
import { Button } from 'antd';
import "./Button.scss";
import 'antd/dist/antd.css'

export interface ButtonProps {
  label: string;
}

const MDButton = (props: ButtonProps) => {
  return <Button>{props.label}</Button>;
};

export default MDButton;
