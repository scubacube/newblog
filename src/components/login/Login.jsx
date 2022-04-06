import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {loginUserAction} from "../../redux/actions/loginActions";
import {useDispatch} from "react-redux";
import styled from 'styled-components';

const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  input {
    display: block;
  }
  button {
    width: 100%;
  }
`;

export function Login() {
    const history = useHistory();
    const dispatch = useDispatch();

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        const userData = {
            email: email,
            password: password
        }
        e.preventDefault();
        dispatch(loginUserAction(userData, history));
    }
    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleOnChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <LoginForm>
            <form>
                <input value={email} onChange={handleOnChangeEmail} type="email"/>
                <input value={password} onChange={handleOnChangePassword} type="password"/>
                <button onClick={handleSubmit}>login</button>
            </form>
        </LoginForm>
    )
}