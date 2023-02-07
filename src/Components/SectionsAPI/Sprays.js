import React, {useState, useEffect} from 'react';
import {
    MainContainer,
    MainWrapper,
    TituloH2,
    DescP,
    UlGrid,
    ImgSprays
} from './Sections.elements';
import Cargando from './Cargando';

function Sprays() {

    const [cargando, setCargando] = useState(true);
    const [lista, setLista] = useState(null);

    useEffect(() => {
        fetch("https://valorant-api.com/v1/sprays/?language=es-MX")
            .then((res) => res.json())
            .then((data) => {
                let objetosFiltrados = [];
                let datosUtiles = data.data;
                datosUtiles.forEach(item => {
                    item.displayName = item.displayName.replace('Spray ', '');
                    if(item.animationPng !== null){item.fullTransparentIcon = item.animationPng};
                    if(item.fullTransparentIcon == null){item.fullTransparentIcon = item.displayIcon};
                    objetosFiltrados.push({
                        uuid: item.uuid,
                        titulo: item.displayName,
                        Icon: item.fullTransparentIcon,
                    })
                });

                let listItems = objetosFiltrados.map((item) => 
                <li key={item.uuid}>
                    <ImgSprays alt='Spray' src={item.Icon}/><br/>
                    {item.titulo}
                </li>
                );
                setLista(listItems);
                setCargando(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if(cargando) {
        return (
            <Cargando />
        )
    }

    return (
        <MainWrapper>
            <MainContainer>
                <TituloH2>Sprays de VALORANT</TituloH2>
                <DescP>Estos son todos los sprays actuales en VALORANT</DescP>
                <UlGrid>
                    {lista}
                </UlGrid>
            </MainContainer>
        </MainWrapper>
    )
}

export default Sprays;