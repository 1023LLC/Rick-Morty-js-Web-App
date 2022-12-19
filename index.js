// Fetch the data from the public API URL.
fetch("https://rickandmortyapi.com/api/character")

    // Jsonify the response.
    .then(response => response.json())
    .then(data =>makeCards(data.results))
makeCards.forEach(character)
    function makeCards(charactersArray){
        // console.log(morty)
        // Create a variable that references our characters.
        const cardContainer = document.querySelector('.lead')
        console.log(charactersArray)
        // Iterate the characters array to create a new card for each character.
        charactersArray.forEach(character => {
            cardContainer.innerHTML = cardContainer.innerHTML +
             `
             <h2>${character.name}</<h2>
            <img src =${character.image}></img>
            
            `
        })   
        // console.log(charactersArray)        
}

