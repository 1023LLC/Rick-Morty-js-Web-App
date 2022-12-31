// Fire an event when the document has been completely parsed.
window.addEventListener('DOMContentLoaded', makeCards);

// Fetch the data from the public API URL.
fetch("https://rickandmortyapi.com/api/character")
    // Jsonify the response.
    .then(response => response.json())
    .then(data =>makeCards(data.results))
    
// Create a variable that references our characters.
let displayItems = document.querySelector('#view');
// Reference the data from our API to a variable.
let cardContainer = document.querySelector('.card-deck');

makeCards.forEach(character)
    function makeCards(charactersArray){
        // Add an event listener to the view button
        displayItems.addEventListener('click', () => {       
        // Iterate the characters array to create a new card for each character.
        charactersArray.forEach(character => {
            cardContainer.innerHTML = cardContainer.innerHTML +
            `
                <div class="card-deck">
                    <div class="card">
                        <img class="card-img-top"alt="Card image cap" src =${character.image}></img>
                            <div class="card-body">
                                <h5 class="card-title">Name: ${character.name}</<h5>
                                <p class="card-text"  style="font-size-10px;">Gender: ${character.gender}</p>
                                <br>
                                <p class="card-text"  style="font-size-10px;">Status: ${character.status}</p>
                                <p class="card-text"  style="font-size-10px;">Species: ${character.species}</p>
                                                                
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Planet: ${character.origin.name}</small>
                            </div>
                    </div>
                </div>        
            `
        }); 
    }); 
}

// Change view button color onClick().
function changeColor(){
    document.getElementById('view').style.backgroundColor = '#b3ff67';
}

// let btnView = document.getElementById('view');
//     btnView.addEventListener('click', () => btnView.style.backgroundColor='#b3ff67')
// Change search button color onClick().
function changeButtonColor(){
    document.getElementById('search-button').style.backgroundColor = '#b3ff66';
    }

// Create a search event.
const form =  document.getElementById('search-btn');
const inputCharacter = document.getElementsByClassName('form-control mr-sm-2');
const characterList = document.getElementsByClassName('card-group');
// const characterName = document.getElementById('character-name');

const searchCharacter = ()=>{
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        fetch(`https://rickandmortyapi.com/api/character/?name=${inputCharacter.value}`)
        .then(res => res.json())
        .then(data => { 
            data.items.forEach((character)=>{
                const myCharacter = document.createElement('div');
                myCharacter.innerHTML = 
                `
                
                    <div id="character-name" class="card">
                            <img class="card-img-top"alt="Card image cap" src =${character.image}></img>
                                <div class="card-body">
                                    <h5 class="card-title">Name: ${character.name}</<h5>
                                    <p class="card-text"  style="font-size-10px;">Gender: ${character.gender}</<p>
                                    
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Planet: ${character.origin.name}</small>
                                </div>
                        </div>
                
                `
                characterList.appendChild(myCharacter);
            })
        
        })

    })
};
searchCharacter();