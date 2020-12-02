const url = "https://api.spacexdata.com/v4/dragons";

const infoContainer = document.querySelector(".wrapping");
let pageInfo = [];


async function callDragons() {
    
    try {
        const response = await fetch(url);
        pageInfo = await response.json();

        infoContainer.innerHTML = "";
        createHTML(infoContainer);

        document.querySelector(".sort-by").addEventListener("change",function(event){

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
    
                        if (a.first_flight < b.first_flight){
                            return 1;
                        }
                       else if (b.first_flight < a.first_flight){
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
        
        
    } catch (error) {
        console.log(error);
        infoContainer.innerHTML = "An error has occurred when calling the API";
        }
}

callDragons();

function createHTML() {
    infoContainer.innerHTML = "";

    const jsonCount = pageInfo;
    for (let i = 0; i < jsonCount.length; i++) {
       

        console.log(jsonCount[i].name)
        console.log(jsonCount[i].description)
                  
           
               if (i == 3) {
                break;
            };
    
            
    
            infoContainer.innerHTML +=`
            <div class="subbox">
                <div class="title">
                    <a href="dragons.html"><h3>Spacecrafts</h3></a>
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
            
                <button><a href="dragon-detail.html?id=${jsonCount[i].id}">Go to post</a></button>
            </div>`;
    
    
    }
}