const STORAGE_KEY = "daymark-tasks";

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const remainingCount = document.querySelector("#remaining-count");
const emptyState = document.querySelector("#empty-state");
const filterButtons = document.querySelectorAll(".filter-button");

let tasks = loadTasks();
let currentFilter = "all";

function loadTasks() {
  try {
    const savedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(savedTasks) ? savedTasks : [];
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function getVisibleTasks() {
  if (currentFilter === "active") {
    return tasks.filter((task) => !task.completed);
  }

  if (currentFilter === "completed") {
    return tasks.filter((task) => task.completed);
  }

  return tasks;
}

function createTaskElement(task) {
  const item = document.createElement("li");
  item.className = "task-item";
  if (task.completed) {
    item.classList.add("is-completed");
  }

  const checkbox = document.createElement("input");
  checkbox.className = "task-checkbox";
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.setAttribute("aria-label", `Mark ${task.text} as completed`);
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    saveTasks();
    renderTasks();
  });

  const text = document.createElement("span");
  text.className = "task-text";
  text.textContent = task.text;

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.type = "button";
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("aria-label", `Delete ${task.text}`);
  deleteButton.addEventListener("click", () => {
    tasks = tasks.filter((savedTask) => savedTask.id !== task.id);
    saveTasks();
    renderTasks();
  });

  item.append(checkbox, text, deleteButton);
  return item;
}

function updateEmptyState(visibleTasks) {
  const isEmpty = visibleTasks.length === 0;
  emptyState.hidden = !isEmpty;
  taskList.hidden = isEmpty;

  const title = emptyState.querySelector(".empty-title");
  const copy = emptyState.querySelector(".empty-copy");

  if (currentFilter === "active" && tasks.length > 0) {
    title.textContent = "All caught up.";
    copy.textContent = "There are no active tasks right now.";
  } else if (currentFilter === "completed" && tasks.length > 0) {
    title.textContent = "Not checked off yet.";
    copy.textContent = "Completed tasks will show up here.";
  } else {
    title.textContent = "A clear start.";
    copy.textContent = "Add a task above and make today yours.";
  }
}

function renderTasks() {
  const visibleTasks = getVisibleTasks();
  taskList.replaceChildren(...visibleTasks.map(createTaskElement));
  taskCount.textContent = `${tasks.length} ${tasks.length === 1 ? "task" : "tasks"}`;

  const remaining = tasks.filter((task) => !task.completed).length;
  remainingCount.textContent =
    remaining === 0
      ? "Nothing pending"
      : `${remaining} ${remaining === 1 ? "task" : "tasks"} left`;

  updateEmptyState(visibleTasks);
}

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = todoInput.value.trim();

  if (!text) {
    todoInput.focus();
    return;
  }

  tasks.unshift({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    text,
    completed: false,
  });

  saveTasks();
  currentFilter = "all";
  filterButtons.forEach((button) => {
    const isSelected = button.dataset.filter === currentFilter;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
  todoForm.reset();
  renderTasks();
  todoInput.focus();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach((filterButton) => {
      const isSelected = filterButton === button;
      filterButton.classList.toggle("is-selected", isSelected);
      filterButton.setAttribute("aria-pressed", String(isSelected));
    });
    renderTasks();
  });
});

renderTasks();
