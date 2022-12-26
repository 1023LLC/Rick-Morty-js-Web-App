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
                                <p class="card-text"  style="font-size-10px;">Gender: ${character.gender}</<p>
                                
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


// // Create a variable that references our characters.
// let displayCharacters = document.querySelector('#search-button');
// // Reference the data from our API to a variable.
// let characterContainer = document.querySelector('#search-deck');
// makeNewCards.forEach(searchCharacter)
//     function makeNewCards(searchCharactersArray){
//         // Add an event listener to the search button
//         displayCharacters.addEventListener('click', () => {       
//         // Iterate the characters array to create a new card for each character.
//         searchCharactersArray.forEach(searchCharacter => {
//             characterContainer.innerHTML = characterContainer.innerHTML +
//             `
//                 <div class="card-deck">
//                     <div class="card">
//                         <img class="card-img-top"alt="Card image cap" src =${character.image}></img>
//                             <div class="card-body">
//                                 <h5 class="card-title">Name: ${character.name}</<h5>
//                                 <p class="card-text"  style="font-size-10px;">Gender: ${character.gender}</<p>
                                
//                             </div>
//                             <div class="card-footer">
//                                 <small class="text-muted">Planet: ${character.origin.name}</small>
//                             </div>
//                     </div>
//                 </div>        
//             `
//         }); 
//     }); 
// }



// Create a search event.
const form =  document.querySelector('#search-btn');
const inputCharacter = document.querySelector('.form-control mr-sm-2');
const characterList = document.getElementById('search-deck');
const characterName = document.querySelectorAll('#character-name');

const searchCharacterName= () => {
    characterName.forEach((characterName)=> {
        characterName.addEventListener('click', (event)=>{
            fetch(`https://rickandmortyapi.com/api/character`)
        })
    .then((response)=> response.json())
    .then((data)=> data.forEach((element)=>{
        const li = document.createElement('li');
        li.textContent = element.name;
        console.log(element.name);
        characterList.appendChild(li);
    }))
})
}
    
const searchCharacter = ()=>{
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        fetch("https://rickandmortyapi.com/api/character")
        .then(response=>response.json())
        .then(data=>{ 
            data.items.forEach((element)=>{
                const character = document.createElement('div');
                character.innerHTML =
                `
                    <div class="card">
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
                characterList.appendChild(character);
            })
        
        })

    })
};
searchCharacter();
searchCharacterName();


// CAROUSEL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
<ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>
<div class="carousel-inner">
    
        <div class="carousel-item active">
                <img class="d-block w-100" alt="Card image cap" src =${character.image} alt="First slide"></img>
                <div class="carousel-caption d-none d-md-block">   
                    <h5>Name: ${character.name}</<h5>
                    <p>Gender: ${character.gender}</<p>
                    <p>Planet: ${character.origin.name}</p>
                    <p>Episode: ${character.episode}</p>
                </div>
        </div>
    
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div> 
</div>  */}