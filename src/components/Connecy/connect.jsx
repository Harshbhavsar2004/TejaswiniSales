import React from 'react';
import './connecet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Connect = () => {
  return (
    <div className='kingharshal'>
      <div className="contact-icon" onClick={() => window.location.href = 'tel:+1800229933'}>
        <FontAwesomeIcon icon={faPhone} />
      </div>
      <div className="contact-icon" onClick={() => window.location.href = 'mailto:example@example.com'}>
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div className="contact-icon" onClick={() => window.location.href = 'https://wa.me/9765312877'}>
        <FontAwesomeIcon icon={faWhatsapp} />
      </div>
    </div>
  );
}

export default Connect;
