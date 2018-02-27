var allCountries = [
  {AD : "Andorra"},
  {AE : "Emiratos Árabes Unidos"},
  {AF : "Afganistán"},
  {AG : "Antigua y Barbuda"},
  {AI : "Anguila"},
  {AL : "Albania"},
  {AM : "Armenia"},
  {AN : "Antillas Neerlandesas"},
  {AO : "Angola"},
  {AQ : "Antártida"},
  {AR : "Argentina"},
  {AS : "Samoa Americana"},
  {AT : "Austria"},
  {AU : "Australia"},
  {AW : "Aruba"},
  {AX : "Islas Áland"},
  {AZ : "Azerbaiyán"},
  {BA : "Bosnia y Herzegovina"},
  {BB : "Barbados"},
  {BD : "Bangladesh"},
  {BE : "Bélgica"},
  {BF : "Burkina Faso"},
  {BG : "Bulgaria"},
  {BH : "Bahréin"},
  {BI : "Burundi"},
  {BJ : "Benin"},
  {BL : "San Bartolomé"},
  {BM : "Bermudas"},
  {BN : "Brunéi"},
  {BO : "Bolivia"},
  {BR : "Brasil"},
  {BS : "Bahamas"},
  {BT : "Bhután"},
  {BV : "Isla Bouvet"},
  {BW : "Botsuana"},
  {BY : "Belarús"},
  {BZ : "Belice"},
  {CA : "Canadá"},
  {CC : "Islas Cocos"},
  {CF : "República Centro-Africana"},
  {CG : "Congo"},
  {CH : "Suiza"},
  {CI : "Costa de Marfil"},
  {CK : "Islas Cook"},
  {CL : "Chile"},
  {CM : "Camerún"},
  {CN : "China"},
  {CO : "Colombia"},
  {CR : "Costa Rica"},
  {CU : "Cuba"},
  {CV : "Cabo Verde"},
  {CX : "Islas Christmas"},
  {CY : "Chipre"},
  {CZ : "República Checa"},
  {DE : "Alemania"},
  {DJ : "Yibuti"},
  {DK : "Dinamarca"},
  {DM : "Domínica"},
  {DO : "República Dominicana"},
  {DZ : "Argel"},
  {EC : "Ecuador"},
  {EE : "Estonia"},
  {EG : "Egipto"},
  {EH : "Sahara Occidental"},
  {ER : "Eritrea"},
  {ES : "España"},
  {ET : "Etiopía"},
  {FI : "Finlandia"},
  {FJ : "Fiji"},
  {FK : "Islas Malvinas"},
  {FM : "Micronesia"},
  {FO : "Islas Faroe"},
  {FR : "Francia"},
  {GA : "Gabón"},
  {GB : "Reino Unido"},
  {GD : "Granada"},
  {GE : "Georgia"},
  {GF : "Guayana Francesa"},
  {GG : "Guernsey"},
  {GH : "Ghana"},
  {GI : "Gibraltar"},
  {GL : "Groenlandia"},
  {GM : "Gambia"},
  {GN : "Guinea"},
  {GP : "Guadalupe"},
  {GQ : "Guinea Ecuatorial"},
  {GR : "Grecia"},
  {GS : "Georgia del Sur e Islas Sandwich del Sur"},
  {GT : "Guatemala"},
  {GU : "Guam"},
  {GW : "Guinea-Bissau"},
  {GY : "Guayana"},
  {HK : "Hong Kong"},
  {HM : "Islas Heard y McDonald"},
  {HN : "Honduras"},
  {HR : "Croacia"},
  {HT : "Haití"},
  {HU : "Hungría"},
  {ID : "Indonesia"},
  {IE : "Irlanda"},
  {IL : "Israel"},
  {IM : "Isla de Man"},
  {IN : "India"},
  {IO : "Territorio Británico del Océano Índico"},
  {IQ : "Irak"},
  {IR : "Irán"},
  {IS : "Islandia"},
  {IT : "Italia"},
  {JE : "Jersey"},
  {JM : "Jamaica"},
  {JO : "Jordania"},
  {JP : "Japón"},
  {KE : "Kenia"},
  {KG : "Kirguistán"},
  {KH : "Camboya"},
  {KI : "Kiribati"},
  {KM : "Comoros"},
  {KN : "San Cristóbal y Nieves"},
  {KP : "Corea del Norte"},
  {KR : "Corea del Sur"},
  {KW : "Kuwait"},
  {KY : "Islas Caimán"},
  {KZ : "Kazajstán"},
  {LA : "Laos"},
  {LB : "Líbano"},
  {LC : "Santa Lucía"},
  {LI : "Liechtenstein"},
  {LK : "Sri Lanka"},
  {LR : "Liberia"},
  {LS : "Lesotho"},
  {LT : "Lituania"},
  {LU : "Luxemburgo"},
  {LV : "Letonia"},
  {LY : "Libia"},
  {MA : "Marruecos"},
  {MC : "Mónaco"},
  {MD : "Moldova"},
  {ME : "Montenegro"},
  {MG : "Madagascar"},
  {MH : "Islas Marshall"},
  {MK : "Macedonia"},
  {ML : "Mali"},
  {MM : "Myanmar"},
  {MN : "Mongolia"},
  {MO : "Macao"},
  {MQ : "Martinica"},
  {MR : "Mauritania"},
  {MS : "Montserrat"},
  {MT : "Malta"},
  {MU : "Mauricio"},
  {MV : "Maldivas"},
  {MW : "Malawi"},
  {MX : "México"},
  {MY : "Malasia"},
  {MZ : "Mozambique"},
  {NA : "Namibia"},
  {NC : "Nueva Caledonia"},
  {NE : "Níger"},
  {NF : "Islas Norkfolk"},
  {NG : "Nigeria"},
  {NI : "Nicaragua"},
  {NL : "Países Bajos"},
  {NO : "Noruega"},
  {NP : "Nepal"},
  {NR : "Nauru"},
  {NU : "Niue"},
  {NZ : "Nueva Zelanda"},
  {OM : "Omán"},
  {PA : "Panamá"},
  {PE : "Perú"},
  {PF : "Polinesia Francesa"},
  {PG : "Papúa Nueva Guinea"},
  {PH : "Filipinas"},
  {PK : "Pakistán"},
  {PL : "Polonia"},
  {PM : "San Pedro y Miquelón"},
  {PN : "Islas Pitcairn"},
  {PR : "Puerto Rico"},
  {PS : "Palestina"},
  {PT : "Portugal"},
  {PW : "Islas Palaos"},
  {PY : "Paraguay"},
  {QA : "Qatar"},
  {RE : "Reunión"},
  {RO : "Rumanía"},
  {RS : "Serbia y Montenegro"},
  {RU : "Rusia"},
  {RW : "Ruanda"},
  {SA : "Arabia Saudita"},
  {SB : "Islas Solomón"},
  {SC : "Seychelles"},
  {SD : "Sudán"},
  {SE : "Suecia"},
  {SG : "Singapur"},
  {SH : "Santa Elena"},
  {SI : "Eslovenia"},
  {SJ : "Islas Svalbard y Jan Mayen"},
  {SK : "Eslovaquia"},
  {SL : "Sierra Leona"},
  {SM : "San Marino"},
  {SN : "Senegal"},
  {SO : "Somalia"},
  {SR : "Surinam"},
  {ST : "Santo Tomé y Príncipe"},
  {SV : "El Salvador"},
  {SY : "Siria"},
  {SZ : "Suazilandia"},
  {TC : "Islas Turcas y Caicos"},
  {TD : "Chad"},
  {TF : "Territorios Australes Franceses"},
  {TG : "Togo"},
  {TH : "Tailandia"},
  {TH : "Tanzania"},
  {TJ : "Tayikistán"},
  {TK : "Tokelau"},
  {TL : "Timor-Leste"},
  {TM : "Turkmenistán"},
  {TN : "Túnez"},
  {TO : "Tonga"},
  {TR : "Turquía"},
  {TT : "Trinidad y Tobago"},
  {TV : "Tuvalu"},
  {TW : "Taiwán"},
  {UA : "Ucrania"},
  {UG : "Uganda"},
  {US : "Estados Unidos de América"},
  {UY : "Uruguay"},
  {UZ : "Uzbekistán"},
  {VA : "Ciudad del Vaticano"},
  {VC : "San Vicente y las Granadinas"},
  {VE : "Venezuela"},
  {VG : "Islas Vírgenes Británicas"},
  {VI : "Islas Vírgenes de los Estados Unidos de América"},
  {VN : "Vietnam"},
  {VU : "Vanuatu"},
  {WF : "Wallis y Futuna"},
  {WS : "Samoa"},
  {YE : "Yemen"},
  {YT : "Mayotte"},
  {ZA : "Sudáfrica"}
]
/*                                                      ISO_3166-1
A Reino Unido le está oficialmente asignado el código alfa-2 GB en lugar de UK, sobre la base de su nombre oficial Reino Unido
de Gran Bretaña e Irlanda del Norte (aunque UK también se reservó a petición del Reino Unido para que no pudiera ser usado
por otro país).*/

module.exports = {allCountries}