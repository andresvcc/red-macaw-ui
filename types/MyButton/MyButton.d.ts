import { ReactNode } from 'react';
import { ButtonProps } from 'antd/lib/button';
import 'antd/dist/antd.min.css';
export interface StyledButtonProps extends ButtonProps {
    label?: string;
    children?: ReactNode;
}
declare const MyButton: (props: StyledButtonProps) => JSX.Element;
export default MyButton;
