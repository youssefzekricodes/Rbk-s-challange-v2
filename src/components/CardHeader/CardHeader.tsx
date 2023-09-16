export default function CardHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="Card__header">
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
  );
}
