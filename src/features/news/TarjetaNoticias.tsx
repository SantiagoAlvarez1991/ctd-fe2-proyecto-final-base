import { BotonLectura, DescripcionTarjetaNoticia, FechaTarjetaNoticia, ImagenTarjetaNoticia, TarjetaNoticiaStyled, TituloTarjetaNoticia } from "./styled"
import { INoticias } from "./types"

interface Props {
    noticia: INoticias;
    onClick: () => void
}

const TarjetaNoticias = ({noticia, onClick} : Props) => {

    return (
        <TarjetaNoticiaStyled>
            <ImagenTarjetaNoticia src={noticia.imagen} />
            <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
                {noticia.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={onClick}>Ver más</BotonLectura>
        </TarjetaNoticiaStyled>
    )

}

export default TarjetaNoticias