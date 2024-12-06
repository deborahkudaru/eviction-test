import axios from "axios";
import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div>
      <h1 className="font-bold text-3xl">Posts</h1>
      <div>
        {posts.map(post => (
            <div key={post.id}>
                <p>{post.title}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
