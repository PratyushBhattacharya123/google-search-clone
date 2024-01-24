import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const searchQueryHandler = (event) => {
    if (searchQuery.length > 0 && event.key === "Enter") {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  return (
    <div
      id="searchBox"
      className="h-[44px] w-full sm:w-[570px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c focus-within:shadow-c focus-within:border-0"
    >
      <AiOutlineSearch size={18} color="#9aa0a6" className="shrink-0" />
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        autoFocus
        className="grow outline-0 text-black/[0.87]"
      />
      <div className="flex items-center gap-3">
        {!!searchQuery && (
          <div className="flex items-center justify-center gap-[10px]">
            <IoMdClose
              size={22}
              color="#70757a"
              className="cursor-pointer translate-x-[-7px] xss:translate-x-0"
              onClick={() => setSearchQuery("")}
            />
            {!isSmallScreen ? (
              <div className="h-[28px] border border-black/[0.10]"></div>
            ) : null}
          </div>
        )}
        {!!searchQuery && !!isSmallScreen ? null : (
          <>
            <img
              src={MicIcon}
              className="h-[22px] w-[22px] cursor-pointer hidden xss:block"
            />
            <img
              src={ImageIcon}
              className="h-[21px] w-[21px] cursor-pointer hidden xss:block"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
