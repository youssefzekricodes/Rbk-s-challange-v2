import React, { useState } from "react";
import { ReactComponent as DownArrow } from "../../../assets/icons/downarrow.svg";
import { ReactComponent as Github } from "../../../assets/icons/github.svg";

function SelectOption({
  Icon,
  name,
  action,
}: {
  Icon: any;
  name: string;
  action: any;
}) {
  return (
    <div className="Select__Options__option" onClick={() => action("GitHub")}>

      <p>{name}</p>
    </div>
  );
}
export default function Select() {
  const [showSelect, setShowSelect] = useState(true);
  const [selectedOption, setSelectedOption] = useState("GitHub");
  return (
    <div className="Select">
      <div className="Select__selectedOption">
        <p>hello</p> <DownArrow onClick={() => setShowSelect(!showSelect)} />
      </div>
      {showSelect ? (
        <div className="Select__Options">
          <SelectOption
            Icon={<Github />}
            name={"Github"}
            action={setSelectedOption}
          />
        </div>
      ) : null}
    </div>
  );
}
