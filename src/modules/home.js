'use strict';

function createMain() {
    const main = document.querySelector('body').appendChild(document.createElement('div'))
    const orderContainer = main.appendChild(document.createElement('div'));
    const order = orderContainer.appendChild(document.createElement('div'));
    const text = order.appendChild(document.createElement('p'))
    main.setAttribute('id', 'home')
    main.setAttribute('class', 'tab');
    orderContainer.setAttribute('id', 'orderContainer');
    order.setAttribute('id', 'order');
    text.textContent = 'Order Now'
    text.style.cursor = 'pointer'
}

export default createMain