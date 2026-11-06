const API_BASE_URL = "https://jsonplaceholder.typicode.com";

const loadButton = document.querySelector("#load-data");
const statusMessage = document.querySelector("#status");
const outputElements = {
  users: document.querySelector("#users-output"),
  posts: document.querySelector("#posts-output"),
  todos: document.querySelector("#todos-output")
};

async function fetchData(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Request failed for ${endpoint}: ${response.status}`);
  }

  return response.json();
}

function renderData(users, posts, todos) {
  outputElements.users.textContent =
    `${users.length} users loaded. First: ${users[0]?.name ?? "Unavailable"}`;
  outputElements.posts.textContent =
    `${posts.length} posts loaded. First: ${posts[0]?.title ?? "Unavailable"}`;
  outputElements.todos.textContent =
    `${todos.length} todos loaded. First: ${todos[0]?.title ?? "Unavailable"}`;
}

async function loadApiData() {
  loadButton.disabled = true;
  statusMessage.className = "";
  statusMessage.textContent = "Loading users, posts, and todos concurrently...";

  try {
    const [users, posts, todos] = await Promise.all([
      fetchData("/users"),
      fetchData("/posts"),
      fetchData("/todos")
    ]);

    renderData(users, posts, todos);
    statusMessage.className = "success";
    statusMessage.textContent = "All three API requests completed successfully.";
  } catch (error) {
    statusMessage.className = "error";
    statusMessage.textContent =
      `Unable to load API data: ${error.message ?? "Unknown error"}`;
  } finally {
    loadButton.disabled = false;
  }
}

loadButton.addEventListener("click", loadApiData);
