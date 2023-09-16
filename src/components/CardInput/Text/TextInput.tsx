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
  return (
    <div className="TextInput">
      <p className="TextInput__label">{label}</p>
      <input
        type="text"
        className={`${activeInput ? "input--active" : ""}`}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={() => {
          setActiveInput(false);
          onBlur;
        }}
        onFocus={() => setActiveInput(true)}
      />
      <p>{error}</p>
    </div>
  );
}
