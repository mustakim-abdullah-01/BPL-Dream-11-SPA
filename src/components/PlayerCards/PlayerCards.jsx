import { Fragment, use } from "react";
import PlayerCard from "./PlayerCard";

const PlayerCards = ({playersPromise}) => {
    
const playersData = use(playersPromise)

return (
  <Fragment>
    <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-50">
      {playersData.map((playerInfo) => (
        <PlayerCard key={playerInfo.rating} playerInfo={playerInfo} />
      ))}
    </div>
  </Fragment>
);

}

export default PlayerCards;
