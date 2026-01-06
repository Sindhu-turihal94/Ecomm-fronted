import React from "react";

function Card(props) {
  return (
    <>
      <div
        style={{
          border: "solid 5px red",
          width: "300px",
          height: "300px",
        }}
      >
        <img style={{ width: "300px" }} src={props.image} alt="" />
        <p>Moivename:{props.name}</p>
        <p>Rating:{props.rating}</p>
      </div>
    </>
  );
}

export default Card;
