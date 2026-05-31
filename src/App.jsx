import { Suspense } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import PlayerButtonGroup from "./components/PlayerButtonGroup/PlayerButtonGroup";
import PlayerCards from "./components/PlayerCards/PlayerCards";
import Footer from "./components/Footer/Footer";
import NavMenu from "./components/NavBar/NavMenu";

const fetchPlayers = async () => {
  const response = await fetch("/playersData.json");
  return response.json();
};

const playersPromise = fetchPlayers();

function App() {
  return (
    <div className="sora-font  mx-auto">
      {/* NavBar */}
      <div className="max-md:hidden">
        <NavBar />
      </div>

      {/* NavMenu */}
      <div className="md:hidden">
        <NavMenu />
      </div>

      {/* Banner */}
      <div className="px-4">
        <Hero />
      </div>

      {/* PlayerButtons */}
      <div className="px-4">
      <PlayerButtonGroup />
      </div>

      {/* PlayerCards */}
      <div className="px-4">
        <Suspense
          fallback={
            <div className="flex justify-center items-center">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          }
        >
          <PlayerCards playersPromise={playersPromise} />
        </Suspense>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
