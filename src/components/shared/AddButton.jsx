import { ArrowRight } from "lucide-react";

export default function AddButton({children}) {
  return (
    <button
      className="cursor-pointer bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
      type="button"
    >
      <div className="bg-indigo-500 rounded-xl h-12 w-1/4 flex items-center justify-center absolute right-1 top-1 group-hover:w-46 z-10 duration-500">
        <ArrowRight className="text-white" />
      </div>
      <p className="-translate-x-2">{children}</p>
    </button>
  );
}
