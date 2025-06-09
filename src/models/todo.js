export class Todo {
  constructor({ title, description, dueDate, priority, checked }) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = checked || false;
  }

  changeStatus() {
    this.checked = !this.checked;
  }

  setData({ title, description, dueDate, priority }) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
