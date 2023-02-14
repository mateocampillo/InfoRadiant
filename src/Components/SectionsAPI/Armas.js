import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {
    MainContainer,
    MainWrapper,
    TituloH2,
    DescP,
    UlGridArmas,
    ImgArmas
} from './Sections.elements';
import Cargando from './Cargando';

function Armas() {

    const [cargando, setCargando] = useState(true);
    const [lista, setLista] = useState(null);
    const [skins, setSkins] = useState([]);

    useEffect(() => {
        fetch("https://valorant-api.com/v1/weapons/skins/")
            .then((res) => res.json())
            .then((data) => {
                let arrSkins = [];
                data.data.forEach((item) => {
                    if(item.contentTierUuid == null){
                        arrSkins.push(item)
                    }
                })
                let arrSkinsDefault = [];
                arrSkins.forEach(item => {
                    if(item.displayName.includes('Standard') || item.displayName.includes('Melee')){
                        arrSkinsDefault.push(item);
                    }
                })
                setSkins(arrSkinsDefault);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        fetch("https://valorant-api.com/v1/weapons/?language=es-MX")
            .then((res) => res.json())
            .then((data) => {
                let objetosFiltrados = [];
                let datosUtiles = data.data;
                datosUtiles.forEach(item => {
                    skins.forEach((skin => {
                        if(item.defaultSkinUuid === skin.uuid){
                            item.defaultSkinUuid = skin.chromas[0].fullRender
                        }
                    }))
                    objetosFiltrados.push({
                        uuid: item.uuid,
                        titulo: item.displayName,
                        defaultSkinUuid: item.defaultSkinUuid
                    })
                });

                //Ordeno la frenzy y la classic asi van al final, por temas esteticos: La imagen obtenida de la API es demasido grande en comparacion.
                let frenzy = objetosFiltrados.splice(7, 1)[0];
                let classic = objetosFiltrados.splice(7, 1)[0];
                objetosFiltrados.splice(16, 0, frenzy);
                objetosFiltrados.splice(17, 0, classic);
                //
                
                let listItems = objetosFiltrados.map((item) => 
                <li key={item.tier}>
                    <Link to={`/detalle/?weapon=${item.uuid}`}><ImgArmas alt='Skin default' src={item.defaultSkinUuid}/></Link><br/>
                    <p>{item.titulo}</p>
                </li>
                );
                setLista(listItems);
                setCargando(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [skins]);

    if(cargando) {
        return (
            <Cargando />
        )
    }

    return (
        <MainWrapper>
            <MainContainer>
                <TituloH2>Armas de VALORANT</TituloH2>
                <DescP>Explora todas las armas actuales en VALORANT en esta lista completa. Haz clic en cada una para descubrir su colección completa de cosméticos.</DescP>
                <UlGridArmas>
                    {lista}
                </UlGridArmas>
            </MainContainer>
        </MainWrapper>
    )
}

export default Armas;