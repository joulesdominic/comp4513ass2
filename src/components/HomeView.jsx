import { useState } from "react";
import Header from "./Header";
import Races from "./Races";

const HomeView = ({ onFavouritesClick, onAboutClick, onYearFilterChange, years, races, addToFavourites, favourites, setShowFavModel }) => {
    const [selectedRace, setSelectedRace] = useState(null);

    const handleRaceClick = (race) => {
        setSelectedRace(race);
    };

    return (
        <div className="grid grid-rows-[auto,1fr] h-screen bg-gray-100">
            <div className="row-span-1 border-b border-gray-300">
                <Header
                    onFavouritesClick={onFavouritesClick}
                    onAboutClick={onAboutClick}
                    onYearFilterChange={onYearFilterChange}
                    years={years}
                />
            </div>
            <div className="row-span-1 bg-gray-200 p-4 border border-gray-300">
                <div className="h-full">
                    {races && races.length > 0 && (
                        <Races races={races} onRaceClick={handleRaceClick} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomeView;
