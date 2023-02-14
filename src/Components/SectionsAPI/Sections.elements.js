import styled from 'styled-components';
import * as colors from '../Elements/ColorPallete';

export const CargandoContainer = styled.div`
    height: 94vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.navy};
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

export const MainWrapper = styled.div`
    width: 100vw;
    background-color: ${colors.navy};
`;

export const MainContainer = styled.div`
    width: 100%;
`;

export const TituloH2 = styled.h2`
    text-align: center;
    padding: 15px 0px;
    color: ${colors.white};
    @media (min-width: 1200px){
        font-size: 2rem;
    }
`;

export const DescP = styled.p`
    text-align: left;
    margin-left: 8px;
    padding: 15px 0px;
    font-size: 1.1rem;
    color: ${colors.white};
    a{
        text-decoration: none;
        color: ${colors.white};
    }
    @media (min-width: 1200px){
        font-size: 1.5rem;
        text-align: center;
    }
`;

export const HrCustom = styled.hr`
    background-color: #000;
	border-top: 2px dashed #fff;
    border-bottom: none;
    width: 80%;
    margin: 10px auto;
`;

export const UlGridSingle = styled.ul`
    display: grid;
    grid-template-columns: 100%;
    list-style-type: none;
    padding: 10px 10px;
    color: ${colors.white};
    li{
        padding: 10px 10px;
        text-align: center;
        font-weight: 500;
        border: 1px solid ${colors.mediumgray};
    }
`;

//RANGOS

export const UlGridRangos = styled.ul`
    display: grid;
    grid-template-columns: 50% 50%;
    list-style-type: none;
    padding: 10px 10px;
    color: ${colors.white};
    li{
        padding: 10px 10px;
        text-align: center;
        font-weight: 500;
        border: 1px solid ${colors.mediumgray};
    }
    @media (min-width: 768px){
        grid-template-columns: 33% 33% 33%;
    }
    @media (min-width: 1200px){
        font-size: 1.3rem;
    }
`;

//SPRAYS

export const UlGridSprays = styled.ul`
    display: grid;
    grid-template-columns: 50% 50%;
    list-style-type: none;
    padding: 10px 10px;
    color: ${colors.white};
    li{
        padding: 10px 10px;
        text-align: center;
        font-weight: 500;
        border: 1px solid ${colors.mediumgray};
    }
    @media (min-width: 768px){
        grid-template-columns: 33% 33% 33%;
    }
    @media (min-width: 992px){
        grid-template-columns: 25% 25% 25% 25%;
    }
    @media (min-width: 1200px){
        grid-template-columns: 20% 20% 20% 20% 20%;
        font-size: 1.3rem;
    }
`;

export const ImgSprays = styled.img`
    width: 70%;
`;

//PLAYER TITLES

export const UlGridTitulos = styled.ul`
    display: grid;
    grid-template-columns: 50% 50%;
    list-style-type: none;
    padding: 10px 10px;
    color: ${colors.white};
    li{
        padding: 10px 10px;
        text-align: center;
        font-weight: 500;
        border: 1px solid ${colors.mediumgray};
    }
    @media (min-width: 768px){
        grid-template-columns: 33% 33% 33%;
    }
    @media (min-width: 1200px){
        grid-template-columns: 20% 20% 20% 20% 20%;
        font-size: 1.3rem;
    }
`;

//ARMAS

export const ImgArmas = styled.img`
    width: 80%;
    @media (min-width: 500px){
        width: 60%;
    }
    @media (min-width: 1200px){
        width: 70%;
    }
`;

export const UlGridArmas = styled.ul`
    display: grid;
    grid-template-columns: 50% 50%;
    list-style-type: none;
    padding: 10px 10px;
    color: ${colors.white};
    li{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        padding: 10px 10px;
        text-align: center;
        font-weight: 500;
        border: 1px solid ${colors.mediumgray};
    }
    @media (min-width: 768px){
        grid-template-columns: 33% 33% 33%;
    }
    @media (min-width: 1200px){
        font-size: 1.3rem;
    }
`;

//SKINS

export const ImgSkinsDetalle = styled.img`
    width: 80%;
    @media (min-width: 500px){
        width: 60%;
    }
    @media (min-width: 1200px){
        width: 50%;
    }
`;

//BUNDLES

export const UlGridBundles = styled.ul`
    display: grid;
    grid-template-columns: 100%;
    list-style-type: none;
    padding: 10px 10px;
    color: ${colors.white};
    li{
        padding: 10px 10px;
        text-align: center;
        font-weight: 500;
        border: 1px solid ${colors.mediumgray};
    }
    @media (min-width: 768px){
        grid-template-columns: 50% 50%;
    }
    @media (min-width: 1200px){
        grid-template-columns: 33% 33% 33%;
    }
    @media (min-width: 1200px){
        font-size: 1.3rem;
    }
`;

export const ImgBundles = styled.img`
    width: 100%;
    cursor: pointer;
`;

//BUDDIES

export const UlGridBuddies = styled.ul`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    list-style-type: none;
    padding: 10px 10px;
    color: ${colors.white};
    li{
        padding: 10px 10px;
        text-align: center;
        font-weight: 500;
        border: 1px solid ${colors.mediumgray};
    }
    @media (min-width: 500px){
        grid-template-columns: 20% 20% 20% 20% 20%;
    }
    @media (min-width: 768px){
        grid-template-columns: 16.66% 16.66% 16.66% 16.66% 16.66% 16.66%;
    }
    @media (min-width: 992px){
        grid-template-columns: 14.28% 14.28% 14.28% 14.28% 14.28% 14.28% 14.28%;
    }
    @media (min-width: 1200px){
        grid-template-columns: 8.33% 8.33% 8.33% 8.33% 8.33% 8.33% 8.33% 8.33% 8.33% 8.33% 8.33% 8.33%;
    }
`;

export const ImgBuddies = styled.img`
    width: 100%;
    @media (min-width: 500px){
        max-height: 135px;
    }
`;

//MAPAS

export const ImgMapas = styled.img`
    width: 100%;
    border: 1px solid ${colors.white};
`;

export const DivWrapperMapas = styled.div`
    width: 100%;
    @media (min-width: 1200px){
        display: grid;
        grid-template-columns: 50% 50%;
    }
`;

export const DivContainerMapas = styled.div`
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    h2{
        font-weight: 500;
        margin-bottom: 10px;
        color: ${colors.white};
    }
    @media (min-width: 768px){
        width: 100%;
    }
`;

//CARTAS

export const UlGridCartas = styled.ul`
    display: grid;
    grid-template-columns: 100%;
    list-style-type: none;
    padding: 10px 10px;
    color: ${colors.white};
    li{
        padding: 10px 10px;
        text-align: center;
        font-weight: 500;
        border: 1px solid ${colors.mediumgray};
    }
    @media (min-width: 768px){
        grid-template-columns: 50% 50%;
    }
    @media (min-width: 1200px){
        grid-template-columns: 33% 33% 33%;
    }
    @media (min-width: 1200px){
        grid-template-columns: 25% 25% 25% 25%;
        font-size: 1.3rem;
    }
`;

export const ImgCarta = styled.img`
    width: 90%;
    cursor: pointer;
`;

//ABOUT 

export const AboutWrapper = styled.div`
    width: 100vw;
    background-color: ${colors.navy};
`;

export const AboutContainer = styled.div`
    height: 94vh;
    margin: 0px auto;
    @media (min-width: 500px){
        width: 80%;
    }
    @media (min-width: 768px){
        width: 60%;
    }
    @media (min-width: 992px){
        font-size: 1.4rem;
    }
`;

export const AboutInfo = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: ${colors.white};
    div{
        margin: 0px auto;
        ul{
            list-style-type: none;
            li{
                margin: 10px auto;
            }
        }
    }
    @media (min-width: 500px){
        height: 60vh;
    }
    @media (min-width: 768px){
        height: 70vh;
    }
`;

export const H4Info = styled.h4`
    font-weight: 400;
    font-size: 2rem;
    text-align: center;
    margin-top: 100px;
`;

//AGENTES

export const AgentesWrapper = styled.div`
    width: 100vw;
    position: relative;
    z-index: 1;
`;

export const AgentesContainer = styled.div`
    width: 100%;
    background-color: ${colors.navy};
    padding-bottom: 10px;
`;

export const SelectContainer = styled.div`
    width: 80%;
    padding-top: 10px;
    margin: 0px auto 20px;
    h2{
        text-align: center;
        color: ${colors.white};
        @media (min-width: 1200px){
        font-size: 2rem;
    }
    }
    @media (min-width: 768px){
        width: 60%;
    }
    @media (min-width: 992px){
        width: 40%;
    }
    @media (min-width: 1200px){
        width: 25%;
    }
`;

export const SelectAgentes = styled.select`
    padding: 5px;
    font-weight: 400;
    font-size: 1.2rem;
    margin: 15px auto 0px;
    width: 50%;
    text-align: center;
    background-color: ${colors.red};
    color: #fff;
    border: 1px solid ${colors.mediumgray};
    @media (min-width: 992px){
        width: 40%;
        font-size: 1.4rem;
    }
`;

export const ImgHabilidad = styled.img`
    width: 20%;
    @media (min-width: 768px){
        width: 15%;
    }
    @media (min-width: 992px){
        width: 10%;
    }
    @media (min-width: 1200px){
        width: 7%;
    }
`;

export const UlImgContainer = styled.div`
    margin: 15px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

export const ImgAgenteContainer = styled.div`
    width: 50%;
    margin-bottom: 10px;
    display: grid;
`;

export const ImgAgente = styled.img`
    width: 100%;
    margin: 0px auto;
    @media (min-width: 500px){
        width: 80%;
    }
    @media (min-width: 768px){
        width: 60%;
    }
    @media (min-width: 992px){
        width: 50%;
    }
    @media (min-width: 1200px){
        width: 45%;
    }
    @media (min-width: 1200px){
        width: 25%;
    }
`;

export const InfoAgenteContainer = styled.div`
    width: 95%;
    margin: 0px auto;
    border: 1px solid ${colors.lightred};
    border-radius: 4px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
        color: ${colors.red};
        @media (min-width: 768px){
            font-size: 2rem;
        }
    }
`;

export const UlAgentes = styled.ul`
    list-style-type: none;
    li{
        margin: 20px auto;
    }
    h4{
        display: inline;
        margin-top: 15px;
        color: ${colors.pink};
        @media (min-width: 768px){
            font-size: 1.2rem;
        }
        @media (min-width: 1200px){
            font-size: 1.5rem;
        }
    }
    p{
        display: inline;
        color: ${colors.white};
        @media (min-width: 1200px){
            font-size: 1.3rem;
        }
    }
`;

