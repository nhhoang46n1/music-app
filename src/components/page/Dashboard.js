import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ArtistRender from "../ArtistRender";
import TopTrackRender from "../TopTrackRender";

function Dashboard() {
  return (
    <div>
      <p className="text-white text-center fs-1 fw-bold">Artists</p>
      <ArtistRender />
    </div>
  );
}

export default Dashboard;
