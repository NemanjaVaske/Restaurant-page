(()=>{"use strict";function e(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h1"),o=document.createElement("span");t.classList.add("home-window"),n.textContent="Welcome to our homepage",o.textContent="This is our restaurant, enjoy your food!",t.appendChild(n),t.appendChild(o),e.appendChild(t)}!function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("navbar");const n=document.createElement("span"),o=document.createElement("span"),d=document.createElement("span");n.classList.add("navbar-home"),o.classList.add("navbar-menu"),d.classList.add("navbar-contact"),n.textContent="Home",o.textContent="Menu",d.textContent="Contact",t.appendChild(n),t.appendChild(o),t.appendChild(d),e.appendChild(t)}(),window.addEventListener("load",e),document.querySelector(".navbar").childNodes.forEach((t=>{t.addEventListener("click",(()=>{"Home"===t.textContent?e():"Menu"===t.textContent?function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h1"),o=document.createElement("span");t.classList.add("menu-window"),n.textContent="Welcome to our menu page",o.textContent="This is our restaurant, look at menu and enjoy your food!",t.appendChild(n),t.appendChild(o),e.appendChild(t)}():function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h1"),o=document.createElement("span");t.classList.add("contact-window"),n.textContent="Welcome to our contact page",o.textContent="You can reach as at bestfood@gmail.com",t.appendChild(n),t.appendChild(o),e.appendChild(t)}()}))}))})();