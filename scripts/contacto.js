function addComponents() {
  const headerEl = document.querySelector(".header-index");
  addHeaderComponent(headerEl);

  const footerEL = document.querySelector(".footer-index");
  addFooterComponent(footerEL);

  const contactEl = document.querySelector(".contact-index");
  addContactComponent(contactEl);
}

function contactoMain() {
  addComponents();
}

contactoMain();
