/* ============================================================
   PAISOS.JS · noms dels països en 7 idiomes (font única)
   ============================================================
   L'inclouen les tres vistes amb <script src="paisos.js"></script>.
   Clau = identificador estable del país (tal com surt del motor,
   p.ex. "Saudi-Arabia"). Cada país té els 7 idiomes:
     ca català · es espanyol · en anglès · fr francès
     de alemany · it italià · pt portuguès
   La bandera (emoji) també viu aquí, així no es repeteix a cada fitxer.

   Per afegir un país nou: una línia. Per afegir un idioma nou:
   una clau més per país. Res d'això toca el motor.
   ============================================================ */

const PAISOS = {
  // ---- UEFA ----
  "England":        {flag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", iso:"ENG", ca:"Anglaterra", es:"Inglaterra", en:"England", fr:"Angleterre", de:"England", it:"Inghilterra", pt:"Inglaterra"},
  "Spain":          {flag:"🇪🇸", iso:"ESP", ca:"Espanya", es:"España", en:"Spain", fr:"Espagne", de:"Spanien", it:"Spagna", pt:"Espanha"},
  "Germany":        {flag:"🇩🇪", iso:"GER", ca:"Alemanya", es:"Alemania", en:"Germany", fr:"Allemagne", de:"Deutschland", it:"Germania", pt:"Alemanha"},
  "Italy":          {flag:"🇮🇹", iso:"ITA", ca:"Itàlia", es:"Italia", en:"Italy", fr:"Italie", de:"Italien", it:"Italia", pt:"Itália"},
  "France":         {flag:"🇫🇷", iso:"FRA", ca:"França", es:"Francia", en:"France", fr:"France", de:"Frankreich", it:"Francia", pt:"França"},
  "Portugal":       {flag:"🇵🇹", iso:"POR", ca:"Portugal", es:"Portugal", en:"Portugal", fr:"Portugal", de:"Portugal", it:"Portogallo", pt:"Portugal"},
  "Belgium":        {flag:"🇧🇪", iso:"BEL", ca:"Bèlgica", es:"Bélgica", en:"Belgium", fr:"Belgique", de:"Belgien", it:"Belgio", pt:"Bélgica"},
  "Netherlands":    {flag:"🇳🇱", iso:"NED", ca:"Països Baixos", es:"Países Bajos", en:"Netherlands", fr:"Pays-Bas", de:"Niederlande", it:"Paesi Bassi", pt:"Países Baixos"},
  "Turkey":         {flag:"🇹🇷", iso:"TUR", ca:"Turquia", es:"Turquía", en:"Turkey", fr:"Turquie", de:"Türkei", it:"Turchia", pt:"Turquia"},
  "Greece":         {flag:"🇬🇷", iso:"GRE", ca:"Grècia", es:"Grecia", en:"Greece", fr:"Grèce", de:"Griechenland", it:"Grecia", pt:"Grécia"},
  "Czech-Republic": {flag:"🇨🇿", iso:"CZE", ca:"Txèquia", es:"Chequia", en:"Czech Republic", fr:"Tchéquie", de:"Tschechien", it:"Cechia", pt:"Chéquia"},
  "Norway":         {flag:"🇳🇴", iso:"NOR", ca:"Noruega", es:"Noruega", en:"Norway", fr:"Norvège", de:"Norwegen", it:"Norvegia", pt:"Noruega"},
  "Denmark":        {flag:"🇩🇰", iso:"DEN", ca:"Dinamarca", es:"Dinamarca", en:"Denmark", fr:"Danemark", de:"Dänemark", it:"Danimarca", pt:"Dinamarca"},
  "Austria":        {flag:"🇦🇹", iso:"AUT", ca:"Àustria", es:"Austria", en:"Austria", fr:"Autriche", de:"Österreich", it:"Austria", pt:"Áustria"},
  "Switzerland":    {flag:"🇨🇭", iso:"SUI", ca:"Suïssa", es:"Suiza", en:"Switzerland", fr:"Suisse", de:"Schweiz", it:"Svizzera", pt:"Suíça"},
  "Poland":         {flag:"🇵🇱", iso:"POL", ca:"Polònia", es:"Polonia", en:"Poland", fr:"Pologne", de:"Polen", it:"Polonia", pt:"Polónia"},
  "Scotland":       {flag:"🏴󠁧󠁢󠁳󠁣󠁴󠁿", iso:"SCO", ca:"Escòcia", es:"Escocia", en:"Scotland", fr:"Écosse", de:"Schottland", it:"Scozia", pt:"Escócia"},
  "Israel":         {flag:"🇮🇱", iso:"ISR", ca:"Israel", es:"Israel", en:"Israel", fr:"Israël", de:"Israel", it:"Israele", pt:"Israel"},
  "Ukraine":        {flag:"🇺🇦", iso:"UKR", ca:"Ucraïna", es:"Ucrania", en:"Ukraine", fr:"Ukraine", de:"Ukraine", it:"Ucraina", pt:"Ucrânia"},
  "Serbia":         {flag:"🇷🇸", iso:"SRB", ca:"Sèrbia", es:"Serbia", en:"Serbia", fr:"Serbie", de:"Serbien", it:"Serbia", pt:"Sérvia"},
  "Cyprus":         {flag:"🇨🇾", iso:"CYP", ca:"Xipre", es:"Chipre", en:"Cyprus", fr:"Chypre", de:"Zypern", it:"Cipro", pt:"Chipre"},
  "Croatia":        {flag:"🇭🇷", iso:"CRO", ca:"Croàcia", es:"Croacia", en:"Croatia", fr:"Croatie", de:"Kroatien", it:"Croazia", pt:"Croácia"},
  "Sweden":         {flag:"🇸🇪", iso:"SWE", ca:"Suècia", es:"Suecia", en:"Sweden", fr:"Suède", de:"Schweden", it:"Svezia", pt:"Suécia"},
  "Hungary":        {flag:"🇭🇺", iso:"HUN", ca:"Hongria", es:"Hungría", en:"Hungary", fr:"Hongrie", de:"Ungarn", it:"Ungheria", pt:"Hungria"},
  "Romania":        {flag:"🇷🇴", iso:"ROU", ca:"Romania", es:"Rumanía", en:"Romania", fr:"Roumanie", de:"Rumänien", it:"Romania", pt:"Roménia"},
  "Russia":         {flag:"🇷🇺", iso:"RUS", ca:"Rússia", es:"Rusia", en:"Russia", fr:"Russie", de:"Russland", it:"Russia", pt:"Rússia"},
  "Bulgaria":       {flag:"🇧🇬", iso:"BUL", ca:"Bulgària", es:"Bulgaria", en:"Bulgaria", fr:"Bulgarie", de:"Bulgarien", it:"Bulgaria", pt:"Bulgária"},
  "Slovakia":       {flag:"🇸🇰", iso:"SVK", ca:"Eslovàquia", es:"Eslovaquia", en:"Slovakia", fr:"Slovaquie", de:"Slowakei", it:"Slovacchia", pt:"Eslováquia"},
  "Slovenia":       {flag:"🇸🇮", iso:"SVN", ca:"Eslovènia", es:"Eslovenia", en:"Slovenia", fr:"Slovénie", de:"Slowenien", it:"Slovenia", pt:"Eslovénia"},
  "Azerbaijan":     {flag:"🇦🇿", iso:"AZE", ca:"Azerbaidjan", es:"Azerbaiyán", en:"Azerbaijan", fr:"Azerbaïdjan", de:"Aserbaidschan", it:"Azerbaigian", pt:"Azerbaijão"},
  "Armenia":        {flag:"🇦🇲", iso:"ARM", ca:"Armènia", es:"Armenia", en:"Armenia", fr:"Arménie", de:"Armenien", it:"Armenia", pt:"Arménia"},
  "Ireland":        {flag:"🇮🇪", iso:"IRL", ca:"Irlanda", es:"Irlanda", en:"Ireland", fr:"Irlande", de:"Irland", it:"Irlanda", pt:"Irlanda"},
  "Bosnia":         {flag:"🇧🇦", iso:"BIH", ca:"Bòsnia", es:"Bosnia", en:"Bosnia", fr:"Bosnie", de:"Bosnien", it:"Bosnia", pt:"Bósnia"},
  "Finland":        {flag:"🇫🇮", iso:"FIN", ca:"Finlàndia", es:"Finlandia", en:"Finland", fr:"Finlande", de:"Finnland", it:"Finlandia", pt:"Finlândia"},
  "Iceland":        {flag:"🇮🇸", iso:"ISL", ca:"Islàndia", es:"Islandia", en:"Iceland", fr:"Islande", de:"Island", it:"Islanda", pt:"Islândia"},
  "Kosovo":         {flag:"🇽🇰", iso:"KVX", ca:"Kosovo", es:"Kosovo", en:"Kosovo", fr:"Kosovo", de:"Kosovo", it:"Kosovo", pt:"Kosovo"},
  "Albania":        {flag:"🇦🇱", iso:"ALB", ca:"Albània", es:"Albania", en:"Albania", fr:"Albanie", de:"Albanien", it:"Albania", pt:"Albânia"},
  "Malta":          {flag:"🇲🇹", iso:"MLT", ca:"Malta", es:"Malta", en:"Malta", fr:"Malte", de:"Malta", it:"Malta", pt:"Malta"},
  "Macedonia":      {flag:"🇲🇰", iso:"MKD", ca:"Macedònia del Nord", es:"Macedonia del Norte", en:"North Macedonia", fr:"Macédoine du Nord", de:"Nordmazedonien", it:"Macedonia del Nord", pt:"Macedónia do Norte"},
  "Latvia":         {flag:"🇱🇻", iso:"LVA", ca:"Letònia", es:"Letonia", en:"Latvia", fr:"Lettonie", de:"Lettland", it:"Lettonia", pt:"Letónia"},
  "Luxembourg":     {flag:"🇱🇺", iso:"LUX", ca:"Luxemburg", es:"Luxemburgo", en:"Luxembourg", fr:"Luxembourg", de:"Luxemburg", it:"Lussemburgo", pt:"Luxemburgo"},
  "Georgia":        {flag:"🇬🇪", iso:"GEO", ca:"Geòrgia", es:"Georgia", en:"Georgia", fr:"Géorgie", de:"Georgien", it:"Georgia", pt:"Geórgia"},
  "Lithuania":      {flag:"🇱🇹", iso:"LTU", ca:"Lituània", es:"Lituania", en:"Lithuania", fr:"Lituanie", de:"Litauen", it:"Lituania", pt:"Lituânia"},
  "Moldova":        {flag:"🇲🇩", iso:"MDA", ca:"Moldàvia", es:"Moldavia", en:"Moldova", fr:"Moldavie", de:"Moldau", it:"Moldavia", pt:"Moldávia"},
  "Faroe-Islands":  {flag:"🇫🇴", iso:"FRO", ca:"Illes Fèroe", es:"Islas Feroe", en:"Faroe Islands", fr:"Îles Féroé", de:"Färöer", it:"Fær Øer", pt:"Ilhas Faroé"},
  "Northern-Ireland":{flag:"🇬🇧", iso:"NIR", ca:"Irlanda del Nord", es:"Irlanda del Norte", en:"Northern Ireland", fr:"Irlande du Nord", de:"Nordirland", it:"Irlanda del Nord", pt:"Irlanda do Norte"},
  "Andorra":        {flag:"🇦🇩", iso:"AND", ca:"Andorra", es:"Andorra", en:"Andorra", fr:"Andorre", de:"Andorra", it:"Andorra", pt:"Andorra"},
  "Montenegro":     {flag:"🇲🇪", iso:"MNE", ca:"Montenegro", es:"Montenegro", en:"Montenegro", fr:"Monténégro", de:"Montenegro", it:"Montenegro", pt:"Montenegro"},
  "Estonia":        {flag:"🇪🇪", iso:"EST", ca:"Estònia", es:"Estonia", en:"Estonia", fr:"Estonie", de:"Estland", it:"Estonia", pt:"Estónia"},
  "Wales":          {flag:"🏴󠁧󠁢󠁷󠁬󠁳󠁿", iso:"WAL", ca:"Gal·les", es:"Gales", en:"Wales", fr:"Pays de Galles", de:"Wales", it:"Galles", pt:"País de Gales"},
  "Gibraltar":      {flag:"🇬🇮", iso:"GIB", ca:"Gibraltar", es:"Gibraltar", en:"Gibraltar", fr:"Gibraltar", de:"Gibraltar", it:"Gibilterra", pt:"Gibraltar"},
  "San-Marino":     {flag:"🇸🇲", iso:"SMR", ca:"San Marino", es:"San Marino", en:"San Marino", fr:"Saint-Marin", de:"San Marino", it:"San Marino", pt:"San Marino"},
  "Kazakhstan":     {flag:"🇰🇿", iso:"KAZ", ca:"Kazakhstan", es:"Kazajistán", en:"Kazakhstan", fr:"Kazakhstan", de:"Kasachstan", it:"Kazakistan", pt:"Cazaquistão"},

  // ---- CONMEBOL ----
  "Brazil":         {flag:"🇧🇷", iso:"BRA", ca:"Brasil", es:"Brasil", en:"Brazil", fr:"Brésil", de:"Brasilien", it:"Brasile", pt:"Brasil"},
  "Argentina":      {flag:"🇦🇷", iso:"ARG", ca:"Argentina", es:"Argentina", en:"Argentina", fr:"Argentine", de:"Argentinien", it:"Argentina", pt:"Argentina"},
  "Uruguay":        {flag:"🇺🇾", iso:"URU", ca:"Uruguai", es:"Uruguay", en:"Uruguay", fr:"Uruguay", de:"Uruguay", it:"Uruguay", pt:"Uruguai"},
  "Colombia":       {flag:"🇨🇴", iso:"COL", ca:"Colòmbia", es:"Colombia", en:"Colombia", fr:"Colombie", de:"Kolumbien", it:"Colombia", pt:"Colômbia"},
  "Chile":          {flag:"🇨🇱", iso:"CHI", ca:"Xile", es:"Chile", en:"Chile", fr:"Chili", de:"Chile", it:"Cile", pt:"Chile"},
  "Ecuador":        {flag:"🇪🇨", iso:"ECU", ca:"Equador", es:"Ecuador", en:"Ecuador", fr:"Équateur", de:"Ecuador", it:"Ecuador", pt:"Equador"},
  "Paraguay":       {flag:"🇵🇾", iso:"PAR", ca:"Paraguai", es:"Paraguay", en:"Paraguay", fr:"Paraguay", de:"Paraguay", it:"Paraguay", pt:"Paraguai"},
  "Peru":           {flag:"🇵🇪", iso:"PER", ca:"Perú", es:"Perú", en:"Peru", fr:"Pérou", de:"Peru", it:"Perù", pt:"Peru"},
  "Bolivia":        {flag:"🇧🇴", iso:"BOL", ca:"Bolívia", es:"Bolivia", en:"Bolivia", fr:"Bolivie", de:"Bolivien", it:"Bolivia", pt:"Bolívia"},
  "Venezuela":      {flag:"🇻🇪", iso:"VEN", ca:"Veneçuela", es:"Venezuela", en:"Venezuela", fr:"Venezuela", de:"Venezuela", it:"Venezuela", pt:"Venezuela"},

  // ---- CONCACAF ----
  "USA":            {flag:"🇺🇸", iso:"USA", ca:"Estats Units", es:"Estados Unidos", en:"United States", fr:"États-Unis", de:"USA", it:"Stati Uniti", pt:"Estados Unidos"},
  "Mexico":         {flag:"🇲🇽", iso:"MEX", ca:"Mèxic", es:"México", en:"Mexico", fr:"Mexique", de:"Mexiko", it:"Messico", pt:"México"},
  "Costa-Rica":     {flag:"🇨🇷", iso:"CRC", ca:"Costa Rica", es:"Costa Rica", en:"Costa Rica", fr:"Costa Rica", de:"Costa Rica", it:"Costa Rica", pt:"Costa Rica"},
  "Honduras":       {flag:"🇭🇳", iso:"HON", ca:"Hondures", es:"Honduras", en:"Honduras", fr:"Honduras", de:"Honduras", it:"Honduras", pt:"Honduras"},
  "Guatemala":      {flag:"🇬🇹", iso:"GUA", ca:"Guatemala", es:"Guatemala", en:"Guatemala", fr:"Guatemala", de:"Guatemala", it:"Guatemala", pt:"Guatemala"},
  "Panama":         {flag:"🇵🇦", iso:"PAN", ca:"Panamà", es:"Panamá", en:"Panama", fr:"Panama", de:"Panama", it:"Panama", pt:"Panamá"},
  "Canada":         {flag:"🇨🇦", iso:"CAN", ca:"Canadà", es:"Canadá", en:"Canada", fr:"Canada", de:"Kanada", it:"Canada", pt:"Canadá"},

  // ---- AFC ----
  "Japan":          {flag:"🇯🇵", iso:"JPN", ca:"Japó", es:"Japón", en:"Japan", fr:"Japon", de:"Japan", it:"Giappone", pt:"Japão"},
  "Saudi-Arabia":   {flag:"🇸🇦", iso:"KSA", ca:"Aràbia Saudita", es:"Arabia Saudí", en:"Saudi Arabia", fr:"Arabie saoudite", de:"Saudi-Arabien", it:"Arabia Saudita", pt:"Arábia Saudita"},
  "South-Korea":    {flag:"🇰🇷", iso:"KOR", ca:"Corea del Sud", es:"Corea del Sur", en:"South Korea", fr:"Corée du Sud", de:"Südkorea", it:"Corea del Sud", pt:"Coreia do Sul"},
  "China":          {flag:"🇨🇳", iso:"CHN", ca:"Xina", es:"China", en:"China", fr:"Chine", de:"China", it:"Cina", pt:"China"},
  "Australia":      {flag:"🇦🇺", iso:"AUS", ca:"Austràlia", es:"Australia", en:"Australia", fr:"Australie", de:"Australien", it:"Australia", pt:"Austrália"},
  "Qatar":          {flag:"🇶🇦", iso:"QAT", ca:"Qatar", es:"Catar", en:"Qatar", fr:"Qatar", de:"Katar", it:"Qatar", pt:"Catar"},
  "United-Arab-Emirates":{flag:"🇦🇪", iso:"UAE", ca:"Emirats Àrabs Units", es:"Emiratos Árabes Unidos", en:"United Arab Emirates", fr:"Émirats arabes unis", de:"Vereinigte Arabische Emirate", it:"Emirati Arabi Uniti", pt:"Emirados Árabes Unidos"},
  "Iran":           {flag:"🇮🇷", iso:"IRN", ca:"Iran", es:"Irán", en:"Iran", fr:"Iran", de:"Iran", it:"Iran", pt:"Irão"},
  "Thailand":       {flag:"🇹🇭", iso:"THA", ca:"Tailàndia", es:"Tailandia", en:"Thailand", fr:"Thaïlande", de:"Thailand", it:"Thailandia", pt:"Tailândia"},
  "India":          {flag:"🇮🇳", iso:"IND", ca:"Índia", es:"India", en:"India", fr:"Inde", de:"Indien", it:"India", pt:"Índia"},

  // ---- CAF ----
  "Egypt":          {flag:"🇪🇬", iso:"EGY", ca:"Egipte", es:"Egipto", en:"Egypt", fr:"Égypte", de:"Ägypten", it:"Egitto", pt:"Egito"},
  "Morocco":        {flag:"🇲🇦", iso:"MAR", ca:"Marroc", es:"Marruecos", en:"Morocco", fr:"Maroc", de:"Marokko", it:"Marocco", pt:"Marrocos"},
  "South-Africa":   {flag:"🇿🇦", iso:"RSA", ca:"Sud-àfrica", es:"Sudáfrica", en:"South Africa", fr:"Afrique du Sud", de:"Südafrika", it:"Sudafrica", pt:"África do Sul"},
  "Nigeria":        {flag:"🇳🇬", iso:"NGA", ca:"Nigèria", es:"Nigeria", en:"Nigeria", fr:"Nigéria", de:"Nigeria", it:"Nigeria", pt:"Nigéria"},
  "Tunisia":        {flag:"🇹🇳", iso:"TUN", ca:"Tunísia", es:"Túnez", en:"Tunisia", fr:"Tunisie", de:"Tunesien", it:"Tunisia", pt:"Tunísia"},
  "Algeria":        {flag:"🇩🇿", iso:"ALG", ca:"Algèria", es:"Argelia", en:"Algeria", fr:"Algérie", de:"Algerien", it:"Algeria", pt:"Argélia"},

  // ---- OFC ----
  "New-Zealand":    {flag:"🇳🇿", iso:"NZL", ca:"Nova Zelanda", es:"Nueva Zelanda", en:"New Zealand", fr:"Nouvelle-Zélande", de:"Neuseeland", it:"Nuova Zelanda", pt:"Nova Zelândia"},

  // --- afegits automaticament per al ranquing de seleccions ---
  // Nom en angles als set idiomes: es pot anar traduint el que calgui.
  "Afghanistan": {flag:"🇦🇫", iso:"AF", ca:"Afghanistan", es:"Afghanistan", en:"Afghanistan", fr:"Afghanistan", de:"Afghanistan", it:"Afghanistan", pt:"Afghanistan"},
  "Angola": {flag:"🇦🇴", iso:"AO", ca:"Angola", es:"Angola", en:"Angola", fr:"Angola", de:"Angola", it:"Angola", pt:"Angola"},
  "Anguilla": {flag:"🇦🇮", iso:"AI", ca:"Anguilla", es:"Anguilla", en:"Anguilla", fr:"Anguilla", de:"Anguilla", it:"Anguilla", pt:"Anguilla"},
  "Antigua-and-Barbuda": {flag:"🇦🇬", iso:"AG", ca:"Antigua and Barbuda", es:"Antigua and Barbuda", en:"Antigua and Barbuda", fr:"Antigua and Barbuda", de:"Antigua and Barbuda", it:"Antigua and Barbuda", pt:"Antigua and Barbuda"},
  "Aruba": {flag:"🇦🇼", iso:"AW", ca:"Aruba", es:"Aruba", en:"Aruba", fr:"Aruba", de:"Aruba", it:"Aruba", pt:"Aruba"},
  "Bahamas": {flag:"🇧🇸", iso:"BS", ca:"Bahamas", es:"Bahamas", en:"Bahamas", fr:"Bahamas", de:"Bahamas", it:"Bahamas", pt:"Bahamas"},
  "Bahrain": {flag:"🇧🇭", iso:"BH", ca:"Bahrain", es:"Bahrain", en:"Bahrain", fr:"Bahrain", de:"Bahrain", it:"Bahrain", pt:"Bahrain"},
  "Bangladesh": {flag:"🇧🇩", iso:"BD", ca:"Bangladesh", es:"Bangladesh", en:"Bangladesh", fr:"Bangladesh", de:"Bangladesh", it:"Bangladesh", pt:"Bangladesh"},
  "Barbados": {flag:"🇧🇧", iso:"BB", ca:"Barbados", es:"Barbados", en:"Barbados", fr:"Barbados", de:"Barbados", it:"Barbados", pt:"Barbados"},
  "Belarus": {flag:"🇧🇾", iso:"BY", ca:"Belarus", es:"Belarus", en:"Belarus", fr:"Belarus", de:"Belarus", it:"Belarus", pt:"Belarus"},
  "Belize": {flag:"🇧🇿", iso:"BZ", ca:"Belize", es:"Belize", en:"Belize", fr:"Belize", de:"Belize", it:"Belize", pt:"Belize"},
  "Benin": {flag:"🇧🇯", iso:"BJ", ca:"Benin", es:"Benin", en:"Benin", fr:"Benin", de:"Benin", it:"Benin", pt:"Benin"},
  "Bermuda": {flag:"🇧🇲", iso:"BM", ca:"Bermuda", es:"Bermuda", en:"Bermuda", fr:"Bermuda", de:"Bermuda", it:"Bermuda", pt:"Bermuda"},
  "Bhutan": {flag:"🇧🇹", iso:"BT", ca:"Bhutan", es:"Bhutan", en:"Bhutan", fr:"Bhutan", de:"Bhutan", it:"Bhutan", pt:"Bhutan"},
  "Bonaire": {flag:"🇧🇶", iso:"BQ", ca:"Bonaire", es:"Bonaire", en:"Bonaire", fr:"Bonaire", de:"Bonaire", it:"Bonaire", pt:"Bonaire"},
  "Botswana": {flag:"🇧🇼", iso:"BW", ca:"Botswana", es:"Botswana", en:"Botswana", fr:"Botswana", de:"Botswana", it:"Botswana", pt:"Botswana"},
  "British-Virgin-Islands": {flag:"🇻🇬", iso:"VG", ca:"British Virgin Islands", es:"British Virgin Islands", en:"British Virgin Islands", fr:"British Virgin Islands", de:"British Virgin Islands", it:"British Virgin Islands", pt:"British Virgin Islands"},
  "Brunei": {flag:"🇧🇳", iso:"BN", ca:"Brunei", es:"Brunei", en:"Brunei", fr:"Brunei", de:"Brunei", it:"Brunei", pt:"Brunei"},
  "Burkina-Faso": {flag:"🇧🇫", iso:"BF", ca:"Burkina Faso", es:"Burkina Faso", en:"Burkina Faso", fr:"Burkina Faso", de:"Burkina Faso", it:"Burkina Faso", pt:"Burkina Faso"},
  "Burundi": {flag:"🇧🇮", iso:"BI", ca:"Burundi", es:"Burundi", en:"Burundi", fr:"Burundi", de:"Burundi", it:"Burundi", pt:"Burundi"},
  "Cambodia": {flag:"🇰🇭", iso:"KH", ca:"Cambodia", es:"Cambodia", en:"Cambodia", fr:"Cambodia", de:"Cambodia", it:"Cambodia", pt:"Cambodia"},
  "Cameroon": {flag:"🇨🇲", iso:"CM", ca:"Cameroon", es:"Cameroon", en:"Cameroon", fr:"Cameroon", de:"Cameroon", it:"Cameroon", pt:"Cameroon"},
  "Cape-Verde": {flag:"🇨🇻", iso:"CV", ca:"Cape Verde Islands", es:"Cape Verde Islands", en:"Cape Verde Islands", fr:"Cape Verde Islands", de:"Cape Verde Islands", it:"Cape Verde Islands", pt:"Cape Verde Islands"},
  "Cayman-Islands": {flag:"🇰🇾", iso:"KY", ca:"Cayman Islands", es:"Cayman Islands", en:"Cayman Islands", fr:"Cayman Islands", de:"Cayman Islands", it:"Cayman Islands", pt:"Cayman Islands"},
  "Central-African-Republic": {flag:"🇨🇫", iso:"CF", ca:"Central African Republic", es:"Central African Republic", en:"Central African Republic", fr:"Central African Republic", de:"Central African Republic", it:"Central African Republic", pt:"Central African Republic"},
  "Chad": {flag:"🇹🇩", iso:"TD", ca:"Chad", es:"Chad", en:"Chad", fr:"Chad", de:"Chad", it:"Chad", pt:"Chad"},
  "Chinese-Taipei": {flag:"🇹🇼", iso:"TW", ca:"Chinese Taipei", es:"Chinese Taipei", en:"Chinese Taipei", fr:"Chinese Taipei", de:"Chinese Taipei", it:"Chinese Taipei", pt:"Chinese Taipei"},
  "Comoros": {flag:"🇰🇲", iso:"KM", ca:"Comoros", es:"Comoros", en:"Comoros", fr:"Comoros", de:"Comoros", it:"Comoros", pt:"Comoros"},
  "Congo": {flag:"🇨🇩", iso:"CD", ca:"Congo", es:"Congo", en:"Congo", fr:"Congo", de:"Congo", it:"Congo", pt:"Congo"},
  "Congo-DR": {flag:"🇨🇬", iso:"CG", ca:"Congo DR", es:"Congo DR", en:"Congo DR", fr:"Congo DR", de:"Congo DR", it:"Congo DR", pt:"Congo DR"},
  "Cuba": {flag:"🇨🇺", iso:"CU", ca:"Cuba", es:"Cuba", en:"Cuba", fr:"Cuba", de:"Cuba", it:"Cuba", pt:"Cuba"},
  "Curacao": {flag:"🇨🇼", iso:"CW", ca:"Curaçao", es:"Curaçao", en:"Curaçao", fr:"Curaçao", de:"Curaçao", it:"Curaçao", pt:"Curaçao"},
  "Dominica": {flag:"🇩🇲", iso:"DM", ca:"Dominica", es:"Dominica", en:"Dominica", fr:"Dominica", de:"Dominica", it:"Dominica", pt:"Dominica"},
  "Dominican-Republic": {flag:"🇩🇴", iso:"DO", ca:"Dominican Republic", es:"Dominican Republic", en:"Dominican Republic", fr:"Dominican Republic", de:"Dominican Republic", it:"Dominican Republic", pt:"Dominican Republic"},
  "El-Salvador": {flag:"🇸🇻", iso:"SV", ca:"El Salvador", es:"El Salvador", en:"El Salvador", fr:"El Salvador", de:"El Salvador", it:"El Salvador", pt:"El Salvador"},
  "Equatorial-Guinea": {flag:"🇬🇶", iso:"GQ", ca:"Equatorial Guinea", es:"Equatorial Guinea", en:"Equatorial Guinea", fr:"Equatorial Guinea", de:"Equatorial Guinea", it:"Equatorial Guinea", pt:"Equatorial Guinea"},
  "Eswatini": {flag:"🇸🇿", iso:"SZ", ca:"Eswatini", es:"Eswatini", en:"Eswatini", fr:"Eswatini", de:"Eswatini", it:"Eswatini", pt:"Eswatini"},
  "Ethiopia": {flag:"🇪🇹", iso:"ET", ca:"Ethiopia", es:"Ethiopia", en:"Ethiopia", fr:"Ethiopia", de:"Ethiopia", it:"Ethiopia", pt:"Ethiopia"},
  "Fiji": {flag:"🇫🇯", iso:"FJ", ca:"Fiji", es:"Fiji", en:"Fiji", fr:"Fiji", de:"Fiji", it:"Fiji", pt:"Fiji"},
  "Gabon": {flag:"🇬🇦", iso:"GA", ca:"Gabon", es:"Gabon", en:"Gabon", fr:"Gabon", de:"Gabon", it:"Gabon", pt:"Gabon"},
  "Gambia": {flag:"🇬🇲", iso:"GM", ca:"Gambia", es:"Gambia", en:"Gambia", fr:"Gambia", de:"Gambia", it:"Gambia", pt:"Gambia"},
  "Ghana": {flag:"🇬🇭", iso:"GH", ca:"Ghana", es:"Ghana", en:"Ghana", fr:"Ghana", de:"Ghana", it:"Ghana", pt:"Ghana"},
  "Grenada": {flag:"🇬🇩", iso:"GD", ca:"Grenada", es:"Grenada", en:"Grenada", fr:"Grenada", de:"Grenada", it:"Grenada", pt:"Grenada"},
  "Guadeloupe": {flag:"🇬🇵", iso:"GP", ca:"Guadeloupe", es:"Guadeloupe", en:"Guadeloupe", fr:"Guadeloupe", de:"Guadeloupe", it:"Guadeloupe", pt:"Guadeloupe"},
  "Guinea": {flag:"🇬🇳", iso:"GN", ca:"Guinea", es:"Guinea", en:"Guinea", fr:"Guinea", de:"Guinea", it:"Guinea", pt:"Guinea"},
  "Guinea-Bissau": {flag:"🇬🇼", iso:"GW", ca:"Guinea-Bissau", es:"Guinea-Bissau", en:"Guinea-Bissau", fr:"Guinea-Bissau", de:"Guinea-Bissau", it:"Guinea-Bissau", pt:"Guinea-Bissau"},
  "Guyana": {flag:"🇬🇾", iso:"GY", ca:"Guyana", es:"Guyana", en:"Guyana", fr:"Guyana", de:"Guyana", it:"Guyana", pt:"Guyana"},
  "Haiti": {flag:"🇭🇹", iso:"HT", ca:"Haiti", es:"Haiti", en:"Haiti", fr:"Haiti", de:"Haiti", it:"Haiti", pt:"Haiti"},
  "Hong-Kong": {flag:"🇭🇰", iso:"HK", ca:"Hong Kong", es:"Hong Kong", en:"Hong Kong", fr:"Hong Kong", de:"Hong Kong", it:"Hong Kong", pt:"Hong Kong"},
  "Indonesia": {flag:"🇮🇩", iso:"ID", ca:"Indonesia", es:"Indonesia", en:"Indonesia", fr:"Indonesia", de:"Indonesia", it:"Indonesia", pt:"Indonesia"},
  "Iraq": {flag:"🇮🇶", iso:"IQ", ca:"Iraq", es:"Iraq", en:"Iraq", fr:"Iraq", de:"Iraq", it:"Iraq", pt:"Iraq"},
  "Ivory-Coast": {flag:"🇨🇮", iso:"CI", ca:"Ivory Coast", es:"Ivory Coast", en:"Ivory Coast", fr:"Ivory Coast", de:"Ivory Coast", it:"Ivory Coast", pt:"Ivory Coast"},
  "Jamaica": {flag:"🇯🇲", iso:"JM", ca:"Jamaica", es:"Jamaica", en:"Jamaica", fr:"Jamaica", de:"Jamaica", it:"Jamaica", pt:"Jamaica"},
  "Jordan": {flag:"🇯🇴", iso:"JO", ca:"Jordan", es:"Jordan", en:"Jordan", fr:"Jordan", de:"Jordan", it:"Jordan", pt:"Jordan"},
  "Kenya": {flag:"🇰🇪", iso:"KE", ca:"Kenya", es:"Kenya", en:"Kenya", fr:"Kenya", de:"Kenya", it:"Kenya", pt:"Kenya"},
  "Kuwait": {flag:"🇰🇼", iso:"KW", ca:"Kuwait", es:"Kuwait", en:"Kuwait", fr:"Kuwait", de:"Kuwait", it:"Kuwait", pt:"Kuwait"},
  "Kyrgyzstan": {flag:"🇰🇬", iso:"KG", ca:"Kyrgyzstan", es:"Kyrgyzstan", en:"Kyrgyzstan", fr:"Kyrgyzstan", de:"Kyrgyzstan", it:"Kyrgyzstan", pt:"Kyrgyzstan"},
  "Laos": {flag:"🇱🇦", iso:"LA", ca:"Laos", es:"Laos", en:"Laos", fr:"Laos", de:"Laos", it:"Laos", pt:"Laos"},
  "Lebanon": {flag:"🇱🇧", iso:"LB", ca:"Lebanon", es:"Lebanon", en:"Lebanon", fr:"Lebanon", de:"Lebanon", it:"Lebanon", pt:"Lebanon"},
  "Lesotho": {flag:"🇱🇸", iso:"LS", ca:"Lesotho", es:"Lesotho", en:"Lesotho", fr:"Lesotho", de:"Lesotho", it:"Lesotho", pt:"Lesotho"},
  "Liberia": {flag:"🇱🇷", iso:"LR", ca:"Liberia", es:"Liberia", en:"Liberia", fr:"Liberia", de:"Liberia", it:"Liberia", pt:"Liberia"},
  "Libya": {flag:"🇱🇾", iso:"LY", ca:"Libya", es:"Libya", en:"Libya", fr:"Libya", de:"Libya", it:"Libya", pt:"Libya"},
  "Liechtenstein": {flag:"🇱🇮", iso:"LI", ca:"Liechtenstein", es:"Liechtenstein", en:"Liechtenstein", fr:"Liechtenstein", de:"Liechtenstein", it:"Liechtenstein", pt:"Liechtenstein"},
  "Madagascar": {flag:"🇲🇬", iso:"MG", ca:"Madagascar", es:"Madagascar", en:"Madagascar", fr:"Madagascar", de:"Madagascar", it:"Madagascar", pt:"Madagascar"},
  "Malawi": {flag:"🇲🇼", iso:"MW", ca:"Malawi", es:"Malawi", en:"Malawi", fr:"Malawi", de:"Malawi", it:"Malawi", pt:"Malawi"},
  "Malaysia": {flag:"🇲🇾", iso:"MY", ca:"Malaysia", es:"Malaysia", en:"Malaysia", fr:"Malaysia", de:"Malaysia", it:"Malaysia", pt:"Malaysia"},
  "Maldives": {flag:"🇲🇻", iso:"MV", ca:"Maldives", es:"Maldives", en:"Maldives", fr:"Maldives", de:"Maldives", it:"Maldives", pt:"Maldives"},
  "Mali": {flag:"🇲🇱", iso:"ML", ca:"Mali", es:"Mali", en:"Mali", fr:"Mali", de:"Mali", it:"Mali", pt:"Mali"},
  "Martinique": {flag:"🇲🇶", iso:"MQ", ca:"Martinique", es:"Martinique", en:"Martinique", fr:"Martinique", de:"Martinique", it:"Martinique", pt:"Martinique"},
  "Mauritania": {flag:"🇲🇷", iso:"MR", ca:"Mauritania", es:"Mauritania", en:"Mauritania", fr:"Mauritania", de:"Mauritania", it:"Mauritania", pt:"Mauritania"},
  "Mauritius": {flag:"🇲🇺", iso:"MU", ca:"Mauritius", es:"Mauritius", en:"Mauritius", fr:"Mauritius", de:"Mauritius", it:"Mauritius", pt:"Mauritius"},
  "Montserrat": {flag:"🇲🇸", iso:"MS", ca:"Montserrat", es:"Montserrat", en:"Montserrat", fr:"Montserrat", de:"Montserrat", it:"Montserrat", pt:"Montserrat"},
  "Mozambique": {flag:"🇲🇿", iso:"MZ", ca:"Mozambique", es:"Mozambique", en:"Mozambique", fr:"Mozambique", de:"Mozambique", it:"Mozambique", pt:"Mozambique"},
  "Myanmar": {flag:"🇲🇲", iso:"MM", ca:"Myanmar", es:"Myanmar", en:"Myanmar", fr:"Myanmar", de:"Myanmar", it:"Myanmar", pt:"Myanmar"},
  "Namibia": {flag:"🇳🇦", iso:"NA", ca:"Namibia", es:"Namibia", en:"Namibia", fr:"Namibia", de:"Namibia", it:"Namibia", pt:"Namibia"},
  "Nepal": {flag:"🇳🇵", iso:"NP", ca:"Nepal", es:"Nepal", en:"Nepal", fr:"Nepal", de:"Nepal", it:"Nepal", pt:"Nepal"},
  "Nicaragua": {flag:"🇳🇮", iso:"NI", ca:"Nicaragua", es:"Nicaragua", en:"Nicaragua", fr:"Nicaragua", de:"Nicaragua", it:"Nicaragua", pt:"Nicaragua"},
  "Niger": {flag:"🇳🇪", iso:"NE", ca:"Niger", es:"Niger", en:"Niger", fr:"Niger", de:"Niger", it:"Niger", pt:"Niger"},
  "North-Korea": {flag:"🇰🇵", iso:"KP", ca:"North Korea", es:"North Korea", en:"North Korea", fr:"North Korea", de:"North Korea", it:"North Korea", pt:"North Korea"},
  "Oman": {flag:"🇴🇲", iso:"OM", ca:"Oman", es:"Oman", en:"Oman", fr:"Oman", de:"Oman", it:"Oman", pt:"Oman"},
  "Pakistan": {flag:"🇵🇰", iso:"PK", ca:"Pakistan", es:"Pakistan", en:"Pakistan", fr:"Pakistan", de:"Pakistan", it:"Pakistan", pt:"Pakistan"},
  "Palestine": {flag:"🇵🇸", iso:"PS", ca:"Palestine", es:"Palestine", en:"Palestine", fr:"Palestine", de:"Palestine", it:"Palestine", pt:"Palestine"},
  "Philippines": {flag:"🇵🇭", iso:"PH", ca:"Philippines", es:"Philippines", en:"Philippines", fr:"Philippines", de:"Philippines", it:"Philippines", pt:"Philippines"},
  "Puerto-Rico": {flag:"🇵🇷", iso:"PR", ca:"Puerto Rico", es:"Puerto Rico", en:"Puerto Rico", fr:"Puerto Rico", de:"Puerto Rico", it:"Puerto Rico", pt:"Puerto Rico"},
  "Rwanda": {flag:"🇷🇼", iso:"RW", ca:"Rwanda", es:"Rwanda", en:"Rwanda", fr:"Rwanda", de:"Rwanda", it:"Rwanda", pt:"Rwanda"},
  "Saint-Kitts-and-Nevis": {flag:"🇰🇳", iso:"KN", ca:"St. Kitts and Nevis", es:"St. Kitts and Nevis", en:"St. Kitts and Nevis", fr:"St. Kitts and Nevis", de:"St. Kitts and Nevis", it:"St. Kitts and Nevis", pt:"St. Kitts and Nevis"},
  "Saint-Lucia": {flag:"🇱🇨", iso:"LC", ca:"St. Lucia", es:"St. Lucia", en:"St. Lucia", fr:"St. Lucia", de:"St. Lucia", it:"St. Lucia", pt:"St. Lucia"},
  "Saint-Martin": {flag:"🇲🇫", iso:"MF", ca:"Saint Martin", es:"Saint Martin", en:"Saint Martin", fr:"Saint Martin", de:"Saint Martin", it:"Saint Martin", pt:"Saint Martin"},
  "Saint-Vincent": {flag:"🇻🇨", iso:"VC", ca:"St. Vincent / Grenadines", es:"St. Vincent / Grenadines", en:"St. Vincent / Grenadines", fr:"St. Vincent / Grenadines", de:"St. Vincent / Grenadines", it:"St. Vincent / Grenadines", pt:"St. Vincent / Grenadines"},
  "Senegal": {flag:"🇸🇳", iso:"SN", ca:"Senegal", es:"Senegal", en:"Senegal", fr:"Senegal", de:"Senegal", it:"Senegal", pt:"Senegal"},
  "Sierra-Leone": {flag:"🇸🇱", iso:"SL", ca:"Sierra Leone", es:"Sierra Leone", en:"Sierra Leone", fr:"Sierra Leone", de:"Sierra Leone", it:"Sierra Leone", pt:"Sierra Leone"},
  "Singapore": {flag:"🇸🇬", iso:"SG", ca:"Singapore", es:"Singapore", en:"Singapore", fr:"Singapore", de:"Singapore", it:"Singapore", pt:"Singapore"},
  "Sint-Maarten": {flag:"🇸🇽", iso:"SX", ca:"Sint Maarten", es:"Sint Maarten", en:"Sint Maarten", fr:"Sint Maarten", de:"Sint Maarten", it:"Sint Maarten", pt:"Sint Maarten"},
  "Solomon-Islands": {flag:"🇸🇧", iso:"SB", ca:"Solomon Islands", es:"Solomon Islands", en:"Solomon Islands", fr:"Solomon Islands", de:"Solomon Islands", it:"Solomon Islands", pt:"Solomon Islands"},
  "Somalia": {flag:"🇸🇴", iso:"SO", ca:"Somalia", es:"Somalia", en:"Somalia", fr:"Somalia", de:"Somalia", it:"Somalia", pt:"Somalia"},
  "South-Sudan": {flag:"🇸🇸", iso:"SS", ca:"South Sudan", es:"South Sudan", en:"South Sudan", fr:"South Sudan", de:"South Sudan", it:"South Sudan", pt:"South Sudan"},
  "Sri-Lanka": {flag:"🇱🇰", iso:"LK", ca:"Sri Lanka", es:"Sri Lanka", en:"Sri Lanka", fr:"Sri Lanka", de:"Sri Lanka", it:"Sri Lanka", pt:"Sri Lanka"},
  "Sudan": {flag:"🇸🇩", iso:"SD", ca:"Sudan", es:"Sudan", en:"Sudan", fr:"Sudan", de:"Sudan", it:"Sudan", pt:"Sudan"},
  "Suriname": {flag:"🇸🇷", iso:"SR", ca:"Suriname", es:"Suriname", en:"Suriname", fr:"Suriname", de:"Suriname", it:"Suriname", pt:"Suriname"},
  "Syria": {flag:"🇸🇾", iso:"SY", ca:"Syria", es:"Syria", en:"Syria", fr:"Syria", de:"Syria", it:"Syria", pt:"Syria"},
  "Tajikistan": {flag:"🇹🇯", iso:"TJ", ca:"Tajikistan", es:"Tajikistan", en:"Tajikistan", fr:"Tajikistan", de:"Tajikistan", it:"Tajikistan", pt:"Tajikistan"},
  "Tanzania": {flag:"🇹🇿", iso:"TZ", ca:"Tanzania", es:"Tanzania", en:"Tanzania", fr:"Tanzania", de:"Tanzania", it:"Tanzania", pt:"Tanzania"},
  "Timor-Leste": {flag:"🇹🇱", iso:"TL", ca:"Timor-Leste", es:"Timor-Leste", en:"Timor-Leste", fr:"Timor-Leste", de:"Timor-Leste", it:"Timor-Leste", pt:"Timor-Leste"},
  "Togo": {flag:"🇹🇬", iso:"TG", ca:"Togo", es:"Togo", en:"Togo", fr:"Togo", de:"Togo", it:"Togo", pt:"Togo"},
  "Trinidad-and-Tobago": {flag:"🇹🇹", iso:"TT", ca:"Trinidad and Tobago", es:"Trinidad and Tobago", en:"Trinidad and Tobago", fr:"Trinidad and Tobago", de:"Trinidad and Tobago", it:"Trinidad and Tobago", pt:"Trinidad and Tobago"},
  "Turkmenistan": {flag:"🇹🇲", iso:"TM", ca:"Turkmenistan", es:"Turkmenistan", en:"Turkmenistan", fr:"Turkmenistan", de:"Turkmenistan", it:"Turkmenistan", pt:"Turkmenistan"},
  "US-Virgin-Islands": {flag:"🇻🇮", iso:"VI", ca:"US Virgin Islands", es:"US Virgin Islands", en:"US Virgin Islands", fr:"US Virgin Islands", de:"US Virgin Islands", it:"US Virgin Islands", pt:"US Virgin Islands"},
  "Uganda": {flag:"🇺🇬", iso:"UG", ca:"Uganda", es:"Uganda", en:"Uganda", fr:"Uganda", de:"Uganda", it:"Uganda", pt:"Uganda"},
  "Uzbekistan": {flag:"🇺🇿", iso:"UZ", ca:"Uzbekistan", es:"Uzbekistan", en:"Uzbekistan", fr:"Uzbekistan", de:"Uzbekistan", it:"Uzbekistan", pt:"Uzbekistan"},
  "Vanuatu": {flag:"🇻🇺", iso:"VU", ca:"Vanuatu", es:"Vanuatu", en:"Vanuatu", fr:"Vanuatu", de:"Vanuatu", it:"Vanuatu", pt:"Vanuatu"},
  "Vietnam": {flag:"🇻🇳", iso:"VN", ca:"Vietnam", es:"Vietnam", en:"Vietnam", fr:"Vietnam", de:"Vietnam", it:"Vietnam", pt:"Vietnam"},
  "Yemen": {flag:"🇾🇪", iso:"YE", ca:"Yemen", es:"Yemen", en:"Yemen", fr:"Yemen", de:"Yemen", it:"Yemen", pt:"Yemen"},
  "Zambia": {flag:"🇿🇲", iso:"ZM", ca:"Zambia", es:"Zambia", en:"Zambia", fr:"Zambia", de:"Zambia", it:"Zambia", pt:"Zambia"},
  "Zimbabwe": {flag:"🇿🇼", iso:"ZW", ca:"Zimbabwe", es:"Zimbabwe", en:"Zimbabwe", fr:"Zimbabwe", de:"Zimbabwe", it:"Zimbabwe", pt:"Zimbabwe"},

};

// Helpers compartits per les tres vistes.
// nomPais(clau, idioma) → nom traduït (cau a la clau crua si no hi és).
// banderaPais(clau) → emoji de bandera (o bandera blanca si no hi és).
function nomPais(clau, idioma){
  const p = PAISOS[clau];
  return (p && p[idioma]) || (p && p.en) || clau;
}
function banderaPais(clau){
  const p = PAISOS[clau];
  return (p && p.flag) || "🏳️";
}

/* ============================================================
   UI · textos d'interfície de les subpàgines, en 7 idiomes.
   (La portada index.html manté el seu propi objecte T;
    aquí cobrim pais.html i ranquing_paisos.html.)
   ============================================================ */
const UI = {
  ca:{
    // comú
    mon:"Món", conf:"Confederació", lliga:"Lliga", pais:"País", club:"Club",
    europa:"Europa", sudamerica:"Sud-amèrica", nordamerica:"Nord-amèrica",
    asia:"Àsia", africa:"Àfrica", oceania:"Oceania", totelmon:"Tot el món",
    // vista de països
    p_title:"Quines <em>lligües</em> són les més fortes del món",
    p_sub:"La força d'un país es mesura pels seus millors clubs que competeixen a escala continental. La barra de connexió indica quanta activitat internacional té cada lliga — com més alta, més fiable és la seva posició global. Clica un país per veure'n els clubs.",
    p_eyebrow:"Força de les federacions · Temporada 2025",
    th_force:"Força", th_conn:"Connexió internacional", th_clubs:"Clubs",
    veureclubs:"veure clubs →",
    conn_molt:"Molt alta", conn_alta:"Alta", conn_mitjana:"Mitjana", conn_baixa:"Baixa",
    note_read:"<b>Com llegir-ho.</b> La <b>força</b> és la mitjana dels millors clubs del país a l'escala mundial. La <b>connexió internacional</b> mesura quants partits continentals juguen els seus clubs: les lligues molt connectades (barra verda) tenen una posició global molt fiable; les poc connectades (barra daurada) es comparen amb menys informació, i la seva posició té més marge. És la mateixa mesura per a tots els continents.",
    // vista de clubs d'un país
    c_worldrank:"Al rànquing mundial", c_force:"Força del país",
    c_clubs:"Clubs al model", c_divs:"Divisions",
    c_division:"Divisió", c_totes:"Totes", c_search:"Cerca un club…",
    th_world:"Món", th_club:"Club", th_trend:"Tendència", th_rating:"Rating",
    c_clubsof:"Clubs d'", loading:"Carregant…", nomatch:"Cap club coincideix.",
    footer:"Rànquing generat automàticament a partir de resultats esportius · Sense afiliació amb la UEFA ni la FIFA",
  },
  es:{
    mon:"Mundo", conf:"Confederación", lliga:"Liga", pais:"País", club:"Club",
    europa:"Europa", sudamerica:"Sudamérica", nordamerica:"Norteamérica",
    asia:"Asia", africa:"África", oceania:"Oceanía", totelmon:"Todo el mundo",
    p_title:"Qué <em>ligas</em> son las más fuertes del mundo",
    p_sub:"La fuerza de un país se mide por sus mejores clubes que compiten a escala continental. La barra de conexión indica cuánta actividad internacional tiene cada liga — cuanto más alta, más fiable es su posición global. Haz clic en un país para ver sus clubes.",
    p_eyebrow:"Fuerza de las federaciones · Temporada 2025",
    th_force:"Fuerza", th_conn:"Conexión internacional", th_clubs:"Clubes",
    veureclubs:"ver clubes →",
    conn_molt:"Muy alta", conn_alta:"Alta", conn_mitjana:"Media", conn_baixa:"Baja",
    note_read:"<b>Cómo leerlo.</b> La <b>fuerza</b> es la media de los mejores clubes del país en la escala mundial. La <b>conexión internacional</b> mide cuántos partidos continentales juegan sus clubes: las ligas muy conectadas (barra verde) tienen una posición global muy fiable; las poco conectadas (barra dorada) se comparan con menos información, y su posición tiene más margen. Es la misma medida para todos los continentes.",
    c_worldrank:"En el ranking mundial", c_force:"Fuerza del país",
    c_clubs:"Clubes en el modelo", c_divs:"Divisiones",
    c_division:"División", c_totes:"Todas", c_search:"Busca un club…",
    th_world:"Mundo", th_club:"Club", th_trend:"Tendencia", th_rating:"Rating",
    c_clubsof:"Clubes de ", loading:"Cargando…", nomatch:"Ningún club coincide.",
    footer:"Ranking generado automáticamente a partir de resultados deportivos · Sin afiliación con la UEFA ni la FIFA",
  },
  en:{
    mon:"World", conf:"Confederation", lliga:"League", pais:"Country", club:"Club",
    europa:"Europe", sudamerica:"South America", nordamerica:"North America",
    asia:"Asia", africa:"Africa", oceania:"Oceania", totelmon:"Whole world",
    p_title:"Which <em>leagues</em> are the strongest in the world",
    p_sub:"A country's strength is measured by its best clubs competing at continental level. The connection bar shows how much international activity each league has — the higher it is, the more reliable its global position. Click a country to see its clubs.",
    p_eyebrow:"Federation strength · 2025 season",
    th_force:"Strength", th_conn:"International connection", th_clubs:"Clubs",
    veureclubs:"view clubs →",
    conn_molt:"Very high", conn_alta:"High", conn_mitjana:"Medium", conn_baixa:"Low",
    note_read:"<b>How to read this.</b> <b>Strength</b> is the average of the country's best clubs on the world scale. <b>International connection</b> measures how many continental matches its clubs play: well-connected leagues (green bar) have a very reliable global position; poorly-connected ones (gold bar) are compared with less information, so their position carries more uncertainty. It's the same measure for every continent.",
    c_worldrank:"In the world ranking", c_force:"Country strength",
    c_clubs:"Clubs in the model", c_divs:"Divisions",
    c_division:"Division", c_totes:"All", c_search:"Search a club…",
    th_world:"World", th_club:"Club", th_trend:"Trend", th_rating:"Rating",
    c_clubsof:"Clubs of ", loading:"Loading…", nomatch:"No club matches.",
    footer:"Ranking generated automatically from match results · Not affiliated with UEFA or FIFA",
  },
  fr:{
    mon:"Monde", conf:"Confédération", lliga:"Ligue", pais:"Pays", club:"Club",
    europa:"Europe", sudamerica:"Amérique du Sud", nordamerica:"Amérique du Nord",
    asia:"Asie", africa:"Afrique", oceania:"Océanie", totelmon:"Monde entier",
    p_title:"Quels <em>championnats</em> sont les plus forts du monde",
    p_sub:"La force d'un pays se mesure par ses meilleurs clubs qui jouent à l'échelle continentale. La barre de connexion indique l'activité internationale de chaque championnat — plus elle est haute, plus sa position mondiale est fiable. Cliquez sur un pays pour voir ses clubs.",
    p_eyebrow:"Force des fédérations · Saison 2025",
    th_force:"Force", th_conn:"Connexion internationale", th_clubs:"Clubs",
    veureclubs:"voir les clubs →",
    conn_molt:"Très élevée", conn_alta:"Élevée", conn_mitjana:"Moyenne", conn_baixa:"Faible",
    note_read:"<b>Comment lire ceci.</b> La <b>force</b> est la moyenne des meilleurs clubs du pays à l'échelle mondiale. La <b>connexion internationale</b> mesure combien de matchs continentaux jouent ses clubs : les championnats bien connectés (barre verte) ont une position mondiale très fiable ; les peu connectés (barre dorée) sont comparés avec moins d'informations, et leur position comporte plus d'incertitude. C'est la même mesure pour tous les continents.",
    c_worldrank:"Au classement mondial", c_force:"Force du pays",
    c_clubs:"Clubs dans le modèle", c_divs:"Divisions",
    c_division:"Division", c_totes:"Toutes", c_search:"Chercher un club…",
    th_world:"Monde", th_club:"Club", th_trend:"Tendance", th_rating:"Rating",
    c_clubsof:"Clubs de ", loading:"Chargement…", nomatch:"Aucun club ne correspond.",
    footer:"Classement généré automatiquement à partir des résultats · Sans affiliation avec l'UEFA ni la FIFA",
  },
  de:{
    mon:"Welt", conf:"Konföderation", lliga:"Liga", pais:"Land", club:"Klub",
    europa:"Europa", sudamerica:"Südamerika", nordamerica:"Nordamerika",
    asia:"Asien", africa:"Afrika", oceania:"Ozeanien", totelmon:"Ganze Welt",
    p_title:"Welche <em>Ligen</em> sind die stärksten der Welt",
    p_sub:"Die Stärke eines Landes bemisst sich an seinen besten Klubs im kontinentalen Wettbewerb. Der Verbindungsbalken zeigt, wie viel internationale Aktivität jede Liga hat — je höher, desto zuverlässiger ihre globale Position. Klicke auf ein Land, um seine Klubs zu sehen.",
    p_eyebrow:"Stärke der Verbände · Saison 2025",
    th_force:"Stärke", th_conn:"Internationale Verbindung", th_clubs:"Klubs",
    veureclubs:"Klubs ansehen →",
    conn_molt:"Sehr hoch", conn_alta:"Hoch", conn_mitjana:"Mittel", conn_baixa:"Niedrig",
    note_read:"<b>So liest man das.</b> Die <b>Stärke</b> ist der Durchschnitt der besten Klubs des Landes auf der Weltskala. Die <b>internationale Verbindung</b> misst, wie viele kontinentale Spiele seine Klubs bestreiten: gut vernetzte Ligen (grüner Balken) haben eine sehr zuverlässige globale Position; schwach vernetzte (goldener Balken) werden mit weniger Informationen verglichen, ihre Position ist unsicherer. Es ist dasselbe Maß für alle Kontinente.",
    c_worldrank:"In der Weltrangliste", c_force:"Landesstärke",
    c_clubs:"Klubs im Modell", c_divs:"Divisionen",
    c_division:"Division", c_totes:"Alle", c_search:"Klub suchen…",
    th_world:"Welt", th_club:"Klub", th_trend:"Trend", th_rating:"Rating",
    c_clubsof:"Klubs aus ", loading:"Lädt…", nomatch:"Kein Klub gefunden.",
    footer:"Rangliste automatisch aus Spielergebnissen erstellt · Keine Verbindung zu UEFA oder FIFA",
  },
  it:{
    mon:"Mondo", conf:"Confederazione", lliga:"Lega", pais:"Paese", club:"Club",
    europa:"Europa", sudamerica:"Sud America", nordamerica:"Nord America",
    asia:"Asia", africa:"Africa", oceania:"Oceania", totelmon:"Tutto il mondo",
    p_title:"Quali <em>campionati</em> sono i più forti del mondo",
    p_sub:"La forza di un paese si misura dai suoi migliori club che competono a livello continentale. La barra di connessione indica quanta attività internazionale ha ogni campionato — più è alta, più affidabile è la sua posizione globale. Clicca un paese per vederne i club.",
    p_eyebrow:"Forza delle federazioni · Stagione 2025",
    th_force:"Forza", th_conn:"Connessione internazionale", th_clubs:"Club",
    veureclubs:"vedi i club →",
    conn_molt:"Molto alta", conn_alta:"Alta", conn_mitjana:"Media", conn_baixa:"Bassa",
    note_read:"<b>Come leggerlo.</b> La <b>forza</b> è la media dei migliori club del paese sulla scala mondiale. La <b>connessione internazionale</b> misura quante partite continentali giocano i suoi club: i campionati ben collegati (barra verde) hanno una posizione globale molto affidabile; quelli poco collegati (barra dorata) si confrontano con meno informazioni, e la loro posizione ha più incertezza. È la stessa misura per tutti i continenti.",
    c_worldrank:"Nella classifica mondiale", c_force:"Forza del paese",
    c_clubs:"Club nel modello", c_divs:"Divisioni",
    c_division:"Divisione", c_totes:"Tutte", c_search:"Cerca un club…",
    th_world:"Mondo", th_club:"Club", th_trend:"Tendenza", th_rating:"Rating",
    c_clubsof:"Club di ", loading:"Caricamento…", nomatch:"Nessun club corrisponde.",
    footer:"Classifica generata automaticamente dai risultati · Senza affiliazione con UEFA o FIFA",
  },
  pt:{
    mon:"Mundo", conf:"Confederação", lliga:"Liga", pais:"País", club:"Clube",
    europa:"Europa", sudamerica:"América do Sul", nordamerica:"América do Norte",
    asia:"Ásia", africa:"África", oceania:"Oceania", totelmon:"Todo o mundo",
    p_title:"Que <em>ligas</em> são as mais fortes do mundo",
    p_sub:"A força de um país mede-se pelos seus melhores clubes que competem à escala continental. A barra de ligação indica quanta atividade internacional tem cada liga — quanto mais alta, mais fiável é a sua posição global. Clica num país para ver os seus clubes.",
    p_eyebrow:"Força das federações · Época 2025",
    th_force:"Força", th_conn:"Ligação internacional", th_clubs:"Clubes",
    veureclubs:"ver clubes →",
    conn_molt:"Muito alta", conn_alta:"Alta", conn_mitjana:"Média", conn_baixa:"Baixa",
    note_read:"<b>Como ler isto.</b> A <b>força</b> é a média dos melhores clubes do país na escala mundial. A <b>ligação internacional</b> mede quantos jogos continentais jogam os seus clubes: as ligas bem ligadas (barra verde) têm uma posição global muito fiável; as pouco ligadas (barra dourada) são comparadas com menos informação, e a sua posição tem mais incerteza. É a mesma medida para todos os continentes.",
    c_worldrank:"No ranking mundial", c_force:"Força do país",
    c_clubs:"Clubes no modelo", c_divs:"Divisões",
    c_division:"Divisão", c_totes:"Todas", c_search:"Procurar um clube…",
    th_world:"Mundo", th_club:"Clube", th_trend:"Tendência", th_rating:"Rating",
    c_clubsof:"Clubes de ", loading:"A carregar…", nomatch:"Nenhum clube corresponde.",
    footer:"Ranking gerado automaticamente a partir dos resultados · Sem afiliação com a UEFA ou a FIFA",
  },
};

// noms de confederació traduïts, per al fil conductor i els xips
function confName(conf, idioma){
  const u=UI[idioma]||UI.ca;
  return {UEFA:u.europa, CONMEBOL:u.sudamerica, CONCACAF:u.nordamerica,
          AFC:u.asia, CAF:u.africa, OFC:u.oceania, all:u.totelmon}[conf] || conf;
}

// codi ISO del país (3 lletres), per a l'escut provisional del club.
function isoPais(clau){ const p=PAISOS[clau]; return (p&&p.iso)||clau.slice(0,3).toUpperCase(); }

// ordinal segons idioma i posició. Català: 1r,2n,3r,4t, la resta è.
// Espanyol: 1º. Anglès: 1st/2nd/3rd/4th. Altres: núm. + punt o res.
function ordinal(n, idioma){
  n = Number(n);
  if(idioma==='ca'){
    if(n===1) return n+'r';
    if(n===2) return n+'n';
    if(n===3) return n+'r';
    if(n===4) return n+'t';
    return n+'è';
  }
  if(idioma==='es') return n+'º';
  if(idioma==='en'){
    const s=["th","st","nd","rd"], v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]);
  }
  if(idioma==='fr') return n===1 ? n+'er' : n+'e';
  if(idioma==='it') return n+'º';
  if(idioma==='pt') return n+'º';
  if(idioma==='de') return n+'.';
  return n+'.';
}
