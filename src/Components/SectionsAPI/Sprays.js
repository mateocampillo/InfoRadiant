import React, {useState, useEffect} from 'react';
import {
    MainContainer,
    MainWrapper,
    TituloH2,
    DescP,
    UlGridSprays,
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
                <DescP>¡Agrega un toque de personalidad a tus partidas de VALORANT con Sprays! Encuentra diseños divertidos e intensos, algunos de ellos con versiones animadas. Haz que tu estilo de juego sea único. ¡Explora los {lista.length} sprays!</DescP>
                <UlGridSprays>
                    {lista}
                </UlGridSprays>
            </MainContainer>
        </MainWrapper>
    )
}

export default Sprays;