import './Modal.css';

const ConstructorModal = ({onClose, constructor, addToFavourites}) => {
    return (
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <h1>Constructor Details</h1>
                <p>
                    
                    {constructor.name}, {constructor.nationality}, {constructor.url}
                </p>
                <button onClick={onClose} className="close-modal">X</button>
                <button onClick={addToFavourites} className='btn-modal'>Add Favourites</button>
            </div>
        </div>
        
        
    )
}

export default ConstructorModal;