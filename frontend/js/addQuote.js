window.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("post");

    btn.onclick = postNewQuote;

});

function postNewQuote() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            alert("Thank you !");
        }
    };

    xhr.open('POST', 'http://localhost:3000/articles');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    var jsonQuote = JSON.stringify(createQuote());
    console.log(jsonQuote);

    xhr.send(jsonQuote);

}

function createQuote() {
    var obj = {};
    obj.contributor = document.getElementById("firstName").value;
    obj.author = document.getElementById("author").value;
    obj.content = document.getElementById("quote").value;
    obj.chapter = document.getElementById("season").value;
    obj.episode = document.getElementById("episode").value;
    obj.image = document.getElementById("img").value;
    console.log(obj);
    return obj;
}