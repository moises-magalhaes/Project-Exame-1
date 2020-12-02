const url = "https://api.spacexdata.com/v4/starlink/";

const details = document.querySelector("#starlink-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const detailUrl= url + id;

async function fetchProperties() {

    try{
        const response = await fetch(detailUrl);
        const results = await response.json();

        
        createHtml(results);
    }
    catch(error){
        console.log(error);
        details.innerHTML = "an error has occurred";
    }
};

fetchProperties();

function createHtml(results) {
    details.innerHTML +=`
    <div class="subbox">
        <div class="title">
            <a href="starlink.html">
                <h3>Satellite internet constelation</h3>
            </a>
        </div>
        <div class="name">
            <h2>${results.spaceTrack.OBJECT_NAME}</h2>
        </div>
        <div class="description">
            <p>${results.spaceTrack.COMMENT}</p>
        </div>
        <div class="image"></div>
        <div class="description">
            <p>Mean motion: ${results.spaceTrack.MEAN_MOTION}</p>
        </div>
        <div class="description">
            <p>Eccentricity: ${results.spaceTrack.ECCENTRICITY}</p>
        </div>
        <div class="description">
            <p>Inclination: ${results.spaceTrack.INCLINATION}</p>
        </div>

    </div>`;
};