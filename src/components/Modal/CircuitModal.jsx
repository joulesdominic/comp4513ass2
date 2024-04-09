import './Modal.css';

const CircuitModal = ({onClose, race, addToFavourites}) => {
    return (
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <h1>Circuit Details</h1>
                <p>
                    {race.name}, {race.date}, {race.time}, {race.url}
                </p>
                <button onClick={onClose} className="close-modal">X</button>
                <button onClick={addToFavourites} className='btn-modal'>Add Favourites</button>
            </div>
        </div>
        
        
    )
}

export default CircuitModal;