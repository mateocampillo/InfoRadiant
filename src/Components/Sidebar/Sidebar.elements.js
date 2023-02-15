import styled from 'styled-components';
import * as colors from '../Elements/ColorPallete';

export const SidebarWrapper = styled.header`
    width: 100vw;
    height: 6vh;
    background-color: ${colors.red};
    position: sticky;
    top: 0px;
    z-index: 1000;
`;

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 4px 0px;
    a{
        text-decoration: none;
        color: #fff;
        @media (min-width: 992px){
            font-size: 1.2rem;
        }
        svg{
            font-size: 1.8rem;
            @media (min-width: 992px){
            font-size: 2rem;
        }
        }
    }
`;

export const SidebarButton = styled.button`
    background: none;
    border: none;
    margin: 3px 0px;
    cursor: pointer;
    position: relative;
    z-index: 20000;
    svg{
        font-size: 2.5rem;
        color: #fff;
        margin: 0px auto;
        @media (min-width: 992px){
            font-size: 2.8rem;
        }
    }
`;

export const MenuSidebarContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    div{
        width: 100%;
        border-top: 1px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${colors.red};

    }
    a{
        width: 100%;
        text-decoration: none;
        color: #000;
        font-weight: 600;
        font-size: 1.2rem;
    }
`;