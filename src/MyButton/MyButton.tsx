import React, { FC, ReactNode} from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import 'antd/dist/antd.min.css'

const StyledButton: FC<ButtonProps> = styled(Button)`
    &:hover {
        background-color: #0a558c;
    }
`;

export interface StyledButtonProps extends ButtonProps {
    label?: string;
    children?: ReactNode;
}

const MyButton = (props: StyledButtonProps)=>{
    return(
        <StyledButton>
            {props.children}
        </StyledButton>
    )
}

export default MyButton;