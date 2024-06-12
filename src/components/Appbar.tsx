import { useRouter } from "next/router";
import { SearchBar } from "./SearchBar";
import { FaBars } from "react-icons/fa";

export const Appbar = ({ onMenuClick }: any) => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center p-3 text-white">
      <div className="flex items-center space-x-2 cursor-pointer">
        <FaBars size={25} className="md:hidden" onClick={onMenuClick} />
        <img
          className="w-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_(2017).svg/2560px-YouTube_full-color_icon_(2017).svg.png"
          alt="YouTube icon"
          onClick={() => router.push("/")}
        />
        <div className="text-xl font-bold">YouTube</div>
      </div>
      <div className="flex-grow flex justify-center mt-2 md:mt-0">
        <SearchBar />
      </div>
      <div className="flex items-center border p-2 rounded-full mt-2 sm:mt-0 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#eeeeee"
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          className=""
        >
          <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
        <button className="pl-3">Sign in</button>
      </div>
    </div>
  );
};
