import React from 'react';
import logo from "../../logo.png";
import {Container} from "@material-ui/core";
import { NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {logoutUser} from "../../redux/actions/loginActions";

const Logo = styled.img`
  width: 60px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.span`
  a {
    padding-left: 10px;
    text-decoration: none;
    color: #fff;
  }
`;

const Head = styled.div`
  background-color: #37352f;      
  padding: 10px 0;
  margin-bottom: 40px;
`;

export function Header() {
    const dispatch = useDispatch();

    const authenticated = useSelector(({user}) => {
        return user.authenticated
    });

    const handleSubmit = (e) => {
      // setLoading(true);
      e.preventDefault();
      dispatch(logoutUser());
  }
  
    return (
        <Head>
            <Container>
              <HeaderWrapper>
                <NavLink to="/">
                    <Logo src={logo} alt="logo"/>
                </NavLink>
                <Nav>
                    <NavLink to='/about' className='smth'>
                        About me
                    </NavLink>
                    {
                        authenticated ?
                        <NavLink to='/signout' onClick={handleSubmit}>
                            Sign out
                        </NavLink>
                        :
                        <NavLink to='/login' >
                            Sign in
                        </NavLink>
                    }
                    {
                        authenticated ? <NavLink to='/create' >Create a post</NavLink> : ''
                    }
                </Nav>
              </HeaderWrapper>
            </Container>
        </Head>
    )
}

