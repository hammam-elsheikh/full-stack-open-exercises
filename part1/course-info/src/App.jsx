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
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return (
    <>
      <Course course={course} />
      <Total parts={course.parts} />
    </>
  );
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

function Total({ parts }) {
  let sum = 0;
  parts.forEach((part) => {
    sum += part.exercises;
  });

  return (
    <p>
      {" "}
      <strong> Number of exercises {sum}</strong>
    </p>
  );
}
