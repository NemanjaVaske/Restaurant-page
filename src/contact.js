function contact(){
    const content = document.getElementById('content');

    const contactWindow = document.createElement('div');
    const contactTitle = document.createElement('h1');
    const contactContent = document.createElement('span');
    contactWindow.classList.add('contact-window');
    contactTitle.textContent = 'Welcome to our contact page';
    contactContent.textContent = 'You can reach as at bestfood@gmail.com';
    contactWindow.appendChild(contactTitle);
    contactWindow.appendChild(contactContent);
    content.appendChild(contactWindow);
}

export { contact }