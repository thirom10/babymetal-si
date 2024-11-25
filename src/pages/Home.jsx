import React, { useRef, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import './css/Home.css';

const Home = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <main>
      <section className="container-inicio">
        <div className="video-overlay">
          <video
            ref={videoRef}
            className="inicio-video"
            src="./yava.mp4"
            autoPlay
            loop
            muted={isMuted}
          ></video>
          <button className="mute-button" onClick={toggleMute}>
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>

        <div className='info-inicio'>
          <h2>¡Bienvenidos a la BabyMetal wiki!</h2>
        </div>
      </section>
    </main>
  );
};

export default Home;
