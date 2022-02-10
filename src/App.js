import React from "react";
import CardInfo from "./Components/CardInfo";
import Nav from "./Components/Nav";
import Hero from './Components/Hero'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Hero />
        <CardInfo />
      </header>
    </div>
  );
}

export default App;
