import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class ConfiguracionService {

  sistemasCurrent = [];
  sistemasConfig = [];
  zonas = [];
  configuracion = [];

  constructor() {

    const CPMX = {
      Nombre: 'CPMX',
      Value: 'CPMX'
    };
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

    const abRHil = {
      Sistema: 'abRHil / ISI.Net',
      Opciones: [HPLY, HZLC, HZVC, HZVP, PJKC, PJKP, HZVL],
      Perfil: true,
      Clase: 'col-sm-2'
    };
    const BitRecep = {
      Sistema: 'Bitácora de Recepción',
      Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP],
      Perfil: false,
      Clase: 'col-sm-2'
    };
    const Book4Time = {
      Sistema: 'Book 4 time',
      Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP],
      Perfil: true,
      Clase: 'col-sm-2'
    };
    const Cargos = {
      Sistema: 'Cargos / PayBack',
      Opciones: [HPLY, HZLC, HZVC, HZVP, PJKC, PJKP, HZVL],
      Perfil: true,
      Clase: 'col-sm-2'
    };
    const Pases = {
      Sistema: 'Pases Salida / Bitacora Seguridad / Prevención',
      Opciones: [{ Nombre: 'Bitácora', Value: 'Bitacora' }
                 , { Nombre: 'Elabora Pases de Salida', Value: 'EPS' }
                 , { Nombre: 'Autoriza Pases de Salida', Value: 'APS' }],
      Perfil: true,
      Clase: 'col-sm-4'
    };
    const Correo = {
      Sistema: 'Correo',
      Opciones: [{ Nombre: 'Playa Resorts', Value: 'Playa' }, { Nombre: 'Hyatt', Value: 'Hyatt' }, { Nombre: 'Hilton', Value: 'Hilton' }],
      Perfil: false,
      Clase: 'col-sm-3'
    };
    const Divisas = {
      Sistema: 'Divisas',
      Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP],
      Perfil: false,
      Clase: 'col-sm-2'
    };
    const GESA = {
      Sistema: 'GESA',
      Opciones: [HPLY, HZLC, HZVC, HZVL, HRH, HZLJ, HZVJ, JWD, ROM, RMF, HZVP, PJKC, PJKP, JWG, JWP, JWR, RRS, STY],
      Perfil: true,
      Clase: 'col-sm-2'
    };
    const Opera = {
      Sistema: 'Opera',
      Opciones: [HPLY, HZLC, HZVC, HZVL, HRH, HZLJ, HZVJ, JWD, ROM, RMF, HZVP, PJKC, PJKP, JWG, JWP, JWR, RRS, STY],
      Perfil: true,
      Clase: 'col-sm-2'
    };
    const SinXis = {
      Sistema: 'SynXis',
      Opciones: [HPLY, HZLC, HZVC, HZVL, HRH, HZLJ, HZVJ, JWD, ROM, RMF, HZVP, PJKC, PJKP, JWG, JWP, JWR, RRS, STY],
      Perfil: true,
      Clase: 'col-sm-2'
    };
    const HBSI = {
      Sistema: 'HBSI',
      Opciones: [HPLY, PJKC, PJKP],
      Perfil: false,
      Clase: 'col-sm-2'
    };
    const Lost = {
      Sistema: 'Lost & Found',
      Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP],
      Perfil: false,
      Clase: 'col-sm-2'
    };
    const Medalia = {
      Sistema: 'Medalia',
      Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP],
      Perfil: false,
      Clase: 'col-sm-2'
    };
    const MP = {
      Sistema: 'MP',
      Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP, HZVL],
      Perfil: false,
      Clase: 'col-sm-2'
    };
    const Llaves = {
      Sistema: 'Control llaves - Huéspedes',
      Opciones: [HPLY, HZLC, HZVC, HZVL, HRH, HZLJ, HZVJ, JWD, ROM, RMF, HZVP, PJKC, PJKP, JWG, JWP, JWR, RRS, STY],
      Perfil: false,
      Clase: 'col-sm-2'
    };
    const Peagers =    {
      Sistema: 'Peagers',
      Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP, HZVP, HZVL, HZVJ],
      Perfil: false,
      Clase: 'col-sm-2'
    };
    const RoomService = {
      Sistema: 'Room Service',
      Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP, HZVP, HZVL, HZVJ],
      Perfil: false,
      Clase: 'col-sm-2'
    };
    const Sobreventa = {
      Sistema: 'Sobreventa',
      Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP],
      Perfil: false,
      Clase: 'col-sm-2'
    };
    const Tarifario = {
      Sistema: 'Tarifario',
      Opciones: [],
      Perfil: true,
      Clase: 'col-sm-2'
    };

    this.configuracion = [{ Nombre: 'Oficinas Regionales'
                            , Cve_Hotel: 'CPX'
                            , Sis: [abRHil, BitRecep, Book4Time, Cargos, Pases, Correo
                              , Divisas, GESA, Opera, SinXis, HBSI, Lost, Medalia, MP
                              , Llaves, Peagers, RoomService, Sobreventa, Tarifario]}
                            , { Nombre: 'Panama Jack Cancun'
                            , Cve_Hotel: 'PJC'
                            , Sis: [abRHil, BitRecep, Pases, Correo
                              , Divisas, GESA, Opera, SinXis, HBSI, Lost, Llaves, Peagers]}
                            , { Nombre: 'Panama Jack Playa'
                            , Cve_Hotel: 'PJP'
                            , Sis: [ Book4Time, Cargos, Pases, Correo
                              , Divisas, GESA, Opera, SinXis, HBSI, Lost, Medalia, MP
                              , Llaves, RoomService] }
                            , { Nombre: 'Ziva Cancun'
                            , Cve_Hotel: 'ZVC'
                            , Sis: [abRHil, BitRecep, Book4Time, Cargos, Pases, Correo
                              , Divisas, GESA, Opera, SinXis, HBSI, Lost, Medalia, MP
                              , Llaves, Peagers, RoomService]}];

    this.sistemasConfig = this.configuracion;

    this.zonas = [{
      Mex: [CPMX, HPLY, HZLC, HZVC, HZVL, HZVP, PJKC, PJKP],
      Jam: [HRH, HZLJ, HZVJ, JWD, JWG, JWP, JWR, RRS],
      Dom: [ROM, RMF, STY]
    }];
  }

  getData(PropiedadV: string) {
    const ValuePropiedad = PropiedadV ? PropiedadV : 'CPX';
    const Current = this.configuracion.filter(Propiedad => {
      return Propiedad.Cve_Hotel === ValuePropiedad;
    });
    this.sistemasCurrent = Current[0].Sis;
    return Current[0].Sis;
  }
}
