import React, { useState, useEffect } from 'react'
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

import { client } from '../client';

const SocialMedia = () => {

  const [socials, setSocials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "socials"]';

    client.fetch(query)
      .then(data => setSocials(data))
      .catch(err => console.error(err))
  }, []);

  const social = {
    'facebook': socials.find(social => social.title === 'Facebook')?.link,
    'linkedin': socials.find(social => social.title === 'LinkedIn')?.link,
    'instagram': socials.find(social => social.title === 'Instagram')?.link
  }

  return (
    <div className="app__social">
        <div>
          <a href={social.linkedin} className="social-btn">
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a href={social.facebook} className="social-btn">
            <FaFacebook />
          </a>
        </div>
        <div>
          <a href={social.instagram} className="social-btn">
            <BsInstagram />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia