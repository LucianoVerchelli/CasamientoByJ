//----------------------------menu----------------------------
window.addEventListener("scroll", function(){
  let header = document.querySelector("header")
  header.classList.toggle("sticky", window.scrollY > 0);
})

var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector(".close-btn");


menuBtn.addEventListener("click", ()=>{
menu.classList.add("active");
});


closeBtn.addEventListener("click", () =>{
  menu.classList.remove("active");
});









// Establecer la fecha y hora objetivo (cuenta regresiva)
const targetDate = new Date('2023-11-03T00:00:00').getTime();

// Actualizar el contador cada segundo
const interval = setInterval(() => {
  // Obtener la fecha y hora actual
  const now = new Date().getTime();

  // Calcular la diferencia entre la fecha objetivo y la fecha actual
  const difference = targetDate - now;

  // Calcular los días, horas, minutos y segundos restantes
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Actualizar el contenido del contador en el DOM
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  // Si el contador llega a cero, detener la cuenta regresiva
  if (difference < 0) {
    clearInterval(interval);
    document.getElementById('contador').textContent = "¡llego el gran dia!";
  }
}, 1000);

// fotos carrusel 

const carrusel = document.querySelector(".carrusel");
 const arrowIcons = document.querySelectorAll(".wrapper i");
 const firstImg = carrusel.querySelectorAll("img")[0];

let isDragStart = false, prevPageX, prevScrollLeft, positionDiff	; 
  // tomando el width de la imgen numero 1 
 // tomando el maximo scrolleable  del icono 

const showHideIcons = ()=>{
  let scrollWidth = carrusel.scrollWidth - carrusel.clientWidth;
  arrowIcons[0].style.display = carrusel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display = carrusel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
  icon.addEventListener("click", ()=>{
    let firstImgWidth = firstImg.clientWidth;  
    carrusel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
     setTimeout(()=>showHideIcons(), 60)
  });
});





const DragStart = (e) =>{
  isDragStart = true; 
  prevPageX = e.pageX ;
  prevScrollLeft = carrusel.scrollLeft;
}


const dragging = (e) =>{
if(!isDragStart) return
e.preventDefault()
carrusel.classList.add("dragging");

 positionDiff = e.pageX - prevPageX;

 carrusel.scrollLeft = prevScrollLeft - positionDiff;
 showHideIcons();
}

const dragStop = ()=>{ 
  isDragStart= false; 
  carrusel.classList.remove("dragging");
}



carrusel.addEventListener("mousedown", DragStart)


carrusel.addEventListener("mousemove", dragging);


carrusel.addEventListener("mouseup", dragStop);


carrusel.addEventListener("mouseleave", dragStop);




/// asistencia 
const formAsist = document.getElementById("formAsist")

formAsist.addEventListener("submit", ()=>{






 // traigo los inputs con sus respectivos values 
  const nombre = document.getElementById("nombre").value;
  const asistencia = document.querySelector("select[name=asistencia]").value;

  
// guardo el mensaje en un array vacio que se va a cambiar dependiendo el value del option.
  let mensaje = "";

  if (asistencia === "si") {
    mensaje = "Hola, mi nombre es " + nombre + " y asistiré al casamiento. ¡Nos vemos allí!";
  } else if (asistencia === "no") {
    mensaje = "Hola, mi nombre es " + nombre + " y no podré asistir al casamiento. ¡Mil Disculpas!";
  } else if (asistencia === "no estoy seguro") {
    mensaje = "Hola, mi nombre es " + nombre + " y todavía no estoy seguro si podré asistir al casamiento o no. ¡Hablemos pronto!";
  }
else if (asistencia === "ninguna") {
    mensaje = "Hola, mi nombre es " + nombre + 
    
    "";
  }

  //telefono al cual le van a llegar los mensajes 
let  telefono = "541122800910";
//api WhatsApp, le hago llegar el telefono y el mensaje dependiendo que option toco
let  url = "https://wa.me/" + telefono + "?text=" + mensaje;
window.open(url, "_blank");
});

//creo el enlace 
function crearEnlace(){
//hago aparecer el button cuando se marca una opción, dando pie a que no lo manden vacio.
const boton = document.createElement("button");
boton.innerHTML = "Enviar mensaje a WhatsApp";
boton.setAttribute("type", "submit");

const divBoton = document.getElementById("boton-whatsapp");
divBoton.innerHTML = "";
divBoton.appendChild(boton);
}

document.getElementById("asistencia").addEventListener("change", crearEnlace);

