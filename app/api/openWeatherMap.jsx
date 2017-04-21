var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=61b95040d423d238e134eef59fa8f0f0&units=imperial';



module.exports = {
  getTemp:function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;//back tick allows for injection of variables using ${} everything is passed as a regualr js expression

    return axios.get(requestURL).then(function(response){
      if (response.data.cod && response.data.message){
          throw new Error(response.data.message);
      } else{
        return response.data.main.temp;
      }
    }, function(response){
      throw new Error(response.data.message);
    });
  }
}
