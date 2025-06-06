import projectCard from '../components/projectCard';
import sidebar from '../components/sidebar';

function render(node, updatedNode) {
  node.innerHTML = '';
  node.append(updatedNode);
}

function getProjectsDOM() {
  return document.querySelector('.projects');
}

function getProjectCard(e) {
  return e.target.closest('.project-card');
}

function getHighlightedProjectCard() {
  return document.querySelector('.project-card.highlighted');
}

function renderSidebar(project) {
  const sidebarWrapper = document.querySelector('.sidebar-wrapper');

  sidebarWrapper.innerHTML = '';
  sidebarWrapper.append(sidebar(project));
}

function renderCard(card, project, isSelected = false) {
  const update = projectCard(project, isSelected);

  card.replaceWith(update);
}

export const uiController = {
  render,
  renderSidebar,
  renderCard,
  getProjectsDOM,
  getProjectCard,
  getHighlightedProjectCard,
};
