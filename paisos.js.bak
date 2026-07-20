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
   (La portada web_mundial.html manté el seu propi objecte T;
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
