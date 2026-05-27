import { Fragment, use } from "react";
import PlayerCard from "./PlayerCard";

const PlayerCards = ({playersPromise}) => {
    
const playersData = use(playersPromise)

return (
  <Fragment>
    <div className="grid grid-cols-3 gap-6 w-full">
      {playersData.map((playerInfo) => (
        <PlayerCard key={playerInfo.rating} playerInfo={playerInfo} />
      ))}
    </div>
  </Fragment>
);

}

export default PlayerCards;
