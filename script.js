const menu = document.querySelector(".menu");
const nav = document.querySelector(".navlinks");

if (menu && nav) {

  menu.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });

  });

}


/* Highlight current page */

const page = document.body.dataset.page;

document
  .querySelectorAll(".navlinks a[data-page]")
  .forEach(link => {

    if (link.dataset.page === page) {
      link.classList.add("active");
    }

  });


/* Current year */

document
  .querySelectorAll("[data-year]")
  .forEach(element => {

    element.textContent =
      new Date().getFullYear();

  });


/* WhatsApp quote form */

const form =
  document.querySelector("#quoteForm");

if (form) {

  form.addEventListener("submit", event => {

    event.preventDefault();

    const data =
      new FormData(form);

    const message = `
Hello Collinscrown, I would like a project quote.

Name: ${data.get("name")}

Phone: ${data.get("phone")}

Service: ${data.get("service")}

Project details:
${data.get("details")}
`;

    const whatsappURL =
      "https://wa.me/2348162932724?text="
      + encodeURIComponent(message);

    window.open(
      whatsappURL,
      "_blank"
    );

  });

}
