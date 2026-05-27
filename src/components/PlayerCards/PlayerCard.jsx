import { Fragment } from "react";


// {
//   name: 'Glenn Maxwell', 
//   nationality: 'Australia', 
//   batting_style: 'Right-handed', 
//   bowling_style: 'Right-arm off-break',
//    rating: 86
//   }



const playerCard = ({playerInfo}) => {


  return (
    <Fragment>
      <div className="max-w-106 p-6 pl-12 rounded-2xl border-[#131313]/10 border  shadow-md">
        <div className="flex justify-center mb-6 w-full">
          <img className="rounded-2xl h-46" src={playerInfo.image} />
        </div>

        <div className="mb-4 flex gap-4 items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.25"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-circle-user-icon lucide-circle-user"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="10" r="3" />
              <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
            </svg>
          </div>
          <h3 className="font-semibold text-[20px]">{playerInfo.name}</h3>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#787878"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-flag-icon lucide-flag"
              >
                <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
              </svg>
            </div>

            <p className="text-[#131313]/70">{playerInfo.nationality}</p>
          </div>

          <p className="text-[14px]">
            {playerInfo.is_all_rounder ? "All-Rounder" : ""}
          </p>
        </div>

        <div className="flex justify-between items-center mb-4">
          <p className="font-bold text-[16px]">Rating</p>

          <p className="font-medium">{playerInfo.rating}</p>
        </div>

        <div className="flex justify-between items-center mb-5">
          <p className="font-semibold">Left-Hand-Bat</p>

          <p className="text-[#131313]/70">{playerInfo.batting_style}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-bold">Price: $ {playerInfo.price}</p>

          <button className="btn btn-outline btn-primary btn-sm">
            Select Player
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default playerCard;