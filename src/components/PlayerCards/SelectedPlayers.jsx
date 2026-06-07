import { Fragment } from "react";
import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  setBalance,
  balance,
}) => {
  return (
    <Fragment>
      {selectedPlayers.map((playerInfo, index) => (
        <SelectedPlayer
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          playerInfo={playerInfo}
          setBalance={setBalance}
          balance={balance}
          key={index}
        />
      ))}
    </Fragment>
  );
};

export default SelectedPlayers;
