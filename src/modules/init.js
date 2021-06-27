'use strict';

function elementLoop(where, type, cla, num, id = 1) {
    for (; id < num + 1; id++) {
        const element = document.createElement(type);
        where.appendChild(element);
        element.classList.add(cla);
        element.setAttribute('id', `${cla}${id}`);
    }
}

function elementFactory(parentCla, type, childCla, num, arrID = []) {
    for (let i = 0; i < num; i++) {
        const element = document.querySelectorAll(parentCla)[i].appendChild(document.createElement(type));
        element.setAttribute('class', childCla);
        element.setAttribute('id', arrID[i]);
        element.textContent = arrID[i]
    }
}

function createHeader() {
    const header = document.querySelector('body').appendChild(document.createElement('div'));
    const logo = header.appendChild(document.createElement('h2'));
    header.setAttribute('id', 'header');
    logo.setAttribute('id', 'logo');
    elementLoop(header, 'p', 'headerSub', 3);
    document.getElementById('logo').textContent = 'Void Steak';
    document.getElementById('headerSub1').textContent = 'Home';
    document.getElementById('headerSub2').textContent = 'Menu';
    document.getElementById('headerSub3').textContent = 'Contract';
}

function createFooter() {
    const footer = document.querySelector('body').appendChild(document.createElement('footer'));
    footer.setAttribute('id', 'footer');
    footer.textContent = 'copyright © 1874 - 2021 Voidforge LLC. All Rights Reserved.';
}


export { elementLoop, elementFactory, createHeader, createFooter };
