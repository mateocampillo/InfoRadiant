import React from 'react';
import {
    MenuSidebarWrapper,
    MenuSidebarContainer
} from './Sidebar.elements';

function MenuSidebar(){
    return (
        <MenuSidebarWrapper id='MenuSidebarWrapper' className='menuSidebarClose'>
            <MenuSidebarContainer>
                <a href='/'>Enlace</a>
                <a href='/'>Enlace</a>
                <a href='/'>Enlace</a>
            </MenuSidebarContainer>
        </MenuSidebarWrapper>
    )
}

export default MenuSidebar;