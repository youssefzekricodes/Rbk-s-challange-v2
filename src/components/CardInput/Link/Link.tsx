import { ReactComponent as LinkIcon } from "../../../assets/icons/link.svg";
export default function LinkInput({
  label,
  defaultValue,
  name,
}: {
  label: string;
  defaultValue: string;
  name?: string;
}) {
  return (
    <div className="LinkInput">
      <p className="LinkInput__label">{label}</p>
      <div className="LinkInput__input">
        <LinkIcon />
        <input type="url" defaultValue={defaultValue} name={name} />
      </div>
    </div>
  );
}
