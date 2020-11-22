
(function() {
 
    const elem = document.querySelector('.thirt__list');
    const iso = new Isotope( elem, {
  
  itemSelector: '.tshirt__img',
  filter: '.Black'
  });
  
    const controlls = document.querySelectorAll(".color__link");
    const activeClass = "color__item--A";
     controlls.forEach(function(control) {
  
      control.addEventListener("click", function(e) {
        e.preventDefault();
  
        const filterName = control.getAttribute("data-filter");
       
        controlls.forEach(function(link) {
          link.closest(".color__item").classList.remove(activeClass);
        })
         control.closest(".color__item").classList.add(activeClass);
  
        iso.arrange({
            filter: `.${filterName}`
          }) 
        })
      })
   
  })();
 