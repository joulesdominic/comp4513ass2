const Header = ({ onFavouritesClick, onAboutClick, onYearFilterChange, years }) => {
    return (
        <div className="header-bar bg-gray-200 border border-gray-400 flex justify-between items-center px-4 py-2 font-bold w-screen">
            <select
                className="mr-auto"
                onChange={onYearFilterChange}
            >
                <option value='year'>Years</option>
                {years.map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                ))}
            </select>
            <h1>F1 Dashboard Project</h1>
            <button className="ml-auto" onClick={onFavouritesClick}>Favourites</button>
            <button className="ml-4" onClick={onAboutClick}>About</button>
        </div>
    );
}

export default Header;
