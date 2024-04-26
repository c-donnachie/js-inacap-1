function mostrarFondo() {
    var fondo = document.getElementById("fondo");
    fondo.classList.add("mostrar");

    var menuUber = document.querySelectorAll(".uberMenu");
    menuUber.forEach(function (uberMenu) {
        uberMenu.classList.add("uberMenu-show");
    });

    var menu = document.querySelectorAll(".menu");
    menu.forEach(function (menu) {
        menu.classList.add("menu-hiden");
    });
}

function ocultarFondo() {
    var fondo = document.getElementById("fondo");
    fondo.classList.remove("mostrar");

    var menuUber = document.querySelectorAll(".uberMenu");

    menuUber.forEach(function (uberMenu) {
        uberMenu.classList.remove("uberMenu-show");
    });

    var menu = document.querySelectorAll(".menu");

    menu.forEach(function (menu) {
        menu.classList.remove("menu-hiden");
    });
}
