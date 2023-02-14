import styled from 'styled-components';
import * as colors from '../Elements/ColorPallete';
import PhoneBcg from '../img/PhoneBcg.png';
import DesktopBcg from '../img/DesktopBcg.png';

export const CargandoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4{
        font-size: 1.5rem;
        margin-top: 10px;
        color: ${colors.white};
    }
    svg{
        font-size: 4rem;
        color: ${colors.white};
    }

`;

export const HomeWrapper = styled.main`
    height: 94vh;
    width: 100%;
    background-image: url(${PhoneBcg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    font-family: 'Raleway', sans-serif;
    @media (min-width: 576px){
        background-image: url(${DesktopBcg});
    }
`;

export const HomeContainer = styled.div`
    width: 80%;
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: space-around;
    color: ${colors.white};
    height: 80vh;
    left: 10%;
    bottom: 10%;
    text-align: center;
    h1{
        font-size: 3rem;
    }
    p{
        font-size: 1.5rem;
    }
    a{
        color: #fff;
    }
    @media (min-width: 1200px){
        display: grid;
        grid-template-columns: 40% 50%;
    }
`;

export const HomeInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
`;

export const HomeHeroContainer = styled.div`
    display: none;
    @media (min-width: 1200px){
        display: block;
    }
`;

export const HomeHero = styled.div`
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 70% 10%;
`;

export const HomeHeroInfo = styled.div`
    display: grid;
    margin: 0px auto;
    color: ${colors.white};
    padding-top: 5px;
    background-color: rgba(250,68,84,0.5);
    border-radius: 4px;
    width: 40%;
`;