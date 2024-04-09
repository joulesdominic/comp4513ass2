import './Modal.css';

const DriverModal = ({onClose, driver, addToFavourites}) => {
    return (
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <h1>Driver Details</h1>
                <p>
                    {driver.forename} {driver.surname}, {driver.dob}, {driver.nationality}, {driver.url}
                </p>
                <button onClick={onClose} className="close-modal">X</button>
                <button onClick={addToFavourites} className='btn-modal'>Add Favourites</button>
            </div>
        </div>
        
        
    )
}

export default DriverModal;