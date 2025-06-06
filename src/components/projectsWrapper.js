import projectCard from './projectCard';
import createProjectCard from './createProjectCard';

function projectsWrapper(projects) {
  const projectsWrapper = document.createElement('div');
  projectsWrapper.classList.add('projects');

  projectsWrapper.append(createProjectCard());

  projects?.reverse().forEach((project) => {
    projectsWrapper.append(projectCard(project));
  });

  return projectsWrapper;
}

export default projectsWrapper;
