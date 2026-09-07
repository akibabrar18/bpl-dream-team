import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Players from "./components/Players";
import type PlayerType from "./Types/PlayerType";

const fetchPlayers = async (): Promise<PlayerType[]> => {
  const response= await fetch('data.json');
  const data = await response.json();
  return data;
}
function App() {
  const [playersPromise] = useState<Promise<PlayerType[]>>(() => fetchPlayers());
  const [coin, setCoin] = useState(10000);
  return (
    <>
      <Nav coin={coin}></Nav>
      <Banner></Banner>
      <Suspense fallback={<div>Loading...</div>}>
        <Players PlayersPromise={playersPromise} coin={coin} setCoin={setCoin}></Players>
      </Suspense> 
    </>
  );
}

export default App;
