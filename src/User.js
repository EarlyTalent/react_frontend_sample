import './App.css';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function User() {
    const [posts, setPosts] = useState([])  // [{title: string, body: string, "postid": string}]
    const [name, setName] = useState("")
    const {id} = useParams();
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json()).catch(err => alert(err))
        .then(json => {
            let posts = json.filter(data => data.userId === Number(id)).map(data => {return {"title": data.title, "body": data.body, "postid": data.id}})
            setPosts(posts)
        }).catch(err => alert(err))

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json()).catch(err => alert(err))
        .then(json => {
            let name = json.filter(data => data.id === Number(id)).map(data => data.name)[0]
            setName(name)
        }).catch(err => alert(err))

        return () => {
            setPosts([])
            setName("")
        }
    }, [id, setPosts, setName])
    return (
        <div>
            <div className="header">
                <h1>Levvel's Food Blog</h1>
            </div>
            <div className="body">
                <h3>{name}</h3>
                <h5>Check out {name.split(" ")[0]}'s Recipes!</h5>
                {posts.map((post) => (
                    <div className="person">
                        <div className="recipe-box" key={post.postid}>
                            <div className="recipe">
                                <p><strong>{post.title}</strong></p>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}