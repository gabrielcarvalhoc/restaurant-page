const renderContact = () => {
    let content = document.querySelector('#content');

    let main = document.createElement('main');
    main.classList.add('contact');
    main.innerHTML = `
    <div class="contact-container">
        <div>
            <i class="fa-solid fa-location-dot"></i>
            <p>R. Gen. Almério de Moura, 131 - Vasco da Gama, Rio de Janeiro - RJ</p>
        </div>
        <div>
            <i class="fa-solid fa-clock"></i>
            <p>Tue-Thur: 12pm-11pm; Fri-Sun: 12pm-12am</p>
        </div>
        <div>
            <i class="fa-solid fa-phone"></i>
            <p>(21) 2022-1998</p>
        </div>    
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.609937006245!2d-43.22929798970821!3d-22.89086327808164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997eea386659df%3A0x915e7bfd2cc5d456!2zRXN0w6FkaW8gU8OjbyBKYW51w6FyaW8!5e0!3m2!1spt-BR!2sbr!4v1661293145794!5m2!1spt-BR!2sbr"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    `;

    content.appendChild(main);
}

export default renderContact;