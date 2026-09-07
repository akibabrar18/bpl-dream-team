import { FaFlag, FaUser } from "react-icons/fa";
import type PlayerType from '../Types/PlayerType';
import { toast } from "react-toastify";


const PlayerCard = ({player, coin, setCoin, selectedPlayers, setSelectedPlayers}: {player: PlayerType; coin?: number; setCoin: React.Dispatch<React.SetStateAction<number>>; selectedPlayers: PlayerType[]; setSelectedPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>}) => {
  const handleIsSelected = () => {
    if (selectedPlayers.some((p) => p.id === player.id)) return;
    if ((coin ?? 0) >= player.price) {
      setCoin((prevCoin) => prevCoin - player.price);

      setSelectedPlayers((prevPlayers) => [...prevPlayers,player]);
      toast.success(`${player.name} has been selected!`);
  } else {
    toast.error("Not enough coins to select this player.");
  }
  };
    return (
        <div className="card bg-base-100 shadow-sm mx-2">
            <figure>
              <img src={player.photo} alt={`Photo of ${player.name}`}/>
            </figure>
            <div className="card-body">
              <h2 className="card-title"><FaUser />{player.name}</h2>
              <div className="flex items-center justify-between">
                <FaFlag/>
                <p className="ml-2">{`${player.country}`}</p>
                <button className="btn btn-sm btn-outline">{player.role}</button>
              </div>
              <div className="divider"/>
              <h2 className="font-semibold">Rating: {player.rating}</h2>
               <div className="flex justify-between  mt-3">
                <span className="font-semibold">{player.battingStyle}</span>
                <span className="font-semibold">{player.bowlingStyle}</span>
              </div>
               <div className="flex justify-between items-center mt-2 font-semibold">
                <p>{`Price: ${player.price}`}</p>
                <button className="btn btn-success" onClick={handleIsSelected} disabled={selectedPlayers.some((p) => p.id === player.id)}>
                  {selectedPlayers.some((p) => p.id === player.id)?"Selected":"Choose Player"}
                </button>
              </div>
            </div>
          </div>
    );
};

export default PlayerCard;