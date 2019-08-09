const uris = {
  DOMINIO: "http://192.168.200.199",
  BASE_URL: "http://192.168.200.199/api/",

  LOGIN: "auth/login/tecnico",
  LOGIN_FACEBOOK: "auth/login/tecnico/facebook",
  LOGOUT: "auth/logout",

  SAVE_APICULTOR: "auth/registro",
  SAVE_APIARIO: "apiario",

  APICULTOR: "user",

  UPDATE_PERFIL: "tecnico/perfil",
  UPDATE_APICULTOR: "user/",
  UPDATE_APIARIO: "apiario/",

  DELETE_APICULTOR: "user/",
  DELETE_APIARIO: "apiario/",

  DETALHES_APIARIO: "apiario/",

  GET_PERFIL: "tecnico/perfil",
  GET_ALL_APICULTORES: "apicultores",
  GET_ALL_APIARIOS: "apiario",
  GET_APICULTOR: "user/",
  GET_CIDADES_UF: "cidades/uf/",
  GET_ALL_INFO_HOME: "home",
  GET_ALL_CIDADES_BY_UF: "cidades/uf/",
  GET_ALL_VISITAS_APIARIO: 'apiarios-visitas'


  GOOGLE_MAPS_URI:
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyA3byNpUcao4ZQud-zGppXCjHSZVOaoygI&v=3.exp&libraries=geometry,drawing,places",

  GOOGLE_MAPS_GEOCODE_URL:
    "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA3byNpUcao4ZQud-zGppXCjHSZVOaoygI&address=",

};

export default uris;
