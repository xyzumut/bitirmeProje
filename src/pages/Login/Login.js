import React, {useRef} from "react";
import Input from "../../components/formItems/Input";
import { FaBeer } from 'react-icons/fa';

const Login = () => {
    const deneme = useRef()

    return(
        <>
            <h1>Login</h1>
            <Input type={'password'} ref={deneme} icon={'yes'} /> 
            <br/>
            <Input type={'text'} />
        </>
    )
}
export default Login