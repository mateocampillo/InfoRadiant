import React, {useState, useEffect} from 'react';
import {
    MainContainer,
    MainWrapper,
    TituloH2,
    DescP,
    UlGridBuddies,
    ImgBuddies,
    PaginadoContainer,
    PaginadoButton,
    PaginadoP
} from './Sections.elements';
import Cargando from './Cargando';
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai';

function Buddies() {

    const [cargando, setCargando] = useState(true);
    const [lista, setLista] = useState(null);
    const [collectionComplete, setCollectionComplete] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [paginaStart, setPaginaStart] = useState(0);

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
                setCollectionComplete(buddiesFiltrados);

                let arrPaginado = [];
                for(let i = paginaStart; i < pagina*36; i++){
                    if(buddiesFiltrados[i] !== undefined){
                        arrPaginado.push(buddiesFiltrados[i]);
                    }
                }

                let listItems = arrPaginado.map((item) => 
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
    }, [paginaStart, pagina]);

//BOTONES PAGINADOR
    function handlePageUp() {
        if(pagina >= 1 && paginaStart+36 < collectionComplete.length){
            setPagina(pagina+1);
            setPaginaStart(paginaStart+36);
        }
    }    
    function handlePageDown() {
        if(pagina > 1){
            setPagina(pagina-1);
            setPaginaStart(paginaStart-36);
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
                <TituloH2>Buddies de VALORANT</TituloH2>
                <DescP>Descubre la lista completa de Buddies de VALORANT en un formato visual fácil de usar. Navega a través de la selección única de {collectionComplete.length} diseños adorables y temáticas intensas para encontrar el complemento perfecto para tu estilo de juego.</DescP>
                <PaginadoContainer>
                    <PaginadoButton onPointerDown={handlePageDown}><AiOutlineMinusCircle/></PaginadoButton>
                    <PaginadoP>Pagina {pagina}</PaginadoP>
                    <PaginadoButton onPointerDown={handlePageUp}><AiOutlinePlusCircle/></PaginadoButton>
                </PaginadoContainer>
                <UlGridBuddies>
                    {lista}
                </UlGridBuddies>
            </MainContainer>
        </MainWrapper>
    )
}

export default Buddies;