async function fetchData() {
  const cachedData = localStorage.getItem("posts");

  if (cachedData) {
    console.log("Serving from cache");
    return JSON.parse(cachedData);
  }

  console.log("Fetching from API");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  localStorage.setItem("posts", JSON.stringify(data));
  return data;
}

fetchData().then(console.log);
