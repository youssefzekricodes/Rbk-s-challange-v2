export default function TextInput({
  label,
  defaultValue,
  name,
}: {
  label: string;
  defaultValue: string;
  name?: string;
}) {
  return (
    <div className="TextInput">
      <p className="TextInput__label">{label}</p>
      <input type="text" defaultValue={defaultValue} name={name} />
    </div>
  );
}
