import React, { useContext } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { ThemeContext } from '../../context/ThemeProvider';
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import myCV from '../../assets/CV_Pham_Van_Huy_Fullstack_Developer.pdf'
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const {theme} = useContext(ThemeContext);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      <div className="app__header app__flex">
        <Particles
          id="tsparticles"
          init={particlesInit}
          className={theme}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 2,
                },
              },
            },
            fullScreen: {
              enable: false
            },
            particles: {
              color: {
                value: '#6b7688',
              },
              links: {
                color: '#6b7688',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 0.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className={`badge-cmp app__flex bg-light__${theme}`}>
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className={`p-text`}>Hello, I am</p>
                <h1 className={`head-text`}>Huy Pham</h1>
              </div>
            </div>
            <div className={`tag-cmp app__flex bg-light__${theme}`}>
              <p className="p-text">Full Stack Developer</p>
            </div>
            <div className={`tag-cmp app__flex download-btn bg-light__${theme}`}>
              <a href={myCV} download="CV_Pham_Van_Huy.pdf" className="p-text">Download CV</a>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img src={images.profile} alt="profile_bg" />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
          />
        </motion.div>
        <motion.div
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.html, images.javascript, images.css].map((img, index) => (
            <div className="circle-cmp app__flex" key={"circle" + index}>
              <img src={img} alt="circle" />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Header, "home");
