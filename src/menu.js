const renderMenu = () => {
    let content = document.querySelector('#content');

    let main = document.createElement('main');
    main.classList.add('menu');
    main.innerHTML = `
    <p>test</p>
    `;

    content.appendChild(main);
}

export default renderMenu;