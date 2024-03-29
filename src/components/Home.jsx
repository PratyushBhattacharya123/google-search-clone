import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGoogleSearch = () => {
    const searchQuery = document.getElementById("searchInputBox").value;
    if (searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  return (
    <div className="flex h-[100vh] flex-col">
      <HomeHeader />
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col items-center mt-40">
          <img src={Logo} className="w-[172px] md:w-[252px] mb-5 md:mb-7" />
          <SearchInput />
          <div className="flex gap-2 text-[#3c4043]/[0.85] mt-7">
            <button
              className="h-9 px-4 bg-[#f8f9fa] text-[13px] rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2 text-opacity-90"
              onClick={handleGoogleSearch}
            >
              Google Search
            </button>
            <button className="h-9 px-4 bg-[#f8f9fa] text-[13px] rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
