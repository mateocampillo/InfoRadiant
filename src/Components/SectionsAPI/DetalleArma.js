import React, {useState, useEffect} from 'react';
import {
    MainContainer,
    MainWrapper,
    TituloH2,
    DescP,
    UlGridArmas,
    ImgSkinsDetalle,
    PaginadoContainer,
    PaginadoButton,
    PaginadoP
} from './Sections.elements';
import Cargando from './Cargando';
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai';

function DetalleArma() {

    const queryParams = new URLSearchParams(window.location.search);
    const query = queryParams.get('weapon');
    const [cargando, setCargando] = useState(true);
    const [lista, setlista] = useState([]);
    const [nombreArma, setNombreArma] = useState('');
    const [collectionComplete, setCollectionComplete] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [paginaStart, setPaginaStart] = useState(0);
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
                setCollectionComplete(collectionsSkins);

                let arrPaginado = [];
                for(let i = paginaStart; i < pagina*16; i++){
                    if(collectionsSkins[i] !== undefined){
                        arrPaginado.push(collectionsSkins[i]);
                    }
                }


                let listaSkin = arrPaginado.map((objeto) => {
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
    }, [pagina, paginaStart, query, nombreArma]);


//BOTONES PAGINADOR
    function handlePageUp() {
        if(pagina >= 1 && paginaStart+16 < collectionComplete.length){
            setPagina(pagina+1);
            setPaginaStart(paginaStart+16);
        }
    }    
    function handlePageDown() {
        if(pagina > 1){
            setPagina(pagina-1);
            setPaginaStart(paginaStart-16);
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
                <TituloH2>Skins de VALORANT</TituloH2>
                <DescP>Explora la colección completa de skins para {nombreArma} en VALORANT. Cada skin es única y te ofrece un estilo distinto en el campo de batalla. ¡Descubre todas las opciones disponibles aquí!</DescP>
                <DescP>Hay {collectionComplete.length} skins de {nombreArma} en el juego</DescP>
                <PaginadoContainer>
                    <PaginadoButton onPointerDown={handlePageDown}><AiOutlineMinusCircle/></PaginadoButton>
                    <PaginadoP>Pagina {pagina}</PaginadoP>
                    <PaginadoButton onPointerDown={handlePageUp}><AiOutlinePlusCircle/></PaginadoButton>
                </PaginadoContainer>
                <UlGridArmas>
                    {lista}
                </UlGridArmas>
            </MainContainer>
        </MainWrapper>
    )
}

export default DetalleArma;