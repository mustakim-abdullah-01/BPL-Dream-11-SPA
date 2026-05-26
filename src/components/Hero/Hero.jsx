import { Fragment } from "react";
import bannerImage from "../../assets/banner-main.png"
const Hero = () => {
  return (
    <Fragment>
      <div
        className="
          flex flex-col justify-center items-center
          p-16 space-y-6 my-6
          bg-[#131313]
          rounded-3xl
        "
      >
        <div
          className="

          "
        >
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
          "
        >
          <button
            className="
              px-5 py-3.5
              font-bold text-4 text-[#131313]
              bg-[#E7FE29]
              rounded-2xl
            "
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;