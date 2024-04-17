    const navtoggle = document.querySelector(".nav-toggle");
    const navmenu=document.querySelector(".nav-menu");
    
    navtoggle.addEventListener("click",() => {
        navmenu.classList.toggle("nav-menu_visible");

        if(navmenu.classList.contains(".nav-menu_visible")) {
            navtoggle.setAttribute("aria-label","Cerrar Menú");
        } else {
            navtoggle.setAttribute("arial-label","Abrir Menú");
        }
    });