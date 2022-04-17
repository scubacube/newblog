import React from 'react';
import {Post} from "./../post/Post";
import {Loading} from './../main/Loading';

export const Main = ({posts, postCount}) => { 
    let el = posts.length ? posts.map(el => {
      const brString = el.body.replace(/<\s*\/?br>/ig, "\r\n");
      const h1 = brString.split(/\r?\n/g)[brString.indexOf('# ')];
      const body = brString.replace(h1, '');
      return <Post key={el.postId} {...el} body={body} h1={h1}/>
    }) : <Loading />
    return el;
}
