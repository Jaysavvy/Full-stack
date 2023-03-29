import React from "react";

const Notes = ({ note }) => {
  console.log(note);
  return <div>{note.content}</div>;
};

export default Notes;
