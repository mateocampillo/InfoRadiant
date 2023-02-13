import styled from 'styled-components';
import * as colors from '../Elements/ColorPallete';
import PhoneBcg from '../img/PhoneBcg.png';
import DesktopBcg from '../img/DesktopBcg.png';

export const HomeWrapper = styled.main`
    height: 93vh;
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
`;