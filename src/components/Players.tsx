import React, { use, useState } from "react";
import type PlayerType from "../Types/PlayerType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";
interface PlayersProps {
  PlayersPromise: Promise<PlayerType[]>;
  coin: number;
  setCoin: React.Dispatch<React.SetStateAction<number>>;
}
function Players({ PlayersPromise, coin, setCoin }: PlayersProps) {
    const players = use(PlayersPromise);
    const [selectedPlayers, setSelectedPlayers] = useState<PlayerType[]>([]);
    const [btnState,setbtnState]=useState("Available");
    const handleBtnClick=(type:"Available"|"Selected")=>{
        setbtnState(type);
    };
    return (
        <div className="container mx-auto mt-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold mb-4">{btnState==="Available"?"Available Players":"Selected Players"}</h1>
                <div>
                    <button className={`btn rounded-r-none ${btnState==="Available"?'btn-success':''}`} onClick={()=>handleBtnClick("Available")}>Available</button>
                    <button className={`btn rounded-l-none ${btnState==="Selected"?'btn-success':''}`} onClick={()=>handleBtnClick("Selected")}>Selected</button>
                </div>
            </div>
            {btnState==="Available"?<AvailablePlayers players={players} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></AvailablePlayers>:<SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}></SelectedPlayers>}
        </div>
    );
}

export default Players;
