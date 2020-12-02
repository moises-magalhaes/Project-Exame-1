//Selecting elements from the DOM

const searchButton = document.querySelector("#search-button");
const searchBar = document.querySelector("#search-bar");

searchBar.onclick = function(event){
    event.preventDefault();
    const value = searchBar.value;
    console.log("Value: ", value);
};


console.log(searchBar);
searchBar.addEventListener("keyup", (e) =>{
    const searchString = e.target.value;
   const filteredinfo = pageInfo.filter( findObject => {
       return findObject.name.includes(searchString) || 
       findObject.id.includes(searchString);
    });
    
    console.log(filteredinfo)
    console.log(e.target.value);
    callNews(filteredinfo);

});
