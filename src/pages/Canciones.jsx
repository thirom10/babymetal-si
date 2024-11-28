import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import songsData from "../songs.json";
import YouTube from "react-youtube";
import "./css/Canciones.css";

const Canciones = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  const handleCardClick = (song) => {
    setIsLoading(true);
    setSelectedSong(song);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleVideoReady = () => {
    setIsLoading(false);
  };

  const handleCloseVideo = () => {
    setSelectedSong(null);
    setIsLoading(false);
  };

  return (
    <div className="home-container">
      <div className="songs-container">
        {isLoading && (
          <motion.div
            className="loading-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="loading-circle"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </motion.div>
        )}

        <AnimatePresence>
          {selectedSong && (
            <motion.div
              className="selected-song"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="close-button"
                onClick={handleCloseVideo}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.div>
              <YouTube
                videoId={selectedSong.video_id}
                opts={{ width: "100%", height: "600px" }}
                onReady={handleVideoReady}
              />
              <motion.div
                className="song-info"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2>{selectedSong.nombre_cancion}</h2>
                <p>
                  <strong>Álbum:</strong> {selectedSong.album_cancion}
                </p>
                <p>
                  <strong>Fecha de lanzamiento:</strong>{" "}
                  {selectedSong.fecha_lanzamiento}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="songs-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {songsData.map((song, index) => (
            <motion.div
              key={index}
              className="song-card"
              whileTap={{ scale: 0.95 }}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              onClick={() => handleCardClick(song)}
            >
              <motion.img
                src={song.imagen}
                alt={song.nombre_cancion}
                whileHover={{ scale: 1.05 }}
              />
              <div className="song-info">
                <h3>{song.nombre}</h3>
                <p>
                  <strong>Álbum:</strong> {song.album_cancion}
                </p>
                <p>
                  <strong>Fecha de lanzamiento:</strong>{" "}
                  {song.fecha_lanzamiento}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Canciones;
