import React, {useState, useEffect} from 'react';
import {
    MainContainer,
    MainWrapper,
    TituloH2,
    DescP,
    UlGridSingle,
    ImgCarta
} from './Sections.elements';
import Cargando from './Cargando';

function CartasDeJugador() {

    const [cargando, setCargando] = useState(true);
    const [lista, setLista] = useState(null);

    useEffect(() => {
        fetch("https://valorant-api.com/v1/playercards?language=es-MX")
            .then((res) => res.json())
            .then((data) => {
                let cartasFiltrados = [];
                let datosUtiles = data.data;
                datosUtiles.forEach(item => {
                    item.displayName = item.displayName.replace('Tarjeta ', '');
                    cartasFiltrados.push({
                        uuid: item.uuid,
                        titulo: item.displayName,
                        iconAncho: item.wideArt,
                        iconAlto: item.largeArt
                    })
                });

                let listItems = cartasFiltrados.map((item) => 
                <li key={item.uuid}>
                    <ImgCarta alt='Carta de jugador' src={item.iconAncho}/><br/>
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
                <TituloH2>Cartas de jugador</TituloH2>
                <DescP>Estos son las {lista.length} cartas disponibles en Valorant.</DescP>
                <UlGridSingle>
                    {lista}
                </UlGridSingle>
            </MainContainer>
        </MainWrapper>
    )
}

export default CartasDeJugador;