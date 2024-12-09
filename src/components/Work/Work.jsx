import "../Home/Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseFloodWater, faUtensils, faTruck } from "@fortawesome/free-solid-svg-icons"

const Work = () => {
    const workInfoData = [
        {
            image: <FontAwesomeIcon icon={faHouseFloodWater} />,
            title: "Feito como se fosse em casa",
            text: "Todos os nossos donuts são preparados com carinho e atenção aos detalhes, como se fossem feitos na cozinha da sua casa. Utilizamos receitas tradicionais e técnicas artesanais para criar donuts frescos e saborosos, que lembram os melhores momentos em família.",
        },
        {
            image: <FontAwesomeIcon icon={faUtensils} />,
            title: "Ingredientes selecionados",
            text: "Escolhemos os melhores ingredientes para garantir que nossos donuts sejam sempre frescos e deliciosos. Usamos apenas produtos de alta qualidade, desde farinha até os recheios, para proporcionar a você uma experiência gustativa excepicional.",
        },
        {
            image: <FontAwesomeIcon icon={faTruck} />,
            title: "Entrega em toda Cidade",
            text: "Levamos nossos donuts diretamente até você, em qualquer lugar da cidade. Nossa equipe de entregas garante que seu pedido chegue rápido e em perfeitas condições, para que você possa desfrutar de nossos donuts fresquinhos e saborosos, onde quer que esteja.",
        },
    ]

    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Nosso Trabalho</p>
                <h1>Como servimos você</h1>
                <p className="primary-text">
                    Nossa missão é proporcionar a você uma experiência única e deliciosa.
                    Desde a seleção cuidadosa dos ingredientes até a entrega no seu endereço, cada etapa do nosso processo é pensada para garantir que você recebaos melhores donuts da cidade. Estamos conprometidos com a qualidade e a satisfação dos nossos clientes.
                </p>
            </div>

            <div className="work-section-bottom">
                {workInfoData.map((data) => (
                    <div className="work-section-info" key={data.title}>
                        <div className="info-boxes-img-container">
                            {data.image}
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work
