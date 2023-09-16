import * as React from "react";
import { useState } from "react";
import { ReactComponent as DownArrow } from "../../../assets/icons/downarrow.svg";
import { ReactComponent as Github } from "../../../assets/icons/github.svg";
import { ReactComponent as Youtube } from "../../../assets/icons/youtube.svg";
import { ReactComponent as Linkdn } from "../../../assets/icons/linkdn.svg";
function SelectOption({
  Icon,
  name,
  setSelectedOption,
  setShowSelect,
}: {
  Icon: any;
  name: string;
  setSelectedOption: any;
  setShowSelect: any;
}) {
  return (
    <div
      className="Select__Options__option"
      onClick={() => {
        setSelectedOption(name);
        setShowSelect(false);
      }}
    >
      {Icon}
      <p>{name}</p>
    </div>
  );
}
export default function Select({
  selectedOption,
  setSelectedOption,
}: {
  selectedOption: string;
  setSelectedOption: any;
}) {
  const Options = [
    { icon: <Github />, name: "GitHub" },
    { icon: <Youtube />, name: "Youtube" },
    { icon: <Linkdn />, name: "LinkedIn" },
  ];
  const [showSelect, setShowSelect] = useState(false);

  return (
    <div className="Select">
      <p className="Select__label">Platform</p>
      <div
        className="Select__selectedOption"
        onClick={() => setShowSelect(!showSelect)}
      >
        <div className="Select__selectedOption__content">
          {Options.filter((ele) => ele.name === selectedOption)[0].icon}
          <p>{selectedOption}</p>
        </div>
        <DownArrow className="Arrow" />
      </div>
      {showSelect ? (
        <div className="Select__Options">
          {Options.map((option) => (
            <SelectOption
              Icon={option.icon}
              name={option.name}
              setSelectedOption={setSelectedOption}
              setShowSelect={setShowSelect}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
