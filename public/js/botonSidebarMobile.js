const funcionMenuSidebarMobile = () => {
    let botonSidebar = document.querySelector('#botonSidebar');
    let menuSidebar = document.querySelector('#MenuSidebarWrapper');
    let body = document.querySelector('body');

    botonSidebar.addEventListener('touchstart', function() {
        if(menuSidebar.classList.contains('menuSidebarClose')){
            menuSidebar.classList.remove('menuSidebarClose');
            menuSidebar.classList.add('menuSidebarAnimOpen');
            body.classList.add('stop-scroll');
        } else if(menuSidebar.classList.contains('menuSidebarAnimClose')){
            menuSidebar.classList.remove('menuSidebarAnimClose');
            menuSidebar.classList.add('menuSidebarAnimOpen');
            body.classList.add('stop-scroll');
        } else {
            menuSidebar.classList.remove('menuSidebarAnimOpen');
            menuSidebar.classList.add('menuSidebarAnimClose');
            body.classList.remove('stop-scroll');
        }
    });

}


window.addEventListener('load', funcionMenuSidebarMobile);