import React, {useState, useEffect} from 'react';
import {
    MainContainer,
    MainWrapper,
    TituloH2,
    DescP,
    UlGridSprays,
    ImgSprays,
    PaginadoContainer,
    PaginadoButton,
    PaginadoP
} from './Sections.elements';
import Cargando from './Cargando';
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai';

function Sprays() {

    const [cargando, setCargando] = useState(true);
    const [lista, setLista] = useState(null);
    const [collectionComplete, setCollectionComplete] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [paginaStart, setPaginaStart] = useState(0);

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
                setCollectionComplete(objetosFiltrados);

                let arrPaginado = [];
                for(let i = paginaStart; i < pagina*36; i++){
                    if(objetosFiltrados[i] !== undefined){
                        arrPaginado.push(objetosFiltrados[i]);
                    }
                }

                let listItems = arrPaginado.map((item) => 
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
                <TituloH2>Sprays de VALORANT</TituloH2>
                <DescP>¡Agrega un toque de personalidad a tus partidas de VALORANT con Sprays! Encuentra diseños divertidos e intensos, algunos de ellos con versiones animadas. Haz que tu estilo de juego sea único. ¡Explora los {collectionComplete.length} sprays!</DescP>
                <PaginadoContainer>
                    <PaginadoButton onPointerDown={handlePageDown}><AiOutlineMinusCircle/></PaginadoButton>
                    <PaginadoP>Pagina {pagina}</PaginadoP>
                    <PaginadoButton onPointerDown={handlePageUp}><AiOutlinePlusCircle/></PaginadoButton>
                </PaginadoContainer>
                <UlGridSprays>
                    {lista}
                </UlGridSprays>
            </MainContainer>
        </MainWrapper>
    )
}

export default Sprays;