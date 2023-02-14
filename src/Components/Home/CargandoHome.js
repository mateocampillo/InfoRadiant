import React from 'react';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import {
    CargandoContainer
} from './Home.elements';

function CargandoHome() {

    return (
        <CargandoContainer>
            <AiOutlineLoading3Quarters className='rotate'/>
            <h4>Cargando...</h4>
        </CargandoContainer>
    )

};

export default CargandoHome;