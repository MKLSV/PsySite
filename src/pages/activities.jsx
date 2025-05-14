import Header from '../components/Header';
import Footer from '../components/Footer';

export default function activities() {
  return (
    <div>
      <Header />
      <div className='activities-page'>
        <div className="page-title">
          <span className='title'>Мои направления работы</span>

        </div>

        <div className='activities-container'>
          <div className='activities-items'>

            <div className='item'>
              <img src="/images/1.jpg" alt="Семейные Трудности" />
              <div className='text'>
                <span className="title">Семейные Трудности</span>
                <ul>
                  <li> Конфликты в семье</li>
                  <li> брак на грани развода</li>
                  <li> психологическое восстановление после развода </li>
                  <li> сложности в воспитании детей </li>
                  <li> повторяющиеся «негативные» сценарии </li>
                </ul>
              </div>
            </div>

            <div className='item second'>
              <div className='text'>
                <span className="title">Сложности в отношениях</span>
                <ul>
                  <li> Конфликты в семье</li>
                  <li> брак на грани развода</li>
                  <li> психологическое восстановление после развода </li>
                  <li> сложности в воспитании детей </li>
                  <li> повторяющиеся «негативные» сценарии </li>
                </ul>
              </div>
              <img src="/images/3.jpg" alt="Сложности в отношениях" />
            </div>

            <div className='item'>
              <img src="/images/2.jpg" alt="Личностное Развитие и Самооценка" />
              <div className='text'>
                <span className="title">Личностное Развитие и Самооценка</span>
                <ul>
                  <li> возрастные кризисы</li>
                  <li> ощущение потери смысла жизни</li>
                  <li> отсутствие жизненных целей </li>
                  <li> потеря желаний, энтузиазма и радости </li>
                  <li> страх осуждения, неодобрения в свой адрес </li>
                  <li> критичное отношение к людям </li>
                </ul>
              </div>
            </div>

            <div className='item second'>
              <div className='text'>
                <span className="title">Эмоциональные проблемы</span>
                <ul>
                  <li> отсутствие эмоций, безразличие</li>
                  <li> апатия, депрессия, хроническая усталость</li>
                  <li> страхи, тревога, панические атаки </li>
                  <li> перепады настроения, агрессия, подавленность </li>
                  <li> психосоматика </li>
                </ul>
              </div>
              <img src="/images/5.jpg" alt="Эмоциональные проблемы" />
            </div>


            <div className='item'>
              <img src="/images/6.jpg" alt="Детские терапии" />
              <div className='text'>
                <span className="title">Детские терапии</span>
                <ul>
                  <li> Песочная терапия – мягкий метод работы с эмоциями через создание сюжетов в песке</li>
                  <li> Арт-терапия – рисование, лепка и творчество для выражения чувств и переживаний.</li>
                  <li> Игровая терапия – решение внутренних конфликтов через игру в безопасной среде. </li>
                  <li> Эмоционально-образная терапия – работа с детскими страхами и тревожностью через образы. </li>
                </ul>
              </div>
            </div>

          </div>


        </div>
      </div>

      <Footer />
    </div >
  );
}