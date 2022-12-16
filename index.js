var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
//   Get button, add an event listener and create a function.
  document.getElementById("view").addEventListener('click', getData);

  function getData(){
    // Get API.
  fetch("https://www.reddit.com/r/Wallstreetbets/top.json?limit=10&t=year")
    .then(response => response.json())
    .then(data => {

    let authors = data.posts;
    // console.log(authors);
    // Get data value
    let result ="<p><center>Recent popular posts on Reddit</center></p>";

    // Get data loop through.
    authors.forEach(function(lists){
        result += `
       <p class="lead">Author: ${lists.author} </p>
       <p class="lead">Title: ${lists.title} </p>
       <p class="lead">Kind: ${lists.kind} </p>
       <p class="lead">Thread: ${lists.text} </p>
        <a id ="refresh" class="btn btn-primary btn-lg" href="#" role="button" style="background-color: orangered; color: white; border-color: white;">Refresh</a>
        `;
    });

    // Show data on the screen.
    document.getElementsByClassName('lead').innerHTML = result;
  });
};
