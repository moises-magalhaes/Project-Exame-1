const url = "https://api.spacexdata.com/v4/launches/";

const details = document.querySelector(".box");

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
        console.log(results.details);
   
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
            <h2>${results.name}</h2>
        </div>    
        <div class="date-time">
            <p>date and local: ${results.date_local}</p>
        </div>
        <div class = "flight-number">
            <p>Flight Number: <a>${results.flight_number}</a></p>
        </div>
        <div class="image">
            <img src= "${results.links.patch.small}">
        </div>
        <div class = "details">
            <p>${results.details}</p>
        </div>
        <div class="links"><h3>Links:</h3>
            <div class = "wikipedia">
                <p><a href="${results.links.wikipedia}">${results.links.wikipedia}</a></p>
            </div>
            <div class="reddit">
                <p><a href="${results.links.reddit.campaign}">${results.links.reddit.campaign}</a></p>

            </div>
        </div>
        
   </div>`;
};