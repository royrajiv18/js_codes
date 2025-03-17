// Open or create IndexedDB
const dbPromise = indexedDB.open("apiCacheDB", 1);

dbPromise.onupgradeneeded = (event) => {
  const db = event.target.result;
  db.createObjectStore("posts", { keyPath: "id" });
};

async function fetchAndCacheData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const db = (await dbPromise).result;
  const tx = db.transaction("posts", "readwrite");
  const store = tx.objectStore("posts");

  data.forEach((post) => store.put(post));

  return data;
}

fetchAndCacheData().then(console.log);
