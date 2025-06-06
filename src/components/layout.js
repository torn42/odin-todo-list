import sidebar from './sidebar';

function layout(node) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const sidebarWrapper = document.createElement('div');
  sidebarWrapper.classList.add('sidebar-wrapper');

  sidebarWrapper.append(sidebar());

  wrapper.append(node, sidebarWrapper);

  return wrapper;
}

export default layout;
