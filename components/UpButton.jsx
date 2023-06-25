import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function UpButton() {
  return (
    <div className="pb-5">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div className="flex justify-center">
          <Link href="/">
            <div className="rounded-lg p-6 cursor-pointer border-blue-500 border-2">
              <HiOutlineChevronDoubleUp
                className="m-auto text-emerald-400"
                size={20}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
