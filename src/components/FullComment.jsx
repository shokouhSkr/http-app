import React, { useEffect } from "react";

const FullComment = ({ commentId }) => {
  // console.log(commentId);

  return (
    <div className="mb-4 flex w-full flex-col items-center justify-center rounded bg-blue-200 p-8">
      <p>name</p>
      <p>email</p>
      <p>body</p>
    </div>
  );
};

export default FullComment;
