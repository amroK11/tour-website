let menu = document.querySelector('.menu-bar i');
let navbar = document.querySelector('.navbar')

menu.onclick = function(){
    navbar.classList.toggle('active');
}

let video = document.querySelector(".video .vid");
let control = document.querySelectorAll('.about  .container .controls .control-btn');

control.forEach(function(ele){
    ele.onclick = function(){
        let src = ele.getAttribute('data-src');
        video.src = src;
        // console.log(src)
    }
})



