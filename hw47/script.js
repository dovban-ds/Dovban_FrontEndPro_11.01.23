const submit = document.querySelector("#submit");
const id = document.querySelector("#number");
const fullPost = document.querySelector(".post");
const postTitle = document.querySelector(".post-title");
const postBody = document.querySelector(".post-body");
const postId = document.querySelector(".post-id");

const button = document.createElement("button");
button.innerHTML = "Comments";
button.classList.add("btn");
fullPost.append(button);

const commentsBar = document.createElement("div");
commentsBar.classList.add("comments-bar");
fullPost.append(commentsBar);

const ul = document.createElement("ul");
commentsBar.append(ul);

button.style.display = "none";

button.addEventListener("click", () => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id.value}/comments`)
    .then((response) => response.json())
    .then((json) => {
      if (commentsBar.style.display === "") {
        commentsBar.style.display = "none";
      } else {
        commentsBar.style.display = "";
      }
      if (commentsBar.querySelector("li")) {
        return;
      }
      commentsBar.style.display = "";
      for (let item of json) {
        const commName = document.createElement("li");
        commName.innerHTML = `User: ${item.name}`;
        ul.append(commName);
        const commEmail = document.createElement("li");
        commEmail.innerHTML = `Email: ${item.email}`;
        commEmail.style.margin = "24px 0";
        ul.append(commEmail);
        const commBody = document.createElement("li");
        commBody.innerHTML = `Comment: ${item.body}`;
        ul.append(commBody);
        const commId = document.createElement("li");
        commId.innerHTML = `Id: ${item.id}`;
        commId.style.borderBottom = "3px solid Black";
        commId.style.margin = "24px 0";
        commId.style.padding = "0 0 24px 0";
        ul.append(commId);
      }
    })
    .catch((err) => alert(err));
});

submit.addEventListener("click", (submit) => {
  if (id.value < 1 || id.value > 100) {
    submit.preventDefault();
    return alert("Input correct value: 1 - 100");
  }
  submit.preventDefault();
  const allLi = document.querySelectorAll("li");
  if (allLi) {
    for (let item of allLi) {
      item.remove();
    }
  }
  fetch(`https://jsonplaceholder.typicode.com/posts?id=${id.value}`)
    .then((response) => response.json())
    .then((json) => {
      fullPost.classList.add("post-hidden");
      postTitle.innerHTML = `Title: ${json[0].title}`;
      postBody.innerHTML = `Body: ${json[0].body}`;
      postId.innerHTML = `Post id: ${json[0].id}`;
      button.style.display = "";
    })
    .catch((err) => alert(err));
});
