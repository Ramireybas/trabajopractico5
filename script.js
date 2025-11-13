document.addEventListener("DOMContentLoaded", function () {
  const formIds = ["nombre", "apellido", "email", "telefono", "edad", "direccion", "provincia", "cp"];
  const tabla = document.querySelector("table tbody");

  formIds.forEach((id, index) => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener("input", () => {
        tabla.rows[index].cells[1].textContent = input.value;
      });
    }
  });


  const radios = document.getElementsByName("met_contacto");
  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      const seleccionado = document.querySelector('input[name="met_contacto"]:checked');
      if (seleccionado) {
        tabla.rows[8].cells[1].textContent = seleccionado.nextElementSibling.textContent;
      }
    });
  });

  const checkboxes = document.querySelectorAll('#tipo_suscripcion input[type="checkbox"]');
  checkboxes.forEach(box => {
    box.addEventListener("change", () => {
      const activos = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.nextElementSibling.textContent);
      tabla.rows[9].cells[1].textContent = activos.join(", ");
    });
  });


  const btnLeerMas = document.getElementById("leer-mas");
  const textoExtra = document.getElementById("texto-extra");

  if (btnLeerMas && textoExtra) {
    textoExtra.style.display = "none";
    btnLeerMas.addEventListener("click", () => {
      const visible = textoExtra.style.display === "block";
      textoExtra.style.display = visible ? "none" : "block";
      btnLeerMas.textContent = visible ? "Leer más" : "Leer menos";
    });
  }
});
