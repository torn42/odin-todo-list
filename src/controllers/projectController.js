import { Project } from '../models/project';
import { colors } from '../consts/colors';
import { Todo } from '../models/todo';

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
    title: 'project6asdjfkl;dsajfkl;adsjkl;f',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    todos: [
      new Todo({
        title: 'Todo examdasdaskdasjl;d;asjkldjaskl;ple1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        dueDate: '2025-06-11T17:18',
        priority: 4,
      }),
      new Todo({
        title: 'Todo examdasdaskdasjl;d;asjkldjaskl;ple1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        dueDate: '2025-06-11T17:18',
        priority: 4,
      }),
      new Todo({
        title: 'Todo examdasdaskdasjl;d;asjkldjaskl;ple1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        dueDate: '2025-06-11T17:18',
        priority: 4,
      }),
      new Todo({
        title: 'Todo examdasdaskdasjl;d;asjkldjaskl;ple1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        dueDate: '2025-06-11T17:18',
        priority: 4,
      }),
      new Todo({
        title: 'Todo examdasdaskdasjl;d;asjkldjaskl;ple1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        dueDate: '2025-06-11T17:18',
        priority: 4,
      }),
      new Todo({
        title: 'Todo examdasdaskdasjl;d;asjkldjaskl;ple1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        dueDate: '2025-06-11T17:18',
        priority: 4,
      }),
      new Todo({
        title: 'Todo examdasdaskdasjl;d;asjkldjaskl;ple1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        dueDate: '2025-06-11T17:18',
        priority: 4,
      }),
      new Todo({
        title: 'Todo examdasdaskdasjl;d;asjkldjaskl;ple1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        dueDate: '2025-06-11T17:18',
        priority: 4,
      }),
      new Todo({
        title: 'Todo examdasdaskdasjl;d;asjkldjaskl;ple1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        dueDate: '2025-06-11T17:18',
        priority: 4,
      }),
      new Todo({
        title: 'Todo examdasdaskdasjl;d;asjkldjaskl;ple1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        dueDate: '2025-06-11T17:18',
        priority: 4,
      }),
      new Todo({
        title: 'Todo example1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        dueDate: '2025-06-11T17:18',
        priority: 4,
      }),
      new Todo({
        title: 'Todo example1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        dueDate: '2025-06-11T17:18',
        priority: 4,
      }),
    ],
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
};
