const CityInfo = ({ name, country, lat, lon }) => (
  <div className='currentWeatherContainer'>
    <div className='weatherItem'>
      <h2>City</h2>
      <p>{name}</p>
    </div>
    <div className='weatherItem'>
      <h2>Country</h2>
      <p>{country}</p>
    </div>
    <div className='weatherItem'>
      <h2>Coordinates(lat/lon)</h2>
      <p>{lat} / {lon}</p>
    </div>
  </div>
);

export default CityInfo;
