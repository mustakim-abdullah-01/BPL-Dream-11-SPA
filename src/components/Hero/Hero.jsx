import { Fragment } from "react";
import bannerImage from "../../assets/banner-main.png"
import bannerShadowbottom from "../../assets/grad-bottom.png"
import bannerShadowtop from "../../assets/grad-top.png"
const Hero = () => {
  return (
    <Fragment>
      <div
        className="
          relative flex flex-col justify-center items-center
          p-16 space-y-6 mb-24
          bg-[#131313]
          rounded-3xl
        "
      >
        <div>
          <img
            className="
              absolute bottom-0 left-0
              rounded-3xl w-137.5 pr-10 max-lg:hidden
            "
            src={bannerShadowbottom}
            alt=""
          ></img>
        </div>

        <div>
          <img
            className=" 
              absolute top-0 right-0
              rounded-3xl w-137.5 max-lg:hidden
            "
            src={bannerShadowtop}
            alt=""
          ></img>
        </div>
        <div>
          <img src={bannerImage} alt="" />
        </div>

        <div
          className="
            space-y-4
            text-center
          "
        >
          <h1
            className="
              font-bold text-[40px] text-white
            "
          >
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          <p
            className="
              font-medium text-2xl text-white/70
            "
          >
            Beyond Boundaries Beyond Limits
          </p>
        </div>

        <div
          className="
            p-2
            bg-white/5
            rounded-2xl border border-[#E7FE29]
            hover:cursor-pointer
          "
        >
          <button
            className=" z-100 btn border-none btn-lg
                px-5 py-3.5
                font-bold text-4 text-[#131313]
                bg-[#E7FE29]
                rounded-2xl
                hover:cursor-pointer
              ">
            Claim Free Credit
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;