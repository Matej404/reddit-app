import React from "react";
import "./app.css";
import Header from "./Features/Header/Header";
import Home from "./Features/Home/Home";
import Subreddits from "./Features/Subreddits/Subreddits";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <aside>
        <Subreddits />
      </aside>
    </div>
  );
}

export default App;
