'use strict';

const path = require('path');

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;
    const badgeElement = document.querySelector('.sidebar-container--collapsed .workspace-thumbnail[href="/chats/"] .badge');
    if (badgeElement && badgeElement.innerHTML !== '') {
      count = badgeElement.innerHTML;
    }
    Franz.setBadge(count);
  };
  Franz.injectCSS(path.join(__dirname, 'service.css'));
  Franz.loop(getMessages);
};
