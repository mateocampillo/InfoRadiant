import React from 'react';
import {
    MenuSidebarContainer
} from './Sidebar.elements';
import { Sidebar } from 'react-pro-sidebar';
import { useProSidebar } from 'react-pro-sidebar';

function MenuSidebar(){

    const { collapseSidebar } = useProSidebar();

    return (
        <Sidebar id='proSidebar' defaultCollapsed={true} collapsedWidth={0} transitionDuration={500} collapsed={true}>
            <MenuSidebarContainer>
                <div><a href='/agentes' onClick={() => collapseSidebar()}>Agentes</a></div>
                <div><a href='/rangos' onClick={() => collapseSidebar()}>Rangos</a></div>
                <div><a href='/armas' onClick={() => collapseSidebar()}>Armas</a></div>
                <div><a href='/mapas' onClick={() => collapseSidebar()}>Mapas</a></div>
                <div><a href='/cartas' onClick={() => collapseSidebar()}>Cartas de jugador</a></div>
                <div><a href='/bundles' onClick={() => collapseSidebar()}>Bundles</a></div>
                <div><a href='/sprays' onClick={() => collapseSidebar()}>Sprays</a></div>
                <div><a href='/buddies' onClick={() => collapseSidebar()}>Buddies</a></div>
                <div><a href='/player-titles' onClick={() => collapseSidebar()}>Titulos de jugador</a></div>
                <div><a href='/about' onClick={() => collapseSidebar()}>About</a></div>
            </MenuSidebarContainer>
        </Sidebar>
    )

}

export default MenuSidebar;