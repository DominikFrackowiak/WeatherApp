const dayNight = [
  "https://raw.githack.com/iamshaunjp/modern-javascript/lesson-108/weather_app/img/day.svg",
  "https://raw.githack.com/iamshaunjp/modern-javascript/lesson-108/weather_app/img/night.svg"
];
const weatherSvg = [
  "https://gist.githack.com/DominikFrackowiak/23871dfa247126696527dc87401a9b7b/raw/fc2f02c457a2ac615b51a6e8280626b47b6596d7/1.svg",
  "https://gist.githack.com/DominikFrackowiak/ffc933a06f9f7baebbb38380e7eef89b/raw/84008ff0e63526c9a89ed6e4d15aa100030d91a5/2.svg",
  "https://gist.githack.com/DominikFrackowiak/052d472ffd5c887c1c66170b648f8fa0/raw/648c43d649f236b95ea1c04461238dbbcbc58dcf/3.svg",
  "https://gist.githack.com/DominikFrackowiak/f98bd4cdf252e20bce417d3f2886ece4/raw/485d29a86cca5076ca0522f35bd5536b3d32b774/4.svg",
  "https://gist.githack.com/DominikFrackowiak/38289d0473a6ef32dddc01ad2fc3e057/raw/d212c3ca9940444e4ca7c836c6a8c347613ba690/5.svg",
  "https://gist.githack.com/DominikFrackowiak/c15ef2851302d15791ec619a35fa16b7/raw/67885851de06ac1f00266c45247e64f4088e5046/6.svg",
  "https://gist.githack.com/DominikFrackowiak/e8d216bec69461d621be8da2352c2cee/raw/13e0897ad6a48a6f6807b7d1583b97016e1bd855/7.svg",
  "https://gist.githack.com/DominikFrackowiak/1998cac1f0c6fa31fd44f00048cdb7bd/raw/30b2c26acafde4d309a84569153e6ef819d9be2b/8.svg",
  "https://gist.githack.com/DominikFrackowiak/27308d542c6e4c1dd2decb1b346495d0/raw/fbc89ef54bfe2fbaaa77083b1aefdc98697ee1f4/11.svg",
  "https://gist.githack.com/DominikFrackowiak/0764987094ad074d51a1ce192bd06f6a/raw/e3c56374adc099d29eca3b380b849bcae10d55ec/12.svg",
  "https://gist.githack.com/DominikFrackowiak/2d97ec041151b175edb2a2815685e3a4/raw/c1aee52efadd7b50d1fa1812aea71ca5df913e17/13.svg",
  "https://gist.githack.com/DominikFrackowiak/bbb14311f3c6b840fcd43d4e13ae0300/raw/5586098ba278c16b2a80892c7656c69051ad6b68/14.svg",
  "https://gist.githack.com/DominikFrackowiak/adeb3d53e1534df72fa47243832863f6/raw/b45d2e8f42ef062531432a0369fb4eeacddd2a7e/15.svg",
  "https://gist.githack.com/DominikFrackowiak/be75a23a28e0da27d676674251e36746/raw/02d7fcb82104b4fb24021749232da685937ec087/16.svg",
  "https://gist.githack.com/DominikFrackowiak/2228ec6ddce33069a80a595848c643eb/raw/9fd05c3b91c86bdba3af5b8bc57ccaaed7219d6c/17.svg",
  "https://gist.githack.com/DominikFrackowiak/a2fe2c88dd53c8aec05ecd160a7d0847/raw/9dc52f1c9e45896c2de7c1ac60eb66e700ec7cc7/18.svg",
  "https://gist.githack.com/DominikFrackowiak/9b92c87306908d8246c631b877898563/raw/09b2c6c8ed1075db47d5b3d0301482e97d4a5a9d/19.svg",
  "https://gist.githack.com/DominikFrackowiak/b5b320426e78c0188d7d63f21e879c37/raw/3f4b46c981893f53555da228cf3de8950b711fb9/20.svg",
  "https://gist.githack.com/DominikFrackowiak/51fe1f8b442f2a9ac8fef2bb2b6ccf9a/raw/6a4dbaecbbeb774afe3c0cba2e3885c548ea21c5/21.svg",
  "https://gist.githack.com/DominikFrackowiak/099fcce84909ea81630ffbbfe4f1292e/raw/e4e366e2496f1a8daca40455c5d90e344d277c45/22.svg",
  "https://gist.githack.com/DominikFrackowiak/2b5db303b8e40820c0f577b029c2a4ca/raw/c8e4d977724e427cb9a3470e16b8f17595b00c29/23.svg",
  "https://gist.githack.com/DominikFrackowiak/8233bccba8b9c3e19aa44979401e814a/raw/509ced009e89ab189ccf57a033738c0725055c46/24.svg",
  "https://gist.githack.com/DominikFrackowiak/7335e1ef9e95ee2da930005db3af0fb6/raw/9ecff8e970d3add2558850b3c630925272ed0a0b/25.svg",
  "https://gist.githack.com/DominikFrackowiak/d067406a5eb2bbd322522d3a612a0d5e/raw/2eceebb509fafc753202eebb0eba9247c842b30e/26.svg",
  "https://gist.githack.com/DominikFrackowiak/92cfc924995cd330da98bad483b9863e/raw/05fce18a56a001639000ab1ab0256dc467f1e1ac/27.svg",
  "https://gist.githack.com/DominikFrackowiak/ea4f8c0fa00af6d310144f2d231a31d9/raw/e4bb499df990c99adb8a5d0b7cd4158ec5b80aef/30.svg",
  "https://gist.githack.com/DominikFrackowiak/67f1d227624257324bf684207c66cd0d/raw/63c35617648a54bdcaeb2165c656a73dd5818aec/31.svg",
  "https://gist.githack.com/DominikFrackowiak/9bf3265003eca593b6b9ccb34d216161/raw/6db0454637eea3f1efa60e8b8d8c70d521dda867/32.svg",
  "https://gist.githack.com/DominikFrackowiak/d557af923ddc4a71ac47ed3732ef40e1/raw/c57aa8520b013089c542064c613c9a5c66590cd4/33.svg",
  "https://gist.githack.com/DominikFrackowiak/8119eb00c01edc96d8e679f6dc29cc44/raw/75eaf713419241f21b7366deaaa98063a6b7b723/34.svg",
  "https://gist.githack.com/DominikFrackowiak/295ffa2587ea212080cccf6286edb25b/raw/3253f57b27a2843251acc552913d97339c33fe09/35.svg",
  "https://raw.githack.com/gist/DominikFrackowiak/3447ab6b0fe4f118c148b80b3de42559/raw/90883f927178c51700f4900b77f8251a8085958a/36.svg",
  "https://gist.githack.com/DominikFrackowiak/39e67cae312496d0b6821940f8e2420d/raw/728ebed22c5b10ee7715138f59394fa715dca6d8/37.svg",
  "https://gist.githack.com/DominikFrackowiak/832a3a23d3dec9270d8f225b6205af7e/raw/f74681ee661bbb57d65f656e61703643861f59e0/38.svg",
  "https://gist.githack.com/DominikFrackowiak/b97b2e921f8b6fd46d7a90cac252bfde/raw/4b6975a9a29cf892c0011e4387c3c658006ee266/39.svg",
  "https://gist.githack.com/DominikFrackowiak/94174c0e71ed65d259ed6a3b14fe2fa2/raw/3ae52188955ec6be7912f7502d122e3a42e9362a/40.svg",
  "https://gist.githack.com/DominikFrackowiak/75d88f13cddd1eed0921a85404020ad2/raw/266282c56673b365961fd4c306d9b51e6720020e/41.svg",
  "https://gist.githack.com/DominikFrackowiak/a24a30a3636e802d432bbea8fbb14ec2/raw/fcf56bc75c4eda0c6646622a1c29e50cd0f0759a/42.svg",
  "https://gist.githack.com/DominikFrackowiak/2d87a6fa753cc84aeed3c597be1e780a/raw/3724d5997ca2bc00e6f17fea67eb9eaa893dd2fb/43.svg",
  "https://gist.githack.com/DominikFrackowiak/e5e470a4df1ae657418d5558d7e5fb83/raw/350a7ece8b746b05f5fba9a013e3a9453e8211b4/44.svg"
];

const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateUI = (data) => {
  // const cityDetails = data.cityDetails;
  // const weather = data.weather;
  const { cityDetails, weather } = data;
  console.log(weather);
  //update details template
  details.innerHTML = ` 
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
          <span>${weather.Temperature.Metric.Value}</span>
          <span>&deg;C</span>
  `;

  //update the night/day & icon images
  const iconSrc = weatherSvg[weather.WeatherIcon-1];
  icon.setAttribute('src', iconSrc);

  //update the night/day & icon images
  let timeSrc = null;
  if (weather.IsDayTime) {
    timeSrc = dayNight[0];
  } else {
    timeSrc = dayNight[1];
  }
  time.setAttribute("src", timeSrc);

  //remove the s-none class if present
  if (card.classList.contains("d-none")) card.classList.remove("d-none");
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  return {
    cityDetails,
    weather
  };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update ui with the new city
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});

let accuWeatherAPIKey;
console.log(accuWeatherAPIKey);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    accuWeatherAPIKey = localStorage.getItem("accuWeatherAPIKey");
    if (!accuWeatherAPIKey) {
      accuWeatherAPIKey = prompt("Enter API Key:");
      accuWeatherAPIKey = localStorage.setItem(
        "accuWeatherAPIKey",
        accuWeatherAPIKey
      );
    }

    return accuWeatherAPIKey;
  },
  false
);

//GET WEATHER INFORMATION
const getWeather = async (id) => {
  const base = `https://dataservice.accuweather.com/currentconditions/v1/`;
  const query = `${id}?apikey=${localStorage.getItem("accuWeatherAPIKey")}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

//GET CITY INFORMATION
const getCity = async (city) => {
  const base = `https://dataservice.accuweather.com/locations/v1/cities/search`;
  const query = `?apikey=${localStorage.getItem(
    "accuWeatherAPIKey"
  )}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

// getCity("Mieszków Greater Poland")
//   .then((data) => {
//     return getWeather(data.Key);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));
