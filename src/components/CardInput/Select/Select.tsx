import React from "react";
import { ReactComponent as DownArrow } from "../../../assets/icons/downarrow.svg";
export default function Select() {
  return (
    <div className="Select">
      <div className="Select__selectedOption">
         <p>hello</p> <DownArrow />
      </div>
      <div className="Select__Options">
        <div className="Select__Options__option">hello</div>
      </div>
    </div>
  );
}
