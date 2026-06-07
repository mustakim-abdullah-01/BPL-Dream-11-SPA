import { Fragment, useState} from "react";
import dollar_1 from "../../assets/dollar_1.png"
import logo from "../../assets/logo.png"
import {Menu} from "lucide-react";


const NavBar = ({balance}) => {

  const [show, setShow] = useState(false);


  return (
    <Fragment>
      {/* large parent-div*/}
      <div
        className="
          flex justify-around md:justify-between
          mb-6
          bg-base-100
          shadow-sm
          navbar
        "
      >
        {/* logo-div*/}
        <div
          className="
            h-18
          "
        >
          <img src={logo} alt="" />
        </div>

        {/* links-&-balance-div*/}
        <div
          className="
            flex justify-center items-center
            mx-6
            gap-12
          "
        >
          {/*big navbar links-div */}

          <div className="max-md:hidden">
            <ul
              className="
                flex
                text-[#131313]/70
                gap-12
              "
            >
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Fixture</a>
              </li>
              <li>
                <a href="">Teams</a>
              </li>
              <li>
                <a href="">Schedules</a>
              </li>
            </ul>
          </div>

          {/* balance-screen*/}
          <div
            className="
              flex justify-center items-center
              rounded-xl
              btn btn-soft btn-disabled gap-4
            "
          >
            <span
              className="
                text-black
              "
            >
              <span>{balance}</span>
              Coins
            </span>
            <img src={dollar_1} alt="" />
          </div>

          {/*small navbar links-div */}

          <div className="md:hidden relative">
            <Menu
              onClick={() => {
                setShow(!show);
              }}
            />

            <ul
              className={`absolute z-40 max-sm:-right-13.5 flex flex-col  duration-500 ${show ? "top-19.5" : "-top-80"} text-bl gap-12 bg-base-300 p-5 rounded-bl-3xl`}
            >
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Fixture</a>
              </li>
              <li>
                <a href="">Teams</a>
              </li>
              <li>
                <a href="">Schedules</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
