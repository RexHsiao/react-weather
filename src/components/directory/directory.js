import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './directory.scss';
import PropTypes from 'prop-types';
import Card from '../card';
import CurrentDayForecast from '../currentDayForecast';
import Add from '../add';


const Directory = ({toggle, searchSetting, forecasts, submitSearch, infoSetting, remove}) => {
    
    const [newForecasts, setNewForecasts] = useState();
    forecasts.then( value => { setNewForecasts(value)});
    
    return (
        <div className="directory">
            {newForecasts?.map(({currentDay}) => (
                    <CurrentDayForecast 
                        {...currentDay} 
                        key={currentDay.location}
                        toggle={toggle}
                        submitSearch={submitSearch}
                        infoSetting={infoSetting}
                        remove={remove}
                    />
            ))}
            <Card toggle={toggle} searchSetting={searchSetting} infoSetting={infoSetting}>
                <Add />
            </Card>
        </div>
    );
};

Directory.propTypes = {
    forecasts: PropTypes.shape({
        currentDay: PropTypes.object, 
        currentDayDetails: PropTypes.array, 
        upcomingDays: PropTypes.array
    })
};

export default Directory;