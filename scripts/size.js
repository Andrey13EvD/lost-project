(function() {
  const controlls = document.querySelectorAll(".size__link--1");
  const activeClass = "size__item--A";
    controlls.forEach(function(control) {
      control.addEventListener("click", function(e) {
        e.preventDefault();
        controlls.forEach(function(link){
          link.closest(".size__item--1").classList.remove(activeClass);
      })
        control.closest(".size__item--1").classList.add(activeClass);
        })

    })

})();