// import React from 'react'
// import {Post} from "../post/Post";
// import {useDispatch, useSelector} from "react-redux";

// export default function Fullpost(props) {
// debugger
//   const postsItems = useSelector(({posts}) => {
//     return posts.posts
//   });
//   const getPostById = (item) => {
//     // debugger
//     if(item.postId === props.match.params.postId) {
//       debugger
//       const brString = item.body.replace(/<\s*\/?br>/ig, "\r\n");
//       const h1 = brString.split(/\r?\n/g)[brString.indexOf('# ')];
//       const body = brString.replace(h1, '');
//       return <Post key={item.postId} {...item} body={body} h1={h1}/>
//     }
//   }

//   const currentPost = postsItems.filter(getPostById)
//   console.log(currentPost)
//   return currentPost
// }

import React from 'react'
import {Post} from "../post/Post";
import {useDispatch, useSelector} from "react-redux";

export default function Fullpost(props) {
    const postsItems = useSelector(({posts}) => {
    return posts.posts
  });
  const getPostById = (item) => {
    if(item.postId === props.match.params.postId) {
      return item;
    }
  }

  const currentPost = postsItems
  .filter(getPostById)
  .map(el => {
    const brString = el.body.replace(/<\s*\/?br>/ig, "\r\n");
    const h1 = brString.split(/\r?\n/g)[brString.indexOf('# ')];
    const body = brString.replace(h1, '');
    return <Post key={el.postId} {...el} body={body} h1={h1}/>
  })
  console.log(currentPost)
  return currentPost
}