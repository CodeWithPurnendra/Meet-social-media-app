import { useState } from "react";
import "./Posts.css";

function Counter({icon}){
    const [count,setCount] = useState(0);
    return(
        <button onClick={()=>{setCount(count+1)}}>
            {icon} {count}
        </button>
    )
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
                 {/* Image here */}
                <h2>{post.realName}</h2>
                 <Counter icon= "👍"/>
                 <Counter icon= "👎"/>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Posts;
