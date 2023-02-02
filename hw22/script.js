// YOU NEED TO CREATE FUNCTIONS FOR SORTING BY COMMENT LENGTH AND BY ID
// I HAVE INITIALIZED THE FUNCTIONS sortById() AND sortByCommentLength()
// YOU ONLY NEED TO WRITE THE CODE INSIDE

// FETCHING FUNCTION
const getData = () =>
  fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );

// RENDERING FUNCTION
const render = (posts) => {
  let output = "";
  posts.forEach((post) => {
    output += `
      <div class="post-item">
        <h3>Title: ${post.title}</h3>
        <p>Body: ${post.body}</p>
        <div class="post-info">
          <p>ID: ${post.id}</p>
          <p>User ID: ${post.userId}</p>
          <p>Comment length: ${post.body.length}</p>
        </div>
      </div>
    `;
  });
  document.getElementById("posts").innerHTML = output;
};

// CLICK FUNCTION HANDLER
const handleClick = (sortFn) => {
  getData().then((posts) => {
    const sortedPosts = sortFn(posts);
    render(sortedPosts);
  });
};

// INITIAL
getData().then((posts) => {
  render(posts);

  const byIdBtn = document.getElementById("byId");
  byIdBtn.addEventListener("click", () => handleClick(sortById));

  const byCommentLengthBtn = document.getElementById("byCommentLength");
  byCommentLengthBtn.addEventListener("click", () =>
    handleClick(sortByCommentLength)
  );
});

// YOUR CODE UNDER THE COMMENT

// SORTING FUNCTION BY ID (post.id)
const sortById = (posts) => {
  // YOUR CODE HERE
  return posts.sort((a, b) => (a.id < b.id ? 1 : -1));
};

// SORTING FUNCTION BY LENGTH (post.body.length)
const sortByCommentLength = (posts) => {
  // YOUR CODE HERE
  return posts.sort((a, b) => (a.body.length > b.body.length ? 1 : -1));
};
