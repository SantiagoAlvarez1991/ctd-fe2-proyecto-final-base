import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import { BioContainer, BioImagen, ContenedorBotones, BotonBio } from "./Bio.styles";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );  

  const onClick: (nombre: NombresSimpsons) => void = (nombre) => {
    setBioActiva(INFO_SIMPSONS[nombre]);    
  }

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <BotonBio isActive={bioActiva.id === nombre ? true : false}
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}        
      >
        {nombre}
      </BotonBio>
    ));
  };


  return (
    <BioContainer>
      <ContenedorBotones>{crearBotones()}</ContenedorBotones>
      <div>
        <div>
          <BioImagen
            src={bioActiva.image}
            alt={bioActiva.nombre}            
          />
        </div>
        <div>
          <h3>{bioActiva.nombre}</h3>
          <p>{bioActiva.descripcion}</p>
        </div>
      </div>
    </BioContainer>
  );
};

export default Bio;
