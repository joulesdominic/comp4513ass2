import Qualifying from './Qualifying';
import DriverResults from './DriverResults';

const Results = ({ race }) => {
    return (
        <div>
            <h1 className='text-3xl font-bold'>Results for {race.name}</h1>
            <div className="flex">
                <div className="w-1/2 pr-2">
                    <Qualifying raceId={race.raceId} />
                </div>
                <div className="w-1/2 pl-2">
                    <DriverResults raceId={race.raceId} />
                </div>
            </div>
        </div>
    );
}

export default Results;
