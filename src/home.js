function home(){
    const content = document.getElementById('content');
    
    const homeWindow = document.createElement('div');
    const homeTitle = document.createElement('h1');
    const homeContent = document.createElement('span');
    homeWindow.classList.add('home-window');
    homeTitle.textContent = 'Welcome to our homepage';
    homeContent.textContent = 'This is our restaurant, enjoy your food!';
    homeWindow.appendChild(homeTitle);
    homeWindow.appendChild(homeContent);
    content.appendChild(homeWindow);

}

export { home };