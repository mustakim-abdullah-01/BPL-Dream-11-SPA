import { Fragment, use } from "react";
import PlayerCard from "./PlayerCard";

const PlayerCards = ({
  playersPromise,
  balance,
  setBalance,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const playersData = use(playersPromise);

  return (
    <Fragment>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-14 container mb-50">
        {playersData.map((playerInfo) => (
          <PlayerCard
            balance={balance}
            setBalance={setBalance}
            key={playerInfo.rating}
            playerInfo={playerInfo}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default PlayerCards;
