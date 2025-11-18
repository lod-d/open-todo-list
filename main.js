// Clé utilisée dans le localStorage
const STORAGE_KEY = "todo-web-tasks";

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const clearDoneBtn = document.getElementById("clear-done");
const clearAllBtn = document.getElementById("clear-all");

let tasks = [];

// Charger les tâches depuis le localStorage au démarrage
function loadTasks() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    tasks = [];
  } else {
    try {
      tasks = JSON.parse(saved);
    } catch (e) {
      console.error("Erreur de parsing du localStorage", e);
      tasks = [];
    }
  }
}

// Sauvegarder les tâches dans le localStorage
function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Rendu de la liste des tâches dans le DOM
function renderTasks() {
  list.innerHTML = "";

  if (tasks.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Aucune tâche pour le moment ✅";
    li.style.textAlign = "center";
    li.style.color = "#666";
    list.appendChild(li);
    return;
  }

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    if (task.done) {
      li.classList.add("done");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => toggleTask(task.id));

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "todo-delete";
    deleteBtn.textContent = "Supprimer";
    deleteBtn.addEventListener("click", () => deleteTask(task.id));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    list.appendChild(li);
  });
}

// Ajouter une tâche
function addTask(text) {
  const trimmed = text.trim();
  if (trimmed === "") return;

  const newTask = {
    id: Date.now(), // identifiant simple basé sur le timestamp
    text: trimmed,
    done: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
}

// Basculer l'état (fait / non fait)
function toggleTask(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, done: !task.done } : task
  );
  saveTasks();
  renderTasks();
}

// Supprimer une tâche
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
}

// Supprimer toutes les tâches terminées
function clearDone() {
  tasks = tasks.filter((task) => !task.done);
  saveTasks();
  renderTasks();
}

// Supprimer toutes les tâches
function clearAll() {
  if (confirm("Es-tu sûr de vouloir supprimer toutes les tâches ?")) {
    tasks = [];
    saveTasks();
    renderTasks();
  }
}

// Gestion du formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask(input.value);
  input.value = "";
  input.focus();
});

// Boutons d’actions
clearDoneBtn.addEventListener("click", clearDone);
clearAllBtn.addEventListener("click", clearAll);

// Initialisation
loadTasks();
renderTasks();
