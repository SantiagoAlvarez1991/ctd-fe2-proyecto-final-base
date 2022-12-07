import { ImagenModal, CotenedorTexto, TituloModal, DescripcionModal } from './styled'
import { INoticias } from './types'

interface Props {
    modal: INoticias | null;    
}

const TarjetaModalNoPremium = ({ modal } : Props) => {
    return (
        <>
            <ImagenModal src={modal?.imagen} alt={"news-image"} />
            <CotenedorTexto>
                <TituloModal>{modal?.titulo}</TituloModal>
                <DescripcionModal>{modal?.descripcion}
                </DescripcionModal>
            </CotenedorTexto>
        </>
    )
}

export default TarjetaModalNoPremium