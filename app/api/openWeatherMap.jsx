var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=61b95040d423d238e134eef59fa8f0f0&units=imperial';



module.exports = {
  getTemp:function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;//back tick allows for injection of variables using ${} everything is passed as a regualr js expression

    return axios.get(requestURL).then(function(res){
      if (res.data.cod && res.data.message){
          throw new Error(res.data.message);
      } else{
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
