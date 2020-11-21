function renderHome() {
    const homeContent = document.createElement('div');
    homeContent.id = 'homeContent';

    const homeText = document.createElement('p');
    homeText.innerHTML =
        `
        Hey! This is Penguin's Restaurant, welcome! :)<br>
        Here you'll find some good food, hope you like food. If so, enjoy!<br>
        Sed velit lacus, convallis eget leo efficitur, malesuada cursus odio. Maecenas aliquam ut nunc ut tincidunt. Nullam mollis posuere bibendum. Morbi fringilla vehicula metus vel commodo. In nunc turpis, eleifend eu iaculis sed, condimentum vitae massa. Nam posuere eros in molestie sodales.
        `;

    const img = document.createElement('img');
    img.src = "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
    img.alt = "Penguin's Restaurant image";
    img.id = "mainImg";

    homeContent.appendChild(homeText);
    homeContent.appendChild(img);
    return homeContent;
}

export default renderHome;