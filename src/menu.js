const renderMenu = () => {
    let content = document.querySelector('#content');

    let main = document.createElement('main');
    main.classList.add('menu');
    main.innerHTML = `
    <div class="menu-container">
        <div class="menu-item">
            <img src="./img/hamburger.png" alt="Hamburger">
            <h2>Hamburger</h2>
            <p>$10.99</p>
            <p>Meat, Lettuce, Tomato, Onions, Pickles</p>
        </div>
        <div class="menu-item">
            <img src="./img/cheeseburger.png" alt="Cheeseburger">
            <h2>Cheeseburger</h2>
            <p>$11.99</p>
            <p>Meat, Cheese, Ketchup, Onions, Pickles</p>
        </div>
        <div class="menu-item">
            <img src="./img/bacon-burger.png" alt="Bacon Burger">
            <h2>Bacon Burger</h2>
            <p>$11.99</p>
            <p>Meat, Bacon, Cheese, BBQ Sauce</p>
        </div>
        <div class="menu-item">
            <img src="./img/chicken-burger.png" alt="Chicken Burger">
            <h2>Chicken Burger</h2>
            <p>$10.99</p>
            <p>Fried Chicken, Lettuce, Cheese, Mayo</p>
        </div>
        <div class="menu-item">
            <img src="./img/french-fries.png" alt="French Fries">
            <h2>French Fries</h2>
            <p>$4.99</p>
            <p>Fries, Ketchup, Mustard, Mayo</p>
        </div>
        <div class="menu-item">
            <img src="./img/draft-beer.png" alt="Draft Beer">
            <h2>Draft Beer</h2>
            <p>$5.99</p>
            <p>An incredibly cold beer for you</p>
        </div>
    </div>
    `;

    content.appendChild(main);
}

export default renderMenu;