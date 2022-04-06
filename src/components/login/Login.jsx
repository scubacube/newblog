import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginUserAction} from "../../redux/actions/loginActions";
import styled from 'styled-components';
import {Loading} from './../main/Loading';

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

    const loading = useSelector(({user}) => {
      return user.loading
    });

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

    return loading ? <Loading /> : (
      <LoginForm>
          <form>
              <input value={email} onChange={handleOnChangeEmail} type="email"/>
              <input value={password} onChange={handleOnChangePassword} type="password"/>
              <button onClick={handleSubmit}>login</button>
          </form>
      </LoginForm>
  )
}