//VALIDACION DE FORMULARIO DE INSCRIPCION

const form = document.querySelector('form[name="frm"]');
form.addEventListener('submit', (event)=>{
    const fname=form.elements['fname'].value;
    const lname=form.elements['lname'].value;
    const sexo=form.elements['sexo'].value;
    const codi=form.elements['codi'].value;
    const correo=form.elements['correo'].value;
    const celular=form.elements['celular'].value;

    if (!fname || !lname ||!correo ||!celular ||!codi){
        event.preventDefault();
        alert('Por favor, Complete todos los campos')
    }else if(!validateEmail(correo)){
        event.preventDefault();
        alert('Por favor, ingrese un correo válido')
    }
    if(fname && lname && correo && celular && codi && validateEmail(correo)){
        event.preventDefault();
        alert('GRACIAS POR INCRIBIRTE')
    }
    
});
function validateEmail(correo){
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(correo).toLowerCase());
}