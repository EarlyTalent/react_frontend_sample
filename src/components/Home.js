import React from 'react';
import logo from './../levvel-logo.svg';
import { useQuery } from 'react-query';
import { BeatLoader } from 'react-spinners';
import { wait } from '@testing-library/dom';

// data query
const fetchPosts = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());
    const users = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
  
    // merge objects to get author info
    let data = [];
    for (let i = 0; i < posts.length; i++) {
        const userMatch = users.find(user => user.id === posts[i].userId);
        const user = Object.keys(userMatch).reduce((acc, key) => {
            if (key !== 'id') acc[key] = userMatch[key];
            return acc;
        }, {});
        data.push({
            ...posts[i],
            ...user
        });
    }
    return data;
}

const Home = () => {
    const { data, status, error } = useQuery('blogPosts', fetchPosts);
    console.log(data);

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

    return (
        <></>
    )
}

export default Home;