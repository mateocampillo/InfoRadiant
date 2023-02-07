import styled from 'styled-components';
import ValorantBcg from '../img/valogeneral1.jpg'

export const HomeWrapper = styled.main`
    height: 93vh;
    width: 100%;
    background-image: url(${ValorantBcg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    font-family: 'Raleway', sans-serif;
`;

export const HomeContainer = styled.div`
    width: 80%;
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: space-around;
    color: #fff;
    height: 70vh;
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