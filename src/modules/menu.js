'use strict';

import { elementLoop, elementFactory } from "./init";

function createMenu() {
    const menu = document.querySelector('body').appendChild(document.createElement('div'))
    const menuContainer = menu.appendChild(document.createElement('div'));
    menu.setAttribute('id', 'menu')
    menu.setAttribute('class', 'tab')
    menuContainer.setAttribute('id', 'menuContainer');
    elementLoop(menuContainer, 'div', 'list', 4)
    elementFactory('.list', 'div', 'pic', 4, ['rib-eye', 't-bone', 'sirloin', 'tenderloin'])
    elementFactory('.list', 'h1', 'menuText', 4, ['Rib-eye', 'T-bone', 'Sirloin', 'Tenderloin']);
}

export default createMenu