export function fetchCharacters() {

  return fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then(responseData => {

      return responseData;
    });

}