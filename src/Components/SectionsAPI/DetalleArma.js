import React, {useState, useEffect} from 'react';
import {
    MainContainer,
    MainWrapper,
    TituloH2,
    DescP,
    UlGridArmas,
    ImgSkinsDetalle
} from './Sections.elements';
import Cargando from './Cargando';

function DetalleArma() {

    const queryParams = new URLSearchParams(window.location.search);
    const query = queryParams.get('weapon');
    const [cargando, setCargando] = useState(true);
    const [lista, setlista] = useState([]);
    const [nombreArma, setNombreArma] = useState('');
    const apiCall = 'https://valorant-api.com/v1/weapons/';
    const languageApi = '?language=es-MX'

    useEffect(() => {
        fetch(apiCall+query+languageApi)
            .then((res) => res.json())
            .then((data) => {
                setNombreArma(data.data.displayName);
                let collectionsSkins = [];
                data.data.skins.forEach((collection) => {
                    if(collection.chromas[0].displayName !== 'Standard'){
                        collectionsSkins.push({
                            uuid: collection.uuid,
                            titulo: collection.chromas[0].displayName,
                            icon: collection.chromas[0].fullRender
                        })
                    }
                });
                let listaSkin = collectionsSkins.map((objeto) => {
                    objeto.titulo = objeto.titulo.replace(nombreArma, '');
                    return (
                        <li key={objeto.uuid}>
                            <ImgSkinsDetalle alt='Skin default' src={objeto.icon}/><br/>
                            {objeto.titulo}
                        </li>
                    )
                });
                setlista(listaSkin);
                setCargando(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [query, nombreArma]);

    if(cargando) {
        return (
            <Cargando />
        )
    }

    return (
        <MainWrapper>
            <MainContainer>
                <TituloH2>Skins de VALORANT</TituloH2>
                <DescP>Esta es toda la info actual de {nombreArma} en VALORANT</DescP>
                <DescP>Hay {lista.length} skins de {nombreArma} en el juego</DescP>
                <UlGridArmas>
                    {lista}
                </UlGridArmas>
            </MainContainer>
        </MainWrapper>
    )
}

export default DetalleArma;