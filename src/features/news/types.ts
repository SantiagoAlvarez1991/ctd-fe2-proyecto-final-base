export interface INoticias {
    id: number;
    titulo: string;
    descripcion: string;
    fecha:  number | string;
    esPremium: boolean;
    imagen: string;
    descripcionCorta?: string;
  }
  