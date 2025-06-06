import { Project } from '../models/project';
import { colors } from '../consts/colors';

const { green, yellow, red, purple } = colors;

let projects = [
  new Project({
    title: 'project1',
    description: 'description',
    todos: [],
    color: yellow,
  }),
  new Project({
    title: 'project2',
    description: 'description',
    todos: [],
    color: red,
  }),
  new Project({
    title: 'project3',
    description: 'description',
    todos: [],
    color: green,
  }),
  new Project({
    title: 'project4',
    description: 'description',
    todos: [],
    color: yellow,
  }),
  new Project({
    title: 'project5',
    description: 'description',
    todos: [],
    color: purple,
  }),
  new Project({
    title: 'project6',
    description: 'description',
    todos: [],
    color: purple,
  }),
];

let currentProject = null;

function getProjects() {
  return [...projects];
}

function getProjectById(id) {
  return projects.find((project) => project.id === id);
}

function getCurrentProject() {
  return currentProject;
}

function selectProject(id) {
  currentProject = projects.find((project) => project.id === id);
  return currentProject;
}

export const projectController = {
  getProjects,
  getProjectById,
  getCurrentProject,
  selectProject,
};
