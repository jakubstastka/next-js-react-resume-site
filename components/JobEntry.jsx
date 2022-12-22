export default function JobEntry({ title, company, date, description }) {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in hover:duration-150">
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-lg font-semibold">{company}</div>
      <div className="italic">{date}</div>
      <div className="pt-3">{description}</div>
    </div>
  );
}
