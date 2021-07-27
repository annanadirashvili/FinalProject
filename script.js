let navbarLinks = document.getElementById ('links');
let togglebutton = document.getElementById('toggle-button')


togglebutton.addEventListener('click', function(){
    navbarLinks.classList.toggle('active');
})
// test

$(function(){
    $('.multiple-items').slick({
     infinite: true,
     // რამდენი სურათი გამოჩნდეს
     slidesToShow: 4,
     // სლაიდის დროს რამდენი ელემნტით გადავიდეს 
     slidesToScroll: 1,
     // რომ გამოჩნდეს ღილაკები
     arrows: true,
     // რომ გამოჩნდეს ბურთულები
     dots:true,
     // responsiv-ის კოდი
     responsive: [
         {
           breakpoint: 1100,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 570,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
     ]
   });    
 });


//  test

document.getElementById('send').addEventListener('click', function(){
          alert('გთხოვთ, შეამოწმოთ მეილი და დაგვიდასტუროთ მოთხოვნა.');
      })
 
    
  