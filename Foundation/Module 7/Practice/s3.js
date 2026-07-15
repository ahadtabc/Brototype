let username;

document.getElementById("mybtn").onclick = function () {
    username = document.getElementById("textbox").value;
    document.getElementById("myhead").innerText = `Hello ${username}`
}
// username = window.prompt("Type the uername");
// console.log(username);

