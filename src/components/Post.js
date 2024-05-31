import React from "react";
import "../css/Post.css";

export default function Post({ posts }) {
    return (
        <div className="container">
            <h2 className="container-title">News</h2>
            {posts.map((post) => (
                <div className="post">
                    <div className="post-header">
                        <h3 className="post-title">{post.title}</h3>
                        <div className="post-creator">
                            <span className="post-author">Created by {post.author}</span>
                            <span className="post-createdAt">Time: {post.createdAt}</span>
                        </div>
                    </div>
                    <p className="post-content">{post.content}</p>
                </div>
            ))}
        </div>
    );
}
