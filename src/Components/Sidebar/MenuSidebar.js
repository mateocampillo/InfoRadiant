import React from 'react';
import {
    MenuSidebarWrapper,
    MenuSidebarContainer
} from './Sidebar.elements';

function MenuSidebar(){
    return (
        <MenuSidebarWrapper id='MenuSidebarWrapper' className='menuSidebarClose'>
            <MenuSidebarContainer>
                <a href='/agentes'>Agentes</a>
                <a href='/rangos'>Rangos</a>
                <a href='/armas'>Armas</a>
                <a href='/mapas'>Mapas</a>
                <a href='/cartas'>Cartas de jugador</a>
                <a href='/bundles'>Bundles</a>
                <a href='/sprays'>Sprays</a>
                <a href='/buddies'>Buddies</a>
                <a href='/player-titles'>Titulos de jugador</a>
                <a href='/about'>About</a>
            </MenuSidebarContainer>
        </MenuSidebarWrapper>
    )
}

export default MenuSidebar;