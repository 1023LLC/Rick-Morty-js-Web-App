var fetchResults = ''
//   Get button, add an event listener and create a function.
  document.getElementById("view").addEventListener('click', fetchRandom);
function fetchRandom(){
  if(document.getElementsByClassName('lead')){
    document.getElementsByClassName('lead').remove()
  }

  let displayRandom= document.createElement('p')
  displayRandom.className='lead'
  fetch(`https://www.reddit.com/r/Wallstreetbets/top.json?limit=10&t=year?after=${after}`)
  .then(response => response.json())
  .then(body => {
    // Return a string that is after
    after = body.data.after
    // console.log(after)
    for(let index=0; index<body.data.children.length; index++){
      if(body.data.children[index].data.post_hint === 'text'){
        let h2 = document.createElement('h2')
        let h3 = document.createElement('h3')
        let h4 = document.createElement('h4')
        // Set the source
        h4.src= body.data.children[index].data.url_overriden_by_dest
        h3.textContent = body.data.children[index].data.title
        h2.appendChild(h3)
        h2.appendChild(h4)
        displayRandom.appendChild(h2)
      }
    }
    document.body.appendChild(displayRandom)
  }
  );
}
