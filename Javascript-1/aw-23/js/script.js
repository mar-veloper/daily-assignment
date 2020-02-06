function getImages(json) {
  const carouselInnerHTML = document.querySelector(".carousel-inner");
  let newHTML = "";

  const screenshots = json.results.map(results => results.image);
  console.log(screenshots);

  screenshots.map((img, index) => {
    const activeClass = index === 0 ? "active" : "";
    newHTML += `
    <div class="carousel-item ${activeClass}">
        <img class="d-block w-100" src="${img}" />
    </div>`;
  });

  carouselInnerHTML.innerHTML = newHTML;
}
