window.addEventListener("scroll", function() {
    let hero = document.getElementById("hero");
    let nextSection = document.querySelector("main");
    let distance = nextSection.getBoundingClientRect().top;
    
    const maxHeight = 70; 
    const minHeight = 10; 
    let ratio = Math.min(1, distance / (window.innerHeight * 0.7));
    
    let newHeight = minHeight + (maxHeight - minHeight) * ratio;
    
    hero.style.height = newHeight + "vh";
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".headnav ul li a");
    const currentPage = window.location.pathname.split("/").pop();
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});