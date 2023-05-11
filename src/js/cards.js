let productsObject = [
  { type: "BotinFutbol", id: "01", img: "/src/images/calzados/futbol/botinfutbol_01.webp", price: "$2.000", },
  { type: "BotinFutbol", id: "02", img: "/src/images/calzados/futbol/botinfutbol_02.webp", price: "$1.800" },
  { type: "BotinFutbol", id: "03", img: "/src/images/calzados/futbol/botinfutbol_03.webp", price: "$1.700" },
  { type: "BotinFutbol", id: "04", img: "/src/images/calzados/futbol/botinfutbol_04.webp", price: "$1.700" },
  { type: "BotinFutbol", id: "05", img: "/src/images/calzados/futbol/botinfutbol_05.webp", price: "$1.700" },
  { type: "Polo", id: "01", img: "/src/images/calzados/polo/polo_01.webp", price: "$3.000" },
  { type: "Polo", id: "02", img: "/src/images/calzados/polo/polo_02.webp", price: "$3.000" },
  { type: "Polo", id: "03", img: "/src/images/calzados/polo/polo_03.webp", price: "$3.000" },
  { type: "Polo", id: "04", img: "/src/images/calzados/polo/polo_04.webp", price: "$3.000" },
  { type: "Polo", id: "05", img: "/src/images/calzados/polo/polo_05.webp", price: "$3.000" },
  { type: "Convers", id: "01", img: "/src/images/calzados/convers/convers_01.webp", price: "$3.000" },
  { type: "Convers", id: "02", img: "/src/images/calzados/convers/convers_02.webp", price: "$3.000" },
  { type: "Convers", id: "03", img: "/src/images/calzados/convers/convers_03.webp", price: "$3.000" },
  { type: "Convers", id: "04", img: "/src/images/calzados/convers/convers_04.webp", price: "$3.000" },
  { type: "Puma", id: "01", img: "/src/images/calzados/puma/puma_01.webp", price: "$3.000" },
  { type: "Puma", id: "02", img: "/src/images/calzados/puma/puma_02.webp", price: "$3.000" },
  { type: "Puma", id: "03", img: "/src/images/calzados/puma/puma_03.webp", price: "$3.000" },
  { type: "Puma", id: "04", img: "/src/images/calzados/puma/puma_04.webp", price: "$3.000" },
  { type: "LecopSport", id: "01", img: "/src/images/calzados/lecop/lecop_01.webp", price: "$3.000" },
  { type: "LecopSport", id: "03", img: "/src/images/calzados/lecop/lecop_03.webp", price: "$3.000" },
  { type: "LecopSport", id: "02", img: "/src/images/calzados/lecop/lecop_02.webp", price: "$3.000" },
  { type: "CalzadosMelisa", id: "01", img: "/src/images/calzados/melisa/melisa_01.webp", price: "$3.000" },
  { type: "CalzadosMelisa", id: "02", img: "/src/images/calzados/melisa/melisa_02.webp", price: "$3.000" },
  { type: "CalzadosMelisa", id: "03", img: "/src/images/calzados/melisa/melisa_03.webp", price: "$3.000" },
  { type: "CalzadosMelisa", id: "04", img: "/src/images/calzados/melisa/melisa_04.webp", price: "$3.000" },
  { type: "CalzadosMelisa", id: "05", img: "/src/images/calzados/melisa/melisa_05.webp", price: "$3.000" },
  { type: "CalzadosMelisa", id: "06", img: "/src/images/calzados/melisa/melisa_06.webp", price: "$3.000" },
  { type: "CalzadosMelisa", id: "07", img: "/src/images/calzados/melisa/melisa_07.webp", price: "$3.000" },
  { type: "CalzadosMelisa", id: "08", img: "/src/images/calzados/melisa/melisa_08.webp", price: "$3.000" },
  { type: "Borcegos", id: "01", img: "/src/images/calzados/borcegos/borcegos_01.webp", price: "$3.000" },
  { type: "Borcegos", id: "02", img: "/src/images/calzados/borcegos/borcegos_02.webp", price: "$3.000" },
  { type: "Borcegos", id: "03", img: "/src/images/calzados/borcegos/borcegos_03.webp", price: "$3.000" },
  { type: "Borcegos", id: "04", img: "/src/images/calzados/borcegos/borcegos_04.webp", price: "$3.000" },
  { type: "Borcegos", id: "05", img: "/src/images/calzados/borcegos/borcegos_05.webp", price: "$3.000" },
  { type: "Borcegos", id: "06", img: "/src/images/calzados/borcegos/borcegos_06.webp", price: "$3.000" },
  { type: "Borcegos", id: "07", img: "/src/images/calzados/borcegos/borcegos_07.webp", price: "$3.000" },
  { type: "Borcegos", id: "08", img: "/src/images/calzados/borcegos/borcegos_08.webp", price: "$3.000" },
  { type: "McQueen", id: "01", img: "/src/images/calzados/mcqueen/mcqueen_01.webp", price: "$3.000" },
  { type: "McQueen", id: "02", img: "/src/images/calzados/mcqueen/mcqueen_02.webp", price: "$3.000" },
  { type: "McQueen", id: "03", img: "/src/images/calzados/mcqueen/mcqueen_03.webp", price: "$3.000" },
  { type: "Lacoste", id: "01", img: "/src/images/calzados/lacoste/lacoste_01.webp", price: "$3.000" },
  { type: "Lacoste", id: "02", img: "/src/images/calzados/lacoste/lacoste_02.webp", price: "$3.000" },
  { type: "Lacoste", id: "03", img: "/src/images/calzados/lacoste/lacoste_03.webp", price: "$3.000" },
  { type: "Lacoste", id: "04", img: "/src/images/calzados/lacoste/lacoste_04.webp", price: "$3.000" },
  { type: "Jordan", id: "01", img: "/src/images/calzados/jordan/jordan_01.webp", price: "$3.000" },
  { type: "Jordan", id: "02", img: "/src/images/calzados/jordan/jordan_02.webp", price: "$3.000" },
  { type: "Jordan", id: "03", img: "/src/images/calzados/jordan/jordan_03.webp", price: "$3.000" },
  { type: "Jordan", id: "04", img: "/src/images/calzados/jordan/jordan_04.webp", price: "$3.000" },
  { type: "Jordan", id: "05", img: "/src/images/calzados/jordan/jordan_05.webp", price: "$3.000" },
  { type: "AirForce", id: "01", img: "/src/images/calzados/airforce/airforce_16.webp", price: "$3.000" },
  { type: "AirForce", id: "02", img: "/src/images/calzados/airforce/airforce_17.webp", price: "$3.000" },
  { type: "AirForce", id: "03", img: "/src/images/calzados/airforce/airforce_18.webp", price: "$3.000" },
  { type: "AirForce", id: "04", img: "/src/images/calzados/airforce/airforce_19.webp", price: "$3.000" },
  { type: "AirForce", id: "05", img: "/src/images/calzados/airforce/airforce_01.webp", price: "$1.700" },
  { type: "AirForce", id: "06", img: "/src/images/calzados/airforce/airforce_02.webp", price: "$1.700" },
  { type: "AirForce", id: "07", img: "/src/images/calzados/airforce/airforce_03.webp", price: "$1.800" },
  { type: "AirForce", id: "08", img: "/src/images/calzados/airforce/airforce_04.webp", price: "$1.900" },
  { type: "AirForce", id: "09", img: "/src/images/calzados/airforce/airforce_05.webp", price: "$2.000" },
  { type: "AirForce", id: "10", img: "/src/images/calzados/airforce/airforce_06.webp", price: "$2.100" },
  { type: "AirForce", id: "11", img: "/src/images/calzados/airforce/airforce_07.webp", price: "$2.200" },
  { type: "AirForce", id: "12", img: "/src/images/calzados/airforce/airforce_08.webp", price: "$2.300" },
  { type: "AirForce", id: "13", img: "/src/images/calzados/airforce/airforce_09.webp", price: "$2.400" },
  { type: "AirForce", id: "14", img: "/src/images/calzados/airforce/airforce_10.webp", price: "$2.500" },
  { type: "AirForce", id: "15", img: "/src/images/calzados/airforce/airforce_11.webp", price: "$2.600" },
  { type: "AirForce", id: "16", img: "/src/images/calzados/airforce/airforce_12.webp", price: "$2.700" },
  { type: "AirForce", id: "17", img: "/src/images/calzados/airforce/airforce_13.webp", price: "$2.800" },
  { type: "AirForce", id: "18", img: "/src/images/calzados/airforce/airforce_14.webp", price: "$2.900" },
  { type: "AirForce", id: "19", img: "/src/images/calzados/airforce/airforce_15.webp", price: "$3.000" },
];

function injectedCards(products) {

  let container = document.querySelector(".c-rc .row");

  container.innerHTML = "";

  let card;

  if (window.innerWidth <= 765) {

    const categories = [...new Set(productsObject.map(p => p.type))];

    for (let i = 0; i < categories.length; i++) {

      const categorie = categories[i];
      // <div class="col-10 col-sm-9 col-md-6 col-lg-4 mt-2">  </div>
      const productOfCategories = productsObject.filter(p => p.type === categorie);

      const carouselHtml = `
                              <div id="${categorie.toLocaleLowerCase()}-carousel" class="carousel slide" data-bs-ride="carousel">
                                  <div class="carousel-inner">
                                      ${productOfCategories.map((product, index) =>
        `<div class="carousel-item ${index === 0 ? 'active' : ''}">
                                          
                                              <div class="card">
                                                  <img class="card-img-top" loading="lazy" src="${product.img}" draggable="false" alt="Articulo de venta, calzado">
                                                  <div class="card-body">
                                                      <h3 class="card-text">
                                                          <span class="price">
                                                              <span class="badge rounded-pill bg-warning text-dark">${product.price}</span>
                                                          </span>
                                                      </h3>
                                                      <div class="stock-box">
                                                          <a href="https://wa.me/543815260540?text=${encodeURI(`Hola, ¿el artículo ${product.id} de la categoria ${product.type} esta disponible?`)}" target="_blank" class="ui green button stock-icon">
                                                              CONSULTAR STOCK
                                                          </a>
                                                      </div>
                                                  </div>
                                              </div>
                                          
                                      </div>`).join('')}
                                  </div>
                                  <button class="carousel-control-prev" type="button" data-bs-target="#${categorie.toLocaleLowerCase()}-carousel" data-bs-slide="prev">
                                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span class="visually-hidden">Anterior</span>
                                  </button>
                                  <button class="carousel-control-next" type="button" data-bs-target="#${categorie.toLocaleLowerCase()}-carousel" data-bs-slide="next">
                                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span class="visually-hidden">Siguiente</span>
                                  </button>
                              </div>
                              `;

      container.insertAdjacentHTML("beforeend", carouselHtml);

    }


  } else if (window.innerWidth > 765) {
    productsObject.forEach(product => {
      card = `
            <div class="col-10 col-sm-9 col-md-6 col-lg-4 mt-2">
              <div class="card">
                <img class="card-img-top" loading="lazy" src="${product.img}" draggable="false" alt="Articulo de venta, calzado">
                <div class="card-body">
                  <h3 class="card-text">
                    <span class="price">
                        <span class="badge rounded-pill bg-warning text-dark">${product.price}</span>
                    </span>
                  </h3>
                  <div class="stock-box">
                      <a href="https://wa.me/543815260540?text=${encodeURI(`Hola, ¿el artículo ${product.id} de la categoria ${product.type} esta disponible?`)}" target="_blank" class="ui green button stock-icon">
                        CONSULTAR STOCK
                      </a>
                  </div>
                </div>
              </div>
            </div>
          `;

      container.insertAdjacentHTML("beforeend", card);
    });
  }

  container.insertAdjacentHTML("beforeend", `<div class="box_empty"></div>`)
}

function createCards(type) {
  if (type) {
    let filter = productsObject.filter((product) => {
      return product.type === type;
    });
    injectedCards(filter);
  }
  if (!type || type === "All") {
    injectedCards(productsObject)
  }
}

createCards();

document.getElementById("select-category").addEventListener("change", (event) => {
  let categoriaSeleccionada = event.target.value;
  createCards(categoriaSeleccionada);
});