import { useState } from "react";
import { INoticias } from "./types";
import { ContenedorNoticias, ListaNoticias, TituloNoticias } from "./styled";
import { useNoticias } from "./hooks/useNoticias";
import TarjetaNoticias from "./TarjetaNoticias";
import ContenedorModal from "./ContenedorModal";
import TarjetaModalNoPremium from "./TarjetaModalNoPremium";
import TarjetaModalPremium from "./TarjetaModalPremium";


const Noticias = () => {
  
  const [modal, setModal] = useState<INoticias | null>(null);
  const { noticias } = useNoticias()

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((noticia) => <TarjetaNoticias noticia={noticia} onClick={() => setModal(noticia)}/>)}
        {modal &&
         <ContenedorModal cerrarModal={()=>setModal(null)}> 
         {modal.esPremium
           ? <TarjetaModalPremium cerrarModal={() => setModal(null)}/> 
           : <TarjetaModalNoPremium modal={modal}/>
         }                
         </ContenedorModal>
        }       
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
