function createNavbar (){
    const content = document.getElementById('content')
    
    const navbar = document.createElement('div')
    navbar.classList.add("navbar")
    const home = document.createElement('span');
    const menu = document.createElement('span');
    const contact = document.createElement('span');
    home.classList.add('navbar-home');
    menu.classList.add('navbar-menu');
    contact.classList.add('navbar-contact');
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);

    content.appendChild(navbar)
}

export { createNavbar };