import React from 'react';

const FavouritesModal = ({ favourites, onClose }) => {
    // Categorize favourites
    const circuits = favourites.filter(item => item.type === 'circuit');
    const drivers = favourites.filter(item => item.type === 'driver');
    const constructors = favourites.filter(item => item.type === 'constructor');

    return (
        <div className="modal">
            <div className="overlay" onClick={onClose}></div>
            <div className="modal-content">
                <h1>Favourites</h1>

                <div>
                    <h2>Circuits</h2>
                    <ul>
                        {circuits.map((circuit, index) => (
                            <li key={index}>{circuit.name}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2>Drivers</h2>
                    <ul>
                        {drivers.map((driver, index) => (
                            <li key={index}>{driver.forename} {driver.surname}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2>Constructors</h2>
                    <ul>
                        {constructors.map((constructor, index) => (
                            <li key={index}>{constructor.name}</li>
                        ))}
                    </ul>
                </div>

                <button className='close-modal' onClick={onClose}>X</button>
            </div>
        </div>
    );
};

export default FavouritesModal;
