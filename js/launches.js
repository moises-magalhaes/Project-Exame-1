const url = "https://api.spacexdata.com/v4/launches/";

const infoContainer = document.querySelector(".wrapping");

async function callNews() {
try {
    const response = await fetch(url);
    pageInfo = await response.json();
    infoContainer.innerHTML = "";  
    createHTML(pageInfo);

        document.querySelector(".sort-by").addEventListener("change", function(event){

            if(event.target.value.includes("name")){
                pageInfo.sort(
                    function(a,b){
                        console.log(a);
                        console.log(b);
    
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
                        console.log(a);
                        console.log(b);
    
                        if (a.date_local < b.date_local){
                            return 1;
                        }
                       else if (b.date_local < a.date_local){
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

callNews();

function createHTML(jsonCount){
    infoContainer.innerHTML = "";

    for (let i = +112; i < jsonCount.length; i--) {

        if (i == 90) {
          break;
      };

      if(!(jsonCount[i].details, jsonCount[i].links.patch.small)) {
          continue;
      
      };

      infoContainer.innerHTML +=`
      <div class="subbox">
        <div class="title">
            <h3>Latest News</h3>
        </div>
        <div class="name">
            <h2>${jsonCount[i].name}</h2>
        </div>
        <div class="date-time">
            <p>date and local: ${jsonCount[i].date_local}</p>
        </div>
       
        <div class = "images">
            <img src= "${jsonCount[i].links.patch.small}" alt="" />
        </div>
        <div class = "details">
            <p> ${jsonCount[i].details}</p>
        </div>
        
        <button><a href="launches-detail.html?id=${jsonCount[i].id}">Go to post</a>
        </button>
      </div>`;
  }

}