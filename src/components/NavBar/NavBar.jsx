import { Fragment} from "react";
import dollar_1 from "../../assets/dollar_1.png"
import logo from "../../assets/logo.png"


const NavBar = () => {

  return (
    <Fragment>
      
      {/* parent-div*/}
      <div
        className="
          flex justify-between
          px-3
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

            {/* <svg
              xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffea00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="
                lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign
              "
            ><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/>
            </svg> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
