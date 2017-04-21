var React = require('react');


var WeatherMessage = ({location,temp}) => {
  return(
      <h2>It's {temp} degrees in {location}!</h2>
  );
};

module.exports = WeatherMessage;
