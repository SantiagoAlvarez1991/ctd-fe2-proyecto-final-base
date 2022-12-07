import { ReactNode } from 'react'
import { CloseButton as Close } from "../../assets";
import { ContenedorModalStyled, TarjetaModal, CloseButton } from './styled';

interface Props {
    cerrarModal : () => void;   
    children : ReactNode 
}

const ContenedorModal = ({cerrarModal, children} : Props) => {

    return (        
        <ContenedorModalStyled>
            <TarjetaModal>
                <CloseButton onClick={cerrarModal}>
                    <img src={Close} alt="close-button" />
                </CloseButton>
                {children}               
            </TarjetaModal>
        </ContenedorModalStyled>            
    )
}

export default ContenedorModal