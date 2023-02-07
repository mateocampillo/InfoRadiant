import React from 'react';
import {
    HomeWrapper,
    HomeContainer
} from './Home.elements';

function Sidebar(){
    return (
        <HomeWrapper>
            <HomeContainer>
                <h1>Titulo</h1>
                <p>Toda la data viene directo de <a href='https://dash.valorant-api.com/'>Valorant-API</a> y se actualiza de forma automatica con cada nuevo parche.</p>
            </HomeContainer>
        </HomeWrapper>
    )
}

export default Sidebar;