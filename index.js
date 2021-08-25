function addService(params = {}) {
  const template = document.querySelector("#services__service-template");
  const contenedor = document.querySelector(".services__services");

  console.log(template);

  template.content.querySelector(".services__service-box-title").textContent =
    params.title;
  template.content.querySelector(
    ".services__service-box-description"
  ).textContent = params.description;
  template.content.querySelector(".services__service-box-image").src =
    "./media/compu.png";

  const clone = document.importNode(template.content, true);
  contenedor.appendChild(clone);
}

function getService() {
  return fetch(
    "https://cdn.contentful.com/spaces/gt4z0wbi6sgw/environments/master/entries?access_token=3wfaYR_abNIsT9LovJoLEJG3Bs-9FFLG4F3K6tXD6qo&&content_type=work"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const fieldsCollection = data.items.map((item) => {
        return {
          title: item.fields.titulo,
          description: item.fields.descripcion,
          image: item.fields.image,
        };
      });
      return fieldsCollection;
    });
}

function addComponents() {
  const headerEl = document.querySelector(".header-index");
  addHeaderComponent(headerEl);

  const contactEl = document.querySelector(".contact-index");
  addContactComponent(contactEl);

  const footerEl = document.querySelector(".footer-index");
  addFooterComponent(footerEl);
}

function main() {
  addComponents();

  getService().then(function (works) {
    for (const w of works) {
      addService(w);
    }
  });
}

main();
