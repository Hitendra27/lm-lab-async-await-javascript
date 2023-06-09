import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

// Random Cats API
const randomCats = "https://api.thecatapi.com/v1/images/search?limit=10";

// Google page API
const googlePage = "https://www.google.com/";

// const fetchData = (apiEndPoint) => {
//   fetch(apiEndPoint)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error));
// };

// async await fetch
const fetchData = async (apiEndPoint) => {
  try {
    const res = await fetch(apiEndPoint);
    const data = await res.json(); // res.write for google API.
    console.log(data);

  } catch (error) {
    console.log(error);

  }
}

fetchData(jsonTypicode);

fetchData(randomCats);

// fetchData(googlePage);

