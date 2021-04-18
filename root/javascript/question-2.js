// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const container = document.querySelector(".container");
container.innerHTML = "";

async function callPractice() {
    try{
        const response = await fetch(url);
        const output = await response.json();
        container.classList.remove("loading");
        for(let i = 0; i < 8; i++){
            container.innerHTML += `<div class = "game-item">
            <div>Name: ${output.results[i].name}</div>
            <div>Rating: ${output.results[i].rating}</div>
            <div>Tags: ${output.results[i].tags.length}</div>
            </div>`;
        }
    }
    catch(error){
        console.log(error);
        container.classList.remove("loading");
        container.innerHTML = `<div class = "error">Apologies, an error has occurred</div>`;
    }
}

callPractice();