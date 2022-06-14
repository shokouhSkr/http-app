import React from "react";

const NewComment = () => {
  return (
    <div className="mb-4 flex flex-col items-center justify-center gap-y-3 rounded bg-blue-200 p-8">
      <div>
        <label className="mr-2">name</label>
        <input type="text" />
      </div>
      <div>
        <label className="mr-2">email</label>
        <input type="email" />
      </div>
      <div>
        <label className="mr-2">body</label>
        <input type="textarea" />
      </div>
    </div>
  );
};

export default NewComment;
