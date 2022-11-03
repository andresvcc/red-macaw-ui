import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import 'antd/dist/antd.min.css'

const StyledButton= styled(Button)`
    &:hover {
        background-color: #0a558c;
    }
`;

export interface ButtonProps {
    children: ReactNode;
}

const MyButton = (props: ButtonProps)=>{
    return(
        <StyledButton>
            {props.children}
        </StyledButton>
    )
}

export default MyButton;
