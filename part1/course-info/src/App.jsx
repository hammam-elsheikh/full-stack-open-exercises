import "./App.css";
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

  return <Course course={course} />;
};

export default App;

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </>
  );
};

function Header({ name }) {
  return <h1>{name}</h1>;
}

function Content({ parts }) {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
    </>
  );
}

function Part({ part, exercises }) {
  return (
    <>
      <p>
        {part} {exercises}
      </p>
    </>
  );
}

// function Total({ exercises1, exercises2, exercises3 }) {
//   return <p> Number of exercises {exercises1 + exercises2 + exercises3}</p>;
// }
