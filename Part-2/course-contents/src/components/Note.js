import React from "react";

import App from "../App";

const Note = ({ note }) => {
  return <li>{note.content}</li>;
};

export default Note;
