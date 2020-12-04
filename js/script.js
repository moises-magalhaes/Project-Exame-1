const url = "https://api.spacexdata.com/v4/launches/";
const url1 = "https://api.spacexdata.com/v4/launches/latest/";
const url2 = "https://api.spacexdata.com/v4/dragons/";
const url3 = "https://api.spacexdata.com/v4/launches/next/";
const url4 = "https://api.spacexdata.com/v4/ships/";
const url5 = "https://api.spacexdata.com/v4/starlink/";
const url6 = "https://api.spacexdata.com/v4/history/";

const proxy = "https://noroffcors.herokuapp.com/";


const corsFix =  proxy + url3;


nextLaunchesContainer = document.querySelector("#next-launches")
let pageInfo = [];

const corsFix1 =  proxy + url4;
/*----------------------------next launches----------------------*/
async function callNext() {
    try {
        const response = await fetch(url3);
    
        pageInfo = await response.json();
        createHtml(pageInfo);

        console.log(pageInfo)

    } catch (error) {
        console.log(error);
        nextLaunchesContainer.innerHTML = "An error has occurred when calling the API";
    
    }
    };

    function createHtml(pageInfo){


        nextLaunchesContainer.innerHTML +=`
        <div class="subbox">
            <div class="title">
                <a href="next-launch.html">
                <h3>Next Launches</h3></a>
            </div>
            <div class="name">
                <h2>${pageInfo.name}</h2>
            </div>
            <div class="date">
                <p>${pageInfo.date_local}</p>
            </div>
            <div class="image">
            </div>
        <button>
            <a href="next-launch.html?id=${pageInfo.id}">
            Go to post</a></button>
            </div>
            `;
    }

    callNext() 

/*-----------------------------launches------------------------*/
const infoContainer = document.querySelector("#news-container");
async function callNews() {
try {
    const response = await fetch(url);

    pageInfo = await response.json();


    const jsonCount = pageInfo;

    infoContainer.innerHTML = "";

    for (let i = +112; i <= jsonCount.length; i--) {
       
        
          if (i == 110) {
            break;
        };

        if(!(jsonCount[i].details, jsonCount[i].links.patch.small)) {
            continue;
        
        };

        infoContainer.innerHTML +=`
        <div class="subbox">
            <div class="title">
                <a href="launches.html">
                <h3>Latest News</h3>
                <a>
            </div>
            <div class="name">
                <h2>${jsonCount[i].name}</h2>
            </div>
            <div class="date-time">
                <p>date and local: ${jsonCount[i].date_local}</p>
            </div>
            <div class = "image">
                <img src= "${jsonCount[i].links.patch.small}" alt="" />
            </div>
                <div class = "details">
                <p>${jsonCount[i].details}</p>
            </div>
      
            <button>
                <a href="launches.html?id=${jsonCount[i].id}">Go to post</a>
            </button>
        </div>`;
    }
    
}
catch (error) {
    console.log(error);
    infoContainer.innerHTML = "An error has occurred when calling the API";
}
}

callNews() 
/*--------------------dragons-----------------------------*/ 

const dragonContainer = document.querySelector("#dragon-container");


async function callDragons() {
    
try {
    const respond = await fetch(url2);

    pageInfo = await respond.json();


    console.log(pageInfo)
    const jsonCount = pageInfo;
    
    dragonContainer.innerHTML = "";

 

   for (let i = 0; i <= jsonCount.length; i++) {
       

    console.log(jsonCount[i].name)
    console.log(jsonCount[i].description)
              
       
           if (i == 1) {
            break;
        };

        

        dragonContainer.innerHTML +=`
            <div class="subbox">
                <div class="title">
                    <a href="dragons.html">
                    <h3>Spacecrafts</h3>
                    </a>
                </div>
                <div class="name">
                    <h2>${jsonCount[i].name}</h2>
                    </div>
                <div class = "image">
                    <img src= "${jsonCount[i].flickr_images[1]}" alt="" />
                </div>
                <div class="description">
                    <p>${jsonCount[i].description}</p>
                </div>
        
                <button>
                    <a href="dragon-detail.html?id=${jsonCount[i].id}">Go to post</a>
                </button>
            </div>`;
    }
    
}
catch (error) {
    console.log(error);
    dragonContainer.innerHTML = "An error has occurred when calling the API";
}
}

callDragons();

/*--------------------ships-----------------------------*/

const shipContainer = document.querySelector("#ship-container");


async function callShips() {
    
try {
    const respond = await fetch(corsFix1);

    pageInfo = await respond.json();


    const jsonCount = pageInfo;
    
    shipContainer.innerHTML = "";

 

   for (let i = 0; i <= jsonCount.length; i++) {
       
    
              
       
           if (i == 1) {
            break;
        };

     
        shipContainer.innerHTML +=`
        <div class="subbox">
            <div class="title"><a href="ships.html">
                <h3>Ships</h3></a>
            </div>
            <div class="name">
                <h2>${jsonCount[i].name}</h2>
            </div>
        <div class="image"></div>    
        
        <button>
            <a href="ship-detail.html?id=${jsonCount[i].id}">Go to post</a>
        </button>
        </div>`;
    }
    
}
catch (error) {
    console.log(error);
    shipContainer.innerHTML = "An error has occurred when calling the API";
}
}

callShips();

/*--------------------starlink-----------------------------*/

const starlinkContainer = document.querySelector("#starlink-container");


async function callstarlinks() {
    
try {
    const respond = await fetch(url5);

    pageInfo = await respond.json();



    const jsonCount = pageInfo;
    
    starlinkContainer.innerHTML = "";

 

   for (let i = 0; i <= jsonCount.length; i++) {
       

       
           if (i == 1) {
            break;
        };

     
        starlinkContainer.innerHTML +=`
        <div class="subbox">
            <div class="title">
                <a href="starlink.html">
                <h3>Satellite internet constelation</h3>
                </a>
            </div>
            <div class="name">
                <h2>${jsonCount[i].spaceTrack.OBJECT_NAME}</h2>
            </div>
            <div class="description">
                <p>${jsonCount[i].spaceTrack.COMMENT}</p>
            </div>
            <div class="image"></div>
        
        
            <button>
                <a href="starlink-detail.html?id=${jsonCount[i].id}">Go to post</a>
            </button>
        </div>`;
    }
    
}
catch (error) {
    console.log(error);
    starlinkContainer.innerHTML = "An error has occurred when calling the API";
}
}

callstarlinks();

/*----------------------------------pop-up---------------------------------*/
setTimeout(
    function changeScale(){
    document.getElementById("popup").style.transform = "scale(1)";
}, 5000);

function closePopup(){
    document.getElementById("popup").className = "inactive";
    document.getElementById("popup").style.transform = "scale(0)";
}