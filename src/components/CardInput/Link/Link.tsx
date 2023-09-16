import * as React from "react";
import { ReactComponent as LinkIcon } from "../../../assets/icons/link.svg";
export default function LinkInput({
  label,
  name,
  onChange,
  onBlur,
  value,
  error,
}: {
  label: string;
  value?: string;
  name?: string;
  onChange?: any;
  onBlur?: any;
  error?: string;
}) {
  // console.log(error, "error");
  return (
    <div className="LinkInput">
      <p className="LinkInput__label">{label}</p>
      <div className="LinkInput__input">
        <LinkIcon />
        <input
          type="url"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
}
