import React, {  useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { randInt } from 'go-random';
import CargandoHome from './CargandoHome';
import {
    HomeWrapper,
    HomeContainer,
    HomeHeroContainer,
    HomeInfo,
    HomeHero,
    HomeHeroInfo
} from './Home.elements';

function Sidebar(){

    const [cargando, setCargando] = useState(true);
    const [agenteDelDia, setAgenteDelDia] = useState([]);
    const [fecha, setFecha] = useState('');

    useEffect(() => {
        fetch('https://valorant-api.com/v1/agents?language=es-MX&isPlayableCharacter=true')
            .then((res) => res.json())
            .then((data) => {
                let arrAgentes = [];
                data.data.forEach((agente) => {
                    arrAgentes.push({
                        nombre: agente.displayName, 
                        background: agente.fullPortrait, 
                        rol: agente.role.displayName
                    })
                });
                let fecha = new Date();
                let day = moment(fecha).format('DD-MM-YYYY'); 
                setFecha(day);
                setAgenteDelDia(arrAgentes[randInt(0, arrAgentes.length)]);
                setCargando(false);
            })
            .catch((err) => {console.log(err);})
    }, []);

    if(cargando){
        return (
            <HomeWrapper>
                <HomeContainer>
                    <HomeInfo>
                        <h1>Info Radiant</h1>
                        <p>Toda la data viene directo de <a href='https://dash.valorant-api.com/' target={'_blank'} rel={'noreferrer'}>Valorant-API</a> y se actualiza de forma automatica con cada nuevo parche.</p>
                        <p>La idea de Info Radiant es presentar la información actual del juego en un formato visual articulado y fácil de absorber.<br/><br/>Por ahora solo se encuentra disponible en formato español de latinoamerica.</p>
                        <p>Creado por: <Link to={'https://www.linkedin.com/in/mateocampillo/'} target={'_blank'} rel={'noreferrer'}><u>Mateo Campillo</u></Link></p>
                    </HomeInfo>
                    <HomeHeroContainer>
                        <HomeHero>
                            <CargandoHome />
                        </HomeHero>
                    </HomeHeroContainer>
                </HomeContainer>
            </HomeWrapper>
        )
    }

    return (
        <HomeWrapper>
            <HomeContainer>
                <HomeInfo>
                    <h1>Info Radiant</h1>
                    <p>Toda la data viene directo de <a href='https://dash.valorant-api.com/' target={'_blank'} rel={'noreferrer'}>Valorant-API</a> y se actualiza de forma automatica con cada nuevo parche.</p>
                    <p>La idea de Info Radiant es presentar la información actual del juego en un formato visual articulado y fácil de absorber.<br/><br/>Por ahora solo se encuentra disponible en formato español de latinoamerica.</p>
                    <p>Creado por: <Link to={'https://www.linkedin.com/in/mateocampillo/'} target={'_blank'} rel={'noreferrer'}><u>Mateo Campillo</u></Link></p>
                </HomeInfo>
                <HomeHeroContainer>
                    <HomeHero style={{backgroundImage: `url(${agenteDelDia.background})`}}>
                        <div>
                            <h2>Agente highlight</h2>
                            <p>Fecha: {fecha}</p>
                        </div>
                        <HomeHeroInfo>
                            <h3>Nombre: {agenteDelDia.nombre}</h3>
                            <p>Rol: {agenteDelDia.rol}</p>
                        </HomeHeroInfo>
                    </HomeHero>
                </HomeHeroContainer>
            </HomeContainer>
        </HomeWrapper>
    )
}

export default Sidebar;