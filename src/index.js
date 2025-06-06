'use strict';

import 'normalize.css';
import { appController } from './controllers/appController';
import './styles/styles.css';

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
