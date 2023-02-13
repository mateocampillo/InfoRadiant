import React, {useState, useEffect} from 'react';
import {
    MainContainer,
    MainWrapper,
    TituloH2,
    DescP,
    UlGridTitulos,
} from './Sections.elements';
import Cargando from './Cargando';

function PlayerTitles() {

    const [cargando, setCargando] = useState(true);
    const [lista, setLista] = useState(null);

    useEffect(() => {
        fetch("https://valorant-api.com/v1/playertitles?language=es-MX")
            .then((res) => res.json())
            .then((data) => {
                let objetosFiltrados = [];
                let datosUtiles = data.data;
                datosUtiles.forEach(item => {
                    if(item.displayName !== ' '){
                        objetosFiltrados.push({
                            uuid: item.uuid,
                            titulo: item.titleText
                        })
                    }
                });
                let listItems = objetosFiltrados.map((item) => 
                <li key={item.uuid}>{item.titulo}</li>
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
                <TituloH2>Titulos de jugador</TituloH2>
                <DescP>Estos son todos los titulos de jugador actuales en VALORANT</DescP>
                <UlGridTitulos>
                    {lista}
                </UlGridTitulos>
            </MainContainer>
        </MainWrapper>
    )
}

export default PlayerTitles;