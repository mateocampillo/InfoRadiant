import React from 'react';
import {
    ErrWrapper,
    ErrContainer,
    TituloH2,
    DescP
} from '../SectionsAPI/Sections.elements';

function ErrElement() {

    return (
        <ErrWrapper>
            <ErrContainer>
                <TituloH2>Vaya! Parece que hay un error!</TituloH2>
                <DescP>Intenta recargar la página!</DescP>
                <DescP>Si el problema persiste, no dudes en consultarme en contactarme.</DescP>
                <DescP><a href='https://www.linkedin.com/in/mateocampillo/'><u>LinkedIn</u>.</a></DescP>
            </ErrContainer>
        </ErrWrapper>

    )

};

export default ErrElement;