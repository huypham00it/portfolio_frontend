import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeProvider';

import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {
    const {theme} = useContext(ThemeContext);

    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query)
            .then(data => setAbouts(data))
            .catch(error => {
                console.log(error);
            })
        
    }, []);

    return (
        <>
            <h2 className={`head-text ${theme === 'dark' ? 'light-text' : ''}`}>
                I Know That
                <span> Good Dev</span>
                <br />
                means
                <span> Good Person</span>
            </h2>
            <div className={`app__profiles ${theme === 'dark' ? 'light-text' : ''}`}>
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView = {{ opacity: 1 }}
                        whileHover = {{ scale: 1.1 }}
                        transition = {{ duration: 0.5, type: 'tween' }}
                        className = "app__profile-item"
                        key={'about' + index}
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className={`bold-text ${theme === 'dark' ? 'light-text' : ''}`} style={{ marginTop: 10 }}>{about.title}</h2>
                        <p>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg'
);