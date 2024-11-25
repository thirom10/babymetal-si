import React, { useState } from 'react';
import songsData from '../songs.json';
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

  return (
    <div className='home-container'>    
      <div className="songs-container">
        {isLoading && (
              <div className="loading-screen">
                <div className="loading-circle"></div>
              </div>
            )}
        {selectedSong && (
          <div className="selected-song">
            <div className="close-button" onClick={handleCloseVideo}>×</div>
            <YouTube videoId={selectedSong.video_id} opts={{ width: '100%', height: '600px' }} onReady={handleVideoReady} />
            <div className="song-info">
              <h2>{selectedSong.nombre_cancion}</h2>
              <p><strong>Álbum:</strong> {selectedSong.album_cancion}</p>
              <p><strong>Fecha de lanzamiento:</strong> {selectedSong.fecha_lanzamiento}</p>
            </div>
          </div>
        )}
        <div className="songs-grid">
          {songsData.map((song, index) => (
            <div key={index} className="song-card" onClick={() => handleCardClick(song)}>
              <img src={song.imagen} alt={song.nombre_cancion} />
              <div className="song-info">
                <h3>{song.nombre}</h3>
                <p><strong>Álbum:</strong> {song.album_cancion}</p>
                <p><strong>Fecha de lanzamiento:</strong> {song.fecha_lanzamiento}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Canciones;
