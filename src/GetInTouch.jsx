import React, { useState } from 'react';
import "./style.css"

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://65269953917d673fd76c9d3f.mockapi.io/api/v1/portfolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification('Thank you! Your message has been successfully sent.');
        setFormData({
          name: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });

        // Limpar a notificação após alguns segundos (opcional)
        setTimeout(() => {
          setNotification('');
        }, 3000);
      } else {
        setNotification('Error submitting form. Please try again later.');
      }
    } catch (error) {
      setNotification('Erro ao enviar o formulário');
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  return (
    <div>
      <div className="title" id="secaoContactMe">
        Get in touch
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="contact-row">
          <div className="input-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName"></label>
            <input
              type="text"
              id="lastName"
              placeholder="Last name"
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>
        </div>

        <div className="contact-row">
          <div className="input-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone"></label>
            <input
              type="text"
              id="phone"
              placeholder="Phone number"
              onChange={handleChange}
              value={formData.phone}
            />
          </div>
        </div>
        <div className="contact-row">
          <div className="group input">
            <label htmlFor="message"></label>
            <input
              className="message"
              id="message"
              placeholder="Message"
              onChange={handleChange}
              value={formData.message}
            />
          </div>
        </div>

        <button className="buttonSubmit" type="submit">
          Submit now
        </button>

        {notification && <div className="notification">{notification}</div>}
      </form>
    </div>
  );
}