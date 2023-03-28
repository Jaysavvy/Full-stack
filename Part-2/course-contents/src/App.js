import React from "react";

// const Note = ({ note }) => {
//   return <li>{note.content}</li>;
// };

const Course = (props) => {
  console.log(props);

  // const total = props.course.parts.exercises.reduce(
  //   (sum, part) => sum + part.exercises,
  //   0
  // );

  return (
    <div>
      {props.course.parts.map((part) => (
        <div key={part.id}>
          {part.name} {part.exercises}
        </div>
      ))}
      <h3>Total: </h3>
    </div>
  );
};

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

  return (
    <>
      <Course course={course} />
    </>
  );
};

export default App;
