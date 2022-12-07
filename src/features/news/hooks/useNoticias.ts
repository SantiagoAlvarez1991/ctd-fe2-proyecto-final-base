import { useEffect, useState } from "react";
import { obtenerNoticias } from "../fakeRest";
import { INoticias } from "../types";
import { convertirMayusculaPrimeraLetra, obtenerMinutosTranscurridos } from "../utils/utils";

export const useNoticias = () => {
    const [noticias, setNoticias] = useState<INoticias[]>([]);

    useEffect(() => {
        const obtenerInformacion = async () => {
          const respuesta = await obtenerNoticias();
    
          const data = respuesta.map((noticia) => {                       
            const minutosTranscurridos = obtenerMinutosTranscurridos(noticia.fecha)
    
            return {
              id: noticia.id,
              titulo: convertirMayusculaPrimeraLetra(noticia.titulo), 
              descripcion: noticia.descripcion,
              fecha: `Hace ${minutosTranscurridos} minutos`,
              esPremium: noticia.esPremium,
              imagen: noticia.imagen,
              descripcionCorta: noticia.descripcion.substring(0, 100),
            };
          });
    
          setNoticias(data);
        };
    
        obtenerInformacion();
      }, []);

      return { noticias }
}


