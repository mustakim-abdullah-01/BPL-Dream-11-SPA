import { Fragment, useState } from "react";
import dollar_1 from "../../assets/dollar_1.png";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

const NavMenu = () => {



const [show, setShow] = useState(false)




  return (
    <Fragment>
      <div
        className="
          flex justify-between
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
          {/* links-div */}

          <div>
            <ul
              className={`font-semibold flex flex-col absolute left-3 ${show ? "top-28" : "-top-150"} text-[#131313] gap-12 z-10 bg-white/60 p-4 duration-1000 rounded-2xl`}
            >
              <X onClick={()=>{setShow(!show)}} className="hover:cursor-pointer" />
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
              btn btn-lg btn-soft btn-disabled gap-4
            "
          >
            <span
              className="
                text-black
              "
            >
              <span>0 </span>
              Coins
            </span>
            <img src={dollar_1} alt="" />
          </div>
        </div>
      </div>

<div className={`absolute top-8 left-25 ${show ? "hidden" : "" } duration-1000`} >
      <Menu onClick={()=>{setShow(!show)}} />
</div>

      
    </Fragment>
  );
};

export default NavMenu;