import NavBar from "../NavBar/NavBar";
import About from "../About/About";
import Work from "../Work/Work"
import Testemonial from "../Testemonial/Testemonial"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer";
import BannerBackground from "../../assets/home-banner-background.png"
import BannerImage from "../../assets/home-banner-image.png"
import { FiArrowRight } from "react-icons/fi"
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <NavBar />

        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="Imagem de fundo do home container" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
              Seu Donut Favorito Entregue Em sua Casa
            </h1>
            <p className="primary-text">
              Diversos sabores deliciosos pra adoçar seus melhores momentos. Peça já o seu e receba um mimo surpresa.
            </p>

            <button className="secondery-button">
              Faça seu pedido <FiArrowRight />
            </button>

            <p className="primary-text">
              Ou venha comer conosco em um ambiente Climatizado e aconchegante com várias opções para seu pedido
            </p>
          </div>

          <div className="home-iamge-section">
            <div className="home-primary-image">
              <img src={BannerImage} alt="donuts" />
            </div>
          </div>
        </div>

        <About />
        <Work />
        <Testemonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;