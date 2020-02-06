const rocketLeagueSS = "https://api.rawg.io/api/games/4003/screenshots";

fetch(rocketLeagueSS)
  .then(response => response.json())
  .then(json => getImages(json))
  .catch(error => console.log(error));
