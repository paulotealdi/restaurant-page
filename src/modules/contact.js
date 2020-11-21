function renderContact() {
    const contactContent = document.createElement('div');
    contactContent.id = 'contactContent';

    const contactText = document.createElement('div');
    contactText.innerHTML =
        `
        <p>☎️ | Telephone: 1234-5678</p>
        <p>📱 | WhatsApp: 8765-4321</p>
        <p>📍 | Address: Not found yet...<br>but you probably can find us somewhere! 👍</p>
        `;

    // https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d29ybGR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60
    const img = document.createElement('img');
    img.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d29ybGR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60";
    img.alt = "World's image";
    img.id = "contactImg";

    contactContent.appendChild(contactText);
    contactContent.appendChild(img);
    return contactContent;
}

export default renderContact;