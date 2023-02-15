import React from 'react';
import {
    MenuSidebarContainer
} from './Sidebar.elements';
import { Sidebar } from 'react-pro-sidebar';

function MenuSidebar(){

    return (
        <Sidebar id='proSidebar' defaultCollapsed={true} collapsedWidth={0} transitionDuration={500}>
            <MenuSidebarContainer>
                <div><a href='/agentes'>Agentes</a></div>
                <div><a href='/rangos'>Rangos</a></div>
                <div><a href='/armas'>Armas</a></div>
                <div><a href='/mapas'>Mapas</a></div>
                <div><a href='/cartas'>Cartas de jugador</a></div>
                <div><a href='/bundles'>Bundles</a></div>
                <div><a href='/sprays'>Sprays</a></div>
                <div><a href='/buddies'>Buddies</a></div>
                <div><a href='/player-titles'>Titulos de jugador</a></div>
                <div><a href='/about'>About</a></div>
            </MenuSidebarContainer>
        </Sidebar>
    )

}

export default MenuSidebar;