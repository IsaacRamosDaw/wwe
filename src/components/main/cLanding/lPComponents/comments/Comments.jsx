import React from 'react'
import { useState } from 'react';
import './comments.css'

function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentCommentIndex, setCurrentCommentIndex] = useState(null);

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim()) {
      const newComment = {
        text: comment,
        date: new Date().toLocaleString()
      };
      setComments([newComment, ...comments]);
      setComment('');
    }
  };

  const handleEditComment = (index) => {
    setIsEditing(true);
    setCurrentCommentIndex(index);
    setComment(comments[index].text);
  };

  const handleUpdateComment = () => {
    if (comment.trim() && currentCommentIndex !== null) {
      const updatedComments = comments.map((c, index) =>
        index === currentCommentIndex ? { ...c, text: comment, date: new Date().toLocaleString() } : c
      );
      setComments(updatedComments);
      setComment('');
      setIsEditing(false);
      setCurrentCommentIndex(null);
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <>
      <section className='comments'>
        <h1>Comment about what can be improves on this website</h1>
        <div>
            <input placeholder="Write your comment" value={comment} onChange={handleInputChange} />
            <button onClick={isEditing ? handleUpdateComment : handleAddComment}>
            {isEditing ? 'Update' : 'Confirm'}
          </button>
        </div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <div>
              <p>
              {comment.text}
              <small>{comment.date}</small>
              </p>   
            </div>
            <div>
                <button onClick={() => handleEditComment(index)}>Edit</button>
                <button onClick={() => handleDeleteComment(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
    </>
  )
};

export default Comments