(() => {
  const btn = document.querySelector("[data-form-btn]");

const createTask = (e) => {
  e.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  task.classList.add("card");
  const taskContent = document.createElement("div");
  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerHTML = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  taskContent.appendChild(deleteTask());
  const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
  task.appendChild(taskContent);
  list.appendChild(task);
  input.value = '';
};

btn.addEventListener("click", createTask);

const checkComplete = () => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener("click", completeTask);
  return i;
}

const deleteTask = () => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener("click", completeTask);
  return i;
}


const completeTask = (e) => {
  const element = e.target;
  element.classList.toggle('far');
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
}
})()
