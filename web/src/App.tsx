import { MagnifyingGlassPlus } from 'phosphor-react';

import "./styles/main.css";

import logoImg from "./assets/Logonlwsports.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} />

      <div className="flex flex-col items-left mt-5">
        <h1 className="text-2xl items-left text-zinc-400 font-black flex">
          <a href="https://github.com/alissonandrade2020" target="_blank">
            GitHub
          </a>
        </h1>
        <h1 className="text-2xl items-left text-zinc-400 font-black">
          <a
            href="http://alissondeandradearaujo.000webhostapp.com/"
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
      <h1 className="text-6xl text-white font-black mt-5">
        Seu {""}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo {""}
        </span>
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-gradient-box absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm block">8 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative">
          <img src="/2.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-gradient-box absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dotas</strong>
            <span className="text-zinc-300 text-sm block">12 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative">
          <img src="/3.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-gradient-box absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Counter-Strike
            </strong>
            <span className="text-zinc-300 text-sm block">5 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative">
          <img src="/4.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-gradient-box absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">APEX</strong>
            <span className="text-zinc-300 text-sm block">13 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative">
          <img src="/5.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-gradient-box absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block">25 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative">
          <img src="/6.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-gradient-box absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Wolrd</strong>
            <span className="text-zinc-300 text-sm block">18 anúncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo ?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} /> Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
