function projectCard(project, isSelected) {
  const card = document.createElement('article');
  card.classList.add('project-card');
  if (isSelected) {
    card.classList.add('highlighted');
  }

  const title = document.createElement('h3');
  title.classList.add('project-card__title');
  title.textContent = project.title;

  const description = document.createElement('p');
  description.classList.add('project-card__description');
  description.textContent = project.description;

  const todos = document.createElement('div');
  todos.classList.add('project-card__todos');

  project.todos.forEach((todo) => {
    const todoEl = document.createElement('p');
    todoEl.textContent = todo.title;
    todos.append(todo);
  });

  card.style.backgroundColor = project.color;

  card.dataset.id = project.id;

  card.append(title, description, todos);

  return card;
}

export default projectCard;
