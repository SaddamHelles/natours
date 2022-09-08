let placeHolderAPI = "https://jsonplaceholder.typicode.com/posts"
let data = ""
const promise = fetch(placeHolderAPI)
  .then((response) => console.log("The response is: ", response.json()))
  .catch((e) => console.log("Error: ", e))
  .finally(() => console.log("finally block here!!!"))
