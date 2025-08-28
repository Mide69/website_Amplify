"use client";
import { useState, useEffect } from 'react';
import SocialLogin from './social-login';

const CommentSystem = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [user, setUser] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const savedComments = localStorage.getItem(`comments_${postId}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }

    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    const subscription = localStorage.getItem(`subscription_${user?.email}`);
    setIsSubscribed(!!subscription);
  }, [postId, user?.email]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!user || !newComment.trim()) return;

    const comment = {
      id: Date.now(),
      text: newComment,
      author: user.name,
      avatar: user.picture,
      timestamp: new Date().toISOString(),
      postId
    };

    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    localStorage.setItem(`comments_${postId}`, JSON.stringify(updatedComments));
    setNewComment('');
  };

  const handleSubscribe = () => {
    if (!user) return;
    
    const subscription = {
      email: user.email,
      name: user.name,
      subscribedAt: new Date().toISOString()
    };
    
    localStorage.setItem(`subscription_${user.email}`, JSON.stringify(subscription));
    setIsSubscribed(true);
  };

  return (
    <div className="comment-system">
      <div className="comment-header">
        <h3>Comments ({comments.length})</h3>
        {!user ? (
          <SocialLogin onLogin={setUser} />
        ) : (
          <div className="user-info">
            <img src={user.picture} alt={user.name} className="user-avatar" />
            <span>Welcome, {user.name}</span>
            <button onClick={() => {
              localStorage.removeItem('user');
              setUser(null);
            }} className="logout-btn">Logout</button>
          </div>
        )}
      </div>

      {user && !isSubscribed && (
        <div className="subscription-prompt">
          <p>Get notified of new comments and blog posts!</p>
          <button onClick={handleSubscribe} className="subscribe-btn">
            Subscribe to Notifications
          </button>
        </div>
      )}

      {user && (
        <form onSubmit={handleSubmitComment} className="comment-form">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment..."
            rows="3"
            required
          />
          <button type="submit" className="submit-comment-btn">
            Post Comment
          </button>
        </form>
      )}

      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <img src={comment.avatar} alt={comment.author} className="comment-avatar" />
            <div className="comment-content">
              <div className="comment-header">
                <strong>{comment.author}</strong>
                <span className="comment-time">
                  {new Date(comment.timestamp).toLocaleDateString()}
                </span>
              </div>
              <p>{comment.text}</p>
            </div>
          </div>
        ))}
        {comments.length === 0 && (
          <p className="no-comments">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSystem;