import React, {useState, useEffect} from 'react';
import {
    MainContainer,
    MainWrapper,
    TituloH2,
    DescP,
    UlGridBuddies,
    ImgBuddies
} from './Sections.elements';
import Cargando from './Cargando';

function Buddies() {

    const [cargando, setCargando] = useState(true);
    const [lista, setLista] = useState(null);

    useEffect(() => {
        fetch("https://valorant-api.com/v1/buddies?language=es-MX")
            .then((res) => res.json())
            .then((data) => {
                let buddiesFiltrados = [];
                data.data.forEach(item => {
                    item.displayName = item.displayName.replace('Buddy ', '');
                    buddiesFiltrados.push({
                        uuid: item.uuid,
                        titulo: item.displayName,
                        Icon: item.displayIcon,
                    })
                });

                let listItems = buddiesFiltrados.map((item) => 
                <li key={item.uuid}>
                    <ImgBuddies alt='Spray' src={item.Icon}/><br/>
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
                <TituloH2>Buddies de VALORANT</TituloH2>
                <DescP>Estos son los {lista.length} buddies presentes en VALORANT</DescP>
                <UlGridBuddies>
                    {lista}
                </UlGridBuddies>
            </MainContainer>
        </MainWrapper>
    )
}

export default Buddies;