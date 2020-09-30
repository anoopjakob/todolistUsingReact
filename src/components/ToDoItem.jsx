import React, { useState } from "react";

function ToDoItem(props) {
  const [lineThrough, setLineThrough] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setLineThrough(!lineThrough);
  }
  function handleCheckBoxClicked() {
    props.onChecked(props.id);
  }

  return (
    <div className="row">
      <div className="col-sm-3 padding-top">
        {/* <input type="checkBox" onClick={handleCheckBoxClicked}></input> */}

        <i
          onMouseOver={() => {
            setMouseOver(true);
            // console.log(mouseOver);
          }}
          onMouseOut={() => {
            setMouseOver(false);
          }}
          style={mouseOver ? { color: "red" } : null}
          onClick={handleCheckBoxClicked}
          className="fa fa-trash-alt delete-image"
        ></i>
      </div>
      <div className="col-sm-9">
        <li
          style={lineThrough ? { textDecoration: "line-through" } : null}
          onClick={handleClick}
        >
          {props.text}
        </li>
      </div>
    </div>
  );
}
export default ToDoItem;
