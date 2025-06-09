export class Todo {
  checked = false;
  constructor({ title, description, dueDate, priority }) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
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
