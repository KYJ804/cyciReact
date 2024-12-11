import React, { useState, useEffect } from 'react';
import { createPost, getPosts, updatePost, deletePost, recommendPost } from '../api/boardApi';

const Board = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', content: '', author: '' });

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await getPosts();
        setPosts(response.data);
    };

    const handleCreatePost = async () => {
        await createPost(newPost);
        fetchPosts();
    };

    const handleUpdatePost = async (id) => {
        const updatedPost = { id, title: 'Updated Title', content: 'Updated Content' };
        await updatePost(updatedPost);
        fetchPosts();
    };

    const handleDeletePost = async (id) => {
        await deletePost(id);
        fetchPosts();
    };

    const handleRecommendPost = async (id) => {
        await recommendPost(id);
        fetchPosts();
    };

    return (
        <div>
            <h1>게시판</h1>
            <div>
                <input
                    type="text"
                    placeholder="제목"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                />
                <textarea
                    placeholder="내용"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="작성자"
                    value={newPost.author}
                    onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                />
                <button onClick={handleCreatePost}>글쓰기</button>
            </div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p>작성자: {post.author}</p>
                        <button onClick={() => handleUpdatePost(post.id)}>수정</button>
                        <button onClick={() => handleDeletePost(post.id)}>삭제</button>
                        <button onClick={() => handleRecommendPost(post.id)}>추천</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Board;

