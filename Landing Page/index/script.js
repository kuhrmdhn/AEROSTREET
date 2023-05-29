var text = "WELCOME TO AEROSTREET"
var speed = 90
var i = 0
function autoWrite () {
    if (i<text.length) {
        document.getElementById ('typing').innerHTML += text.charAt(i)
        i++
        setTimeout(autoWrite,speed)
    }
}
autoWrite()


var storeNavbar = document.querySelector('.wrapperStore');

storeNavbar.addEventListener("mouseover", function () {
    document.querySelector('.hideStore').style.top = "0"
    storeNavbar.style.overflow = "visible"
})
storeNavbar.addEventListener("mouseleave", function () {
    document.querySelector('.hideStore').style.top = "-20vh"
    storeNavbar.style.overflow = "hidden"
})

var contactNavbar = document.querySelector('.wrapperContact');

contactNavbar.addEventListener("mouseover", function () {
    document.querySelector('.hideContact').style.top = "0"
    contactNavbar.style.overflow = "visible"
})
contactNavbar.addEventListener("mouseleave", function () {
    document.querySelector('.hideContact').style.top = "-20vh"
    contactNavbar.style.overflow = "hidden"
})




let mouseEvents = document.querySelectorAll('.wrapperProduct');
mouseEvents.forEach(function (mouseEvent) {
    let collabImage = mouseEvent.querySelector('.collabImage');
    let paragraph = mouseEvent.querySelector('.paragraph');
  mouseEvent.addEventListener("mouseover", function () {
    mouseEvent.style.width = "650px";
    collabImage.style.animation = "imageIn 2s forwards";
    paragraph.style.animation = "paragraphIn 2s forwards";
  });

  mouseEvent.addEventListener("mouseleave", function () {
    mouseEvent.style.width = "250px";
    collabImage.style.animation = "imageOut 2s";
    paragraph.style.animation = "paragraphOut 2s";
  });
});



let container = document.getElementsByClassName('wrapperProduct')
let currentIndex = 0
let nextButton = document.getElementById('next')
let prevButton = document.getElementById('prev')


function showSlider(index) {
    if (index < 0) {
        currentIndex = container.length - 1
    }else if(index >= container.length) {
        currentIndex = 0
    }
    for (var i = 0; i<container.length; i++) {
    container[i].style.display = "none"
}
    container[currentIndex].style.display = "block"
}

nextButton.addEventListener('click' , 
function next() {
    currentIndex ++
    showSlider(currentIndex)
})
prevButton.addEventListener('click', 
function prev() {
    currentIndex --
    showSlider(currentIndex)
})

showSlider(currentIndex)