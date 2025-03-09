import React, { useEffect, useState } from 'react';
import Blog from "../Blog/Blog";

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
  return (
    <>
      {blogs.map(blog => <Blog blog={blog} key={blog.id}/>)}
    </>
  );
}
