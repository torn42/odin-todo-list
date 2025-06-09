import { truncateText } from '../lib/truncateText';

function sidebar(project) {
  const sidebar = document.createElement('aside');
  sidebar.classList.add('sidebar');

  if (!project) {
    sidebar.classList.add('sidebar-empty');
    const icon = document.createElement('div');
    icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
            viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 
            312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27
             18l55 56q12 11 17.5 26t5.5 31q0 
             15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 
             56ZM608-631l-29-29-28-28 57 57Z"/></svg>
             `;

    icon.classList.add('sidebar-icon');

    const title = document.createElement('h2');
    title.classList.add('sidebar-title_null');
    title.textContent = 'No project choosed';

    sidebar.append(icon, title);

    return sidebar;
  }
  let tempTitle = project.title;
  let tempDescription = project.description;

  const title = document.createElement('h2');
  title.classList.add('sidebar-title__text');
  title.textContent = tempTitle;

  const editTitle = document.createElement('div');
  editTitle.classList.add('sidebar-edit-icon');
  editTitle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" 
                      height="24px" viewBox="0 -960 960 960" width="24px" 
                      fill="#e3e3e3"><path d="M200-200h57l391-391-57-57-391 
                      391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 
                      6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 
                      30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141
                       85-28-29 57 57-29-28Z"/></svg>`;

  const description = document.createElement('p');
  description.classList.add('sidebar-description');
  description.textContent = tempDescription;

  const editDescription = editTitle.cloneNode(true);

  editTitle.addEventListener('click', () => {
    const input = document.createElement('input');
    input.required = true;
    input.minLength = 2;
    input.maxLength = 50;
    input.classList.add('sidebar-input');
    input.value = tempTitle;

    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Min length is 2!';
    errorMessage.classList.add('error');

    input.addEventListener('blur', () => {
      if (input.checkValidity()) {
        errorMessage.remove();
        top.classList.remove('sidebar-top_error');
        tempTitle = input.value;
        title.textContent = tempTitle;
        input.replaceWith(title);
        top.append(editTitle);
      } else {
        top.append(errorMessage);
        top.classList.add('sidebar-top_error');
      }
    });

    editTitle.remove();
    title.replaceWith(input);
    input.focus();
  });

  editDescription.addEventListener('click', () => {
    const input = document.createElement('textarea');
    input.classList.add('sidebar-textarea');
    input.value = tempDescription;
    input.rows = 10;

    input.addEventListener('blur', () => {
      tempDescription = input.value;
      descriptionTitleWrapper.append(editDescription);
      if (tempDescription.length > 100) {
        description.textContent = truncateText(tempDescription, 100);
        description.append(expand);
      } else {
        description.textContent = tempDescription;
      }

      tempDescription;
      input.replaceWith(description);
    });

    editDescription.remove();
    description.replaceWith(input);
    input.focus();
  });

  const expand = document.createElement('button');
  expand.classList.add('sidebar-description__button');
  expand.textContent = 'more';

  const hide = document.createElement('button');
  hide.classList.add('sidebar-description__button');
  hide.textContent = 'hide';

  if (description.textContent.length > 100) {
    description.textContent = truncateText(description.textContent, 100);
    description.append(expand);
  }

  hide.addEventListener('click', () => {
    description.textContent = truncateText(description.textContent, 100);
    description.append(expand);
  });

  expand.addEventListener('click', () => {
    description.textContent = tempDescription;
    description.append(hide);
  });

  const descriptionWrapper = document.createElement('div');
  descriptionWrapper.classList.add('sidebar-description-wrapper');

  const descriptionTitleWrapper = document.createElement('div');
  descriptionTitleWrapper.classList.add('sidebar-top');

  const descriptionTitle = document.createElement('h3');
  descriptionTitle.textContent = 'Description';

  descriptionTitleWrapper.append(descriptionTitle, editDescription);

  descriptionWrapper.append(descriptionTitleWrapper, description);

  const todos = document.createElement('ul');

  project.todos.forEach((todo) => {
    const el = document.createElement('li');
    el.classList.add('sidebar-todo');
    el.textContent = todo.title;
    el.dataset.id = todo.id;

    const priority = document.createElement('span');
    priority.classList.add('sidebar-todo__priority');
    priority.textContent = todo.priority;

    el.append(priority);

    if (todo.checked) {
      el.classList.add('todo-done');
    }

    todos.append(el);
  });

  todos.addEventListener('click', (e) => {
    const id = e.target.closest('.sidebar-todo')?.dataset.id;
    const event = new CustomEvent('selectTodo', {
      detail: { id },
    });
    document.dispatchEvent(event);
  });

  const top = document.createElement('div');
  top.classList.add('sidebar-top');
  top.append(title, editTitle);

  const content = document.createElement('div');
  content.classList.add('sidebar-content');
  content.append(descriptionWrapper, todos);

  const saveBtn = document.createElement('button');
  saveBtn.classList.add('sidebar-save');
  saveBtn.textContent = 'Save';

  saveBtn.addEventListener('click', () => {
    project.setTitle(tempTitle);
    project.setDescription(tempDescription);

    const event = new CustomEvent('projChange', {
      detail: { id: project.id },
    });
    document.dispatchEvent(event);
  });

  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('sidebar-cancel');
  cancelBtn.textContent = 'Cancel';

  cancelBtn.addEventListener('click', () => {
    const event = new CustomEvent('projCancel', {});

    document.dispatchEvent(event);
  });

  const actions = document.createElement('div');
  actions.classList.add('sidebar-actions');
  actions.append(saveBtn, cancelBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-button');
  deleteBtn.textContent = 'Delete';

  deleteBtn.addEventListener('click', () => {
    const event = new CustomEvent('projDelete', {});

    document.dispatchEvent(event);
  });

  sidebar.append(top, content, actions, deleteBtn);

  return sidebar;
}

export default sidebar;
