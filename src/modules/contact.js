function renderContact() {
    const contactContent = document.createElement('div');
    contactContent.id = 'contactContent';

    const contactText = document.createElement('p');
    contactText.innerHTML =
        `
        ☎️ | Telephone: 0000-0000<br>
        📱 | WhatsApp: 0000-0000<br>
        📍 | Adress: ---<br>
        `;

    contactContent.appendChild(contactText);
    return contactContent;
}

export default renderContact;