import pageLoad from './pageload';
import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';

pageLoad();
renderHome();

function clearContent() {
    let main = document.querySelector('main')

    main.remove();
}

function switchTab() {
    let tabs = document.querySelectorAll('.tab');
    
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            if (tab.id === 'home-tab') {
                clearContent();
                renderHome();
            }
            if (tab.id === 'menu-tab') {
                clearContent();
                renderMenu();
            }
            if (tab.id === 'contact-tab') {
                clearContent();
                renderContact();
            }
        })
    })
}

switchTab();