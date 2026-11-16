export default class Task {
  constructor({ text, category, completed }) {
    this.text = text;
    this.category = category;
    this.completed = completed;
  }

  render() {
    const item = document.createElement("li");
    item.className = "task-item";

    const taskText = document.createElement("span");
    taskText.textContent = `${this.text} (${this.category})`;

    const completeButton = document.createElement("button");
    completeButton.type = "button";
    completeButton.textContent = "Complete";

    const updateView = () => {
      taskText.classList.toggle("task-item__text--completed", this.completed);
      completeButton.disabled = this.completed;
    };

    completeButton.addEventListener("click", () => {
      this.completed = true;
      updateView();
    });

    item.append(taskText, completeButton);
    updateView();

    return item;
  }
}
