import { Fragment, useState } from "react";

const PlayerButtonGroup = () => {


  const [active, setActive] = useState(true)





  return (
    <Fragment>
      <div
        className="
          flex flex-wrap gap-4 justify-center md:justify-between items-center
          mb-8
        "
      >
        <div>
          <h3
            className="
              text-[28px] text-[#131313] font-bold
            "
          >
            Available Players
          </h3>
        </div>

        <div
          className="
            flex gap-px
          "
        >
          <button
            className={`border-[#E7fE29]/80 px-8 py-3.5 font-bold text-[16px] rounded-l-xl hover:cursor-pointer  ${active ? "bg-[#E7FE29] shadow-2xl" : "bg-none shadow-none"}`}
            onClick={() => setActive(true)}
          >
            Available
          </button>

          <button
            className={`border-[#E7fE29]/80 shadow-md px-8 py-3.5 font-bold text-[16px] rounded-r-xl hover:cursor-pointer ${active ? "bg-none shadow none" : "bg-[#E7fE29] shadow-2xl"} `}
            onClick={() => setActive(false)}
          >
            Selected (<span>0</span>)
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default PlayerButtonGroup;
