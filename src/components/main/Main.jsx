import React from 'react';
import {Post} from "./../post/Post";

export const Main = ({posts}) => {  
    let el = posts ? posts.map(el => {
      const brString = el.body.replace(/<\s*\/?br>/ig, "\r\n");
      const h1 = brString.split(/\r?\n/g)[brString.indexOf('# ')];
      const body = brString.replace(h1, '');
      return <Post key={el.postId} {...el} body={body} h1={h1}/>
    }) : <p>LOADING...</p>

    return el;
}
