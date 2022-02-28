import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`its ${response.data.main.temp} in ${response.data.name}`);
  }
  let apiKey = "70eb5822db0e7a548a59c84b59fa1550";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    'hhhhhhh'
  );
}
