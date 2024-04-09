import DriverStandings from "./DriverStandings";
import ConstructorStandings from "./ConstructorStandings";

const Standings = ({ race }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold">Standings</h1>
            <div className="flex">
                <div className="w-1/2 pr-2">
                    <DriverStandings raceId={race.raceId}/>
                </div>
                <div className="w-1/2 pl-2">
                    <ConstructorStandings raceId={race.raceId}/>
                </div>
            </div>
        </div>
    )
}

export default Standings;
