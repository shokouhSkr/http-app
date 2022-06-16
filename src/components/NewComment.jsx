import React, { useState } from "react";
import axios from "axios";

const NewComment = () => {
  const [comment, setComment] = useState({ name: "", email: "", content: "" });

  const changeHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postCommentHandler = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/comments", {
        ...comment,
        postId: 10,
      })
      .then((res) => console.log(res.data))
      .catch();
  };

  return (
    <div className="mb-4 flex flex-col items-center justify-center gap-y-3 rounded bg-blue-200 p-8">
      <p className="grid place-items-center text-xl text-cyan-800">Add new comment</p>
      <div>
        <label className="mr-2">name</label>
        <input onChange={changeHandler} name="name" type="text" />
      </div>
      <div>
        <label className="mr-2">email</label>
        <input onChange={changeHandler} name="email" type="email" />
      </div>
      <div>
        <label className="mr-2">body</label>
        <textarea onChange={changeHandler} name="content" rows="4" className="p-2"></textarea>
      </div>
      <button
        onClick={postCommentHandler}
        className="ml-10 rounded bg-teal-900 p-2 text-lg text-white active:bg-teal-700"
      >
        add new comment
      </button>
    </div>
  );
};

export default NewComment;
