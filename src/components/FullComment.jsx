import React, { useEffect, useState } from "react";
import axios from "axios";

const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  let commentDetail = <p>Please select a comment</p>;

  // console.log(commentId);
  if (commentId) commentDetail = <p className="text-2xl text-red-600">Loading...</p>;

  if (comment) {
    commentDetail = (
      <div className="mb-4 flex w-full flex-col items-center justify-center rounded bg-blue-200 p-8">
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;
