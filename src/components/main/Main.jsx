import React from 'react';
import {Post} from "./../post/Post";
import Pagination from '@mui/material/Pagination';
import {useSelector} from "react-redux";
import usePagination from '../../helpers/Pagination';
import styled from 'styled-components';

const PaginationStyled = styled(Pagination)(({ theme }) => ({
    '.MuiButtonBase-root': {
      color: '#ddd',
      fontSize:  '16px'
  },
  '.postsContainer': {
    marginBottom: '20px'
  }
}));
const PostsContainerStyled = styled('div')(({ theme }) => ({
  marginBottom: '40px'
}));

export const Main = () => {
  const postsItems = useSelector(({posts}) => {
    return posts.posts
  });
  const postCount = useSelector(({posts}) => {
    return posts.postCount
  });

  const [page, setPage] = React.useState(1);
  const postsPerPage = 5;
  const pagesCount = Math.ceil(postCount / postsPerPage);
  const _DATA = usePagination(postsItems, postsPerPage);

  const handleChangePage = (event, p) => {
    setPage(p)
    _DATA.jump(p);
  };

    let elements = postsItems.length ? _DATA.currentData().map(el => {
      const brString = el.body.replace(/<\s*\/?br>/ig, "\r\n");
      const h1 = brString.split(/\r?\n/g)[brString.indexOf('# ')];
      const body = brString.replace(h1, '');
      return <Post key={el.postId} {...el} body={body} h1={h1}/>
    }) : null
    return (
      <>
        <PostsContainerStyled>
          {elements}
        </PostsContainerStyled>
        <PaginationStyled count={pagesCount} page={page} onChange={handleChangePage}/>
      </>
    )
}
