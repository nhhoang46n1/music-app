import React from "react";
import Header from "../Header";
import InputSearch from "../InputSearch";

function HomePage() {
  return (
    <div className="overflow-hidden">
      <div className="header w-full">
        <Header />
      </div>
      <div className="home-page">
        <div className="input">
          <InputSearch />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
