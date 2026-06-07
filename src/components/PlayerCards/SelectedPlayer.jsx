import { Trash } from "lucide-react";
import { Fragment } from "react";

const SelectedPlayer = ({
  playerInfo,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const handleDelete = () => {
    const filterdPlayers = selectedPlayers.filter(
      (player) => player.name !== playerInfo.name,
    );

    setSelectedPlayers(filterdPlayers);
  };

  return (
    <Fragment>
      <div className="flex justify-between border border-black/30 shadow-md mb-6 rounded-2xl p-4 items-center">
        <div>
          <div className="flex items-center space-x-6">
            <img
              className="h-20 rounded-2xl"
              src={playerInfo.image}
              alt={playerInfo.name}
            />
            <div className="space-y-3">
              <h3 className="font-semibold text-2xl">{playerInfo.name}</h3>
              <p className="tex-[16px] text-black/70">
                {playerInfo.batting_style}
              </p>
            </div>
          </div>
        </div>
        <div>
          <button
            className="btn rounded-2xl btn-ghost btn-error btn-lg h-16"
            onClick={handleDelete}
          >
            <Trash />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default SelectedPlayer;
