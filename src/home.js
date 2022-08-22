const renderHome = () => {
    let content = document.querySelector('#content');

    let main = document.createElement('main');
    main.classList.add('home');
    main.innerHTML = `
    <p>Best burger in the world.</p>
    <p>You'll never eat something like this!</p>
    `

    content.appendChild(main);
}

export default renderHome;