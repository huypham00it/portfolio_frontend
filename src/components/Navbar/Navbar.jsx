import React, { useState, useContext } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../context/ThemeProvider';
import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <nav className={`app__navbar ${theme}`}>
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills','testimonials' ,'contact'].map(item => (
          <li key={`link-${item}`} className="app__flex p-text">
            <div />
            <a href={'#' + item}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="theme-mode">
        <input type="checkbox" id="switch" className="switch-input" readOnly checked={theme === 'dark'} />
        <label htmlFor="switch" className="switch" onClick={toggleTheme}></label>
      </div>
      <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0]}}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['home', 'about', 'work', 'skills','testimonials', 'contact'].map(item => (
                  <li key={item}>
                    <a href={'#' + item} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                ))}
                <li className="app__theme-mode">
                  <input type="checkbox" id="app__switch" className="switch-input" readOnly checked={theme === 'dark'} />
                  <label htmlFor="app__switch" className="switch" onClick={toggleTheme}></label>
                </li>
              </ul>
            </motion.div>
          )}
      </div>
    </nav>
  )
}

export default Navbar