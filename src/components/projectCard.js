import { truncateText } from '../lib/truncateText';

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

  if (description.textContent.length > 55) {
    description.textContent = truncateText(description.textContent);
  }

  const todos = document.createElement('ul');
  todos.classList.add('project-card__todos');

  project.todos.slice(0, 6).forEach((todo) => {
    const todoEl = document.createElement('li');
    todoEl.classList.add('project-card__todo');
    todoEl.textContent = truncateText(todo.title, 18);
    todos.append(todoEl);
  });

  if (project.todos.length > 7) {
    const more = document.createElement('p');
    more.style.fontSize = '1.2rem';
    more.style.paddingLeft = '2rem';
    more.textContent = '...';

    todos.append(more);
  }

  card.style.backgroundColor = project.color;

  card.dataset.id = project.id;

  card.append(title, description, todos);

  return card;
}

export default projectCard;
