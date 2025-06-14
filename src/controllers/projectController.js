import { Project } from '../models/project';
import { colors } from '../consts/colors';
import { Todo } from '../models/todo';

const { green, yellow, red, purple } = colors;

let projects = [
  new Project({
    title: 'New project 1',
    description: 'Description of the project 1',
    todos: [],
    color: yellow,
  }),
];

let currentProject = null;

function loadProjects() {
  const loaded = JSON.parse(localStorage.getItem('projects'));

  if (loaded) {
    projects = loaded.map((project) => {
      project = new Project(project);
      project.todos = project.todos.map((todo) => new Todo(todo));

      return project;
    });
  }
}

function saveProjects() {
  localStorage.setItem('projects', JSON.stringify(projects));
}

function getProjects() {
  return [...projects];
}

function getProjectById(id) {
  return projects.find((project) => project.id === id);
}

function getCurrentProject() {
  return currentProject;
}

function getTodoById(id) {
  return currentProject.todos.find((todo) => todo.id === id);
}

function selectProject(id) {
  currentProject = projects.find((project) => project.id === id);
  return currentProject;
}

function createProject(project) {
  projects.push(new Project(project));
}

function deleteProject(id) {
  projects = projects.filter((project) => project.id !== id);
  currentProject = null;
}

export const projectController = {
  getProjects,
  getProjectById,
  getCurrentProject,
  getTodoById,
  selectProject,
  createProject,
  deleteProject,
  saveProjects,
  loadProjects,
};
