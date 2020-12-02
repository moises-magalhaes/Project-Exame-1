const url = "https://api.spacexdata.com/v4/ships/";

const details = document.querySelector(".wrapping");

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
        <a href="ships.html">
            <h3>Ships
            </h3>
        </a>
        </div>

        <div class="name">
            <h2>${results.name}
            </h2>
        </div>

        <div class="image"><img src="${results.image}" alt="ship">
        </div>

        <div class="year">
            <p> Year built: ${results.year_built}</p>
        </div>
        <div class="port">
            <p> Home port: ${results.home_port}</p>
        </div>

        <div class="links"><h3>Link:</h3>
            <div class = "link">
                <p><a href="${results.link}">${results.link}</a></p>
            </div>

            </div>
        </div>
        
   </div>`;
};