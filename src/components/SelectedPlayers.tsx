import React from "react";
import type PlayerType from "../Types/PlayerType";
import { RiDeleteBinLine } from "react-icons/ri";


const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers,coin, setCoin }: {selectedPlayers: PlayerType[]; setSelectedPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>;coin: number; setCoin: React.Dispatch<React.SetStateAction<number>>;}) => {

    const handleRemovePlayer = (player: PlayerType) => {
        const restPlayers = selectedPlayers.filter((p) => p.id !== player.id);
        setSelectedPlayers([...restPlayers]);
        setCoin(coin+player.price);
    };
    return (
    <>
      {selectedPlayers.length === 0 ? (
        <p className="text-center text-gray-500 text-4xl">No players selected yet.</p>
      ) : (
        <div className="border-blue-100 border-2 rounded-lg p-4 my-12">
          {selectedPlayers.map((player) => (
            <div key={player.id} className="flex justify-between items-center bg-blue-100 p-4 rounded-lg mb-4">
              <div className="flex items-center">
                <img src={player.photo} alt={`Photo of ${player.name}`} className="rounded-full w-[80px] h-[80px]" />
                <div className="ml-4">
                  <h2>{player.name}</h2>
                  <p>{player.role}</p>
                </div>
              </div>
              <span className="text-red-500 hover:text-red-700 cursor-pointer" onClick={() => handleRemovePlayer(player)}>
                <RiDeleteBinLine />
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SelectedPlayers;
