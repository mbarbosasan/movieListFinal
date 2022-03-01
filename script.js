// toggle login container
const signupbutton = document.querySelector(".signup-button");
const loginbutton = document.querySelector(".login-button");
const loginModal = document.querySelector(".login-container");
const mainContainer = document.querySelector(".main-container");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const loginOption = document.querySelector(".login-option");
const signupOption = document.querySelector(".signup-option");
const myList = document.querySelector('.myList');

function changeOptionLogin(event) {
  event.preventDefault();
  registerForm.classList.add("deactive");
  loginForm.classList.remove("deactive");
  loginForm.classList.add("active");
  loginOption.classList.add("active");
  signupOption.classList.remove("active");
}

function changeOptionRegister(event) {
  event.preventDefault();
  loginForm.classList.add("deactive");
  registerForm.classList.remove("deactive");
  registerForm.classList.add("active");
  signupOption.classList.add("active");
  loginOption.classList.remove("active");
}

function loginButton(event) {
  event.preventDefault();
  mainContainer.classList.toggle("active");
  loginModal.classList.toggle("active");
  registerForm.classList.toggle("deactive");
  loginOption.classList.toggle("active");
}

function registerButton(event) {
  event.preventDefault();
  mainContainer.classList.toggle("active");
  loginModal.classList.toggle("active");
  loginForm.classList.toggle("deactive");
  signupOption.classList.toggle("active");
}
//event listener
signupbutton.addEventListener("click", registerButton);
loginbutton.addEventListener("click", loginButton);
loginOption.addEventListener("click", changeOptionLogin);
signupOption.addEventListener("click", changeOptionRegister);

async function fetchMovies() {
  const movieTrendingSection = document.querySelector(".trendingMovies");
  const tvTrendingSection = document.querySelector(".trendingTV");
  
  
    try { 
    const apiKey = "7163d507a975c5833a02e7ea696637bd";
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
    const pathName = "https://image.tmdb.org/t/p/w200";
    const response = await fetch(url);
    const json = await response.json();
    json.results.forEach((movie) => {
      createCard(movieTrendingSection, 'trendingSeries', 'src', `${pathName}${movie.poster_path}`);
    }) }
    catch (error) {
      const errorMessage = document.createElement('p');
      errorMessage.innerText = 'Infelizmente tivemos um problema, você tentar recarregar a página ou tentar novamente mais tarde.'
      movieTrendingSection.appendChild(errorMessage);
    }

    try {
      const apiKey = "7163d507a975c5833a02e7ea696637bd";
      const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`
      const pathName = "https://image.tmdb.org/t/p/w200";

      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      json.results.forEach((tv) => {
        createCard(tvTrendingSection, 'trendingSeries', 'src', `${pathName}${tv.poster_path}`);
      })
    } catch (error) {
      const errorMessage = document.createElement('p');
      errorMessage.innerText = 'Infelizmente tivemos um problema, você tentar recarregar a página ou tentar novamente mais tarde.'
      movieTrendingSection.appendChild(errorMessage);
    }

}

function createCard(wrapper, className, tagName, tagAttribute) {
  const movie = document.createElement('img')
  movie.classList.add(className);
  movie.setAttribute(tagName, tagAttribute);
  wrapper.appendChild(movie);
  return movie;  
}

fetchMovies();