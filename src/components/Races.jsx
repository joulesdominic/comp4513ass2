import { useState } from "react";
import Results from "./Results";
import Standings from "./Standings";
import CircuitModal from "./Modal/CircuitModal";

const Races = ({ races }) => {
    const [selectedRace, setSelectedRace] = useState(null);
    const [showResults, setShowResults] = useState(false);
    const [showStandings, setShowStandings] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const handleResultsClick = (race) => {
        setSelectedRace(race);
        setShowResults(true); // Show Results component
        setShowStandings(false); // Hide Standings component
    };

    const handleStandingsClick = (race) => {
        setSelectedRace(race);
        setShowResults(false); // Hide Results component
        setShowStandings(true); // Show Standings component
    };

    const handleRaceNameClick = (race) => {
        setSelectedRace(race);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 text-lg">
                <h2 className="text-3xl font-bold">Races for this year</h2>
                <ol>
                    {races.map((race) => (
                        <li key={race.round} className="bg-white p-2 my-2 rounded border border-gray-300">
                            <span className="cursor-pointer" onClick={() => handleRaceNameClick(race)}>
                                Round {race.round}: {race.name}
                            </span>
                            <div className="mt-2">
                                <button
                                    onClick={() => handleResultsClick(race)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                >
                                    Results
                                </button>
                                <button
                                    onClick={() => handleStandingsClick(race)}
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Standings
                                </button>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
            <div className="col-span-2 text-lg">
                {selectedRace && showResults && <Results race={selectedRace} />}
                {selectedRace && showStandings && <Standings race={selectedRace} />}
                {showModal && (<CircuitModal onClose={handleCloseModal} race={selectedRace} addToFavourites={() => {}}/>)}
            </div>
        </div>
    );
};

export default Races;
