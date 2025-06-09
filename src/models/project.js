export class Project {
  constructor({ title, description, todos = [], color }) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.todos = todos;
    this.color = color;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((item) => id !== item.id);
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  setDescription(newDescription) {
    this.description = newDescription;
  }
}
