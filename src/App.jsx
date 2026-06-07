import "./App.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import PlayerButtonGroup from "./components/PlayerButtonGroup/PlayerButtonGroup";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

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
        <Hero balance={balance} setBalance={setBalance} />
      </div>

      {/* PlayerButtons */}
      <div className="px-4">
        <PlayerButtonGroup balance={balance} setBalance={setBalance} />
      </div>

      {/* Footer */}
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
