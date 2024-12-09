import "../Home/Home.css";

const Contact = () => {
    return (
        <div className="contact-page-wrapper">
            <p className="primary-subheading"> Contacte-nos</p>
            <h1 className="primary-heading"> Tem uma pergunta em mente?</h1>
            <h2 className="primary-heading"> Deixe-nos ajudá-los</h2>

            <div className="contact-form-container">
                <input type="text" placeholder="seu_email@gmail.com" />
                <button className="secondery-button">Enviar</button>
            </div>
        </div>
    )
}

export default Contact
