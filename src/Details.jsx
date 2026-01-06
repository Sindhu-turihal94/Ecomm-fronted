import React from "react";

function details(props) {
  return (
    <>
      <div style={{ border: "1px solid black", backgroundColor: "skyblue" }}>
        <h1>User details</h1>
        <p>name:{props.name}</p>
        <p>age:{props.age}</p>
        <p>location:{props.location}</p>
      </div>
    </>
  );
}

export default details;
