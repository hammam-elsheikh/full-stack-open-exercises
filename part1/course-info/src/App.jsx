import "./App.css";

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header title={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
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
