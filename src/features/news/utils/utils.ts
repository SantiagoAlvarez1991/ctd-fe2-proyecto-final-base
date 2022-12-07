export const convertirMayusculaPrimeraLetra : (frase : string) => string = (frase) => {
    return frase.split(" ")
    .map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    })
    .join(" ");
};

export const obtenerMinutosTranscurridos : (tiempo : Date) => number = (tiempo) => {
  const ahora = new Date();
  return Math.floor(
    (ahora.getTime() - tiempo.getTime()) / 60000
  )
}