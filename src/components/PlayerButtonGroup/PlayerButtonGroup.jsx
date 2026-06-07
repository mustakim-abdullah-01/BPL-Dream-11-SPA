import { Fragment, Suspense, useState } from "react";
import PlayerCards from "../PlayerCards/PlayerCards";
import SelectedPlayers from "../PlayerCards/SelectedPlayers";

const PlayerButtonGroup = ({ balance, setBalance }) => {
  const [active, setActive] = useState(true);

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const fetchPlayers = async () => {
    const response = await fetch("/playersData.json");
    return response.json();
  };

  const playersPromise = fetchPlayers();

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
            {active
              ? "Available Players"
              : `Selected Player (${selectedPlayers.length} / 5)`}
          </h3>
        </div>

        <div
          className=" border border-black/50 p-1 rounded-xl
            flex join
          "
        >
          <button
            className={`px-8 py-3.5 font-bold join-item text-[16px] rounded-l-xl btn btn-lg  ${active ? "bg-[#E7FE29]" : "bg-none"}`}
            onClick={() => {
              setActive(true);
              {
                <PlayerCards state={active} />;
              }
            }}
          >
            Available
          </button>

          <button
            className={`px-8 join-item py-3.5 font-bold text-[16px] rounded-r-xl btn btn-lg ${active ? "bg-none" : "bg-[#E7fE29]"} `}
            onClick={() => setActive(false)}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {active ? (
        <Suspense
          fallback={
            <div className="py-96 flex justify-center items-center">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          }
        >
          <div>
            <PlayerCards
              balance={balance}
              setBalance={setBalance}
              playersPromise={playersPromise}
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
            />
          </div>
        </Suspense>
      ) : (
        <Suspense
          fallback={
            <div className="py-96 flex justify-center items-center">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          }
        >
          <div className="mb-72">
            <SelectedPlayers
              setSelectedPlayers={setSelectedPlayers}
              selectedPlayers={selectedPlayers}
            />
          </div>
        </Suspense>
      )}
    </Fragment>
  );
};

export default PlayerButtonGroup;
