import React, { useState, userEffect } from "react";
import { Link } from "react-router-dom";

const initList = [1, 2, 3, 4, 5, 6];
function HomePage() {
  const [list, setList] = useState(initList);
  const [draggedItem, setDraggedItem] = useState(null);

  function onDragStartHandle(e, idx) {
    setDraggedItem(list[idx]);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode,20,20);
  }

  function onDragOverHandle(idx) {
    const draggedOverItem = list[idx];
    if(draggedOverItem === draggedItem) {
      return;
    }
    const items  = list.filter(item => item !== draggedItem);

    items.splice(idx, 0, draggedItem);

    setList(items);

  }
  return (
    <div>
      <h1>Draggable List Home</h1>
      <h3>
        <Link to="/" className="title">
          Go To Home
        </Link>
      </h3>
      <h3>Drag and Drop List</h3>
      <ul>
        {list.map((item, idx) => {
          return <li key={idx} className="item-style"><div draggable onDragOver={() => onDragOverHandle(idx)} onDragStart={(e) => onDragStartHandle(e, idx)}>{item}</div></li>;
        })}
      </ul>
      <div></div>
    </div>
  );
}

export default HomePage;
