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
    console.log('--- Your custom handling ---');
    console.log('you picked: ');
    console.log(result);
  }
});