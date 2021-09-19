import React from "react";
const names = ["James", "Paul", "John", "George", "Ringo", "kurt"];

function Loop() {
  return (
    <div className="three">
      {names.map((name) => (
        <li>{name}</li>
      ))}
    </div>
  );
}

export default Loop;
