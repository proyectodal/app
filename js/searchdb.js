new $.nd2Search({
  placeholder : "Buscar",
  defaultIcon : "globe-alt",
  source : [
    {"label": "Bocas del Toro", "value": "BOCAS"},
    {"label": "Coclé", "value": "COCLE"},
    {"label": "Colón", "value": "COLON"},
    {"label": "Chiriquí", "value": "CHIRIQUI"},
    {"label": "Darién", "value": "DARIEN"},
    {"label": "Herrera", "value": "HERRERA"},
    {"label": "Los Santos", "value": "SANTOS"},
    {"label": "Panamá", "value": "PANAMA"},
    {"label": "Panamá Oeste", "value": "OESTE"},
    {"label": "Veraguas", "value": "VERAGUAS"},
  ],
  
  fn : function(result) {
    console.log('--- Menu de Busqueda ---');
    console.log('Escogistes: ');
    console.log(result);

    switch (result) {
      case "BOCAS":
        window.location.replace('bocas.html');;
        break;

      case "COCLE":
        window.location.replace('cocle.html');;
        break;

      case "COLON":
        window.location.replace('colon.html');;
        break;

      case "CHIRIQUI":
        window.location.replace('chiriqui.html');;
        break;

      case "DARIEN":
        window.location.replace('darien.html');;
        break;

      case "HERRERA":
        window.location.replace('herrera.html');;
        break;

      case "SANTOS":
        window.location.replace('santos.html');;
        break;

      case "PANAMA":
        window.location.replace('panama.html');;
        break;

      case "OESTE":
        window.location.replace('oeste.html');;
        break;

      case "VERAGUAS":
        window.location.replace('veraguas.html');;
        break;
    }
  }
});