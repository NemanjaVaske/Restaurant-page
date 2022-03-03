function menu(){
    const content = document.getElementById('content');

    const menuWindow = document.createElement('div');
    const menuTitle = document.createElement('h1');
    const menuContent = document.createElement('span');
    menuWindow.classList.add('menu-window');
    menuTitle.textContent = 'Welcome to our menu page';
    menuContent.textContent = 'This is our restaurant, look at menu and enjoy your food!';
    menuWindow.appendChild(menuTitle);
    menuWindow.appendChild(menuContent);
    content.appendChild(menuWindow);
}

export { menu }