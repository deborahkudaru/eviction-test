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
      <div className="border-r flex flex-col gap-10">
        {posts.map(post => (
            <div key={post.id}  className="border shadow-lg rounded-lg font-3xl p-6 ">
                <p className="font-semibold text-xl">{post.title}</p>
                <p>{post.body}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
