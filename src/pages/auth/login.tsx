import { AuthLayout } from "../../layouts/auth.layout";
import { Form} from 'react-bootstrap';
import { ButtonPrimary } from "../../components/buttons/button";
import { FormGroupInput } from "../../components/form-group/form-group-input";
import { useState } from "react";


export const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    return (<AuthLayout>
        <div className="page-auth">
        <h1 className="text-title text-center">Login</h1>
        <Form>
          <FormGroupInput 
            title="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />  
          <FormGroupInput 
            title="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
             />  
          <ButtonPrimary text="Login" variant="info" className="mt-2 btn-fill" type="submit" />
        </Form> 
        </div>
    </AuthLayout>);
}
