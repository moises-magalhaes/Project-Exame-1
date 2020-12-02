const url = "https://api.spacexdata.com/v4/launches/next/"

async function callNext() {
    try {
        const response = await fetch(url);
    
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
                <a href="next-launch.html"></a>
                <h3>Next Launches</h3>
            </div>
            <div class="name">
                <h2>${pageInfo.name}</h2>
            </div>
            <div class="date">
                <p>${pageInfo.date_local}</p>
            </div>

            <div class="flight-number">
            <p>${pageInfo.flight_number}</p>
        </div>
            <div class="image">
            </div>
            </div>
            `;
    }

    callNext() 