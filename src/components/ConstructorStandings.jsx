import { useState, useEffect } from 'react';
import ConstructorModal from './Modal/ConstructorModal';

const ConstructorStandings = ({ raceId }) => {
    const [constructorStandings, setConstructorStandings] = useState([]);

    const [constructor, setConstructor] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchConstructorStandings = async () => {
            try {
                if (!raceId) {
                    return;
                }
                const url = `https://patch-bold-exoplanet.glitch.me/api/standings/constructors/${raceId}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch constructor standings');
                }
                const data = await response.json();
                setConstructorStandings(data);
            } catch (error) {
                console.error('Error fetching constructor standings:', error);
            }
        };

        fetchConstructorStandings();
    }, [raceId]);

    const handleConstructorNameClick = (constructor) => {
        setConstructor(constructor);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <div>
            <h4 className='text-2xl'>Constructor Standings</h4>
            <div>
                {constructorStandings.map(standing => (
                    <div key={standing.position} className="bg-white p-2 my-2 rounded border border-gray-300">
                        <div className="flex justify-between font-bold">
                            <div className="w-1/4">Position</div>
                            <div className="w-1/4">Constructor</div>
                            <div className="w-1/4">Wins</div>
                            <div className="w-1/4">Points</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="w-1/4">{standing.position}</div>
                            <span className='cursor-pointer' onClick={() => handleConstructorNameClick(standing.constructors)}>
                                <div className="w-1/4">{standing.constructors.name}</div>
                            </span>
                            <div className="w-1/4">{standing.wins}</div>
                            <div className="w-1/4">{standing.points}</div>
                        </div>
                    </div>
                ))}
            </div>
            {showModal && (<ConstructorModal onClose={handleCloseModal} constructor={constructor} addToFavourites={() => {}}/>)}
        </div>
    );
};

export default ConstructorStandings;
