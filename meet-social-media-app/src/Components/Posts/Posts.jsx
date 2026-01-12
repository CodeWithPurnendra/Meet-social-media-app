import { useState } from "react";
import { FiHeart, FiMessageCircle } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import "./Posts.css";

function IsLike() {
  const [like, setLike] = useState(false);

  return (
    <button
      className={`icon-btn ${like ? "liked" : ""}`}
      onClick={() => setLike(!like)}
      aria-label="Like post"
    >
      {like ? <AiFillHeart /> : <FiHeart />}
    </button>
  );
}

function Posts({ posts }) {
  return (
    <div className="post-container">
      {posts.length === 0 ? (
        <p className="no-posts">No posts available</p>
      ) : (
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                {/* POST HEADER */}
                <div className="post-header">
                  <div className="post-user">
                    <img
                      src={post.storyImage}
                      alt={post.realName}
                      className="post-avatar"
                    />
                    <h2>{post.realName}</h2>
                  </div>

                  <span className="post-menu">•••</span>
                </div>

                <img src={post.image} alt={post.title} className="post-image" />
                <div className="post-actions">
                  <IsLike />
                  <button className="icon-btn">
                    <FiMessageCircle />
                  </button>
                </div>
                <p className="post-description">{post.description}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Posts;
