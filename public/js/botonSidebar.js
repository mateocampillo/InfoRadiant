const funcionMenuSidebarPc = () => {
    let menuSidebar = document.querySelector('#proSidebar');
    let botonSidebar = document.querySelector('#botonSidebar');
    let body = document.querySelector('body');

    botonSidebar.addEventListener('pointerdown', function() {
        if(menuSidebar.classList.contains('ps-collapsed')){
            body.classList.add('stop-scroll');
        } else {
            body.classList.remove('stop-scroll');
        }
    });

}


window.addEventListener('load', funcionMenuSidebarPc);