function sidebar(project) {
  const sidebar = document.createElement('aside');
  sidebar.classList.add('sidebar');

  if (!project) {
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

  const title = document.createElement('h2');
  title.classList.add('sidebar-title');
  title.textContent = project.title;

  const description = document.createElement('p');
  description.classList.add('sidebar-description');
  description.textContent = project.description;

  const todos = document.createElement('ul');

  project.todos.forEach((todo) => {
    const el = document.createElement('li');
    el.classList.add('sidebar-todo');
    el.textContent = todo.title;

    todos.append(el);
  });

  const saveBtn = document.createElement('button');
  saveBtn.classList.add('sidebar-save');
  saveBtn.textContent = 'Save';

  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('sidebar-cancel');
  cancelBtn.textContent = 'Cancel';

  const actions = document.createElement('div');
  actions.classList.add('sidebar-actions');
  actions.append(saveBtn, cancelBtn);

  return sidebar;
}

export default sidebar;
