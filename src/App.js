import React from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import {Header} from "./components/header/Header";
import {Route, Switch} from "react-router-dom";
import {About} from "./components/about/About";
import {Loading} from "./components/main/Loading";
import {Main} from "./components/main/Main";
import axios from "axios";
import {Login} from "./components/login/Login";
import {Createpost} from "./components/post/Createpost";
import Fullpost from './components/post/Fullpost';
import {getAllPost} from "./redux/actions/postsActions";
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components';
import store from './redux/store';
import jwtDecode from "jwt-decode";
import {SET_AUTHENTICATED} from "./redux/types";
import {logoutUser} from "./redux/actions/loginActions";

const ContainerStyled = styled(Container)`
  margin-bottom: 40px;
`;

export const App = () => {
  const dispatch = useDispatch();
  axios.defaults.baseURL = "https://us-central1-blog-f14d5.cloudfunctions.net/api";
  const token = localStorage.FBIdToken;
  if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()){
          store.dispatch(logoutUser());
          window.location.href = '/login';
      } else {
          store.dispatch({ type: SET_AUTHENTICATED });
          axios.defaults.headers.common['Authorization'] = token;
          // store.dispatch(getAllPost());
      }
  }
  
  const loading = useSelector(({user}) => {
    return user.loading
  });

  const authenticated = useSelector(({user}) => {
      return user.authenticated
  });

  React.useEffect(() => {    
    dispatch(getAllPost())
  },[])

  return (
      <div className="App">
        <Header />            
        {!loading ? (
          <ContainerStyled>
            <Switch>
              <Route exact path='/' component={Main}  />
              <Route path='/about' component={About}/>
              <Route path='/login' component={Login} />
              {authenticated && <Route path='/create' component={Createpost} />}
              <Route path={`/post/:postId`} component={Fullpost}/>
            </Switch>
          </ContainerStyled>
        ) : <Loading />}            
      </div>
  );
}
