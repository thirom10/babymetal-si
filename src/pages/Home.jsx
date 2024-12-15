import React, { useRef, useState, useEffect } from 'react';
import { FaVolumeMute, FaVolumeUp, FaArrowUp } from 'react-icons/fa';
import './css/Home.css';

const Home = () => {
  const videoRef = useRef(null);
  const sectionRefs = useRef([]);
  const [isMuted, setIsMuted] = useState(true);
  const [background, setBackground] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const timelineItems = [
    {
      title: "28 de Octubre de 2011",
      cardTitle: "Lanzamiento del debut: Doki Doki ☆ Morning",
      info: "Babymetal lanzó su primer sencillo, 'Doki Doki ☆ Morning', uniendo elementos de metal y pop japonés. El video musical rápidamente ganó popularidad entre los fanáticos del metal y el J-Pop",
      background: "https://www.hxchector.com/wp-content/uploads/2016/04/babymetal-doki-doki-morning-gifs11.gif",
    },
    {
      title: "10 de Febrero de 2014",
      cardTitle: "Lanzamiento del álbum debut: BABYMETAL",
      info: "El primer álbum homónimo consolidó a Babymetal como un fenómeno global, con éxitos como 'Gimme Chocolate!!'. La banda ganó reconocimiento por su mezcla única de géneros.",
      background: "https://giffiles.alphacoders.com/211/211028.gif",
    },
    {
      title: "21 de Marzo de 2016",
      cardTitle: "Concierto en Wembley Arena",
      info: "Babymetal hizo historia al ser la primera banda japonesa en encabezar el Wembley Arena en Londres. Este evento destacó su creciente popularidad internacional.",
      background: "https://static.tumblr.com/2346857db6437406b6dab1db7863f93c/dxoy2nl/c4cnksqui/tumblr_static_tumblr_static_b0zezqbozgo4ocsowkso4scc8_focused_v3.gif",
    },
    {
      title: "11 de Octubre de 2019",
      cardTitle: "Lanzamiento de 'Metal Galaxy'",
      info: "El álbum 'Metal Galaxy' representó una evolución en su estilo musical, colaborando con artistas internacionales y explorando sonidos más diversos.",
      background: "https://cms.kerrang.com/images/BABYMETAL_2909_JF.jpg",
    },
    {
      title: "25 de Octubre de 2020",
      cardTitle: "10 BABYMETAL Budokan",
      info: "Babymetal celebró su décimo aniversario con una serie de 10 espectáculos históricos en el Budokan, mostrando su impacto duradero en la música global.",
      background: "https://www.babymetalnews.com/wp-content/uploads/2021/08/2-Rare-1.gif",
    },
  ];

  const handleViewHistory = () => {
    setIsScrolling(true);
    setCurrentIndex(0);
    if (sectionRefs.current[0]) {
      sectionRefs.current[0].scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!isScrolling) return;

    const autoScroll = () => {
      if (currentIndex < timelineItems.length - 1) {
        setTimeout(() => {
          const nextIndex = currentIndex + 1;
          setCurrentIndex(nextIndex);
          sectionRefs.current[nextIndex].scrollIntoView({ behavior: "smooth" });
        }, 3000);
      } else {
        setTimeout(() => {
          setCurrentIndex(0);
          window.scrollTo({ top: 0, behavior: "smooth" });
          setIsScrolling(false);         }, 4000);
      }
    };

    autoScroll();
  }, [currentIndex, isScrolling, timelineItems]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTopButton(window.scrollY > 200);

      for (let i = 0; i < sectionRefs.current.length; i++) {
        const ref = sectionRefs.current[i];
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setBackground(timelineItems[i].background);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [timelineItems]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

        <div className="info-inicio">
          <h2>¡Bienvenidos a la Babymetal Wiki!</h2>
          <p>Explora los momentos más icónicos en la historia de Babymetal.</p>
          <button onClick={handleViewHistory} className='btn-ver'>Ver historia</button>
        </div>
      </section>

      <section
        id="abajo"
        className="timeline-section"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background 0.5s ease',
        }}
      >
        <div className="overlay"></div>
        {timelineItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="timeline-item"
            style={{
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              padding: "20px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            <div className='info-coso'>
              <h2>{item.cardTitle}</h2>
              <p>{item.title}</p>
              <p style={{width: "60%", margin: "20px auto"}}>{item.info}</p>
            </div>
          </div>
        ))}
      </section>

      {showScrollTopButton && (
        <button onClick={scrollToTop} className="scroll-top-button">
          <FaArrowUp />
        </button>
      )}
    </main>
  );
};

export default Home;
