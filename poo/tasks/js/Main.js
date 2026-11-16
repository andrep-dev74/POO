import Task from "./Task.js";

const taskList = document.querySelector("#task-list");

async function init() {
  try {
    const response = await fetch("./data/tasks.json");

    if (!response.ok) {
      throw new Error("Could not load tasks.");
    }

    const tasks = await response.json();

    tasks.forEach((taskData) => {
      const task = new Task(taskData);
      taskList.append(task.render());
    });
  } catch (error) {
    taskList.textContent = error.message;
  }
}

init();
