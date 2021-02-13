import React from "react";
import "./../../styles/commons.scss";


const cls = "bgYellow fontBlack pad8 width100";

function Button({children}) {

  return (<div className="btnClass">
      <button className="{cls}">{children}</button>
  </div>);
}

export default Button;
