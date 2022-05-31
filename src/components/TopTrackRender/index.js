import React, { useEffect } from "react";
import { Card, CardImg } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTopTrackAsync } from "../../store/track/action";
import "./style.css";
function TopTrackRender({ artistId }) {
  const tracks = useSelector((state) => state.Tracks.topTrack.tracks);
  console.log(tracks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopTrackAsync(artistId));
  }, [artistId]);
  return (
    <>
      <ul className="track-container ">
        {tracks?.map((track, index) => (
          <Card className="track-content mt-3" key={index}>
            <Card.Title className="fw-bold mt-2">{track?.name}</Card.Title>
            <CardImg
              className="track-img mt-5"
              src={track?.album.images[0]?.url}
            />
          </Card>
        ))}
      </ul>
    </>
  );
}

export default TopTrackRender;
