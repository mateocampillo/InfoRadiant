import React from 'react';
import {
    MenuSidebarWrapper,
    MenuSidebarContainer
} from './Sidebar.elements';

function MenuSidebar(){
    return (
        <MenuSidebarWrapper id='MenuSidebarWrapper' className='menuSidebarClose'>
            <MenuSidebarContainer>
                <a href='/rangos'>Rangos</a>
                <a href='/armas'>Armas</a>
                <a href='/collections'>Colecciones</a>
                <a href='/sprays'>Sprays</a>
                <a href='/player-titles'>Titulos de jugador</a>
            </MenuSidebarContainer>
        </MenuSidebarWrapper>
    )
}

export default MenuSidebar;