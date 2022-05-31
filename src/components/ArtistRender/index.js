import { Button } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import TopTrackRender from "../TopTrackRender";
import "./style.css";

function ArtistRender() {
  const artists = useSelector((state) => state.Artists.artist.artists);
  const [artistId, setArtistId] = useState("");
  console.log(artistId);
  return (
    <>
      <ul className="artist-container">
        <div className="artist-content">
          {artists?.items.map((artist, index) => (
            <Card
              style={{ width: "20%" }}
              key={index}
              className="mt-4 text-center artist-item"
              onClick={() => setArtistId(artist.id)}
            >
              <Card.Img
                variant="top"
                src={artist?.images[0]?.url}
                className="artist-img"
              />
              <Card.Body>
                <Card.Title className="artist-name">{artist?.name}</Card.Title>
                <p className="fw-bold">Genres: </p>
                <Card.Text className="genre">
                  {artist.genres?.map((genre, indexGenre) => (
                    <li className="font-italic" key={indexGenre}>
                      {genre}
                    </li>
                  ))}
                </Card.Text>
                <Card.Title className="">
                  <span className="fw-bold">Popularity: </span>
                  {artist?.popularity}
                </Card.Title>
              </Card.Body>
            </Card>
          ))}
        </div>
      </ul>
      <p className="text-white text-center fs-1 fw-bold">Top Tracks</p>

      <TopTrackRender artistId={artistId} />
    </>
  );
}

export default ArtistRender;
