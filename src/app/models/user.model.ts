
export interface User {
    email: string;
    password: string;
}

export interface Denuncias {
    id?: string;
    asunto: string;
    nombre_de_quien_reporta: string;
    numero_de_telefono: string;
    direccion: string;
    entre_calles: string;
    referencia_del_lugar: string;
    describa_su_asunto: string;
    caracteristicas_de_las_mascotas: string;
    nombre_duenio: string;
    direccion_2: string;
    entre_calles2: string;
    referencias_2: string;
    caracteristicas_mascotas2: string;
}
