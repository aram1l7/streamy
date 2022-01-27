import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStream } from "../../store/operations";
import flv from "flv.js";
function StreamShow() {
  const { id } = useParams();
  const stream = useSelector((state) => state.streams[id]);
  const dispatch = useDispatch();
  const videoRef = useRef();
  let flvPlayer = flv.createPlayer({
    type: "flv",
    url: `http://localhost:8000/live/${id}.flv`,
  });
  useEffect(() => {
    dispatch(getStream(id));
    showPlayer();
    console.log("hello world");

    return () => {
      flvPlayer.destroy();
    };
  }, []);
  const showPlayer = () => {
    if (flvPlayer || !stream) {
      return;
    }
    flvPlayer.attachMediaElement(videoRef.current);
    flvPlayer.load();
    // flvPlayer.play();
  };
  return (
    <div>
      {stream ? (
        <div className="">
          <video
            controls
            style={{
              width: "100%",
            }}
            ref={videoRef}
          />
          <h1>{stream.title}</h1>
          <h4>{stream.description}</h4>
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}

export default StreamShow;
