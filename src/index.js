'use strict';

import { createHeader, createFooter } from './modules/init';
import createMain from './modules/home';
import createMenu from './modules/menu';

createHeader();

createMain();

createMenu();

createFooter();

function tab() {
    const findID = function () {
        Array.from(document.getElementsByClassName('tab')).forEach((div) => (div.style.display = 'none'));
        document.getElementById(this.innerText.toLowerCase()).style.display = 'flex'
    };
    document.querySelectorAll('.headerSub').forEach((header) => header.addEventListener('click', findID));
}

tab();
