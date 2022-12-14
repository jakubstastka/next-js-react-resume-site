import Link from "next/link";

export default function Project({ name, description, github, link }) {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in hover:duration-150">
      <div className="text-2xl font-semibold">{name}</div>
      {link && (
        <div>
          <Link className="italic font-normal" href={link}>
            {link}
          </Link>
        </div>
      )}
      {github && (
        <div>
          <Link className="italic font-normal" href={github}>
            {github}
          </Link>
        </div>
      )}
      <div className="pt-3">{description}</div>
    </div>
  );
}
