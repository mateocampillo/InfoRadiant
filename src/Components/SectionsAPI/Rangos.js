import React, {useState, useEffect} from 'react';
import {
    MainContainer,
    MainWrapper,
    TituloH2,
    DescP,
    UlGrid,
} from './Sections.elements';
import Cargando from './Cargando';

function Rangos() {

    const [cargando, setCargando] = useState(true);
    const [lista, setLista] = useState(null);

    useEffect(() => {
        fetch("https://valorant-api.com/v1/competitivetiers/?language=es-MX")
            .then((res) => res.json())
            .then((data) => {
                let objetosFiltrados = [];
                let datosUtiles = data.data[4].tiers;
                datosUtiles.forEach(item => {
                    if(item.tier < 1 || item.tier > 2){
                        objetosFiltrados.push({
                            tier: item.tier,
                            titulo: item.tierName,
                            smallIcon: item.smallIcon,
                            largeIcon: item.largeIcon
                        })
                    }
                });
                let listItems = objetosFiltrados.map((item) => 
                <li key={item.tier}>
                    <img alt='Imagen de rango' src={item.smallIcon}/><br/>
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
                <TituloH2>Rangos de VALORANT</TituloH2>
                <DescP>Estos son, de menor a mayor categoria, todos los rangos actuales en VALORANT</DescP>
                <UlGrid>
                    {lista}
                </UlGrid>
            </MainContainer>
        </MainWrapper>
    )
}

export default Rangos;