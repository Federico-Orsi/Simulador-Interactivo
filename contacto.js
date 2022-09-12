var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


// Aqui traigo el Carrito que se generó en la Sección Contabilidad, utilizando LocalStorage:
let carritoRecuperado;

carritoRecuperado = localStorage.getItem("carrito") && JSON.parse(localStorage.getItem("carrito"));

let sumaCarritoRecuperado = 0 ;

for (const elemento of carritoRecuperado) {
  
sumaCarritoRecuperado+=elemento.cantidad*elemento.servicio.precioNetoPlan;  

}

// Validación de Formulario con Expresiones Regulares

const expresiones = {
	domicilio: /^[a-zA-ZÀ-ÿ0-9\s\_\-]{1,30}$/, // Letras, numeros, guion y guion_bajo
	ZipCode: /^[A-Z0-9]{4,8}$/,
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	ciudad: /^[a-zA-ZÀ-ÿ\s]{0,15}$/,
  password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	numeros: /^\d{4,10}$/ // 7 a 14 numeros.
}
  
  // Variables del Formulario:

  
  let inputApellido = document.getElementById("inputApellido");
  let inputNombre = document.getElementById("inputNombre");
  let formulario = document.getElementById("formulario");
  let inputDireccion = document.getElementById("direccion");
  let inputCiudad = document.getElementById("inputCity");
  let inputZipCode = document.getElementById("inputZipCode");
  let inputEmail4 = document.getElementById("inputEmail4");
  
  // Fetch (POST) Formulario: 
  
  const enviarAJsonPlaceHolder = () => {
  
  const datosIngresadosPorElUsuario = {

    Apellido: inputApellido.value,
    Nombre: inputNombre.value,
    Direccion: inputDireccion.value,
    Ciudad: inputCiudad.value,
    Email: inputEmail4.value,
    ZipCode: inputZipCode.value,
  }
  
  fetch("https://jsonplaceholder.typicode.com/posts",
  {method:"POST",
  body: JSON.stringify(datosIngresadosPorElUsuario),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }

})
 .then(response => response.json())
 .then(respuestaDatos => {
  
  console.log(respuestaDatos);

 })
}
  
  
  // Comentarios de Error debajo de los Inputs
  let comentarioErrorNombre = document.getElementById("comentarioErrorNombre");
  let comentarioErrorApellido = document.getElementById("comentarioErrorApellido");
  let comentarioErrorMail = document.getElementById("comentarioErrorMail");
  let comentarioErrorDireccion = document.getElementById("comentarioErrorDireccion");
  let comentarioErrorCiudad = document.getElementById("comentarioErrorCiudad");
  let comentarioErrorZipCode = document.getElementById("comentarioErrorZipCode");
  
  // Eventos OnInput del Formulario:
  
  inputEmail4.oninput = () => {

    if ((expresiones.correo.test(inputEmail4.value) == false)) {
  
      inputEmail4.style.color = "red";
      comentarioErrorMail.style.color = "red";
      comentarioErrorMail.innerText = "* Este Campo es obligatorio. Debe tener formato de e-mail.";
    } else {
  
      inputEmail4.style.color = "black";
      comentarioErrorMail.innerText = "";
    }
  }
  
  
  inputApellido.oninput = () => {

  if ((expresiones.nombre.test(inputApellido.value) == false)) {

    inputApellido.style.color = "red";
    comentarioErrorApellido.style.color = "red";
    comentarioErrorApellido.innerText = "* Este Campo es obligatorio, solamente se permiten Letras y Espacios.";
  } else {

    inputApellido.style.color = "black";
    comentarioErrorApellido.innerText = "";
  }
}
  
inputNombre.oninput = () => {

  if ((expresiones.nombre.test(inputNombre.value) == false)) {

    inputNombre.style.color = "red";
    comentarioErrorNombre.style.color = "red";
    comentarioErrorNombre.innerText = "* Este Campo es obligatorio, solamente se permiten Letras y Espacios.";
  } else {

    inputNombre.style.color = "black";
    comentarioErrorNombre.innerText = "";
  }
}  
  
inputDireccion.oninput = () => {

  if ((expresiones.domicilio.test(inputDireccion.value) == false)) {

    inputDireccion.style.color = "red";
    comentarioErrorDireccion.style.color = "red";
    comentarioErrorDireccion.innerText = "* Este Campo es obligatorio, no se permite colocar puntos.";
  } else {

    inputDireccion.style.color = "black";
    comentarioErrorDireccion.innerText = "";
  }
}  

inputCiudad.oninput = () => {

  if ((expresiones.ciudad.test(inputCiudad.value) == false)) {

    inputCiudad.style.color = "red";
    comentarioErrorCiudad.style.color = "red";
    comentarioErrorCiudad.innerText = "* En este Campo solamente se permiten Letras y Espacios.";
  } else {

    inputCiudad.style.color = "black";
    comentarioErrorCiudad.style.color = "red";
    comentarioErrorCiudad.innerText = "";
  }
}  

inputZipCode.oninput = () => {

  if ((expresiones.ZipCode.test(inputZipCode.value) == false)) {

    inputZipCode.style.color = "red";
    comentarioErrorZipCode.innerText = "* Este Campo es obligatorio, solo se pueden colocar Letras Mayúsculas y Números, de 4 a 8 caracteres.";
  } else {

    inputZipCode.style.color = "black";
    comentarioErrorZipCode.style.color = "red";
    comentarioErrorZipCode.innerText = "";
  }
}  

// Contenedor de Formas de Pago y Funcion que las hace aparecer en Pantalla!!
  
  containerFormasDePago = document.getElementById("containerFormasDePago");
  
  mostrarFormasDePago = () => {

  containerFormasDePago.innerHTML = `
  
  <section id="formasDePago" class="text-center mt-5 mb-5">
          <h3 class="h3Titulo">Formas de Pago</h3>
         <article class="d-flex justify-content-around mt-5">
          
          <figure class="figure w-25">
            <img src="../img/Visa_Inc._logoSvg.svg" class="figure-img img-fluid rounded w-50 h-50" alt="Visa">
                                               <!-- Boton Trigger Modal -->
            <figcaption class="figure-caption"><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalVisa">Ver cuotas</button></figcaption>
          </figure>

          <figure class="figure">
            <img src="../img/PayPalSvg.svg" class="figure-img img-fluid rounded" alt="PayPal">
                                               <!-- Boton Trigger Modal -->
            <figcaption class="figure-caption"><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalPayPal">Ver cuotas</button></figcaption>
          </figure>
     
          <figure class="figure">
            <img src="../img/MasterCard_LogoSvg.svg" class="figure-img img-fluid rounded w-50 h-50" alt="Master">
                                              <!-- Boton Trigger Modal -->
            <figcaption class="figure-caption"><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver cuotas</button></figcaption>
          </figure>

          </article>
          </section>
  
  `;


  }


  // OnSubmit Formulario:
  
  formulario.onsubmit = (e) => {
   
    e.preventDefault(); 
   
    if ((expresiones.nombre.test(inputApellido.value)) && (expresiones.nombre.test(inputNombre.value)) && (expresiones.domicilio.test(inputDireccion.value)) && (expresiones.ciudad.test(inputCiudad.value)) && (expresiones.ZipCode.test(inputZipCode.value)) && (expresiones.correo.test(inputEmail4.value)) ) {
      enviarAJsonPlaceHolder();
      formulario.reset();

      Swal.fire({
        icon: 'success',
        title: 'Gracias, tus datos se enviaron correctamente.',
        text: 'Ahora podes elegir tu Forma de Pago más Conveniente.',
        
      })

      
      
      // Creación de Boton para realizar Pago:
      botonPago = document.createElement("button");
      botonPago.innerText = "Ir a Pagos";
      botonPago.setAttribute("type","button");
      botonPago.className = "btn btn-primary";

      // Contenedor Botones Submit:
      divBotonesSubmit = document.getElementById("divBotonesSubmit");
      // Aqui Elimino el Botton de Submit para que solo se pueda enviar una vez!! Hay que refrescar la pagina para que aparezca nuevamente!!
      divBotonesSubmit.innerHTML = `
      
      <button id="mailConfirmacion" type="button" class="btn btn-primary">Quiero Confirmación</button>
      <a id="tagAaPagos" href="#formasDePago"></a>
      `;
      // Appendear BotonPago:
      tagAaPagos = document.getElementById("tagAaPagos");
      tagAaPagos.append(botonPago);
      
      
  
   let mailConfirmacion = document.getElementById("mailConfirmacion");
   
   mailConfirmacion.onclick = () => {

    Swal.fire({
      icon: 'success',
      title: 'Listo!!',
      text: 'Te hemos enviado el detalle de esta compra al e-mail que informaste en el formulario.',
      
    })
  
    }

    mostrarFormasDePago();

    } else {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor debes completar todos los Campos correctamente.',
        
      })
      
      
    }
  }
  
  
   
  
  
  // let terminos = document.getElementById("gridCheck");
  
 
 
  // Info a mostrar dinamicamente en las Tarjetas:

  const dinamizarMasterCard = () => {

  let masterCard = document.getElementById("masterCard");
  masterCard.innerHTML = `El total neto de su compra es de $${sumaCarritoRecuperado}.<br/>
  IVA (21%) = $${sumaCarritoRecuperado*0.21}<br/>
  <strong>Suma Total a abonar: $${sumaCarritoRecuperado*1.21}</strong><br/>
  <br/>
  <br/>
  <strong>Con MasterCard aprovechá 6 cuotas sin interés.</strong>`;

  }

  dinamizarMasterCard();

  let pagarMaster = document.getElementById("pagarMaster");
  pagarMaster.onclick = () => {

    Swal.fire({
      icon: 'success',
      title: 'El Pago fue realizado con Éxito!!',
      text: 'Gracias por tu Compra.',
      
    })

  }

  const dinamizarPayPal = () => {

    let payPal = document.getElementById("payPal");
    payPal.innerHTML = `El total neto de su compra es de $${sumaCarritoRecuperado}.<br/>
    IVA (21%) = $${sumaCarritoRecuperado*0.21}<br/>
    <strong>Sub-Total: $${sumaCarritoRecuperado*1.21}</strong><br/>
    <br/>
    <br/>
    Con PayPal pagas en 1 solo Pago pero tenes un 5% de Descuento.<br/>
    <strong>Importe Total a abonar: $${sumaCarritoRecuperado*1.21*0.95}</strong>`;
  
    }
  
    dinamizarPayPal();
  
    let pagarPayPal = document.getElementById("pagarPayPal");
    pagarPayPal.onclick = () => {
  
      Swal.fire({
        icon: 'success',
        title: 'El Pago fue realizado con Éxito!!',
        text: 'Gracias por tu Compra.',
        
      })
  
    }

    const dinamizarVisa = () => {

      let visa = document.getElementById("visa");
      visa.innerHTML = `El total neto de su compra es de $${sumaCarritoRecuperado}.<br/>
      IVA (21%) = $${sumaCarritoRecuperado*0.21}<br/>
      <strong>Sub-Total: $${sumaCarritoRecuperado*1.21}</strong><br/>
      <br/>
      <br/>
      Pagando con Visa dispones de 12 cuotas fijas. La TNA aplicada es del 25%.<br/>
      <strong>El Valor final de cada una de tus Cuotas Fijas es de: $${(sumaCarritoRecuperado*1.21*1.25/12).toFixed(2)}</strong>`;
    
      }
    
      dinamizarVisa();
    
      let pagarVisa = document.getElementById("pagarVisa");
      pagarVisa.onclick = () => {
    
        Swal.fire({
          icon: 'success',
          title: 'El Pago fue realizado con Éxito!!',
          text: 'Gracias por tu Compra.',
          
        })
    
      }

    