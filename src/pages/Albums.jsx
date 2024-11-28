import React, { useState } from "react";
import { motion } from "framer-motion";

const albums = [
  {
    "id": 1,
    "name": "Babymetal",
    "history": "El álbum debut homónimo que marcó el inicio del fenómeno Babymetal.",
    "releaseDate": "26 de febrero de 2014",
    "members": ["Suzuka Nakamoto (Su-metal)", "Moa Kikuchi (Moametal)", "Yui Mizuno (Yuimetal)"],
    "spotify": "https://open.spotify.com/embed/album/0gboAM5pPE6N4WBgCmq70t?utm_source=generator"
  },
  {
    "id": 2,
    "name": "Metal Resistance",
    "history": "El segundo álbum consolidó el éxito internacional de la banda.",
    "releaseDate": "1 de abril de 2016",
    "members": ["Suzuka Nakamoto (Su-metal)", "Moa Kikuchi (Moametal)", "Yui Mizuno (Yuimetal)"],
    "spotify": "https://open.spotify.com/embed/album/0yymWruU5luJjYZvIXGUUL?utm_source=generator"
  },
  {
    "id": 3,
    "name": "Metal Galaxy",
    "history": "Un álbum conceptual que explora diferentes estilos de metal.",
    "releaseDate": "11 de octubre de 2019",
    "members": ["Suzuka Nakamoto (Su-metal)", "Moa Kikuchi (Moametal)"],
    "spotify": "https://open.spotify.com/embed/album/6rxRhft7JZtXavzHP2g2el?utm_source=generator"
  },
  {
    "id": 4,
    "name": "The Other One",
    "history": "Un álbum que marca un nuevo capítulo en la historia de Babymetal.",
    "releaseDate": "24 de marzo de 2023",
    "members": ["Suzuka Nakamoto (Su-metal)", "Moa Kikuchi (Moametal)"],
    "spotify": "https://open.spotify.com/embed/album/11CDY2YrD5iinSwCPSAvEv?utm_source=generator"
  },
  {
    "id": 5,
    "name": "Babymetal World Tour",
    "history": "Un álbum en vivo que captura la energía de sus conciertos.",
    "releaseDate": "18 de diciembre de 2015",
    "members": ["Suzuka Nakamoto (Su-metal)", "Moa Kikuchi (Moametal)", "Yui Mizuno (Yuimetal)"],
    "spotify": "https://open.spotify.com/embed/album/6Eepi724OOt38pTaUrZErI?utm_source=generator"
  },
  {
    "id": 6,
    "name": "Live at Wembley",
    "history": "Un álbum en vivo de la actuación histórica en Wembley Arena.",
    "releaseDate": "9 de diciembre de 2016",
    "members": ["Suzuka Nakamoto (Su-metal)", "Moa Kikuchi (Moametal)", "Yui Mizuno (Yuimetal)"],
    "spotify": "https://open.spotify.com/embed/album/3T4tUhGYeRNVUGevb0wThu?utm_source=generator"
  }
]

export default function Albums() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      {/* Contenedor de Cards */}
      <motion.div
        layout
        style={{
          display: "flex",
          flexDirection: selectedAlbum ? "row" : "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {albums.map((album) => (
          <motion.div
            key={album.id}
            layout
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedAlbum(album)}
            style={{
              width: selectedAlbum ? "150px" : "300px",
              height: selectedAlbum ? "150px" : "300px",
              background: "#f3f3f3",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              overflow: "hidden",
              textAlign: "center",
              padding: "10px",
            }}
          >
            <p>{album.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Detalle del Álbum Seleccionado */}
      {selectedAlbum && (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            marginTop: "20px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            background: "#fff",
          }}
        >
          <h2>{selectedAlbum.name}</h2>
          <p><strong>Historia:</strong> {selectedAlbum.history}</p>
          <p><strong>Fecha de salida:</strong> {selectedAlbum.releaseDate}</p>
          <p><strong>Miembros:</strong> {selectedAlbum.members.join(", ")}</p>
          <iframe
            src={selectedAlbum.spotify}
            width="100%"
            height="380"
            frameBorder="0"
            allow="encrypted-media"
            title={selectedAlbum.name}
          />
        </motion.div>
      )}
    </div>
  );
}
