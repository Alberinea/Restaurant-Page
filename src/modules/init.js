'use strict';

function elementFactory(where, type, cla, num, id = 1) {
    for (; id < num + 1; id++) {
        const element = document.createElement(type);
        where.appendChild(element);
        element.classList.add(cla);
        element.setAttribute('id', `${cla}${id}`);
    }
}

function createHeader() {
    const header = document.querySelector('body').appendChild(document.createElement('div'));
    const logo = header.appendChild(document.createElement('h2'));
    header.setAttribute('id', 'header');
    logo.setAttribute('id', 'logo');
    elementFactory(header, 'p', 'headerSub', 3);
    document.getElementById('logo').textContent = 'Void Steak';
    document.getElementById('headerSub1').textContent = 'Home'
    document.getElementById('headerSub2').textContent = 'Menu'
    document.getElementById('headerSub3').textContent = 'Contract';
}

function createFooter() {
    const footer = document.querySelector('body').appendChild(document.createElement('div'));
    footer.textContent = 'copyright © 1874 - 2021 Voidforge LLC. All Rights Reserved.';
}

export default elementFactory;
export { createHeader, createFooter };
