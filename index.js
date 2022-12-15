// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
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
// YOUTUBE TUTORIAL
// document.getElementById("view").addEventListener('click', getData);

// function getData(){
//     // console.log('test')

//     // Get Api
//     fetch("https://e27efd15-66e0-401a-9dd5-ad8cb7607c60.mock.pstmn.io/search/trending", requestOptions)   
//     .then(response => response.text())
// }





// const btn2 = document.getElementById("refresh");
// const result = document.querySelector('.lead');
// // Assign our URL to a variable.
// const url = 'https://www.reddit.com/r/Wallstreetbets/top.json?limit=10&t=year';
// // Assign the first event.
// btn1.onclick = (e) =>{
//     fetch(url)
//     .then(response => response.json())
//     .then(data =>{
//         console.log(data)
//     })
// }


// SECOND TEST.
// var myHeaders = new Headers();
// myHeaders.append("origin", "https://www.reddit.com");
// myHeaders.append("accept-encoding", "gzip, deflate, br");
// myHeaders.append("x-reddit-loid", "00000000002s6v7f1i.2.1544780469944.Z0FBQUFBQmNFM3Exa3dYbXlCV3lDOFozZTJnTmJZdGtFUlMySkJqZzVEUWJKRDRBSjZOZllRNmF3MzJnSmY2c2dtTGMxQXFIN19vYW95Vi1qQzJsaFU1Z3FjeHFKc2Rib1c4SFhnMnVMcWYtbnN0ZUVEdUdJdEpQSDJqSGZ2VVBRVElxcjNBUUZWd0U");
// myHeaders.append("authorization", "Bearer 29934561-E120gHpbNsEXM0irDooRJf75Hcw");
// myHeaders.append("content-type", "application/x-www-form-urlencoded");
// myHeaders.append("accept", "*/*");
// myHeaders.append("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36");
// myHeaders.append("referer", "https://www.reddit.com/");

// myHeaders.append("authority", "oauth.reddit.com");
// myHeaders.append("accept-language", "en-US,en;q=0.9");
// myHeaders.append("x-reddit-session", "pJJeNwZJCfWDXWIwJY.0.1545093753930.Z0FBQUFBQmNHRUo1YjhpbUl4VFlucmY0RGpYNDA0QWRrZmlaNjBPR3pRRlNqOXdzVms0NHM4cFF0YzZIZVBXMWd5M1Rrc3QwSTNTUFpHNTMzSW9RLUV3alE1eU92amtmOE9fMDRvNFZ4TXNIeXlBOW9uRzB5U25RS2FlbHJsQnlZQWl3ejZXQjRyRXI");

// var urlencoded = new URLSearchParams();
// urlencoded.append("id", "t3_a737zu");
// urlencoded.append("dir", "1");
// urlencoded.append("api_type", "json");

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: urlencoded,
//   redirect: 'follow'
// };

// fetch("https://oauth.reddit.com/api/vote?redditWebClient=web2x&app=web2x-client-production&raw_json=1", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));



// THIRD TEST
// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
//   fetch("https://www.reddit.com/r/popular/", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
//   fetch("https://www.boredapi.com/api/activity/", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));



// // ERTYUIOPWJHGYFYWEISOFWGEVYFBIJWEFVHWBJKFOWIHFJWFWUIYTFDCVBN
// const getTodos =  async() => {
// const response= await fetch('./db.json');
// // Return a reponse .
// const data = await response.json();
// console.log(data);
// };
// getTodos()
// .then(data => console.log('resolved', data));

// // Fetch the data.
// fetch("./db.json")
// // Take the response.
// .then ((response) => {
//     console.log(response)
//     // Return the response.json. 
//     return response.json();
//     // Return the promise.
// }).then(data =>{
//     console.log(data);
//     // Catch any error at the end.
// }) .catch((err) => {

// });


// var myHeaders = new Headers();
// myHeaders.append("Accept", "application/json");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://e27efd15-66e0-401a-9dd5-ad8cb7607c60.mock.pstmn.io/search/trending", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));