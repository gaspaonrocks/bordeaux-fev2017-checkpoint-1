window.addEventListener('DOMContentLoaded', function () {
    getArticles();
});

function getArticles() {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                console.log(data);
                createListGrp(data);
            } else {
                alert('GET : error.');
            }
        }
    };

    xhr.open('GET', 'http://localhost:3000/articles');
    xhr.send();
}

function createListGrp(obj) {
    for (let i of obj) {
        var ul = document.createElement("ul");
        var container = document.getElementsByClassName("container")[0];
        ul.setAttribute("class", "list-group");
        container.appendChild(ul);
        fillList(i, ul);
    }
}

function fillList(obj, ul) {
    for (let i = 1; i <= 4; i++) {
        var li = document.createElement("li");
        li.setAttribute("class", "list-group-item");
        ul.appendChild(li);
    }
    ul.getElementsByTagName("li")[0].textContent = obj.author;
    ul.getElementsByTagName("li")[1].textContent = obj.chapter;
    ul.getElementsByTagName("li")[2].textContent = obj.episode;
    ul.getElementsByTagName("li")[3].textContent = obj.content;
}