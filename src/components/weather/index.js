import SearchInput from './input';
import Forecast from './forecast';
import './styles.css';

function Weather() {
  return (
    <div className='appContainer'>
      <div className='inputContainer'>
        <SearchInput />
      </div>
      <div className='forecastContainer'>
        <Forecast />
      </div>
    </div>
  );
}

export default Weather;
