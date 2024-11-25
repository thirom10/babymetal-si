
import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './css/Canciones.css';

const Canciones = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedSong, setSelectedSong] = useState(null);
    
    const handleCardClick = (song) => {
        setIsLoading(true);
        setSelectedSong(song);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    const handleVideoReady = () => {
        setIsLoading(false);
    };
    
    const handleCloseVideo = () => {
        setSelectedSong(null);
        setIsLoading(false)
    };
    
    const albums = [
        "https://open.spotify.com/embed/album/0gboAM5pPE6N4WBgCmq70t?utm_source=generator",
        "https://open.spotify.com/embed/album/0yymWruU5luJjYZvIXGUUL?utm_source=generator",
        "https://open.spotify.com/embed/album/6rxRhft7JZtXavzHP2g2el?utm_source=generator",
        "https://open.spotify.com/embed/album/11CDY2YrD5iinSwCPSAvEv?utm_source=generator",
        "https://open.spotify.com/embed/album/6Eepi724OOt38pTaUrZErI?utm_source=generator"
    ]

  return (
    <div className='home-container'>    
      <div className="songs-container">
        {albums.map((album, index) => (
            <h1></h1>
        ))}
      </div>
    </div>
  );
};

export default Canciones;
