import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <i class={`${props.icon} icon`}></i>
        <h1>{props.txt}</h1>
      </div>
    </>
  );
};

export default Card;
