import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {
    MainContainer,
    MainWrapper,
    TituloH2,
    DescP,
    UlGridBundles,
    ImgBundles,
    PaginadoContainer,
    PaginadoButton,
    PaginadoP
} from './Sections.elements';
import Cargando from './Cargando';
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai';

function Bundles() {

    const [cargando, setCargando] = useState(true);
    const [lista, setlista] = useState([]);
    const apiCallBundles = 'https://valorant-api.com/v1/bundles?language=es-MX';
    const [collectionComplete, setCollectionComplete] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [paginaStart, setPaginaStart] = useState(0);

    useEffect(() => {
        fetch(apiCallBundles)
            .then((res) => res.json())
            .then((data) => {
                let arrBundles = [];
                data.data.forEach((bundle) => {
                    arrBundles.push({
                        uuid: bundle.uuid,
                        titulo: bundle.displayName,
                        iconHorizontal: bundle.displayIcon,
                        iconVertical: bundle.verticalPromoImage
                    })
                })
                setCollectionComplete(arrBundles);

                let arrPaginado = [];
                for(let i = paginaStart; i < pagina*12; i++){
                    if(arrBundles[i] !== undefined){
                        arrPaginado.push(arrBundles[i]);
                    }
                }

                let listaSkin = arrPaginado.map((bundle) => {
                    return (
                        <li key={bundle.uuid}>
                            <Link to={bundle.iconHorizontal} rel={'noreferrer'} target={'_blank'}><ImgBundles alt='Imagen de bundle' src={bundle.iconHorizontal}/></Link><br/>
                            {bundle.titulo}
                        </li>
                    )
                })
                setlista(listaSkin);
                setCargando(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [paginaStart, pagina]);

    //BOTONES PAGINADOR
    function handlePageUp() {
        if(pagina >= 1 && paginaStart+12 < collectionComplete.length){
            setPagina(pagina+1);
            setPaginaStart(paginaStart+12);
        }
    }    
    function handlePageDown() {
        if(pagina > 1){
            setPagina(pagina-1);
            setPaginaStart(paginaStart-12);
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
                <TituloH2>Bundles de VALORANT</TituloH2>
                <DescP>Aquí encontrarás la selección más completa de paquetes de personalización para tus agentes favoritos. Desde skins elegantes hasta temáticas impresionantes, estos bundles te ayudarán a destacarte en cada partida y darle un toque único a tu estilo de juego. Descubre lo que cada uno de estos packs tiene para ofrecer y elige el que mejor se adapte a tus gustos.</DescP>
                <DescP>Hay {collectionComplete.length} bundles en el juego</DescP>
                <PaginadoContainer>
                    <PaginadoButton onPointerDown={handlePageDown}><AiOutlineMinusCircle/></PaginadoButton>
                    <PaginadoP>Pagina {pagina}</PaginadoP>
                    <PaginadoButton onPointerDown={handlePageUp}><AiOutlinePlusCircle/></PaginadoButton>
                </PaginadoContainer>
                <UlGridBundles>
                    {lista}
                </UlGridBundles>
            </MainContainer>
        </MainWrapper>
    )
}

export default Bundles;