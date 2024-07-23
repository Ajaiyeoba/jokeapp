// const jokeContainer = document.getElementById("joke");
// const btn = document.getElementById("btn");

// //https://icanhazdadjoke.com/  https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist
// const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist";

// i changes this from github on muy pc

// let getJoke = () => {
//               //  jokeContainer.classList.remove("fade");
//                 fetch(url)

//                 .then(data => data.json())
//                 .then(item => 
//                              //   console.log(item.joke)
//          {
//                                                 jokeContainer.textContent = `${item.joke}`;
//                                                 jokeContainer.classList.add("fade");
//                                 }
//                                 )
// };
// btn.addEventListener("click", getJoke())
// getJoke();

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist";
const init = document.getElementById("jokesInit");
const btn = document.getElementById("btn");


let getJoke = () =>  { 
             fetch(url)
                .then(data => data.json())
                .then(item => 
                             //console.log((item.joke))
                              {
                                 init.textContent = `${item.joke}`;
                                // console.log(item.joke);
                              }
                );
                           }
btn.addEventListener("click", getJoke());
getJoke();
