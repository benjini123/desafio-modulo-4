function addHeaderComponent(el) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = `
  
  <header class="header">
    <img src="./media/benja-logo.png" class="header__logo" />
    <div class="header__burger">
      <div class="header__burger-box"></div>
      <div class="header__burger-box"></div>
      <div class="header__burger-box"></div>
    </div>

    <div class="header__services">
      <a href="./portfolio.html">Portfolio</a>
      <a href="./servicios.html">Servicios</a>
      <a href="./contacto.html">Contacto</a>
    </div>

    <div class="header__ventana">
      <a href="">
        <img src="./media/Vector.png" class="header__ventana-cerrar" />
      </a>
      <div class="header__ventana-text">
      <a href="./portfolio.html" class="title">Portfolio</a>
      <a href="./servicios.html" class="title">Servicios</a>
      <a href="./contacto.html" class="title">Contacto</a>
      </div>
    </div>

  </header>

  `;

  const ventanaEl = headerEl.querySelector(".header__ventana");
  const burgerEl = headerEl.querySelector(".header__burger");
  const cerrarEl = headerEl.querySelector(".header__ventana-cerrar");

  burgerEl.addEventListener("click", () => {
    ventanaEl.style.display = "inherit";
  });

  cerrarEl.addEventListener("click", () => {
    ventanaEl.style.display = "None";
  });

  el.appendChild(headerEl);
}

function addContactComponent(el) {
  const contactEl = document.createElement("div");
  contactEl.innerHTML = `

  <section class="contact">
    <div class="contact__container">
      <h2 class="contact__title">Contact Me</h2>
      <div class="contact__forms">
        <div class="contact__form">
          <label for="name">Name:</label>
          <input type="text" id="name" class="contact__form-input" />
        </div>
      <div class="contact__form">
        <label for="email">Email:</label>
        <input type="text" id="email" class="contact__form-input" />
      </div>
      <div class="contact__form-message">
        <label for="message" id="message">Message:</label>
        <textarea
          name=""
          id="message"
          cols=""
          rows="10"
          class="contact__form-message-input"
        ></textarea>
      </div>
      <button class="contact__form-button">Send</button>
    </div>
    </div>
  </section>

  `;

  el.appendChild(contactEl);
}

function addFooterComponent(el) {
  const footerEl = document.createElement("div");
  footerEl.innerHTML = `

  <section class="footer-sec">
  <div class="footer__container">
    <div class="footer__logo">
      <img src="media/benja-logo.png" />
    </div>
    <div class="footer__media-group">
      <div class="footer__media-box">
        <p class="footer__insta-title">Instagram</p>
        <img src="media/instagram.png" class="logo" />
      </div>
      <div class="footer__media-box">
        <p class="footer__linkedin-title">Linkedin</p>
        <img src="./media/linkedin.png" class="logo" />
      </div>
      <div class="footer__media-box">
        <p class="footer__g-title">Github</p>
        <img src="./media/github.png" class="logo" />
      </div>
    </div>
  </div>
  </section>

  `;
  el.appendChild(footerEl);
}
