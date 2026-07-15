const url = "https://api.github.com/users/";
const user = "ahadtabc";

const data = fetch(url + user)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.bio);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Ahad the GREAT!!");
  });
