import React from "react";
import "../styles.css";

export default function Post({posts}) {
    return (
        <div className="posts-container">
            {posts.map((post) => (
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
