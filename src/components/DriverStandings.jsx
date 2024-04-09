import { useState, useEffect } from 'react';
import DriverModal from './Modal/DriverModal';

const DriverStandings = ({ raceId }) => {
    const [driverStandings, setDriverStandings] = useState([]);

    const [driver, setDriver] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchDriverStandings = async () => {
            try {
                if (!raceId) {
                    return;
                }
                const url = `https://patch-bold-exoplanet.glitch.me/api/standings/drivers/${raceId}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch driver standings');
                }
                const data = await response.json();
                setDriverStandings(data);
            } catch (error) {
                console.error('Error fetching driver standings:', error);
            }
        };

        fetchDriverStandings();
    }, [raceId]);

    const handleDriverNameClick = (driver) => {
        setDriver(driver)
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <div>
            <h4 className='text-2xl'>Driver Standings</h4>
            <div>
                {driverStandings.map(standing => (
                    <div key={standing.position} className="bg-white p-2 my-2 rounded border border-gray-300">
                        <div className="flex justify-between font-bold">
                            <div className="w-1/4">Position</div>
                            <div className="w-1/4">Driver</div>
                            <div className="w-1/4">Wins</div>
                            <div className="w-1/4">Points</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="w-1/4">{standing.position}</div>
                            <span className='cursor-pointer' onClick={() => handleDriverNameClick(standing.drivers)}>
                                <div className="w-2/6">{standing.drivers.forename} {standing.drivers.surname}</div>
                            </span>
                            <div className="w-1/4">{standing.wins}</div>
                            <div className="w-1/4">{standing.points}</div>
                        </div>
                    </div>
                ))}
            </div>
            {showModal && (<DriverModal onClose={handleCloseModal} driver={driver} addToFavourites={() => {}}/>)}
        </div>
    );
};

export default DriverStandings;
