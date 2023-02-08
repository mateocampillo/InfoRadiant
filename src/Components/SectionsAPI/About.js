import React, {useState, useEffect} from 'react';
import {
    MainWrapper,
    TituloH2,
    DescP,
    AboutContainer,
    AboutInfo,
    H4Info
} from './Sections.elements';
import Cargando from './Cargando';

function About() {

    const [cargando, setCargando] = useState(true);
    const [apiInfo, setApiInfo] = useState({});

    useEffect(() => {
        fetch("https://valorant-api.com/v1/version?language=es-MX")
            .then((res) => res.json())
            .then((data) => {
                let objetoApi = {
                    manifestId: data.data.manifestId,
                    branch: data.data.branch,
                    version: data.data.version,
                    riotClientVersion: data.data.riotClientVersion,
                    riotClientBuild: data.data.riotClientBuild
                }
                setApiInfo(objetoApi);
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
            <AboutContainer>
                <TituloH2>Informacion técnica</TituloH2>
                <DescP>Especificaciones técnicas de la API utilizada, <a href='https://dash.valorant-api.com/'>Valorant-API</a>, y de TITULO. </DescP>
                <AboutInfo>
                    <div>
                        <h4>Info de la API:</h4>
                        <ul>
                            <li><u>Manifest ID:</u> {apiInfo.manifestId}</li>
                            <li><u>Branch:</u> {apiInfo.branch}</li>
                            <li><u>Version:</u> {apiInfo.version}</li>
                            <li><u>Riot Client Version:</u> {apiInfo.riotClientVersion}</li>
                            <li><u>Riot Client Build:</u> {apiInfo.riotClientBuild}</li>
                        </ul>
                    </div>
                    <H4Info>Diseño y codigo de la página: Mateo Campillo.</H4Info>
                </AboutInfo>
            </AboutContainer>
        </MainWrapper>
    )
}

export default About;