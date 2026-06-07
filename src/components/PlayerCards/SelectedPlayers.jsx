import { Fragment } from "react";
import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers }) => {
  return (
    <Fragment>
      {selectedPlayers.map((playerInfo, index) => (
        <SelectedPlayer
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          playerInfo={playerInfo}
          key={index}
        />
      ))}
    </Fragment>
  );
};

export default SelectedPlayers;
