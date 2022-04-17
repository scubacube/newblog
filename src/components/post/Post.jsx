import React from 'react';
import { NavLink} from "react-router-dom";
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const PostHeader = styled.h2`
  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const Post = ({h1, body, createdAt, userHandle, postId}) => {
    return <>
        <div className="post">
          <PostHeader><NavLink to={`/post/${postId}`} ><ReactMarkdown children={h1}/></NavLink></PostHeader>
          <ReactMarkdown children={body} />      
          <div>
          date: {createdAt}
          </div>
          <div>
          posted by: {userHandle}
          </div>
        </div>
    </>
}