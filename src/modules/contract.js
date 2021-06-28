'use strict';

function createContract() {
    const contract = document.querySelector('body').appendChild(document.createElement('div'));
    const form = contract.appendChild(document.createElement('form'));
    const map = contract.appendChild(document.createElement('div'));
    const iframe = map.appendChild(document.createElement('iframe'));
    contract.setAttribute('id', 'contract');
    contract.setAttribute('class', 'tab');
    map.setAttribute('id', 'map');
    iframe.src =
        'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8420.647784259085!2d-99.96375885553876!3d31.963092707486435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sth!4v1624781856141!5m2!1sen!2sth';
    iframe.style.border = 0;
    for (let i = 0; i < 4; i++) {
        const element = document.createElement('label');
        const element2 = document.createElement('textarea');
        const labelArr = ['Name:', 'E-mail:', 'Phone number:', 'Message:' ]
        form.appendChild(element);
        form.appendChild(element2);
        element.textContent = labelArr[i]
    }
    const send = form.appendChild(document.createElement('input'))
    send.id = 'send'
    send.type = 'submit'
    document.querySelectorAll('textarea')[3].id = 'messageText';
}

export default createContract;
