import Link from 'next/link';
import { useEffect } from 'react';

export default function Header() {
  // Добавляем обработчик для мобильного меню
  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navBar = document.querySelector('.nav-bar');

    const handleMenuToggle = () => {
      navBar.classList.toggle('active');
    };

    menuToggle.addEventListener('click', handleMenuToggle);

    // Очистка обработчика при размонтировании компонента
    return () => {
      menuToggle.removeEventListener('click', handleMenuToggle);
    };
  }, []);

  return (
    <header className="app-header">
      <nav className="header-container">
        {/* Заголовок */}
        <h1 className="title">SV Kolosov Psy</h1>

        {/* Кнопка для мобильного меню */}
        <button className="menu-toggle" aria-label="Открыть меню">
          ☰
        </button>

        {/* Навигационное меню */}
        <ul className="nav-bar">
          <li>
            <Link href="/">Главная</Link>
          </li>
          <li>
            <Link href="/activities">Направления работы</Link>
          </li>
          <li>
            <Link href="/about-work">О работе</Link>
          </li>
          <li>
            <Link href="/services">Услуги</Link>
          </li>
          <li>
            <Link href="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}