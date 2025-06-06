function createProjectCard() {
  const card = document.createElement('div');
  card.classList.add('project-card', 'project-create');

  const icon = document.createElement('div');
  icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
            viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
            </svg>
            `;
  icon.classList.add('project-card__icon');

  const title = document.createElement('h3');
  title.classList.add('project-create__title');
  title.textContent = 'Add project';

  card.append(icon, title);

  return card;
}

export default createProjectCard;
