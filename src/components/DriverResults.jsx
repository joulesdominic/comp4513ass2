import { useState, useEffect } from 'react';
import DriverModal from './Modal/DriverModal';
import ConstructorModal from './Modal/ConstructorModal';

const DriverResults = ({ raceId }) => {
    const [driverResults, setDriverResults] = useState([]);

    const [driver, setDriver] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [constructor, setConstructor] = useState([]);
    const [showConstructorModal, setShowConstructorModal] = useState(false);

    useEffect(() => {
        const fetchDriverResults = async () => {
            try {
                if (!raceId) {
                    return;
                }
                const url = `https://patch-bold-exoplanet.glitch.me/api/results/${raceId}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch driver results');
                }
                const data = await response.json();
                // Filter out results with null positions
                const filteredResults = data.filter(result => result.position !== null);
                setDriverResults(filteredResults);
            } catch (error) {
                console.error('Error fetching driver results:', error);
            }
        };

        fetchDriverResults();
    }, [raceId]);

    const handleDriverNameClick = (driver) => {
        setDriver(driver)
        setShowModal(true);
    }

    const handleConstructorNameClick = (constructor) => {
        setConstructor(constructor);
        setShowConstructorModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setShowConstructorModal(false);
    }

    return (
        <div>
            <h4 className='text-2xl'>Driver Results</h4>
            <div>
                {driverResults.map(result => (
                    <div key={result.drivers.driverRef} className="bg-white p-2 my-2 rounded border border-gray-300">
                        <div className="flex justify-between font-bold">
                            <div className="w-1/6">Position</div>
                            <div className="w-2/6">Driver</div>
                            <div className="w-2/6">Constructor</div>
                            <div className="w-1/6">Laps</div>
                            <div className="w-1/6">Points</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="w-1/6">{result.position}</div>
                            <span className='cursor-pointer' onClick={() => handleDriverNameClick(result.drivers)}>
                                <div className="w-2/6">{result.drivers.forename} {result.drivers.surname}</div>
                            </span>
                            <span className='cursor-pointer' onClick={() => handleConstructorNameClick(result.constructors)}>
                                <div className="w-2/6">{result.constructors.name}</div>
                            </span>
                            <div className="w-1/6">{result.laps}</div>
                            <div className="w-1/6">{result.points}</div>
                        </div>
                    </div>
                ))}
            </div>
            {showModal && (<DriverModal onClose={handleCloseModal} driver={driver} addToFavourites={() => {}}/>)}
            {showConstructorModal && (<ConstructorModal onClose={handleCloseModal} constructor={constructor} addToFavourites={() => {}}/>)}
        </div>
    );
};

export default DriverResults;
