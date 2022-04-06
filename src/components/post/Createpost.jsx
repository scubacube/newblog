import {React, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createNewPost} from "../../redux/actions/postsActions";
import styled from 'styled-components';
import {useHistory} from "react-router-dom";

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

    const createPost = () => dispatch(createNewPost(post, history))

    if(loading) {
      return <p>LOADING...</p>
    }

    return <>
            <TextareaStyled onChange={(e) => textArea(e)} name="" id="" cols="30" rows="10"></TextareaStyled>
            <button onClick={createPost}>Post</button>
        </>
}



