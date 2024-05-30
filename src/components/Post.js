import React, { useState, useEffect } from "react";
import "../styles.css";

export default function Post() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        const testObject = {
            title: "Title",
            content: "Test Content",
            author: "Vexer69",
            createdAt: new Date().toISOString(),
        };
        setPost([testObject, testObject, testObject, testObject, testObject, testObject]);
    }, []);
    return (
        <div className="posts-container">
            {post.map((post) => (
                <div className="post">
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-content">{post.content}</p>
                    <div className="post-creator">
                        <span className="post-author">Created by {post.author}</span>
                        <span className="post-createdAt">Time: {post.createdAt}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
