import Link from "next/link";

export default function Project({ name, description, github, link }) {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-emerald-400 rounded-2xl p-[1px]">
      <div className="bg-gray-900 rounded-2xl p-3 h-full w-full text-gray-300">
        <div className="text-2xl text-emerald-400 font-semibold">{name}</div>
        {link && (
          <div>
            <Link className="italic underline font-normal" href={link}>
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
    </div>
  );
}
