const pageLoad = () => {
    let content = document.querySelector('#content');

    let header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = `
    <h1 class="header-title">Burgers & Fries</h1>
    <nav class="header-nav">
        <ul>
            <li class="tab" id="home-tab">Home</li>
            <li class="tab" id="menu-tab">Menu</li>
            <li class="tab" id="contact-tab">Contact</li>
        </ul>
    </nav>
    `;

    content.appendChild(header);
}

export default pageLoad;