export default function Button({ handleClick, width, children }) {
  return (
    <button
      onClick={() => {
        if (typeof handleClick == "function") {
          handleClick();
        }
      }}
      className={`cursor-pointer text-xl ${width ? width : "w-32"} h-12 rounded bg-indigo-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000`}
    >
      <span
        className={`absolute bg-indigo-600 ${width ? width : "w-36"} h-36 rounded-full group-hover:scale-110 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all`}
      ></span>
      <span
        className={`absolute bg-indigo-800 ${width ? width : "w-36"} h-36 -left-2 -top-10 rounded-full group-hover:scale-110 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all`}
      ></span>
      {children}
    </button>
  );
}
