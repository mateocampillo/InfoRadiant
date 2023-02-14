import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {
    MainContainer,
    MainWrapper,
    TituloH2,
    DescP,
    UlGridCartas,
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
                    <Link to={item.iconAlto} rel={'noreferrer'} target={'_blank'}><ImgCarta alt='Carta de jugador' src={item.iconAncho}/></Link><br/>
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
                <DescP>Personaliza tu perfil de jugador en VALORANT con una amplia selección de {lista.length} imágenes de perfil disponibles. Haz clic en cada una para verla en su formato completo y encontrar la que mejor refleje tu estilo de juego.</DescP>
                <UlGridCartas>
                    {lista}
                </UlGridCartas>
            </MainContainer>
        </MainWrapper>
    )
}

export default CartasDeJugador;