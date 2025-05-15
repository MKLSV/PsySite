// import homePicture from '@/styles/images/hello.jpg'

import About from "@/components/about";
import Advantages from "../components/advantages";
import Services from "../components/services";
import Successes from "../components/successes";
import Practice from "@/components/practice";
import Call from "@/components/call";
import FAQ from "@/components/faq";
import BlogLink from "@/components/blog-link";
import Contacts from "@/components/contacts";

export default function HomePage() {


  return (
    <div className="home-page">

      <div className="home-container">
        <div className="home">
          <img src="/images/hello.jpg" alt="Психолог Светлана Колосова" />

          <div className="home-title">
            <span className="title">
              Помогаю детям и взрослым справляться с трудностями, находить гармонию и уверенность в себе
            </span>
            <span className="home-about">
              Моя цель — создать безопасное и доверительное пространство, где каждый может свободно выражать свои чувства, делиться переживаниями и находить поддержку. Я верю, что каждый человек обладает внутренней силой, которая помогает справляться с жизненными трудностями, и моя задача — помочь раскрыть этот потенциал.
              <br /><br />
              В процессе работы я помогаю глубже понять себя, свои эмоции и реакции, научиться осознавать свои потребности и желания. Вместе мы разрабатываем здоровые стратегии преодоления трудностей (coping-механизмы), которые позволят вам более уверенно справляться со стрессом, тревогой и сложными ситуациями.
              <br /><br />
              {/* Я поддерживаю вас на пути к личностному росту, принятию себя и обретению внутреннего баланса, помогая развивать уверенность в принятии решений и строить гармоничные отношения с собой и окружающими. */}
            </span>
            <div className="btn">
              <button>Записаться</button>
            </div>
          </div>
        </div>
      </div>
      <Successes />
      <Services />
      <Advantages />
      <About />
      <Practice />
      <Call />
      <FAQ />
      <BlogLink />
      <Contacts />
    </div>
  );
}