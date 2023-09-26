const personas = [
    new Persona('Luis','Morales'),
    new Persona('Pepito','Perez')
];

function mostrarPersonas(){
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function resetearCampos(){
    texto = '';
    document.getElementById('nombre').value = texto;
    document.getElementById('apellido').value = texto;
}

function agregarPersona(){
    const formulario = document.forms['formulario'];
    const nombre = formulario['nombre'];
    const apellido = formulario['apellido'];

    if(nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersonas();
        resetearCampos();
    }else {
        alert('Ingresa ambos datos para agregar!')
    }
}