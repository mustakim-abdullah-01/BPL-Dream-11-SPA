import "./App.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import PlayerButtonGroup from "./components/PlayerButtonGroup/PlayerButtonGroup";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(695000);

  return (
    <div className="mx-auto">
      {/* NavBar */}
      <div className="">
        <NavBar balance={balance} />
      </div>

      {/* Banner */}
      <div className="px-4">
        <Hero />
      </div>

      {/* PlayerButtons */}
      <div className="px-4">
        <PlayerButtonGroup balance={balance} setBalance={setBalance} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
