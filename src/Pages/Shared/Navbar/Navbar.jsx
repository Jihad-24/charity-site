import "@fortawesome/fontawesome-free/css/all.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      smoothScroll(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="sticky top-0 bg-white flex lg:flex-row justify-between lg:items-center py-[20px] px-[35px] flex-col gap-5 lg:gap-0">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center font-bold text-xl text-[#000]">
          <h1>
            <span className="text-[#FFC062]">Happy</span> charity
          </h1>
        </div>
        <div
          style={{
            borderRadius: "14px",
            border: "1px solid #DDD",
          }}
          className="lg:flex hidden  items-center px-2 text-[#929292] text-xl font-normal gap-[10px] w-[480px] h-[48px] "
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input className="w-full" placeholder="Search"></input>
        </div>
        <div>
          <Link
            to={`https://experimentlabs.in/login/66091628f26dbb3314a83e32`}
            style={{
              borderRadius: "8px",
              boxShadow: "0px 4px 10px 0px rgba(169, 169, 169, 0.25)",
            }}
            className="lg:hidden bg-[#4555BA] px-[25px] py-[10px] text-xl font-extrabold text-[#fff]"
          >
            Log in
          </Link>
        </div>
      </div>
      <div
        style={{
          borderRadius: "14px",
          border: "1px solid #DDD",
        }}
        className="me-2 flex lg:hidden  items-center px-2 text-[#929292] text-xl font-normal gap-[10px] w-[380px] h-[48px] "
      >
        <input className="w-full" placeholder="Search"></input>
      </div>
      <div className="lg:flex items-center gap-20">
        <div className="flex gap-[45px] text-[#000] text-xl font-bold">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("home");
            }}
          >
            Home
          </a>
          <a
            href="#about-us"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("about-us");
            }}
          >
            About Us
          </a>
          <a
            href="#create-charity"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("create-charity");
            }}
          >
            Contact Us
          </a>
        </div>
        <div>
          <Link
            to="https://experimentlabs.in/login/66091628f26dbb3314a83e32"
            style={{
              borderRadius: "8px",
              boxShadow: "0px 4px 10px 0px rgba(169, 169, 169, 0.25)",
            }}
            className="bg-[#4555BA] lg:block hidden px-[25px] py-[10px] text-xl font-extrabold text-[#fff]"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
