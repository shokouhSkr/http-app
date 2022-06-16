import React, { useEffect, useState } from "react";
import axios from "axios";

const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  let commentDetail = <p>Please select a comment</p>;

  // console.log(commentId);
  if (commentId) commentDetail = <p className="text-2xl text-red-600">Loading...</p>;

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:3001/comments${commentId}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  if (comment) {
    commentDetail = (
      <div className="mb-4 flex w-full flex-col items-center justify-center rounded bg-blue-200 p-8">
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button
          onClick={deleteHandler}
          className="mt-3 rounded border border-red-300 bg-white px-3 py-1 text-red-300 active:bg-red-100"
        >
          Delete
        </button>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;
