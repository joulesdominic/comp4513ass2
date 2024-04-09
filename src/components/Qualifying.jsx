import { useState, useEffect } from 'react';
import DriverModal from './Modal/DriverModal';
import ConstructorModal from './Modal/ConstructorModal';

const Qualifying = ({ raceId }) => {
    const [qualifyingResults, setQualifyingResults] = useState([]);
    const [driver, setDriver] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [showConstructorModal, setShowConstructorModal] = useState(false);

    const [constructor, setConstructor] = useState([]);

    useEffect(() => {
        const fetchQualifyingResults = async () => {
            try {
                if (!raceId) {
                    return;
                }
                const url = `https://patch-bold-exoplanet.glitch.me/api/qualifying/${raceId}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch qualifying results');
                }
                const data = await response.json();
                setQualifyingResults(data);
            } catch (error) {
                console.error('Error fetching qualifying results:', error);
            }
        };

        fetchQualifyingResults();
    }, [raceId]);

    const handleDriverNameClick = (driver) => {
        setDriver(driver);
        setShowModal(true);
    };

    const handleConstructorNameClick = (constructor) => {
        setConstructor(constructor);
        setShowConstructorModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setShowConstructorModal(false);
    };
    

    return (
        <div>
            <h4 className='text-2xl'>Qualifying</h4>
            <div>
                {qualifyingResults.map(result => (
                    <div key={result.position} className="bg-white p-2 my-2 rounded border border-gray-300">
                        <div className="flex justify-between font-bold">
                            <div className="w-1/6">Position</div>
                            <div className="w-2/6">Driver</div>
                            <div className="w-2/6">Constructor</div>
                            <div className="w-1/6">Q1</div>
                            <div className="w-1/6">Q2</div>
                            <div className="w-1/6">Q3</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="w-1/6">{result.position}</div>
                            <span className='cursor-pointer' onClick={() => handleDriverNameClick(result.drivers)}>
                                <div className="w-2/6">{result.drivers.forename} {result.drivers.surname}</div>
                            </span>
                            <span className='cursor-pointer' onClick={() => handleConstructorNameClick(result.constructors)}>
                                <div className="w-2/6">{result.constructors.name}</div>
                            </span>
                            <div className="w-1/6">{result.q1}</div>
                            <div className="w-1/6">{result.q2}</div>
                            <div className="w-1/6">{result.q3}</div>
                        </div>
                    </div>
                ))}
            </div>
            {showModal && (
                <DriverModal onClose={handleCloseModal} driver={driver} addToFavourites={() => {}} />
                
            )}
            {showConstructorModal && (<ConstructorModal onClose={handleCloseModal} constructor={constructor} addToFavourites={() => {}}/>)}
        </div>
    );
};

export default Qualifying;
