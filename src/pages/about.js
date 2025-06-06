import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {

    return (
        <div>
            <Header />
            <div className="about-page">
                <h1 className="section-title">Обо мне</h1>
                <div className="content">
                    <div className="text">
                        <h2>Приветствую Вас на моем сайте<br /></h2>
                        <span>
                            Меня зовут Светлана Колосова, я психолог, специализирующийся на работе с детьми, взрослыми и семьями.
                            <br />
                            В жизни каждого человека бывают моменты, когда нужна поддержка, понимание и профессиональный взгляд со стороны.
                            Я помогаю справляться со страхами, тревогой, адаптацией к новым условиям, детскими и семейными кризисами.
                            Если вам трудно найти выход из сложной ситуации, наладить отношения с близкими или просто хочется разобраться в своих чувствах — я готова помочь.
                            В своей работе я использую бережный и индивидуальный подход, создавая атмосферу доверия и комфорта.
                            <br /><br /> Сделайте первый шаг к гармонии и внутреннему равновесию — запишитесь на консультацию!
                            <br /><br /></span>
                        <button>Записаться</button>
                    </div>
                    <img src="/images/hello.jpg" alt="Светлана Колосова" />
                </div>
                <Footer />
            </div>
        </div>
    );
}