// Exercice « Fetch »
// Récupérer le dernier lancement de fusée de SpaceX (API : https:// api.spacexdata.com/v4/launches/latest)
//  et afficher le nom de la roquette utilisée pour ce lancement
//  (2ème call sur : https://api.spacexdata.com/ v4/rockets/ID_ROCKET).
// Utiliser bien évidemment les promesses (et fetch est de rigueur ! Désolé pour les férus de XMLHttpRequest) !

const API_URL = 'https://api.spacexdata.com/v4/launches/latest';
const btn = document.querySelector('button');
const divRocket = document.getElementById('rocketView');

function handleFetchResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(':(');
    }
}

btn.addEventListener('click', function() {
    fetch(API_URL)
    .then(handleFetchResponse)
    .then((data) => {
         return fetch('https://api.spacexdata.com/v4/rockets/' + data.rocket);
    })
    .then(handleFetchResponse)
    .then((data) =>
        divRocket.innerText = 'Le nom de la roquette utilisée lors du dernier lancement chez SpaceX est : ' + data.name
    )
    .catch((error) => console.log(error));
})



    // Version de Ugo
//     const API = "https://api.spacexdata.com"
// const API_Version = "v4"
// const launchesAPI = "launches"
// const rocketAPI = "rockets"

// const API = "https://api.spacexdata.com"
// const API_Version = "v4"
// const launchesAPI = "launches"
// const rocketAPI = "rockets"

// const getLaunchesURL = (id = "latest") => {
// return ${API}/${API_Version}/${launchesAPI}/${id};
// }
// const getRocketsURL = (id = "latest") => {
// return ${API}/${API_Version}/${rocketAPI}/${id};
// }

// const handleFetchResponse = (response) => {
// if (response.ok)
// return response.json()
// else
// throw new Error('Problemo')
// }

// fetch(getLaunchesURL())
// .then(handleFetchResponse)
// .then((data) => fetch(getRocketsURL(data.rocket)))
// .then(handleFetchResponse)
// .then((data) => console.log(data.name))
// .catch((error) => console.log(error))
