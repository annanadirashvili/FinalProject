let navbarLinks = document.getElementById ('links');
let togglebutton = document.getElementById('toggle-button')


togglebutton.addEventListener('click', function(){
    navbarLinks.classList.toggle('active');
})