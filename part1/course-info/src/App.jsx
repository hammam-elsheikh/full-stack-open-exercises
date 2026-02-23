import "./App.css";

function App() {
  const course = "Half Stack application development";

  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header title={course} />
      <Content
        part1={parts[0].name}
        part2={parts[1].name}
        part3={parts[2].name}
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      />
      <Total
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      />
    </div>
  );
}

export default App;

function Header({ course }) {
  return <h1>{course}</h1>;
}

function Content({ exercises1, exercises2, exercises3, part1, part2, part3 }) {
  return (
    <>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </>
  );
}

function Total({ exercises1, exercises2, exercises3 }) {
  return <p> Number of exercises {exercises1 + exercises2 + exercises3}</p>;
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
