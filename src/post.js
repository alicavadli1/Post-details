import './App.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Post() {
    const { id } = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
            method: 'GET',
            headers: {
                "Accept": "application/json; charset=UTF-8"
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            setPost(data)
        })
    }, [id])

    return (
        <div className="App">
            { post && <>
                <p>id: {post.userId}</p>
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
            </>}
        </div>
    );
}

export default Post;
