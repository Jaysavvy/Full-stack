import React from "react";

// const Note = ({ note }) => {
//   return <li>{note.content}</li>;
// };

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  console.log(course);

  return (
    <>
      {course.map((courses) => {
                return <div key={courses.id}>
                    <h1>{courses.name}</h1>
                    <img src={courses.image} alt="recipe image" />
                    {courses.parts.map((type, index) => {
                        return <span key={index}>{exercises}</span>
                    })}
      
    </>
  )}

export default App;
