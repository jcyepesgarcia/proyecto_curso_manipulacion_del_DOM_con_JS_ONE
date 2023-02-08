const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");
const taskContainer = document.querySelector("[data-task-list]");

const createTask = (e) => {

  e.preventDefault();

  const value = input.value;

  const task = document.createElement('li');
  const contenido = `
    <div>
      <i class="far fa-check-square icon"></i>
      <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>
  `;
  task.innerHTML = contenido;
  taskContainer.appendChild(task);
  task.classList.add("card")


  input.value = "";
};

btn.addEventListener("click", createTask);
