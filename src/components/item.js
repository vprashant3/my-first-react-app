import React from "react";
import "./item.scss";

function item(props) {
  return (
    <div className="item-style">
      {props.editable ? (
        <input
          type="text"
          defaultValue={props.item.name}
          onKeyPress = {(e) => props.onKeyPress(e, props.index)}
        ></input>
      ) : (
        <h3 onDoubleClick={props.onDoubleClick}> Name : {props.item.name}</h3>
      )}

      <h3>Calories : {props.item.calories}</h3>
      <button name={props.item.name} onClick={props.onClick}>
        Remove item
      </button>
    </div>
  );
}

export default item;
