import * as React from "react";
import { useState } from "react";

export default function TextInput({
  label,
  value,
  name,
  onChange,
  onBlur,
  error,
}: {
  label: string;
  value: string;
  name?: string;
  onChange: any;
  onBlur: any;
  error: any | undefined;
}) {
  const [activeInput, setActiveInput] = useState(false);
  console.log(error, "error");
  return (
    <div className={`TextInput ${error ? "input--error" : ""}`}>
      <p className="TextInput__label">{label}</p>
      <div className="TextInput__inputBlock">
        <input
          type="text"
          className={`${activeInput ? "input--active" : ""}`}
          value={value}
          name={name}
          onChange={onChange}
          onBlur={e => {
            setActiveInput(false);
            onBlur(e);
          }}
          onFocus={() => setActiveInput(true)}
        />
        <p className="ErrorMessage">{error}</p>
      </div>
    </div>
  );
}
