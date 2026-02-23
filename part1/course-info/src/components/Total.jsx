import { useState } from "react";

export default function Total({ course }) {
  console.log("course", course);
  const [sum] = useState(
    course.parts.reduce((prev, curr) => (prev += curr.exercises), 0),
  );

  return (
    <p>
      <strong> Number of exercises {sum}</strong>
    </p>
  );
}
