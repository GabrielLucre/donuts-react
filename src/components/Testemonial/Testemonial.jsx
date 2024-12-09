import ProfilePic from "../../assets/john-doe-image.png"
import { AiFillStar } from "react-icons/ai"
import "../Home/Home.css"

const Testemonial = () => {
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Avaliação</p>
                <h1 className="primary-heading">O que dizem sobre nós</h1>
                <p className="primary-text">
                    Nossos clientes adoram a qualidade e o sabor dos nossos donuts. Cada mordida é uma explosão de sabor que traz alegria e satisfação. Estamos sempre recebendo elogios pela variedade de sabores que oferecemos.
                </p>
            </div>

            <div className="testeminal-section-bottom">
                <img src={ProfilePic} alt="Imagem do avaliador" />
                <p>
                    &quot;Descobrir essa loja de donuts foi uma das melhores coisas que aconteceram! Os donuts são sempre frescos, macios e incrivelmente saborosos. O atendimento é excelente, e a entrega é sempre pontual. Recomendo para todos que querem uma experiência deliciosa e memorável.&quot;
                </p>

                <div className="testeminials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>João Almeida</h2>
            </div>
        </div>
    )
}

export default Testemonial
