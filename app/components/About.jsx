var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About Page</h1>
      <p>This project was used to learn React web development</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Open Weather Map was used to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
