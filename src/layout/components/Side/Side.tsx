import React from "react";
import frame from "../../../assets/images/phoneframe.jpg";
export default function Side() {
  return (
    <div className="Side">
      <div
        className="Side__PhoneFrame"
        style={{ backgroundImage: `url(${frame})` }}></div>
    </div>
  );
}
