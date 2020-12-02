const url = "https://api.spacexdata.com/v4/starlink/";

const infoContainer = document.querySelector(".wrapping");
let pageInfo = [];



async function callstarlinks() {
    
try {
    const respond = await fetch(url);
    pageInfo = await respond.json();


    infoContainer.innerHTML = "";
    createHTML(pageInfo);
 
    document.querySelector(".sort-by").addEventListener("change", function(event){

        if(event.target.value.includes("name")){
            pageInfo.sort(
                function(a,b){
                    console.log(a);
                    console.log(b);

                    if (a.OBJECT_NAME < b.OBJECT_NAME){
                        return 1;
                    }
                   else if (b.OBJECT_NAME < a.OBJECT_NAME){
                        return -1;
                    }
                    else {
                        return 0;
                    }
                }
            );
        }
        if(event.target.value.includes("date")){
            pageInfo.sort(
                function(a,b){
                    console.log(a);
                    console.log(b);

                    if (a.CREATION_DATE < b.CREATION_DATE){
                        return 1;
                    }
                   else if (b.CREATION_DATE < a.CREATION_DATE){
                        return -1;
                    }
                    else {
                        return 0;
                    }
                }
            );
        }
        if(event.target.value.includes("descending")){
            pageInfo.reverse();
        }
        createHTML(pageInfo);

    })
  
}
catch (error) {
    console.log(error);
    infoContainer.innerHTML = "An error has occurred when calling the API";
}
}

callstarlinks();


function createHTML(jsonCount){
    infoContainer.innerHTML = "";

    for (let i = 0; i < jsonCount.length; i++) {
       

       
        if (i == 10) {
         break;
     };

  
     infoContainer.innerHTML +=`
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
        <div class="image">
        </div>
        
            <button><a href="starlink-detail.html?id=${jsonCount[i].id}">Go to post</a>
            </button>
        </div>`;
 }
 
}