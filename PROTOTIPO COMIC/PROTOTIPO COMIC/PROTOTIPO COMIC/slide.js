/* const nashh3 = document.querySelector('.nash')
const bastonn3 = document.querySelector('.baston3') */

/* nashh3.addEventListener('onclick', function () {
    bastonn3.style.marginTop = '30rem'
    console.log('holamundo')
})
 */



let aldea = document.getElementById("aldea")

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/*   animacion del agua*/

var agua1 =document.querySelector('.agua')
var agua2 = document.querySelector('.agua2')
var yuls = document.querySelector('.yuls')

yuls.addEventListener('click', aguasAnimadas)   

function aguasAnimadas(){
    agua1.classList.add('agua-animada')
    agua2.classList.add('agua-animada')
}

/*   ESCENA 3*/

var nash = document.querySelector('.nash')
var baston3 = document.querySelector('.baston3')

nash.addEventListener('click', bastonAnimado)

function bastonAnimado() {
    baston3.style.top = '12rem';
    baston3.style.left = '954px';
    baston3.style.transitionDuration = '1.5s';
    
}

var nash4 = document.querySelector('.nashEscena4')
var baston4 = document.querySelector('.baston4')

nash4.addEventListener('click', bastonAnimado4)

function bastonAnimado4() {
    baston4.style.top = '12rem';
    baston4.style.left = '1200px';
    baston4.style.transitionDuration = '1.5s';
    
}

/**escena  5 */

var Molly = document.querySelector('.Molly')
var gato = document.querySelector('.Gato')

Molly.addEventListener('click', gatoanimado)

function gatoanimado() {

    Gato.style.top = '12px';
    Gato.style.transitionDuration = '1.5s'


}



/* var baston33 = document.querySelector('.baston3')  */
/* var nash = document.querySelector('.nash3') */



/* escena 4*/

/* var baston4 = document.querySelector('.bastonEscena4') 
var nashEscena4 = document.querySelector('.nashEscena4')

nashEscena4.addEventListener('click', bastonAnimado)

function bastonAnimado(){
    bastonAnimado.classList.add('baston-animado')
    
} */

/* ESCENA 5 */


