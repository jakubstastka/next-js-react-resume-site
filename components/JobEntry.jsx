export default function JobEntry({ title, company, date, description }) {
  return (
    <div className="bg-gray-800 text-gray-300 rounded-2xl p-5">
        <div className="text-3xl text-blue-400 font-bold">{title}</div>
        <div className="text-lg text-emerald-400 font-normal">{company}</div>
        <div className="italic text-sm">{date}</div>
        <div className="pt-3">{description}</div>
      </div>
  );
}
