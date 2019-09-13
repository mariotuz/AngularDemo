import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class ConfiguracionService {

  sistemas = [];

  constructor() {

    const HPLY = {
      Nombre: 'HPLY',
      Value: 'HPLY'
    };
    const HZLC = {
      Nombre: 'HZLC',
      Value: 'HZLC'
    };
    const HZVC = {
      Nombre: 'HZVC',
      Value: 'HZVC'
    };
    const HZVP = {
      Nombre: 'HZVP',
      Value: 'HZVP'
    };
    const PJKC = {
      Nombre: 'PJKC',
      Value: 'PJKC'
    };
    const PJKP = {
      Nombre: 'PJKP',
      Value: 'PJKP'
    };
    const HZVL = {
      Nombre: 'HZLV',
      Value: 'HZLV'
    };
    const HRH = {
      Nombre: 'HRH',
      Value: 'HRH'
    };
    const HZLJ = {
      Nombre: 'HZLJ',
      Value: 'HZLJ'
    };
    const HZVJ = {
      Nombre: 'HZVJ',
      Value: 'HZVJ'
    };
    const JWD = {
      Nombre: 'JWD',
      Value: 'JWD'
    };
    const ROM = {
      Nombre: 'ROM',
      Value: 'ROM'
    };
    const RMF = {
      Nombre: 'RMF',
      Value: 'RMF'
    };
    const JWG = {
      Nombre: 'JWG',
      Value: 'JWG'
    };
    const JWP = {
      Nombre: 'JWP',
      Value: 'JWP'
    };
    const JWR = {
      Nombre: 'JWR',
      Value: 'JWR'
    };
    const RRS = {
      Nombre: 'RRS',
      Value: 'RRS'
    };
    const STY = {
      Nombre: 'STY',
      Value: 'STY'
    };

    const Configuracion = [{
      Sistema: 'abRHil / ISI.Net',
      Opciones: [HPLY, HZLC, HZVC, HZVP, PJKC, PJKP, HZVL],
      Perfil: true,
      Clase: 'col-sm-2'
    },
    {
      Sistema: 'Bitácora de Recepción',
      Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP],
      Perfil: false,
      Clase: 'col-sm-2'
    },
    {
      Sistema: 'Book 4 time',
      Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP],
      Perfil: true,
      Clase: 'col-sm-2'
    },
    {
      Sistema: 'Cargos / PayBack',
      Opciones: [HPLY, HZLC, HZVC, HZVP, PJKC, PJKP, HZVL],
      Perfil: true,
      Clase: 'col-sm-2'
    },
    {
      Sistema: 'Pases Salida <br> Bitacora Segurida<br> Prevención',
      Opciones: [{ Nombre: 'Bitácora', Value: 'Bitacora' }
                 , { Nombre: 'Elabora Pases de Salida', Value: 'EPS' }
                 , { Nombre: 'Autoriza Pases de Salida', Value: 'APS' }],
      Perfil: true,
      Clase: 'col-sm-4'
    },
    {
      Sistema: 'Correo',
      Opciones: [{ Nombre: 'Playa Resorts', Value: 'Playa' }, { Nombre: 'Hyatt', Value: 'Hyatt' }, { Nombre: 'Hilton', Value: 'Hilton' }],
      Perfil: false,
      Clase: 'col-sm-3'
    },
    {
      Sistema: 'Divisas',
      Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP],
      Perfil: false,
      Clase: 'col-sm-2'
    },
    {
      Sistema: 'GESA',
      Opciones: [HPLY, HZLC, HZVC, HZVL, HRH, HZLJ, HZVJ, JWD, ROM, RMF, HZVP, PJKC, PJKP, JWG, JWP, JWR, RRS, STY],
      Perfil: true,
      Clase: 'col-sm-2'
    },
    {
      Sistema: 'Opera',
      Opciones: [HPLY, HZLC, HZVC, HZVL, HRH, HZLJ, HZVJ, JWD, ROM, RMF, HZVP, PJKC, PJKP, JWG, JWP, JWR, RRS, STY],
      Perfil: true,
      Clase: 'col-sm-2'
    },
    {
      Sistema: 'SynXis',
      Opciones: [HPLY, HZLC, HZVC, HZVL, HRH, HZLJ, HZVJ, JWD, ROM, RMF, HZVP, PJKC, PJKP, JWG, JWP, JWR, RRS, STY],
      Perfil: true,
      Clase: 'col-sm-2'
    },
    {
      Sistema: 'HBSI',
      Opciones: [HPLY, PJKC, PJKP],
      Perfil: false,
      Clase: 'col-sm-2'
    },
    {
      Sistema: 'Lost & Found',
      Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP],
      Perfil: false,
      Clase: 'col-sm-2'
    },
    {
      Sistema: 'Medalia',
      Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP],
      Perfil: false,
      Clase: 'col-sm-2'
    },
    {
      Sistema: 'MP',
      Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP, HZVL],
      Perfil: false,
      Clase: 'col-sm-2'
    },
    {
      Sistema: 'Control llaves - Huéspedes',
      Opciones: [HPLY, HZLC, HZVC, HZVL, HRH, HZLJ, HZVJ, JWD, ROM, RMF, HZVP, PJKC, PJKP, JWG, JWP, JWR, RRS, STY],
      Perfil: false,
      Clase: 'col-sm-2'
    },
    {
      Sistema: 'Peagers',
      Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP, HZVP, HZVL, HZVJ],
      Perfil: false,
      Clase: 'col-sm-2'
    },
    {
      Sistema: 'Room Service',
      Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP, HZVP, HZVL, HZVJ],
      Perfil: false,
      Clase: 'col-sm-2'
    },
    {
      Sistema: 'Sobreventa',
      Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP],
      Perfil: false,
      Clase: 'col-sm-2'
    },
    {
      Sistema: 'Tarifario',
      Opciones: [],
      Perfil: true,
      Clase: 'col-sm-2'
    }
    ];

    this.sistemas = Configuracion;
  }
}
