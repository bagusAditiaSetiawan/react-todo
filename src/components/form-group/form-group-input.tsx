import React from "react"
import { Form } from "react-bootstrap"

interface Props {
    title: string,
    type: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormGroupInput = ({title, type, value, onChange}: Props) => {
    return (
        <Form.Group>
          <Form.Label>{title}</Form.Label>  
          <Form.Control type={type} onChange={onChange} value={value} />
        </Form.Group>
    )
}