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