import {createNavbar} from './createNavbar';
import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';
import { clear } from './clear';

createNavbar();
window.addEventListener('load',home);
const navbar = document.querySelector('.navbar').childNodes;
navbar.forEach((item)=>{
    item.addEventListener('click', ()=>{
        if(item.textContent === 'Home'){
            clear();
            home();
        }
        else if(item.textContent === 'Menu'){
            clear();
            menu();
        }
        else{
            clear();
            contact();
        }
        
    });
});


