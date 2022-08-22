const pageLoad = () => {
    let content = document.querySelector('#content');

    let header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = `
    <h1 class="header-title">Burgers & Fries</h1>
    <nav class="header-nav">
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>
    </nav>
    `

    content.appendChild(header);
}

export default pageLoad;