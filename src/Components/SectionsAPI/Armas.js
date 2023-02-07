import React, {useState, useEffect} from 'react';
import {
    MainContainer,
    MainWrapper,
    TituloH2,
    DescP,
    UlGrid,
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
                let listItems = objetosFiltrados.map((item) => 
                <li key={item.tier}>
                    <a href={`/armas/${item.titulo}`}><ImgArmas alt='Skin default' src={item.defaultSkinUuid}/></a><br/>
                    {item.titulo}
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
                <DescP>Estos son todas las armas actuales en VALORANT</DescP>
                <UlGrid>
                    {lista}
                </UlGrid>
            </MainContainer>
        </MainWrapper>
    )
}

export default Armas;