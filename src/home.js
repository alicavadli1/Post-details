import './App.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => {
            return res.json()
        }).then(json => {
            setPost(json);
        })
    }, []);

    return (
        <div className="App">
            {post && <>
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
                <Link to={`/post/${post.userId}`}>UserId: {post.userId}</Link>
            </>} 
        </div>
    );
}

export default Home;
