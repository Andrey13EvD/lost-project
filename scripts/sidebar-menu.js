(function() {
    const openingBtn = document.querySelector(".sidebar__bars");
    const closingBtn = document.querySelector(".sidebar__close");
    const sidebar = document.querySelector(".sidebar");

    openingBtn.addEventListener("click", function() {
        sidebar.classList.add("sidebar--open");
    });
    closingBtn.addEventListener("click", function() {
        sidebar.classList.remove("sidebar--open");
    });
}());