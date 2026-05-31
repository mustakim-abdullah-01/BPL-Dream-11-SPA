import { Fragment, use } from "react";
import PlayerCard from "./PlayerCard";

const PlayerCards = ({playersPromise}) => {
    
const playersData = use(playersPromise)

return (
  <Fragment>
    <div className="ml-8 flex flex-wrap justify-start gap-12 w-full mb-50">
      {playersData.map((playerInfo) => (
        <PlayerCard key={playerInfo.rating} playerInfo={playerInfo} />
      ))}
    </div>
  </Fragment>
);

}

export default PlayerCards;
