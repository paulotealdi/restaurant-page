import renderHome from './home';
import renderContact from './contact';
import renderMenu from './menu';

function changeLinkContent(link) {
    const linkContent = document.querySelector('#linkContent');
    linkContent.innerHTML = '';

    if (link.innerText == "Menu")
        linkContent.appendChild(renderMenu());
    else if (link.innerText == "Home")
        linkContent.appendChild(renderHome());
    else if (link.innerText == "Contact")
        linkContent.appendChild(renderContact());
}

function eventHandler() {
    const divArray = [...document.querySelectorAll('.linkDiv')];
    changeLinkContent(divArray[0]);
    
    divArray.forEach(div => {
        div.addEventListener('click', (event) => {
            divArray.forEach(div => div.classList.remove('active'));
            event.target.classList.add('active');
            changeLinkContent(event.target);
        });
    });
}

export default eventHandler;