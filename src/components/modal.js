import { truncateText } from '../lib/truncateText';
import { format, parseISO } from 'date-fns';

function modal(todo) {
  document.body.classList.add('scroll-off');

  const modalWrapper = document.createElement('div');
  modalWrapper.classList.add('modal-wrapper');

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const dateFormat = 'yyyy.MM.dd, HH:mm';

  let tempTitle = todo.title;
  let tempDescription = todo.description;
  let tempDueDate = todo.dueDate;
  let tempPriority = todo.priority;

  const dateObject = parseISO(todo.dueDate);

  const title = document.createElement('h2');
  title.textContent = todo.title;

  if (todo.checked) {
    title.classList.add('todo-done');
  }

  const editTitle = document.createElement('div');
  editTitle.classList.add('modal-edit-icon');
  editTitle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" 
  height="24px" viewBox="0 -960 960 960" width="24px" 
  fill="#e3e3e3"><path d="M200-200h57l391-391-57-57-391 
  391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 
  6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 
  30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141
  85-28-29 57 57-29-28Z"/></svg>`;

  editTitle.addEventListener('click', () => {
    const input = document.createElement('input');
    input.required = true;
    input.minLength = 2;
    input.maxLength = 50;
    input.classList.add('modal-input');
    input.value = tempTitle;

    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Min length is 2!';
    errorMessage.classList.add('error');

    input.addEventListener('blur', () => {
      if (input.checkValidity()) {
        top.insertBefore(checkbox, input);
        errorMessage.remove();
        top.classList.remove('modal-top_error');
        tempTitle = input.value;
        title.textContent = tempTitle;
        input.replaceWith(title);
        top.append(editTitle);
        saveBtn.disabled = false;
      } else {
        top.append(errorMessage);
        top.classList.add('modal-top_error');
        checkbox.remove();
        saveBtn.disabled = true;
      }
    });

    editTitle.remove();
    title.replaceWith(input);
    input.focus();
  });

  const descriptionWrapper = document.createElement('div');
  descriptionWrapper.classList.add('modal-description-wrapper');

  const descriptionTitleWrapper = document.createElement('div');
  descriptionTitleWrapper.classList.add('modal-top');

  const descriptionTitle = document.createElement('h3');
  descriptionTitle.textContent = 'Description';

  const description = document.createElement('p');
  description.classList.add('modal-description');
  description.textContent = tempDescription;

  const expand = document.createElement('button');
  expand.classList.add('modal-description__button');
  expand.textContent = 'more';

  const hide = document.createElement('button');
  hide.classList.add('modal-description__button');
  hide.textContent = 'hide';

  if (description.textContent.length > 300) {
    description.textContent = truncateText(description.textContent, 300);
    description.append(expand);
  }

  hide.addEventListener('click', () => {
    description.textContent = truncateText(description.textContent, 300);
    description.append(expand);
  });

  expand.addEventListener('click', () => {
    description.textContent = tempDescription;
    description.append(hide);
  });

  const saveBtn = document.createElement('button');
  saveBtn.classList.add('modal-save');
  saveBtn.textContent = 'Save';

  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('modal-cancel');
  cancelBtn.textContent = 'Cancel';

  const editDescription = editTitle.cloneNode(true);

  editDescription.addEventListener('click', () => {
    const input = document.createElement('textarea');
    input.classList.add('modal-textarea');
    input.value = tempDescription;
    input.rows = 10;

    input.addEventListener('blur', () => {
      tempDescription = input.value;
      descriptionTitleWrapper.append(editDescription);
      if (tempDescription.length > 300) {
        description.textContent = truncateText(tempDescription, 300);
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

  descriptionTitleWrapper.append(descriptionTitle, editDescription);

  descriptionWrapper.append(descriptionTitleWrapper, description);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('modal-checkbox');

  if (todo.checked) {
    checkbox.checked = true;
  }

  checkbox.addEventListener('change', () => {
    todo.changeStatus();

    if (todo.checked) {
      title.classList.add('todo-done');
    } else {
      title.classList.remove('todo-done');
    }
  });

  const dueDateWrapper = document.createElement('div');
  dueDateWrapper.classList.add('modal-edit');

  const dueDate = document.createElement('h4');
  dueDate.textContent = `Due date: ${format(dateObject, dateFormat)}`;

  const editDueDate = editTitle.cloneNode(true);

  dueDateWrapper.append(dueDate, editDueDate);

  editDueDate.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'datetime-local';

    input.addEventListener('change', () => {
      tempDueDate = input.value;
      const dateObject = parseISO(tempDueDate);
      input.value;

      dueDate.textContent = `Due date: ${format(dateObject, dateFormat)}`;
      input.replaceWith(dueDate);
      dueDateWrapper.append(editDueDate);
    });

    dueDate.replaceWith(input);
    input.focus();
    editDueDate.remove();
  });

  const priorityWrapper = document.createElement('div');
  priorityWrapper.classList.add('modal-edit');

  const priority = document.createElement('h4');
  priority.textContent = `Priotity: ${todo.priority}`;

  const editPriority = editTitle.cloneNode(true);

  editPriority.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'number';
    input.max = 4;
    input.min = 1;
    input.value = tempPriority;

    input.addEventListener('blur', () => {
      tempPriority = input.value;
      priority.textContent = `Priority: ${tempPriority}`;
      input.replaceWith(priority);
      priorityWrapper.append(editPriority);
    });

    priority.replaceWith(input);
    editPriority.remove();
    input.focus();
  });

  priorityWrapper.append(priority, editPriority);

  const top = document.createElement('div');
  top.classList.add('modal-top');
  top.append(checkbox, title, editTitle);

  const content = document.createElement('div');
  content.classList.add('sidebar-content');
  content.append(descriptionWrapper, dueDateWrapper, priorityWrapper);

  const actions = document.createElement('div');
  actions.classList.add('modal-actions');

  saveBtn.addEventListener('click', () => {
    todo.setData({
      title: tempTitle,
      description: tempDescription,
      dueDate: tempDueDate,
      priority: tempPriority,
    });

    const event = new CustomEvent('todoChange', {});
    document.dispatchEvent(event);

    modalWrapper.remove();
    document.body.classList.remove('scroll-off');
  });

  cancelBtn.addEventListener('click', () => {
    modalWrapper.remove();
    document.body.classList.remove('scroll-off');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-button');
  deleteBtn.textContent = 'Delete';

  deleteBtn.addEventListener('click', () => {
    const event = new CustomEvent('todoDelete', {
      detail: { id: todo.id },
    });

    document.dispatchEvent(event);
    modalWrapper.remove();
  });

  actions.append(saveBtn, cancelBtn);

  modal.append(top, content, actions, deleteBtn);
  modalWrapper.append(modal);

  return modalWrapper;
}

export default modal;
