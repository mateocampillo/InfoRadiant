import React, {useState, useEffect} from 'react';
import {
    MainContainer,
    MainWrapper,
    TituloH2,
    DescP,
    UlGridSingle,
    ImgBundles
} from './Sections.elements';
import Cargando from './Cargando';

function Bundles() {

    const [cargando, setCargando] = useState(true);
    const [lista, setlista] = useState([]);
    const apiCallBundles = 'https://valorant-api.com/v1/bundles?language=es-MX';

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
                let listaSkin = arrBundles.map((bundle) => {
                    return (
                        <li key={bundle.uuid}>
                            <ImgBundles alt='Imagen de bundle' src={bundle.iconHorizontal}/><br/>
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
    }, []);

    if(cargando) {
        return (
            <Cargando />
        )
    }

    return (
        <MainWrapper>
            <MainContainer>
                <TituloH2>Bundles de VALORANT</TituloH2>
                <DescP>Esta es toda la info actual de todos los bundles en VALORANT</DescP>
                <DescP>Hay {lista.length} bundles en el juego</DescP>
                <UlGridSingle>
                    {lista}
                </UlGridSingle>
            </MainContainer>
        </MainWrapper>
    )
}

export default Bundles;