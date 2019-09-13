const HPLY = {
    Nombre: "HPLY",
    Value: "HPLY"
};

const HZLC = {
    Nombre: "HZLC",
    Value: "HZLC"
};

const HZVC = {
    Nombre: "HZVC",
    Value: "HZVC"
};

const HZVP = {
    Nombre: "HZVP",
    Value: "HZVP"
};

const PJKC = {
    Nombre: "PJKC",
    Value: "PJKC"
};

const PJKP = {
    Nombre: "PJKP",
    Value: "PJKP"
};

const HZVL = {
    Nombre: "HZLV",
    Value: "HZLV"
};

const HRH = {
    Nombre: "HRH",
    Value: "HRH"
};

const HZLJ = {
    Nombre: "HZLJ",
    Value: "HZLJ"
};

const HZVJ = {
    Nombre: "HZVJ",
    Value: "HZVJ"
};

const JWD = {
    Nombre: "JWD",
    Value: "JWD"
};

const ROM = {
    Nombre: "ROM",
    Value: "ROM"
};

const RMF = {
    Nombre: "RMF",
    Value: "RMF"
};

const JWG = {
    Nombre: "JWG",
    Value: "JWG"
};

const JWP = {
    Nombre: "JWP",
    Value: "JWP"
};

const JWR = {
    Nombre: "JWR",
    Value: "JWR"
};
--
const RRS = {
    Nombre: "RRS",
    Value: "RRS"
};

const STY = {
    Nombre: "STY",
    Value: "STY"
};

let Configuracion = [{Sistema: "abRHil",
                        Opciones: [HPLY, HZLC,HZVC, HZVP, PJKC, PJKP, HZVL],
                        Perfil: true    
                    },
                    {Sistema: "Bitácora de Recepción",
                        Opciones: [HPLY, HZLC,HZVC, PJKC, PJKP],
                        Perfil: false
                    },
                    {Sistema: "Book 4 time",
                        Opciones: [HPLY, HZLC,HZVC, PJKC, PJKP],
                        Perfil: true
                    },
                    {Sistema: "Cargos / PayBack",
                        Opciones: [HPLY, HZLC,HZVC, HZVP, PJKC, PJKP, HZVL],
                        Perfil: true    
                    },
                    {Sistema: "Pases Salida <br> Bitacora Segurida<br> Prevención",
                        Opciones: [{Nombre: "Bitácora", Value: "Bitacora"}, {Nombre: "Elabora Pases de Salida", Value: "EPS"}, {Nombre: "Autoriza Pases de Salida", Value: "APS"}],
                        Perfil: true
                    },
                    {Sistema: "Correo",
                        Opciones: [{Nombre: "Playa Resorts", Value: "Playa"}, {Nombre: "Hyatt", Value: "Hyatt"}, {Nombre: "Hilton", Value: "Hilton"}],
                        Perfil: false
                    },
                    {Sistema: "Divisas",
                        Opciones: [HPLY, HZLC,HZVC, PJKC, PJKP],
                        Perfil: false
                    },
                    {Sistema: "GESA",
                        Opciones: [HPLY, HZLC, HZVC, HZVL, HRH, HZLJ, HZVJ, JWD, ROM, RMF, HZVP, PJKC, PJKP, JWG, JWP, JWR, RRS, STY],
                        Perfil: true
                    },
                    {Sistema: "Opera",
                        Opciones: [HPLY, HZLC, HZVC, HZVL, HRH, HZLJ, HZVJ, JWD, ROM, RMF, HZVP, PJKC, PJKP, JWG, JWP, JWR, RRS, STY],
                        Perfil: true
                    },
                    {Sistema: "SynXis",
                        Opciones: [HPLY, HZLC, HZVC, HZVL, HRH, HZLJ, HZVJ, JWD, ROM, RMF, HZVP, PJKC, PJKP, JWG, JWP, JWR, RRS, STY],
                        Perfil: true
                    },
                    {Sistema: "HBSI",
                        Opciones: [HPLY,PJKC, PJKP],
                        Perfil: false
                    },
                    {Sistema: "Lost & Found",
                        Opciones: [HPLY,HZLC, HZVC, PJKC, PJKP],
                        Perfil: false
                    },
                    {Sistema: "Medalia",
                        Opciones: [HPLY,HZLC, HZVC, PJKC, PJKP],
                        Perfil: false
                    },
                    {Sistema: "MP",
                        Opciones: [HPLY,HZLC, HZVC, PJKC, PJKP, HZVL],
                        Perfil: false
                    },
                    {Sistema: "Control llaves - Huéspedes",
                        Opciones: [HPLY, HZLC, HZVC, HZVL, HRH, HZLJ, HZVJ, JWD, ROM, RMF, HZVP, PJKC, PJKP, JWG, JWP, JWR, RRS, STY],
                        Perfil: false
                    },
                    {Sistema: "Peagers",
                        Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP,HZVP, HZVL, HZVJ],
                        Perfil: false
                    },    
                    {Sistema: "Room Service",
                        Opciones: [HPLY, HZLC, HZVC, PJKC, PJKP,HZVP, HZVL, HZVJ],
                        Perfil: false
                    },
                    {Sistema: "Sobreventa",
                        Opciones: [HPLY,HZLC, HZVC, PJKC, PJKP],
                        Perfil: false
                    },    
                    {Sistema: "Tarifario",
                        Opciones: [],
                        Perfil: true
                    }     
                ];



