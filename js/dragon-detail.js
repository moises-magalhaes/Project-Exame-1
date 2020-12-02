const url = "https://api.spacexdata.com/v4/dragons/";

const details = document.querySelector(".dragons-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const detailUrl= url + id;

async function fetchProperties() {

    try{
        const response = await fetch(detailUrl);
        const results = await response.json();

        console.log(results.name);
   
        createHtml(results);
    }
    catch(error){
        console.log(error);
        details.innerHTML = "an error has occurred";
    }
};

fetchProperties();

function createHtml(results) {
    details.innerHTML = ` 
    <div class="subbox"> 
        <div class="title">
                <a href="dragons.html"><h3>Spacecrafts</h3></a>
            </div>
        <div class="name">
            <h2>${results.name}</h2>
        </div>    
        <div class="material">
            <p>Material: ${results.heat_shield.material}</p>
        </div>
        <div class = "size-meters">
            <p>Flight Number: <a>${results.heat_shield.size_meters}</a></p>
        </div>
        <div class = "first-flight">
            <p>First flight: ${results.first_flight}</p>
        </div>
       
        <div class="image">
            <img src= "${results.flickr_images}">
        </div>

        <div class = "type">
            <p>type: ${results.type}</p>

            <div class = "description">
            <p>First flight: ${results.description}</p>
        </div>
        </div>
   </div>`;
};