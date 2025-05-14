import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const articles = [
  {
    image: "/images/2.jpg",
    description: "Как справляться с тревогой: практические советы",
  },
  {
    image: "/images/3.jpg",
    description: "5 способов улучшить отношения в семье",
  },
  {
    image: "/images/4.jpg",
    description: "Как помочь ребенку адаптироваться к школе",
  },
  {
    image: "/images/1.jpg",
    description: "Эмоциональный интеллект: как его развивать",
  },
  {
    image: "/images/5.jpg",
    description: "Как справляться со стрессом на работе",
  },
  {
    image: "/images/6.jpg",
    description: "Как научиться говорить 'нет' без чувства вины",
  },
  {
    image: "/images/2.jpg",
    description: "Как справляться с эмоциональным выгоранием",
  },
  {
    image: "/images/3.jpg",
    description: "Как наладить отношения с подростком",
  },
  {
    image: "/images/4.jpg",
    description: "Как справляться с паническими атаками",
  },
  {
    image: "/images/5.jpg",
    description: "Как улучшить качество сна",
  },
  {
    image: "/images/3.jpg",
    description: "Как наладить отношения с подростком",
  },
  {
    image: "/images/4.jpg",
    description: "Как справляться с паническими атаками",
  },
  {
    image: "/images/5.jpg",
    description: "Как улучшить качество сна",
  },
  {
    image: "/images/3.jpg",
    description: "Как наладить отношения с подростком",
  },
  {
    image: "/images/4.jpg",
    description: "Как справляться с паническими атаками",
  },
  {
    image: "/images/5.jpg",
    description: "Как улучшить качество сна",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 364, min: 0 },
    items: 2,
  },
};

export default function ArticlesCarousel() {
  return (
    <div className="articles-carousel">
      <h1 className="section-title">Полезные статьи</h1>
      <Carousel
        responsive={responsive}
        infinite={true} // Бесконечная прокрутка
        autoPlay={false} // Автопрокрутка (можно включить)
        keyBoardControl={true} // Управление с клавиатуры
        customTransition="transform 500ms ease-in-out" // Плавный переход
        transitionDuration={500} // Длительность перехода
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {articles.map((article, index) => (
          <div key={index} className="article">
            <div className="all"> </div>
            <img src={article.image} alt={article.description} />
            <span>{article.description}</span>
          </div>
        ))}
      </Carousel>
    </div>
  );
}