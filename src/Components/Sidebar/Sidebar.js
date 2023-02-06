import React from 'react';
import {
    SidebarWrapper,
    SidebarContainer,
    SidebarButton
} from './Sidebar.elements';
import {RxHamburgerMenu, RxGithubLogo, RxLinkedinLogo} from 'react-icons/rx';

function Sidebar(){
    return (
        <SidebarWrapper>
            <SidebarContainer>
                <SidebarButton id='botonSidebar'><RxHamburgerMenu /></SidebarButton>
                <a href='/'><h2>Home</h2></a>
                <a href='https://www.linkedin.com/in/mateocampillo/'><RxLinkedinLogo /></a>
                <a href='https://github.com/mateocampillo'><RxGithubLogo /></a>
            </SidebarContainer>
        </SidebarWrapper>
    )
}

export default Sidebar;