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
                <a href='/player-titles'>Titulos de jugador</a>
                <a href='/'>Enlace</a>
            </MenuSidebarContainer>
        </MenuSidebarWrapper>
    )
}

export default MenuSidebar;