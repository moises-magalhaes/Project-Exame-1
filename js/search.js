let searchBoxStatus = false;

let searchBox = function() {

    let getSearchBox = document.querySelector("#search-box");
    let getSearchBar = document.querySelector("#search-bar");
    let search = document.querySelector (".search");
    let searchBackground = document.querySelector (".search-background");

    if (searchBoxStatus === false){
        
        
        getSearchBar.style.borderSize = "2px";
        getSearchBar.style.position = "fixed";
        searchBackground.style.display = "block";
        getSearchBar.style.marginTop = "100px";

        searchBoxStatus = true;
   
    } 
    
    else if (searchBoxStatus === true){
        searchBackground.style.display = "none";
        
        searchBoxStatus = false;
    }
}

/*const forms = document.forms;
const getSearchBar = document.querySelector("#search-bar");

getSearchBar.addEventListener("keyup", function(e){
    const term = e.target.value.toLowerCase();
    const CalendarInfo = infoContainer.getElementByClassName("name");
    
    Array.from(CalendarInfo).forEach(function(filteredInfo){
        const box = filteredInfo.firstElementChild.textContent;
        if(box.toLowercase().indexOf(term)!=-1){
            box.style.display="block";

        } else{
            box.style.display="none";
        }
    });
});*/