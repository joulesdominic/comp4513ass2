import { useState, useEffect } from 'react'
import './App.css'

import LoginView from './components/LoginView';
import HomeView from './components/HomeView';
import AboutModal from './components/Modal/AboutModal';
import FavouritesModal from './components/Modal/FavouritesModal';

const App = () => {
  //Login part
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [years, setYears] = useState([]);

  const [selectedYear, setSelectedYear] = useState(null);
  const [races, setRaces] = useState([]);

  const [favourites, setFavourites] = useState([]);
  const [showFavModal, setShowFavModal] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    setIsLoggedIn(true);
  };

  //Header part
  useEffect(() => {
    const url = 'https://patch-bold-exoplanet.glitch.me/api/seasons';
    console.log('Fetching years... here to check if I have gone infinite');
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        const yearsData = data
        .map(season => season.year)
        .filter(year => year >= 2000 && year <= 2023);
        
        setYears(yearsData);
      });}, []
    );

  const handleAboutClicked = () => {
    setShowAboutModal(true);
  }

  const handleCloseAboutModal = () => {
    setShowAboutModal(false);
  }

  //races part
  const fetchRaces = (year) => {
    const url = `https://patch-bold-exoplanet.glitch.me/api/races/season/${year}`;
    fetch(url)
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        return resp.json();
      })
      .then(data => {
        console.log('Data from API:', data); // Log the API response to check its structure
        const extractedData = data.map(race => ({
          round: race.round,
          name: race.name,
          raceId: race.raceId,
          year: race.year,
          date: race.date,
          time: race.time,
          url: race.url
        }));
        console.log('Extracted data:', extractedData); // Log to check extracted data
        setRaces(extractedData);
      })
      .catch(error => {
        console.error('Error fetching races:', error);
      });
  };

  const handleYearFilterChange = (event) => {
    const selectedYear = event.target.value;
    console.log('Selected year:', selectedYear)
    setSelectedYear(selectedYear);
    fetchRaces(selectedYear);
        
  }

  //favourites
  const addToFavourites = (item) => {
    setFavourites([...favourites, item]);
  };

  const handleCloseFavModal = () => {
    setShowFavModal(false);
  }

  const handleFavouritesClick = () => {
    setShowFavModal(true);
  }

  return (
    <div>
      {isLoggedIn && <HomeView 
        onFavouritesClick={handleFavouritesClick}
        onAboutClick={handleAboutClicked}
        onYearFilterChange={handleYearFilterChange}
        years={years}
        races={races}
        addToFavourites={addToFavourites}
        favourites={favourites}
        setShowFavModal={setShowFavModal}
      />}
      {!isLoggedIn && <LoginView onLogin={handleLogin} onRegister={handleRegister}/>}
      {showAboutModal && <AboutModal onClose={handleCloseAboutModal}/>}
      {showFavModal && <FavouritesModal favourites={favourites} onClose={handleCloseFavModal}/>}
    </div>
  )
}

export default App
