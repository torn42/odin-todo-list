import layout from '../components/layout';
import projectsWrapper from '../components/projectsWrapper';
import { projectController } from './projectController';
import { uiController } from './uiController';

function init() {
  const root = document.querySelector('#root');
  const projects = projectController.getProjects();
  uiController.render(root, layout(projectsWrapper(projects)));

  uiController.getProjectsDOM().addEventListener('click', (e) => {
    const prevCard = uiController.getHighlightedProjectCard();
    const prevId = prevCard?.dataset.id;
    const card = uiController.getProjectCard(e);
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
  });

  document.addEventListener('projChange', (e) => {
    const project = projectController.getProjectById(e.detail.id);
    const card = uiController.getProjectCardById(e.detail.id);
    uiController.renderCard(card, project, true);
  });

  document.addEventListener('selectTodo', (e) => {
    const todo = projectController.getTodoById(e.detail.id);

    uiController.renderModal(todo);
  });

  document.addEventListener('todoChange', () => {
    const project = projectController.getCurrentProject();
    const card = uiController.getProjectCardById(project.id);
    uiController.renderSidebar(project);
    uiController.renderCard(card, project, true);
  });
}

export const appController = {
  init,
};
