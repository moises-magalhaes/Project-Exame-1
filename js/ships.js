const url = "https://api.spacexdata.com/v4/ships/";
const shipContainer = document.querySelector(".wrapping");


async function callShips() {
    
try {
    const respond = await fetch(url);
    pageInfo = await respond.json();


    shipContainer.innerHTML = "";
    createHTML(pageInfo);

    document.querySelector(".sort-by").addEventListener("change", function(event){

        if(event.target.value.includes("name")){
            pageInfo.sort(
                function(a,b){
                    console.log(a.name);
                    console.log(b.name);

                    if (a.name < b.name){
                        return 1;
                    }
                   else if (b.name < a.name){
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
                  /*  console.log(a);
                    console.log(b);*/

                    if (a.year_built < b.year_built){
                        return 1;
                    }
                   else if (b.year_built < a.year_built){
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
    shipContainer.innerHTML = "An error has occurred when calling the API";
}
}

callShips();

function createHTML(jsonCount){

    for (let i = 0; i < jsonCount.length; i++) {
       
    
              
       
        if (i == 15) {
         break;
     };

  
     shipContainer.innerHTML +=`
     <div class="subbox">
         <div class="title">
             <a href="ships.html">
                 <h3>Ships
                 </h3>
             </a>
         </div>

         <div class="name">
             <h2>${jsonCount[i].name}
             </h2>
         </div>
         
         <div class="image"><img src="${jsonCount[i].image}" alt="">
         </div>
     
         <button>
            <a href="ship-detail.html?id=${jsonCount[i].id}">Go to post</a>
         </button>

     </div>`;
 }
 

}