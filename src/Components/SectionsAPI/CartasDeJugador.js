import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {
    MainContainer,
    MainWrapper,
    TituloH2,
    DescP,
    UlGridCartas,
    ImgCarta,
    PaginadoContainer,
    PaginadoButton,
    PaginadoP
} from './Sections.elements';
import Cargando from './Cargando';
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai';

function CartasDeJugador() {

    const [cargando, setCargando] = useState(true);
    const [lista, setLista] = useState(null);
    const [pagina, setPagina] = useState(1);
    const [paginaStart, setPaginaStart] = useState(0);
    const [collectionComplete, setCollectionComplete] = useState([]);

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
                setCollectionComplete(cartasFiltrados);

                let arrPaginado = [];
                for(let i = paginaStart; i < pagina*32; i++){
                    if(cartasFiltrados[i] !== undefined){
                        arrPaginado.push(cartasFiltrados[i]);
                    }
                }

                let listItems = arrPaginado.map((item) => 
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
    }, [paginaStart, pagina]);

//BOTONES PAGINADOR
    function handlePageUp() {
        if(pagina >= 1 && paginaStart+32 < collectionComplete.length){
            setPagina(pagina+1);
            setPaginaStart(paginaStart+32);
        }
    }    
    function handlePageDown() {
        if(pagina > 1){
            setPagina(pagina-1);
            setPaginaStart(paginaStart-32);
        }
    }
//

    if(cargando) {
        return (
            <Cargando />
        )
    }

    return (
        <MainWrapper>
            <MainContainer>
                <TituloH2>Cartas de jugador</TituloH2>
                <DescP>Personaliza tu perfil de jugador en VALORANT con una amplia selección de {collectionComplete.length} imágenes de perfil disponibles. Haz clic en cada una para verla en su formato completo y encontrar la que mejor refleje tu estilo de juego.</DescP>
                <PaginadoContainer>
                    <PaginadoButton onPointerDown={handlePageDown}><AiOutlineMinusCircle/></PaginadoButton>
                    <PaginadoP>Pagina {pagina}</PaginadoP>
                    <PaginadoButton onPointerDown={handlePageUp}><AiOutlinePlusCircle/></PaginadoButton>
                </PaginadoContainer>
                <UlGridCartas>
                    {lista}
                </UlGridCartas>
            </MainContainer>
        </MainWrapper>
    )
}

export default CartasDeJugador;