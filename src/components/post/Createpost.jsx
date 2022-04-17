import {React, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createNewPost} from "../../redux/actions/postsActions";
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import Button from '@mui/material/Button';

const TextareaStyled = styled.textarea`
  width: 100%;
  background-color: #ddd;
  font-size: 18px;
`;
export const Createpost = () => {
    const history = useHistory();
    const dispatch = useDispatch();

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
   

    return (
      <>
        <TextareaStyled onChange={(e) => textArea(e)} name="" id="" cols="30" rows="10"></TextareaStyled>
        <Button variant="contained" onClick={createPost}>Post</Button>
      </>
    )
}



