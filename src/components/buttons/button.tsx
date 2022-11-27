import React from 'react';
import {Button} from 'react-bootstrap'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    variant: string;
}

export const ButtonPrimary: React.FC<Props> = (props) => {
    const {text} = props;
    return <Button {...props}>{text}</Button>
}