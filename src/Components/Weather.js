import React from 'react';

const Weather = (props) =>  {
    return (
        <div>
            <p>Tempreature : {props.tempreature}</p>
            <p>City : {props.city}</p>
            <p>Country : {props.country}</p>
            <p>Humidity : {props.humidity}</p>
            <p>Description : {props.description}</p>
            <p>Description : {props.description}</p>
        </div>
    )
}

export default Weather;