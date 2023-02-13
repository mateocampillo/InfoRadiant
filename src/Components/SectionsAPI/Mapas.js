import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {
    MainContainer,
    MainWrapper,
    TituloH2,
    DescP,
    DivContainerMapas,
    DivWrapperMapas,
    ImgMapas,
    HrCustom
} from './Sections.elements';
import Cargando from './Cargando';

function Buddies() {

    const [cargando, setCargando] = useState(true);
    const [lista, setLista] = useState(null);

    useEffect(() => {
        fetch("https://valorant-api.com/v1/maps?language=es-MX")
            .then((res) => res.json())
            .then((data) => {
                let mapasFiltrados = [];
                data.data.forEach(item => {
                    mapasFiltrados.push({
                        uuid: item.uuid,
                        titulo: item.displayName,
                        iconLista: item.listViewIcon,
                        iconGrande: item.splash,
                        coordenadas: item.coordinates
                    })
                });

                let listItems = mapasFiltrados.map((item) => 
                    <DivContainerMapas>
                        <HrCustom />
                        <h2>{item.titulo}</h2>
                        <Link to={`${item.iconGrande}`} target={'_blank'}><ImgMapas alt='Spray' src={item.iconLista}/></Link>
                        <DescP>Coordenadas: {item.coordenadas}</DescP>
                    </DivContainerMapas>
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
                <TituloH2>Mapas de VALORANT</TituloH2>
                <DescP>Estos son los {lista.length} mapas presentes en VALORANT</DescP>
                <DivWrapperMapas>
                    {lista}
                </DivWrapperMapas>
            </MainContainer>
        </MainWrapper>
    )
}

export default Buddies;