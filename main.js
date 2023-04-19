import 'bootstrap/dist/css/bootstrap.css'; // import the Bootstrap CSS file

import ModalManager from './ModalManager';

const newWebsite = 'https://battesimi.duomo.firenze.it'

document.addEventListener('DOMContentLoaded', async () => {
  if(ModalManager.shouldShow()) {
        const manager = new ModalManager(newWebsite)
        manager.show()
  }
})