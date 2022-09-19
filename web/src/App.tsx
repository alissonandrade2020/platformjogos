import { useEffect, useState } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdBanner } from "./components/CreateAdBanner";
import { GameBanner } from "./components/GameBanner";

import './styles/main.css';

import logoImg from './assets/Logonlwsports.svg';
import { CreateAdModal } from "./components/CreateAdModal";
import axios from "axios";


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data);
    });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <div className="flex flex-col items-left mt-5">
        <h1 className="text-2xl items-left text-zinc-400 font-black flex">
          <a href="https://github.com/alissonandrade2020" target="_blank">
            GitHub
          </a>
        </h1>
        <h1 className="text-2xl items-left text-zinc-400 font-black">
          <a            href="http://alissondeandradearaujo.000webhostapp.com/"
            target="_blank"
          >
            Portfolio
          </a>
        </h1>
        <h1 className="text-2xl items-left text-zinc-400 font-black">
          <a
            href="https://app.rocketseat.com.br/me/alissondeandradearaujo
"
            target="_blank"
          >
            Perfil Rocket
          </a>
        </h1>
        <h1 className="text-2xl items-left text-zinc-400 font-black">
          <a
            href="https://www.linkedin.com/in/alisson-de-andrade-ara%C3%BAjo-160224190
"
            target="_blank"
          >
            Linkedin
          </a>
        </h1>
      </div>
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          )
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App