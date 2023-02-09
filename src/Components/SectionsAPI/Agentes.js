import React,{ useState, useEffect } from 'react';
import {
    MainWrapper,
    MainContainer
} from './Sections.elements';
import Cargando from './Cargando';

function Agentes() {

    const [cargando, setCargando] = useState(true);
    const [agentList, setAgentList] = useState([]);
    const [agentSelected, setAgentSelected] = useState(undefined);

    useEffect(() => {
        fetch('https://valorant-api.com/v1/agents?language=es-MX&isPlayableCharacter=true')
            .then((res) => res.json())
            .then((data) => {
                let arrAgentList = [];
                data.data.forEach((agent) => {
                    arrAgentList.push({
                        uuid: agent.uuid,
                        nombre: agent.displayName,
                        descripcion: agent.description,
                        iconSmall: agent.displayIcon,
                        iconBig: agent.fullPortrait,
                        background: agent.background,
                        bcgColors: agent.backgroundGradientColors,
                        abilities: agent.abilities
                    })
                })
                setAgentList(arrAgentList);
                setAgentSelected(arrAgentList[0]);
                setCargando(false);
            })
    }, [])

    function changeSelectedAgent (event) {
        agentList.forEach((agent) => {
            if(agent.uuid === event.target.value){
                setAgentSelected(agent);
            }
        })
        console.log(agentSelected);
    }

    if(cargando) {
        return (
            <Cargando />
        )
    }

    return (
        <MainWrapper>
            <MainContainer>
            <h2>Selecciona un agente</h2>
            <select onChange={changeSelectedAgent}>
                {agentList.map((agent) => {
                    return (
                        <option value={agent.uuid}>{agent.nombre}</option>
                    )
                    })
                }
            </select>
            {agentSelected.nombre}
            {agentSelected.descripcion}
            </MainContainer>
        </MainWrapper>
    )

}

export default Agentes;