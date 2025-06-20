

document.addEventListener("DOMContentLoaded", () => {
  const secciones = document.querySelectorAll(".section");

  const mostrarSeccion = () => {
    const scrollY = window.scrollY + window.innerHeight * 0.85;

    secciones.forEach(seccion => {
      if (scrollY > seccion.offsetTop) {
        seccion.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", mostrarSeccion);
  mostrarSeccion();
});
