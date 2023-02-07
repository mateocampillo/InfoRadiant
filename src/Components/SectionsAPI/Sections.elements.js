import styled from 'styled-components';
import * as colors from '../Elements/ColorPallete';

export const CargandoContainer = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4{
        font-size: 1.2rem;
        margin-top: 10px;
    }
    svg{
        font-size: 2.5rem;
    }

`;

export const MainWrapper = styled.div`
    width: 100vw;
    background-color: ${colors.lightgray};
`;

export const MainContainer = styled.div`
    width: 100%;
`;

export const TituloH2 = styled.h2`
    text-align: center;
    padding: 15px 0px;
`;

export const DescP = styled.p`
    text-align: left;
    margin-left: 8px;
    padding: 15px 0px;
    font-size: 1.1rem;
`;

//RANGOS

export const UlGrid = styled.ul`
    display: grid;
    grid-template-columns: 50% 50%;
    list-style-type: none;
    padding: 10px 10px;
    li{
        padding: 10px 10px;
        text-align: center;
        font-weight: 500;
        border: 1px solid ${colors.mediumgray};
    }
`;