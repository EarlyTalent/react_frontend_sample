import './App.css';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

export default function Home() {
    const [data, setData] = useState({})            // {userid: {title: string, body: string}}
    const [users, setUsers] = useState({})          // {userid: name}
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json()).catch(err => alert(err))
        .then(json => {
            var userPosts = {}
            for (let post of json) {
                if (!(post.userId in userPosts)) {
                    userPosts[post.userId] = {"title": post.title, "body": post.body}
                }
            }
            setData(userPosts)
        }).catch(err => alert(err))

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json()).catch(err => alert(err))
        .then(json => {
            var userIDs = {}
            for (let data of json) {
                userIDs[data.id] = data.name
            }
            setUsers(userIDs)
        }).catch(err => alert(err))

        return () => {
            setData({})
            setUsers({})
        }
    }, [setData, setUsers])
    return (
        <div>
            <div className="header">
                <h1>Levvel's Food Blog</h1>
            </div>
            <div className="body">
                <h4>Check out Top Posts from our Authors!</h4>
                {Object.keys(data).map((user) => (
                    <div className="person" key={user}>
                        <Link to={`/${user}`}>{users[user]}</Link>
                        <div className="recipe-box" key={user}>
                            <div className="recipe">
                                <p><strong>{data[user].title}</strong></p>
                                <p>{data[user].body}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}