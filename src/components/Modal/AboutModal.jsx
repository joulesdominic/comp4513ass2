import './Modal.css';

const AboutModal = ({onClose}) => {

    return (
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <h1>About this project</h1>
                <p>
                    Created by Dominic Ramos: https://github.com/joulesdominic/comp4513ass2
                </p>
                <p>
                    This project is a single page application built with Vite + React.
                </p>
                <button onClick={onClose} className="close-modal">X</button>
            </div>
        </div>
        
        
    )
}
export default AboutModal;