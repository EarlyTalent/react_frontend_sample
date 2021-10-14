import React from 'react';
import logo from './../levvel-logo.svg';
import { useQuery } from 'react-query';
import { BeatLoader } from 'react-spinners';
import { wait } from '@testing-library/dom';

// data query
const fetchPosts = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());
    const users = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
    const comments = await fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json());
  
    // join data on author and comments
    let data = [];
    for (let i = 0; i < users.length; i++) {
        let user = {
            ...users[i],
            'posts': posts.filter(post => post.userId === users[i].id)
        };
        for (let j = 0; j < user.posts.length; j++) {
            user.posts[j].comments = comments.filter(comment => comment.postId === user.posts[j].id)
        };
        data.push(user);
    }
    return data;
}

const Home = () => {
    const { data, status, error } = useQuery('blogPosts', fetchPosts);

    if (status === 'loading') {
        return (<>
            <BeatLoader />
            <h1>Loading your data...</h1>
        </>)
    } else if (status === 'error') {
        return (<>
            <h1>There was an error loading your data.</h1>
        </>)
    }

    return (<>
        <h3>Check out top posts from our authors!</h3>
        
    </>)
}

export default Home;