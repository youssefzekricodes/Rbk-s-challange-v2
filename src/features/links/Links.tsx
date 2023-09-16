import CardHeader from "../../components/CardHeader/CardHeader";
import LinkInput from "../../components/CardInput/Link/Link";
import Select from "../../components/CardInput/Select/Select";

export default function Links() {
  return (
    <div className="Card__content Links">
      <CardHeader
        title={"Customize your links"}
        subtitle={
          "Add , edit and remove links below and then share all your profiles with the world!"
        }
      />
      <LinkInput label={"link"} defaultValue={""} />
      <Select />
    </div>
  );
}
