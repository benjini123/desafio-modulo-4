function addService(params = {}) {
  const template = document.querySelector("#template");
  const contenedor = document.querySelector(".main__work");

  template.content.querySelector(".main__work-card-img").src =
    "./media/portfolio.png";

  template.content.querySelector(".main__work-card-title").textContent =
    params.title;
  template.content.querySelector(".main__work-card-description").textContent =
    params.description;

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

  const footerEL = document.querySelector("#footer-index");
  addFooterComponent(footerEL);
}

function serviciosMain() {
  addComponents();

  getService().then(function (works) {
    for (const w of works) {
      addService(w);
    }
  });
}

serviciosMain();
