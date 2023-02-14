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
    padding: 12px 0px;
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

// export const SidebarButton = styled.button`
//     background: none;
//     border: none;
//     margin: 3px 0px;
//     cursor: pointer;
//     svg{
//         font-size: 2.5rem;
//         color: #fff;
//         margin: 0px auto;
//         pointer-events: none;
//         path{
//             pointer-events: none;
//         }
//         @media (min-width: 992px){
//             font-size: 2.8rem;
//         }
//     }
// `;

export const MenuSidebarWrapper = styled.div`
    font-family: 'Inter', sans-serif;
    position: fixed;
    z-index: 1000;
    width: 70vw;
    height: 80vh;
    background-color: ${colors.red};
    @media (min-width: 500px){
        width: 60vw;
    }
    @media (min-width: 768px){
        width: 45vw;
    }
    @media (min-width: 992px){
        width: 30vw;
    }
    @media (min-width: 1200px){
        width: 18vw;
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
    }
    a{
        width: 100%;
        text-decoration: none;
        color: #000;
        font-weight: 600;
        font-size: 1.2rem;
    }
`;