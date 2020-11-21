import firstPage from './modules/firstPage';
import eventHandler from './modules/eventHandler';

function init() {
    const contentDiv = document.querySelector("#content");
    contentDiv.appendChild(firstPage());
    eventHandler();
}

init();