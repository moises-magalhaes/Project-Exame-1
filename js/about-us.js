const url = "https://api.spacexdata.com/v4/history/";
const historyContainer = document.querySelector(".wrapping");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);


async function callApi() {
    try{
        const response = await fetch (url);

        const results = await response.json();
        createHtml(results);
        console.log(results);

    } catch (error) {
        console.log(error);
        historyContainer.innerHTML = "An error has occurred when calling the API";
    }
};

callApi();

function createHtml(results){
    for(let i = 0; i < results.length; i++) {  
        historyContainer.innerHTML += `<div class="box">
                                        
                                           <div class="title"><h2>${results[i].title}</h2></div>
                                           <div class="title"><p>${results[i].details}</p></div>
                                       </div>`
    }
};

