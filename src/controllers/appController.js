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
    const card = uiController.getProjectCard(e);
    const id = card?.dataset.id;

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
}

export const appController = {
  init,
};
