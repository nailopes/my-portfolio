// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Change header color scroll and fix to top
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let scrollPosition = window.scrollY;
  
    if (scrollPosition > 80) { 
      header.style.backgroundColor = '#6a8781'; 

    } else {
      header.style.backgroundColor = '#f8f8f8'; 
   
    }
  });