import React from "react";
import type PlayerType from "../Types/PlayerType";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ players, coin, setCoin, selectedPlayers, setSelectedPlayers }: { players: PlayerType[]; coin: number; setCoin: React.Dispatch<React.SetStateAction<number>>; selectedPlayers: PlayerType[]; setSelectedPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>> }) => {
  return (
    <div className="grid grid-cols-3 gap-7 mt-12">
      {players.map((player: PlayerType) => (
        <div key={player.id}>
          <PlayerCard key={player.id} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></PlayerCard>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
