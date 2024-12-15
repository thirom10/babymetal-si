import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './css/Albums.css';

const albums = [
  {
    "id": 1,
    "name": "Babymetal",
    "imagen": "https://i.scdn.co/image/ab67616d0000b273a2e65e6a12911e93583f529d",
    "history": "El álbum debut homónimo que marcó el inicio del fenómeno Babymetal.",
    "releaseDate": "26 de febrero de 2014",
    "members": ["Suzuka Nakamoto (Su-metal)", "Moa Kikuchi (Moametal)", "Yui Mizuno (Yuimetal)"],
    "spotify": "https://open.spotify.com/embed/album/6Eepi724OOt38pTaUrZErI?utm_source=generator"
  },
  {
    "id": 2,
    "name": "Metal Resistance",
    "imagen": "https://cdns-images.dzcdn.net/images/cover/d542f4191bafbe3c288d60a8f58cc21e/0x1900-000000-80-0-0.jpg",
    "history": "El segundo álbum consolidó el éxito internacional de la banda.",
    "releaseDate": "1 de abril de 2016",
    "members": ["Suzuka Nakamoto (Su-metal)", "Moa Kikuchi (Moametal)", "Yui Mizuno (Yuimetal)"],
    "spotify": "https://open.spotify.com/embed/album/11CDY2YrD5iinSwCPSAvEv?utm_source=generator"
  },
  {
    "id": 3,
    "name": "Metal Galaxy",
    "imagen": "https://i.scdn.co/image/ab67616d0000b27357f5135efad5296d617a6c0f",
    "history": "Un álbum conceptual que explora diferentes estilos de metal.",
    "releaseDate": "11 de octubre de 2019",
    "members": ["Suzuka Nakamoto (Su-metal)", "Moa Kikuchi (Moametal)"],
    "spotify": "https://open.spotify.com/embed/album/6rxRhft7JZtXavzHP2g2el?utm_source=generator"
  },
  {
    "id": 4,
    "name": "The Other One",
    "imagen": "https://thedarkmelody.com/wp-content/uploads/2023/03/babymetal-the-other-one-768x768-1.jpg",
    "history": "Un álbum que marca un nuevo capítulo en la historia de Babymetal.",
    "releaseDate": "24 de marzo de 2023",
    "members": ["Suzuka Nakamoto (Su-metal)", "Moa Kikuchi (Moametal)"],
    "spotify": "https://open.spotify.com/embed/album/0gboAM5pPE6N4WBgCmq70t?utm_source=generator"
  },
  {
    "id": 5,
    "name": "Babymetal World Tour",
    "imagen": "https://i.ebayimg.com/images/g/b1cAAOSwshtkg-K5/s-l1200.jpg",
    "history": "Un álbum en vivo que captura la energía de sus conciertos.",
    "releaseDate": "18 de diciembre de 2015",
    "members": ["Suzuka Nakamoto (Su-metal)", "Moa Kikuchi (Moametal)", "Yui Mizuno (Yuimetal)"],
    "spotify": "https://open.spotify.com/embed/album/0yymWruU5luJjYZvIXGUUL?utm_source=generator"
  },
  {
    "id": 6,
    "name": "Live at Wembley",
    "imagen": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ea/b6/91/eab69145-1f95-fdcf-795e-7c0a99e310bb/TFCC-86581WW.jpg/600x600bf-60.jpg",
    "history": "Un álbum en vivo de la actuación histórica en Wembley Arena.",
    "releaseDate": "9 de diciembre de 2016",
    "members": ["Suzuka Nakamoto (Su-metal)", "Moa Kikuchi (Moametal)", "Yui Mizuno (Yuimetal)"],
    "spotify": "https://open.spotify.com/embed/album/4S3gS0VXygvG5U9C6QLwbV?utm_source=generator"
  }
];

export default function Albums() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [loadingImages, setLoadingImages] = useState(true); // Estado para el cargador de imágenes

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingImages(false); // Después de 3 segundos, mostramos las imágenes
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <body className="body-album">
      <div className="overlay"></div>
      <div className="container-albums">
        <br />
        <motion.div
          layout
          style={{
            width: "80%",
            display: "flex",
            margin: "auto",
            flexWrap: "wrap",
            gap: "30px",
            marginTop: "100px"
          }}
        >
          {albums.map((album) => (
            <motion.div
              key={album.id}
              layout
              onClick={() => setSelectedAlbum(album)}
              style={{
                width: selectedAlbum ? "150px" : "240px",
                height: selectedAlbum ? "150px" : "240px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                overflow: "hidden",
                textAlign: "center",
                position: "relative",
                transition: "all 0.3s ease"
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {loadingImages ? (
                // Skeleton loader con animación de luz
                <div className="skeleton-loader" />
              ) : (
                <img style={{ width: "100%" }} src={album.imagen} alt={album.name} />
              )}
            </motion.div>
          ))}
        </motion.div>

        {selectedAlbum && (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{
              width: "80%",
              margin: "20px auto",
              marginTop: "20px",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              background: "#555",
            }}
          >
            <h2>{selectedAlbum.name}</h2>
            <p><strong>Historia:</strong> {selectedAlbum.history}</p>
            <p><strong>Fecha de salida:</strong> {selectedAlbum.releaseDate}</p>
            <p><strong>Miembros:</strong> {selectedAlbum.members.join(", ")}</p>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
              <iframe 
                src={selectedAlbum.spotify}
                width="70%"
                height="420"
                frameBorder="0"
                allow="encrypted-media"
                title={selectedAlbum.name}
              />
            </div>
          </motion.div>
        )}
      </div>
    </body>
  );
}
