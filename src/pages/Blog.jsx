import axios from "axios";
import { useEffect, useState } from "react";

export default function Blog() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setPost(res.data);
        console.info(res);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="w-[90%] mx-auto mt-10 grid grid-cols-4 gap-4">
      {post.map((post) => (
        <div key={post.id} className={`w-full shadow-md rounded-md`}>
          <img
            src={post.imgUrl}
            alt={post.judul}
            className="h-[150px] w-full rounded-t-md"
          />
          <div className="w-full p-2">
            <h1 className="text-center mb-2 font-semibold text-xl">
              {post.judul}
            </h1>
            <p className="text-justify">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
