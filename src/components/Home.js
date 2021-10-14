import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

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

// top posts with number of comments as metric
const TopPosts = (props) => {
    const posts = props.posts;
    const topPosts = posts.sort(function(a, b) {
        if (a.comments.length < b.comments.length) return -1;
        if (a.comments.length > b.comments.length) return 1;
        return 0;
    }).slice(-3);

    return (
        <div className='App-div'>
            {topPosts.map((post, i) => {
                return <span key={post.id}>
                    <p className='Post-preview'>
                        <b>{post.title}:</b> {post.body}
                    </p>
                    {i === topPosts.length - 1 ? <></> : <hr className='Post-hr'></hr>}
                </span>
            })}
        </div>
    )
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
        {data.map(user => {
            return (<span key={user.id}>
                <Link className='App-link' to={{
                    pathname: `/users/${user.id}`,
                    state: { user: user }
                }}>
                    <p>{user.name}</p>
                </Link>
                <TopPosts posts={user.posts} />
            </span>)
        })}
    </>)
}

export default Home;