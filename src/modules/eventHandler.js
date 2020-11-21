import renderHome from './home';
import renderContact from './contact';
import renderMenu from './menu';

function changeLinkContent(link) {
    const linkContent = document.querySelector('#linkContent');
    linkContent.innerHTML = '';

    if (link.id == "menu-link")
        linkContent.appendChild(renderMenu());
    else if (link.id == "home-link")
        linkContent.appendChild(renderHome());
    else if (link.id == "contact-link")
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