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
                <SidebarButton id='botonSidebar' type='button'><RxHamburgerMenu /></SidebarButton>
                <a href='/'><h2>Info Radiant</h2></a>
                <a href='https://www.linkedin.com/in/mateocampillo/' target={'_blank'} rel={'noreferrer'}><RxLinkedinLogo /></a>
                <a href='https://github.com/mateocampillo' target={'_blank'} rel={'noreferrer'}><RxGithubLogo /></a>
            </SidebarContainer>
        </SidebarWrapper>
    )
}

export default Sidebar;