function firstPage() {
    const firstPageDiv = document.createElement('div');
    firstPageDiv.id = 'firstPage';

    const title = document.createElement('h1');
    title.innerText = "🐧 Penguin's Restaurant";
    title.id = 'titleText';
    firstPageDiv.appendChild(title);

    const tabPagesContent = document.createElement('div');
    tabPagesContent.id = 'tabPagesContent';

    const navBar = document.createElement('nav');
    navBar.id = 'navBar';

    const link1 = document.createElement('div');
    link1.classList.add('linkDiv');
    link1.classList.add('active');
    link1.id = "home-link";
    link1.innerText = '🏡 Home';

    const link2 = document.createElement('div');
    link2.classList.add('linkDiv');
    link2.id = "menu-link";
    link2.innerText = '🥐 Menu';

    const link3 = document.createElement('div');
    link3.classList.add('linkDiv');
    link3.id = "contact-link";
    link3.innerText = '📞 Contact';

    navBar.appendChild(link1);
    navBar.appendChild(link2);
    navBar.appendChild(link3);

    const linkContent = document.createElement('div');
    linkContent.id = "linkContent";

    firstPageDiv.appendChild(navBar);
    firstPageDiv.appendChild(linkContent);

    return firstPageDiv;
}

export default firstPage;