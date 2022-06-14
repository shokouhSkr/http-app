import React from "react";

const Comment = ({ name, email, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="mb-4 flex w-auto flex-col items-center justify-center rounded bg-blue-200 p-8"
    >
      <span>name: {name}</span>
      <span>email: {email}</span>
    </div>
  );
};

export default Comment;
