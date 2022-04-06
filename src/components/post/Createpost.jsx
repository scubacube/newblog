import {React, useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createNewPost} from "../../redux/actions/postsActions";
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import {Loading} from './../main/Loading';

const TextareaStyled = styled.textarea`
  width: 100%;
  background-color: #ddd;
`;
export const Createpost = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const loading = useSelector(({user}) => {
      return user.loading
    });

    const [post, setPost] = useState();

    const textArea = (event) => {
      setPost({
        body: event.target.value
      })
    }

    const createPost = (e) => {
      e.preventDefault();
      dispatch(createNewPost(post, history))
    }
   

    return loading 
    ? <Loading /> 
    : <>
        <TextareaStyled onChange={(e) => textArea(e)} name="" id="" cols="30" rows="10"></TextareaStyled>
        <button onClick={createPost}>Post</button>
    </>
}



