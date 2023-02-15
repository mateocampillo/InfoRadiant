import React,{ useState, useEffect } from 'react';
import {
    AgentesWrapper,
    AgentesContainer,
    DescP,
    SelectContainer,
    UlAgentes,
    SelectAgentes,
    ImgHabilidad,
    ImgAgente,
    InfoAgenteContainer,
    ImgAgenteContainer,
    UlImgContainer
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
    }

    if(cargando) {
        return (
            <Cargando />
        )
    }

    return (
        <AgentesWrapper>
            <AgentesContainer>
                <SelectContainer>
                    <h2>Selecciona un agente</h2>
                    <SelectAgentes onChange={changeSelectedAgent}>
                        {agentList.map((agent) => {
                            return (
                                <option value={agent.uuid}>{agent.nombre}</option>
                            )
                            })
                        }
                    </SelectAgentes>
                </SelectContainer>
                <InfoAgenteContainer>
                    <ImgAgenteContainer>
                        <ImgAgente alt='icon de personaje' src={agentSelected.iconSmall}/>
                    </ImgAgenteContainer>
                    <DescP>{agentSelected.descripcion}</DescP>
                    <div>
                        <h3>Habilidades:</h3>
                        <UlAgentes>
                            {agentSelected.abilities.map((ability) => {
                                if(ability.slot === 'Passive'){
                                    return (
                                        <li>
                                            <h4>Nombre:</h4><p> {ability.displayName}</p><br/>
                                            <h4>Descripcion:</h4><p> {ability.description}</p><br/>
                                        </li>
                                    )
                                }
                                return (
                                    <li>
                                        <h4>Nombre:</h4><p> {ability.displayName}</p><br/>
                                        <h4>Descripcion:</h4><p> {ability.description}</p><br/>
                                        <UlImgContainer><h4>Foto:</h4><ImgHabilidad alt='icono de habilidad' src={ability.displayIcon}/></UlImgContainer>
                                    </li>
                                )})
                            }
                        </UlAgentes>
                    </div>
                </InfoAgenteContainer>
            </AgentesContainer>
        </AgentesWrapper>
    )

}

export default Agentes;