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
    a{
        text-decoration: none;
        color: #000;
    }
`;

export const HrCustom = styled.hr`
    background-color: #000;
	border-top: 2px dashed #fff;
    border-bottom: none;
    width: 80%;
    margin: 10px auto;
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

//SPRAYS

export const ImgSprays = styled.img`
    width: 70%;
`;

//ARMAS

export const ImgArmas = styled.img`
    width: 80%;
`;

//SKINS

export const ImgSkins = styled.img`
    width: 80%;
`;

//BUNDLES

export const UlGridSingle = styled.ul`
    display: grid;
    grid-template-columns: 100%;
    list-style-type: none;
    padding: 10px 10px;
    li{
        padding: 10px 10px;
        text-align: center;
        font-weight: 500;
        border: 1px solid ${colors.mediumgray};
    }
`;

export const ImgBundles = styled.img`
    width: 100%;
`;

//BUDDIES

export const UlGridTriple = styled.ul`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    list-style-type: none;
    padding: 10px 10px;
    li{
        padding: 10px 10px;
        text-align: center;
        font-weight: 500;
        border: 1px solid ${colors.mediumgray};
    }
`;

export const ImgBuddies = styled.img`
    width: 100%;
`;

//MAPAS

export const ImgMapas = styled.img`
    width: 100%;
`;

export const DivWrapperMapas = styled.div`
    width: 100%;
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
    }
`;

//CARTAS

export const ImgCarta = styled.img`
    width: 90%;
`;

//ABOUT 

export const AboutContainer = styled.div`
    height: 93vh;
`;

export const AboutInfo = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    div{
        margin: 0px auto;
        ul{
            list-style-type: none;
            li{
                margin: 10px auto;
            }
        }
    }
`;

export const H4Info = styled.h4`
    font-weight: 400;
    font-size: 1.3rem;
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
`;

export const SelectContainer = styled.div`
    width: 80%;
    margin: 10px auto 20px;
    h2{
        text-align: center;
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
`;

export const ImgHabilidad = styled.img`
    width: 20%;
    filter: invert(27%) sepia(23%) saturate(854%) hue-rotate(177deg) brightness(70%) contrast(93%);
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
`;

export const ImgAgente = styled.img`
    width: 100%;
    margin: 0px auto;
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
        color: #325793;
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
    }
    p{
        display: inline;
    }
`;

