import React from 'react';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import {
    CargandoContainer
} from './Sections.elements';

function Cargando() {

    return (
        <CargandoContainer>
            <AiOutlineLoading3Quarters className='rotate'/>
            <h4>Cargando...</h4>
        </CargandoContainer>
    )

};

export default Cargando