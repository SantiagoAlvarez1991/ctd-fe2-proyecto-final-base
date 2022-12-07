import { SuscribeImage} from '../../assets'
import { ImagenModal, CotenedorTexto, TituloModal, DescripcionModal, BotonSuscribir } from './styled'

interface Props {
    cerrarModal : () => void
}

const suscribirse =(cerrarModal : () => void) => {
    setTimeout(() => {
        alert("Suscripto!")
        cerrarModal()
    }, 1000)
}

const TarjetaModalPremium = ({cerrarModal} : Props) => {
  return (
        <>            
            <ImagenModal src={SuscribeImage} alt={"mr-burns-excelent"} />
            <CotenedorTexto>
                <TituloModal>{"Suscríbete a nuestro Newsletter"}</TituloModal>
                <DescripcionModal>"Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos."</DescripcionModal>
                <BotonSuscribir onClick={() => suscribirse(cerrarModal) }> Suscríbete </BotonSuscribir>                  
            </CotenedorTexto>
        </> 
  )
}

export default TarjetaModalPremium