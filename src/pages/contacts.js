import React from "react";
import { FaWhatsapp, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa"; // Иконки

export default function Contacts() {
  return (
    <div className="contacts">
      <h1 className="section-title">
        Если остались вопросы или Вы хотите записаться на консультацию, заполните
        форму или перейдите по ссылке в мессенджер
      </h1>
      <div className="content">
        <form className="contact-form">
          <label htmlFor="name">Ваше имя:</label>
          <input
            type="text"
            id="name"
            placeholder="Ваше имя"
            className="form-input"
            required
          />
          <label htmlFor="phone">Номер телефона:</label>
          <input
            type="tel"
            id="phone"
            placeholder="Ваш номер телефона"
            className="form-input"
            required
          />
          <label htmlFor="message">Заявка на консультацию или вопрос:</label>
          <textarea
            id="message"
            placeholder="Ваше сообщение"
            className="form-textarea"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Отправить
          </button>
        </form>
        <div className="map-section">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.373789929434!2d37.61763431593067!3d55.75170698055302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5a738fa419%3A0x7c347d506f52311f!2sRed%20Square!5e0!3m2!1sen!2sru!4v1633012345678!5m2!1sen!2sru"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Карта"
            ></iframe>
          </div>
          <div className="icons">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link whatsapp"
            >
              <FaWhatsapp className="icon " />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://t.me/username"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link telegram"
            >
              <FaTelegramPlane className="icon " />
              <span>Telegram</span>
            </a>
            <a href="tel:+1234567890" className="icon-link phone">
              <FaPhoneAlt className="icon" />
              <span>Позвонить</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}