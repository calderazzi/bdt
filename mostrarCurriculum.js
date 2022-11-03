const lista = document.getElementById("contenedor");

const nombreCurriculumBuscar = document.getElementById('nombreCurriculumBuscar');
nombreCurriculumBuscar.addEventListener('input', () => {
  let encontrados = curriculum.filter(({experiencia}) => {
    return experiencia.toLowerCase().includes(nombreCurriculumBuscar.value.toLowerCase());
  });
  MostrarCurriculum(encontrados);
});

function MostrarCurriculum(array) {
  lista.innerHTML = '';
  if(array.length === 0) {
    lista.innerHTML = '';
  }
  array.forEach(persona => {
    let div = document.createElement('div');
    div.className = 'contents';
    div.innerHTML = `<div class="card">
                      <div class="descripcion">
                        <img class="foto" src="${persona.foto}">
                        <div class="nombre">${persona.nombre} ${persona.apellido}</div>
                      </div>
                      <h4>Edad: ${persona.edad} años</h4>
                      <h4>Telefono: ${persona.telefono}</h4>
                      <h4>Email: ${persona.email}</h4>
                      <h4>Experiencia: ${persona.experiencia}</h4>
                      <h4>Educacion: ${persona.educacion}</h4>
                      <h4>Disponibilidad: ${persona.disponibilidad}</h4>`;
    lista.appendChild(div);
  })
}