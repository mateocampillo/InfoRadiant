import styled from 'styled-components';
import * as colors from '../Elements/ColorPallete';

export const SidebarWrapper = styled.header`
    width: 100%;
    background-color: ${colors.red};
    position: sticky;
    top: 0px;
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
        svg{
            font-size: 1.8rem;
        }
    }
`;

export const SidebarButton = styled.button`
    background: none;
    border: none;
    margin: 3px 0px;
    svg{
        font-size: 2.5rem;
        color: #fff;
        margin: 0px auto;
    }
`;

export const MenuSidebarWrapper = styled.div`
    font-family: 'Inter', sans-serif;
    position: fixed;
    z-index: 1000;
    width: 70vw;
    background-color: ${colors.blue};
`;

export const MenuSidebarContainer = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;

    a{
        width: 100%;
        text-decoration: none;
        color: #fff;
        font-size: 1.2rem;
        padding: 7px 0px;
        border-top: 1px solid #fff;
    }
`;