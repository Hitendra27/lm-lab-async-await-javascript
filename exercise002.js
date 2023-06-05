import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

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
    const data = await res.json();
    console.log(data);

  } catch (error) {
    console.log(error);

  }
}

fetchData(jsonTypicode);
