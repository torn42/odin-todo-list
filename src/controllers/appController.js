import layout from '../components/layout';
import projectsWrapper from '../components/projectsWrapper';
import { projectController } from './projectController';
import { uiController } from './uiController';
import { colors } from '../consts/colors';
import { format } from 'date-fns';
import { Todo } from '../models/todo';

const { yellow, red, green, purple } = colors;

const handlers = {
  projSelect: (e) => {
    const prevCard = uiController.getHighlightedProjectCard();
    const prevId = prevCard?.dataset.id;
    const card = e.detail.card;
    const id = card?.dataset.id;

    if (id === prevId) {
      return;
    }

    if (id) {
      const project = projectController.selectProject(id);
      uiController.renderSidebar(project);
      uiController.renderCard(card, project, true);

      if (prevCard) {
        const prevProject = projectController.getProjectById(
          prevCard.dataset.id
        );
        uiController.renderCard(prevCard, prevProject);
      }
    }
  },
  projCreate: () => {
    const num = projectController.getProjects().length + 1;
    projectController.createProject({
      title: `New Project ${num}`,
      description: `Description of the project ${num}`,
      todos: [],
      color: [yellow, red, green, purple][Math.floor(Math.random() * 4)],
    });

    const projects = projectController.getProjects();

    uiController.render(root, layout(projectsWrapper(projects)));
  },
  projChange: () => {
    const project = projectController.getCurrentProject();
    const card = uiController.getProjectCardById(project.id);
    uiController.renderCard(card, project, true);
  },
  projDelete: () => {
    const project = projectController.getCurrentProject();
    projectController.deleteProject(project.id);

    const card = uiController.getProjectCardById(project.id);
    uiController.renderSidebar();
    uiController.removeCard(card);
  },
  projCancel: () => {
    const project = projectController.getCurrentProject();
    const card = uiController.getProjectCardById(project.id);
    uiController.renderSidebar();
    uiController.renderCard(card, project, false);
  },
  todoSelect: (e) => {
    const todo = projectController.getTodoById(e.detail.id);

    uiController.renderModal(todo);
  },
  todoCreate: () => {
    const project = projectController.getCurrentProject();
    const num = project.todos.length + 1;
    project.addTodo(
      new Todo({
        title: `New todo ${num}`,
        description: `Description of the todo ${num}`,
        dueDate: `${format(new Date(), "yyyy-MM-dd'T'HH:mm")}`,
        priority: 1,
      })
    );

    uiController.renderSidebar(project);
  },
  todoChange: () => {
    const project = projectController.getCurrentProject();
    const card = uiController.getProjectCardById(project.id);
    uiController.renderSidebar(project);
    uiController.renderCard(card, project, true);
  },
  todoDelete: (e) => {
    const project = projectController.getCurrentProject();
    const card = uiController.getProjectCardById(project.id);

    project.removeTodo(e.detail.id);
    uiController.renderSidebar(project);
    uiController.renderCard(card, project, true);
  },
};

function init() {
  const root = document.querySelector('#root');
  projectController.loadProjects();
  const projects = projectController.getProjects();
  console.log(projects);
  uiController.render(root, layout(projectsWrapper(projects)));

  Object.entries(handlers).forEach(([event, handler]) => {
    document.addEventListener(event, (e) => {
      handler(e);
      projectController.saveProjects();
    });
  });
}

export const appController = {
  init,
};
