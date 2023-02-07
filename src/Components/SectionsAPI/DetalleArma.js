import React, {useState, useEffect} from 'react';
import {
    MainContainer,
    MainWrapper,
    TituloH2,
    DescP,
    UlGrid,
} from './Sections.elements';
import Cargando from './Cargando';

function DetalleArma() {

    const queryParams = new URLSearchParams(window.location.search);
    const query = queryParams.get('weapon');
    const [cargando, setCargando] = useState(true);
    const [detalle, setDetalle] = useState([]);
    const apiCall = 'https://valorant-api.com/v1/weapons/';

    useEffect(() => {
        fetch(apiCall+query)
            .then((res) => res.json())
            .then((data) => {

                setCargando(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [query]);

    if(cargando) {
        return (
            <Cargando />
        )
    }

    return (
        <MainWrapper>
            <MainContainer>
                <TituloH2>Skins de VALORANT</TituloH2>
                <DescP>Esta es toda la info de ARMA en VALORANT</DescP>
                <UlGrid>
                    {detalle}
                </UlGrid>
            </MainContainer>
        </MainWrapper>
    )
}

export default DetalleArma;