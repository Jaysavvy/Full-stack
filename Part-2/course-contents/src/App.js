import React from "react";
import axios from "axios";
import { useState } from "react";

// const Note = ({ note }) => {
//   return <li>{note.content}</li>;
// };

const Content = () => {};

const Course = ({ courses }) => {
  console.log(courses);

  // const total = props.course.parts.exercises.reduce(
  //   (sum, part) => sum + part.exercises,
  //   0
  // );

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          {course.parts.name} {course.parts.exercises}
        </div>
      ))}
      <h3>Total: </h3>
      {courses.map((course) => (
        <div key={course.id}>{course.name}</div>
      ))}
    </div>
  );
};

const App = () => {
  // const courses = [
  //   {
  //     name: "Half Stack application development",
  //     id: 1,
  //     parts: [
  //       {
  //         name: "Fundamentals of React",
  //         exercises: 10,
  //         id: 1,
  //       },
  //       {
  //         name: "Using props to pass data",
  //         exercises: 7,
  //         id: 2,
  //       },
  //       {
  //         name: "State of a component",
  //         exercises: 14,
  //         id: 3,
  //       },
  //       {
  //         name: "Redux",
  //         exercises: 11,
  //         id: 4,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Node.js",
  //     id: 2,
  //     parts: [
  //       {
  //         name: "Routing",
  //         exercises: 3,
  //         id: 1,
  //       },
  //       {
  //         name: "Middlewares",
  //         exercises: 7,
  //         id: 2,
  //       },
  //     ],
  //   },
  // ];

  return (
    <>
      <Course courses={courses} />
    </>
  );
};

export default App;
