'use strict';

import { createHeader, createFooter } from './modules/init';
import createMain from './modules/home';
import createMenu from './modules/menu';
import createContract from './modules/contract';

createHeader();
createMain();
createMenu();
createContract();
createFooter();

function tab() {
    const findID = function () {
        Array.from(document.getElementsByClassName('tab')).forEach((div) => (div.style.display = 'none'));
        document.getElementById(this.innerText.toLowerCase()).style.display = 'flex';
    };
    document.querySelectorAll('.headerSub').forEach((header) => header.addEventListener('click', findID));
    document.getElementById('orderText').addEventListener('click', () => {
        Array.from(document.getElementsByClassName('tab')).forEach((div) => (div.style.display = 'none'));
        document.getElementById('menu').style.display = 'flex';
    })
}

tab();
