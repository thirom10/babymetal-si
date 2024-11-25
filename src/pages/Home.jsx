import React, { useRef, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { Chrono } from "react-chrono";
import './css/Home.css';

const Home = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [modalVideo, setModalVideo] = useState(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const openModal = (videoUrl) => {
    setModalVideo(videoUrl);
  };

  const closeModal = () => {
    setModalVideo(null);
  };

  const timelineItems = [
    {
      title: "28 de Octubre de 2011",
      cardTitle: "Lanzamiento del debut: Doki Doki ☆ Morning",
      cardSubtitle: "El primer sencillo que definió el estilo kawaii metal.",
      media: {
        name: "Doki Doki ☆ Morning",
        source: {
          url: "https://img.youtube.com/vi/4QbAXXXOJF8/0.jpg"
        },
        type: "IMAGE"
      },
      cardDetailedText: `Babymetal lanzó su primer sencillo, "Doki Doki ☆ Morning", uniendo elementos de metal y pop japonés. El video musical rápidamente ganó popularidad entre los fanáticos del metal y el J-Pop.`
    },
    {
      title: "10 de Febrero de 2014",
      cardTitle: "Lanzamiento del álbum debut: BABYMETAL",
      cardSubtitle: "Un álbum que marcó el inicio del fenómeno global.",
      media: {
        name: "BABYMETAL",
        source: {
          url: "https://img.youtube.com/vi/WIKqgE4BwAY/0.jpg"
        },
        type: "IMAGE"
      },
      cardDetailedText: `El primer álbum homónimo consolidó a Babymetal como un fenómeno global, con éxitos como "Gimme Chocolate!!". La banda ganó reconocimiento por su mezcla única de géneros.`
    },
    {
      title: "21 de Marzo de 2016",
      cardTitle: "Concierto en Wembley Arena",
      cardSubtitle: "Primera banda japonesa en encabezar Wembley Arena.",
      media: {
        name: "Wembley Arena",
        source: {
          url: "https://img.youtube.com/vi/2IzR_ClTE8Y/0.jpg"
        },
        type: "IMAGE"
      },
      cardDetailedText: `Babymetal hizo historia al ser la primera banda japonesa en encabezar el Wembley Arena en Londres. Este evento destacó su creciente popularidad internacional.`
    },
    {
      title: "11 de Octubre de 2019",
      cardTitle: "Lanzamiento de 'Metal Galaxy'",
      cardSubtitle: "El tercer álbum exploró nuevos horizontes musicales.",
      media: {
        name: "Metal Galaxy",
        source: {
          url: "https://img.youtube.com/vi/hPVx7IazcEw/0.jpg"
        },
        type: "IMAGE"
      },
      cardDetailedText: `El álbum "Metal Galaxy" representó una evolución en su estilo musical, colaborando con artistas internacionales y explorando sonidos más diversos.`
    },
    {
      title: "25 de Octubre de 2020",
      cardTitle: "10 BABYMETAL Budokan",
      cardSubtitle: "Celebración del 10º aniversario de la banda.",
      media: {
        name: "10 BABYMETAL Budokan",
        source: {
          url: "https://img.youtube.com/vi/a67BToswV_A/0.jpg"
        },
        type: "IMAGE"
      },
      cardDetailedText: `Babymetal celebró su décimo aniversario con una serie de 10 espectáculos históricos en el Budokan, mostrando su impacto duradero en la música global.`
    }
  ];

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

        <div className="info-inicio">
          <h2>¡Bienvenidos a la Babymetal Wiki!</h2>
          <p>Explora los momentos más icónicos en la historia de Babymetal.</p>
          <a href="#abajo" className='btn-ver'>Ver historia</a>
        </div>
      </section>

      <section id='abajo' className="timeline-section">
        <Chrono
          items={timelineItems}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: "#ff0000",
            secondary: "#222",
            cardBgColor: "#333",
            cardForeColor: "#fff",
            titleColor: "#ff0000",
          }}
          onItemSelected={(item) => openModal(item.videoUrl)}
        />
      </section>
    </main>
  );
};

export default Home;
