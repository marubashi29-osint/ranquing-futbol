/* ============================================================
   PAISOS.JS Â· noms dels paÃ¯sos en 7 idiomes (font Ãºnica)
   ============================================================
   L'inclouen les tres vistes amb <script src="paisos.js"></script>.
   Clau = identificador estable del paÃ­s (tal com surt del motor,
   p.ex. "Saudi-Arabia"). Cada paÃ­s tÃ© els 7 idiomes:
     ca catalÃ  Â· es espanyol Â· en anglÃ¨s Â· fr francÃ¨s
     de alemany Â· it italiÃ  Â· pt portuguÃ¨s
   La bandera (emoji) tambÃ© viu aquÃ­, aixÃ­ no es repeteix a cada fitxer.

   Per afegir un paÃ­s nou: una lÃ­nia. Per afegir un idioma nou:
   una clau mÃ©s per paÃ­s. Res d'aixÃ² toca el motor.
   ============================================================ */

const PAISOS = {
  // ---- UEFA ----
  "England":        {flag:"ðŸ´ó §ó ¢ó ¥ó ®ó §ó ¿", iso:"ENG", ca:"Anglaterra", es:"Inglaterra", en:"England", fr:"Angleterre", de:"England", it:"Inghilterra", pt:"Inglaterra"},
  "Spain":          {flag:"ðŸ‡ªðŸ‡¸", iso:"ESP", ca:"Espanya", es:"EspaÃ±a", en:"Spain", fr:"Espagne", de:"Spanien", it:"Spagna", pt:"Espanha"},
  "Germany":        {flag:"ðŸ‡©ðŸ‡ª", iso:"GER", ca:"Alemanya", es:"Alemania", en:"Germany", fr:"Allemagne", de:"Deutschland", it:"Germania", pt:"Alemanha"},
  "Italy":          {flag:"ðŸ‡®ðŸ‡¹", iso:"ITA", ca:"ItÃ lia", es:"Italia", en:"Italy", fr:"Italie", de:"Italien", it:"Italia", pt:"ItÃ¡lia"},
  "France":         {flag:"ðŸ‡«ðŸ‡·", iso:"FRA", ca:"FranÃ§a", es:"Francia", en:"France", fr:"France", de:"Frankreich", it:"Francia", pt:"FranÃ§a"},
  "Portugal":       {flag:"ðŸ‡µðŸ‡¹", iso:"POR", ca:"Portugal", es:"Portugal", en:"Portugal", fr:"Portugal", de:"Portugal", it:"Portogallo", pt:"Portugal"},
  "Belgium":        {flag:"ðŸ‡§ðŸ‡ª", iso:"BEL", ca:"BÃ¨lgica", es:"BÃ©lgica", en:"Belgium", fr:"Belgique", de:"Belgien", it:"Belgio", pt:"BÃ©lgica"},
  "Netherlands":    {flag:"ðŸ‡³ðŸ‡±", iso:"NED", ca:"PaÃ¯sos Baixos", es:"PaÃ­ses Bajos", en:"Netherlands", fr:"Pays-Bas", de:"Niederlande", it:"Paesi Bassi", pt:"PaÃ­ses Baixos"},
  "Turkey":         {flag:"ðŸ‡¹ðŸ‡·", iso:"TUR", ca:"Turquia", es:"TurquÃ­a", en:"Turkey", fr:"Turquie", de:"TÃ¼rkei", it:"Turchia", pt:"Turquia"},
  "Greece":         {flag:"ðŸ‡¬ðŸ‡·", iso:"GRE", ca:"GrÃ¨cia", es:"Grecia", en:"Greece", fr:"GrÃ¨ce", de:"Griechenland", it:"Grecia", pt:"GrÃ©cia"},
  "Czech-Republic": {flag:"ðŸ‡¨ðŸ‡¿", iso:"CZE", ca:"TxÃ¨quia", es:"Chequia", en:"Czech Republic", fr:"TchÃ©quie", de:"Tschechien", it:"Cechia", pt:"ChÃ©quia"},
  "Norway":         {flag:"ðŸ‡³ðŸ‡´", iso:"NOR", ca:"Noruega", es:"Noruega", en:"Norway", fr:"NorvÃ¨ge", de:"Norwegen", it:"Norvegia", pt:"Noruega"},
  "Denmark":        {flag:"ðŸ‡©ðŸ‡°", iso:"DEN", ca:"Dinamarca", es:"Dinamarca", en:"Denmark", fr:"Danemark", de:"DÃ¤nemark", it:"Danimarca", pt:"Dinamarca"},
  "Austria":        {flag:"ðŸ‡¦ðŸ‡¹", iso:"AUT", ca:"Ã€ustria", es:"Austria", en:"Austria", fr:"Autriche", de:"Ã–sterreich", it:"Austria", pt:"Ãustria"},
  "Switzerland":    {flag:"ðŸ‡¨ðŸ‡­", iso:"SUI", ca:"SuÃ¯ssa", es:"Suiza", en:"Switzerland", fr:"Suisse", de:"Schweiz", it:"Svizzera", pt:"SuÃ­Ã§a"},
  "Poland":         {flag:"ðŸ‡µðŸ‡±", iso:"POL", ca:"PolÃ²nia", es:"Polonia", en:"Poland", fr:"Pologne", de:"Polen", it:"Polonia", pt:"PolÃ³nia"},
  "Scotland":       {flag:"ðŸ´ó §ó ¢ó ³ó £ó ´ó ¿", iso:"SCO", ca:"EscÃ²cia", es:"Escocia", en:"Scotland", fr:"Ã‰cosse", de:"Schottland", it:"Scozia", pt:"EscÃ³cia"},
  "Israel":         {flag:"ðŸ‡®ðŸ‡±", iso:"ISR", ca:"Israel", es:"Israel", en:"Israel", fr:"IsraÃ«l", de:"Israel", it:"Israele", pt:"Israel"},
  "Ukraine":        {flag:"ðŸ‡ºðŸ‡¦", iso:"UKR", ca:"UcraÃ¯na", es:"Ucrania", en:"Ukraine", fr:"Ukraine", de:"Ukraine", it:"Ucraina", pt:"UcrÃ¢nia"},
  "Serbia":         {flag:"ðŸ‡·ðŸ‡¸", iso:"SRB", ca:"SÃ¨rbia", es:"Serbia", en:"Serbia", fr:"Serbie", de:"Serbien", it:"Serbia", pt:"SÃ©rvia"},
  "Cyprus":         {flag:"ðŸ‡¨ðŸ‡¾", iso:"CYP", ca:"Xipre", es:"Chipre", en:"Cyprus", fr:"Chypre", de:"Zypern", it:"Cipro", pt:"Chipre"},
  "Croatia":        {flag:"ðŸ‡­ðŸ‡·", iso:"CRO", ca:"CroÃ cia", es:"Croacia", en:"Croatia", fr:"Croatie", de:"Kroatien", it:"Croazia", pt:"CroÃ¡cia"},
  "Sweden":         {flag:"ðŸ‡¸ðŸ‡ª", iso:"SWE", ca:"SuÃ¨cia", es:"Suecia", en:"Sweden", fr:"SuÃ¨de", de:"Schweden", it:"Svezia", pt:"SuÃ©cia"},
  "Hungary":        {flag:"ðŸ‡­ðŸ‡º", iso:"HUN", ca:"Hongria", es:"HungrÃ­a", en:"Hungary", fr:"Hongrie", de:"Ungarn", it:"Ungheria", pt:"Hungria"},
  "Romania":        {flag:"ðŸ‡·ðŸ‡´", iso:"ROU", ca:"Romania", es:"RumanÃ­a", en:"Romania", fr:"Roumanie", de:"RumÃ¤nien", it:"Romania", pt:"RomÃ©nia"},
  "Russia":         {flag:"ðŸ‡·ðŸ‡º", iso:"RUS", ca:"RÃºssia", es:"Rusia", en:"Russia", fr:"Russie", de:"Russland", it:"Russia", pt:"RÃºssia"},
  "Bulgaria":       {flag:"ðŸ‡§ðŸ‡¬", iso:"BUL", ca:"BulgÃ ria", es:"Bulgaria", en:"Bulgaria", fr:"Bulgarie", de:"Bulgarien", it:"Bulgaria", pt:"BulgÃ¡ria"},
  "Slovakia":       {flag:"ðŸ‡¸ðŸ‡°", iso:"SVK", ca:"EslovÃ quia", es:"Eslovaquia", en:"Slovakia", fr:"Slovaquie", de:"Slowakei", it:"Slovacchia", pt:"EslovÃ¡quia"},
  "Slovenia":       {flag:"ðŸ‡¸ðŸ‡®", iso:"SVN", ca:"EslovÃ¨nia", es:"Eslovenia", en:"Slovenia", fr:"SlovÃ©nie", de:"Slowenien", it:"Slovenia", pt:"EslovÃ©nia"},
  "Azerbaijan":     {flag:"ðŸ‡¦ðŸ‡¿", iso:"AZE", ca:"Azerbaidjan", es:"AzerbaiyÃ¡n", en:"Azerbaijan", fr:"AzerbaÃ¯djan", de:"Aserbaidschan", it:"Azerbaigian", pt:"AzerbaijÃ£o"},
  "Armenia":        {flag:"ðŸ‡¦ðŸ‡²", iso:"ARM", ca:"ArmÃ¨nia", es:"Armenia", en:"Armenia", fr:"ArmÃ©nie", de:"Armenien", it:"Armenia", pt:"ArmÃ©nia"},
  "Ireland":        {flag:"ðŸ‡®ðŸ‡ª", iso:"IRL", ca:"Irlanda", es:"Irlanda", en:"Ireland", fr:"Irlande", de:"Irland", it:"Irlanda", pt:"Irlanda"},
  "Bosnia":         {flag:"ðŸ‡§ðŸ‡¦", iso:"BIH", ca:"BÃ²snia", es:"Bosnia", en:"Bosnia", fr:"Bosnie", de:"Bosnien", it:"Bosnia", pt:"BÃ³snia"},
  "Finland":        {flag:"ðŸ‡«ðŸ‡®", iso:"FIN", ca:"FinlÃ ndia", es:"Finlandia", en:"Finland", fr:"Finlande", de:"Finnland", it:"Finlandia", pt:"FinlÃ¢ndia"},
  "Iceland":        {flag:"ðŸ‡®ðŸ‡¸", iso:"ISL", ca:"IslÃ ndia", es:"Islandia", en:"Iceland", fr:"Islande", de:"Island", it:"Islanda", pt:"IslÃ¢ndia"},
  "Kosovo":         {flag:"ðŸ‡½ðŸ‡°", iso:"KVX", ca:"Kosovo", es:"Kosovo", en:"Kosovo", fr:"Kosovo", de:"Kosovo", it:"Kosovo", pt:"Kosovo"},
  "Albania":        {flag:"ðŸ‡¦ðŸ‡±", iso:"ALB", ca:"AlbÃ nia", es:"Albania", en:"Albania", fr:"Albanie", de:"Albanien", it:"Albania", pt:"AlbÃ¢nia"},
  "Malta":          {flag:"ðŸ‡²ðŸ‡¹", iso:"MLT", ca:"Malta", es:"Malta", en:"Malta", fr:"Malte", de:"Malta", it:"Malta", pt:"Malta"},
  "Macedonia":      {flag:"ðŸ‡²ðŸ‡°", iso:"MKD", ca:"MacedÃ²nia del Nord", es:"Macedonia del Norte", en:"North Macedonia", fr:"MacÃ©doine du Nord", de:"Nordmazedonien", it:"Macedonia del Nord", pt:"MacedÃ³nia do Norte"},
  "Latvia":         {flag:"ðŸ‡±ðŸ‡»", iso:"LVA", ca:"LetÃ²nia", es:"Letonia", en:"Latvia", fr:"Lettonie", de:"Lettland", it:"Lettonia", pt:"LetÃ³nia"},
  "Luxembourg":     {flag:"ðŸ‡±ðŸ‡º", iso:"LUX", ca:"Luxemburg", es:"Luxemburgo", en:"Luxembourg", fr:"Luxembourg", de:"Luxemburg", it:"Lussemburgo", pt:"Luxemburgo"},
  "Georgia":        {flag:"ðŸ‡¬ðŸ‡ª", iso:"GEO", ca:"GeÃ²rgia", es:"Georgia", en:"Georgia", fr:"GÃ©orgie", de:"Georgien", it:"Georgia", pt:"GeÃ³rgia"},
  "Lithuania":      {flag:"ðŸ‡±ðŸ‡¹", iso:"LTU", ca:"LituÃ nia", es:"Lituania", en:"Lithuania", fr:"Lituanie", de:"Litauen", it:"Lituania", pt:"LituÃ¢nia"},
  "Moldova":        {flag:"ðŸ‡²ðŸ‡©", iso:"MDA", ca:"MoldÃ via", es:"Moldavia", en:"Moldova", fr:"Moldavie", de:"Moldau", it:"Moldavia", pt:"MoldÃ¡via"},
  "Faroe-Islands":  {flag:"ðŸ‡«ðŸ‡´", iso:"FRO", ca:"Illes FÃ¨roe", es:"Islas Feroe", en:"Faroe Islands", fr:"ÃŽles FÃ©roÃ©", de:"FÃ¤rÃ¶er", it:"FÃ¦r Ã˜er", pt:"Ilhas FaroÃ©"},
  "Northern-Ireland":{flag:"ðŸ‡¬ðŸ‡§", iso:"NIR", ca:"Irlanda del Nord", es:"Irlanda del Norte", en:"Northern Ireland", fr:"Irlande du Nord", de:"Nordirland", it:"Irlanda del Nord", pt:"Irlanda do Norte"},
  "Andorra":        {flag:"ðŸ‡¦ðŸ‡©", iso:"AND", ca:"Andorra", es:"Andorra", en:"Andorra", fr:"Andorre", de:"Andorra", it:"Andorra", pt:"Andorra"},
  "Montenegro":     {flag:"ðŸ‡²ðŸ‡ª", iso:"MNE", ca:"Montenegro", es:"Montenegro", en:"Montenegro", fr:"MontÃ©nÃ©gro", de:"Montenegro", it:"Montenegro", pt:"Montenegro"},
  "Estonia":        {flag:"ðŸ‡ªðŸ‡ª", iso:"EST", ca:"EstÃ²nia", es:"Estonia", en:"Estonia", fr:"Estonie", de:"Estland", it:"Estonia", pt:"EstÃ³nia"},
  "Wales":          {flag:"ðŸ´ó §ó ¢ó ·ó ¬ó ³ó ¿", iso:"WAL", ca:"GalÂ·les", es:"Gales", en:"Wales", fr:"Pays de Galles", de:"Wales", it:"Galles", pt:"PaÃ­s de Gales"},
  "Gibraltar":      {flag:"ðŸ‡¬ðŸ‡®", iso:"GIB", ca:"Gibraltar", es:"Gibraltar", en:"Gibraltar", fr:"Gibraltar", de:"Gibraltar", it:"Gibilterra", pt:"Gibraltar"},
  "San-Marino":     {flag:"ðŸ‡¸ðŸ‡²", iso:"SMR", ca:"San Marino", es:"San Marino", en:"San Marino", fr:"Saint-Marin", de:"San Marino", it:"San Marino", pt:"San Marino"},
  "Kazakhstan":     {flag:"ðŸ‡°ðŸ‡¿", iso:"KAZ", ca:"Kazakhstan", es:"KazajistÃ¡n", en:"Kazakhstan", fr:"Kazakhstan", de:"Kasachstan", it:"Kazakistan", pt:"CazaquistÃ£o"},

  // ---- CONMEBOL ----
  "Brazil":         {flag:"ðŸ‡§ðŸ‡·", iso:"BRA", ca:"Brasil", es:"Brasil", en:"Brazil", fr:"BrÃ©sil", de:"Brasilien", it:"Brasile", pt:"Brasil"},
  "Argentina":      {flag:"ðŸ‡¦ðŸ‡·", iso:"ARG", ca:"Argentina", es:"Argentina", en:"Argentina", fr:"Argentine", de:"Argentinien", it:"Argentina", pt:"Argentina"},
  "Uruguay":        {flag:"ðŸ‡ºðŸ‡¾", iso:"URU", ca:"Uruguai", es:"Uruguay", en:"Uruguay", fr:"Uruguay", de:"Uruguay", it:"Uruguay", pt:"Uruguai"},
  "Colombia":       {flag:"ðŸ‡¨ðŸ‡´", iso:"COL", ca:"ColÃ²mbia", es:"Colombia", en:"Colombia", fr:"Colombie", de:"Kolumbien", it:"Colombia", pt:"ColÃ´mbia"},
  "Chile":          {flag:"ðŸ‡¨ðŸ‡±", iso:"CHI", ca:"Xile", es:"Chile", en:"Chile", fr:"Chili", de:"Chile", it:"Cile", pt:"Chile"},
  "Ecuador":        {flag:"ðŸ‡ªðŸ‡¨", iso:"ECU", ca:"Equador", es:"Ecuador", en:"Ecuador", fr:"Ã‰quateur", de:"Ecuador", it:"Ecuador", pt:"Equador"},
  "Paraguay":       {flag:"ðŸ‡µðŸ‡¾", iso:"PAR", ca:"Paraguai", es:"Paraguay", en:"Paraguay", fr:"Paraguay", de:"Paraguay", it:"Paraguay", pt:"Paraguai"},
  "Peru":           {flag:"ðŸ‡µðŸ‡ª", iso:"PER", ca:"PerÃº", es:"PerÃº", en:"Peru", fr:"PÃ©rou", de:"Peru", it:"PerÃ¹", pt:"Peru"},
  "Bolivia":        {flag:"ðŸ‡§ðŸ‡´", iso:"BOL", ca:"BolÃ­via", es:"Bolivia", en:"Bolivia", fr:"Bolivie", de:"Bolivien", it:"Bolivia", pt:"BolÃ­via"},
  "Venezuela":      {flag:"ðŸ‡»ðŸ‡ª", iso:"VEN", ca:"VeneÃ§uela", es:"Venezuela", en:"Venezuela", fr:"Venezuela", de:"Venezuela", it:"Venezuela", pt:"Venezuela"},

  // ---- CONCACAF ----
  "USA":            {flag:"ðŸ‡ºðŸ‡¸", iso:"USA", ca:"Estats Units", es:"Estados Unidos", en:"United States", fr:"Ã‰tats-Unis", de:"USA", it:"Stati Uniti", pt:"Estados Unidos"},
  "Mexico":         {flag:"ðŸ‡²ðŸ‡½", iso:"MEX", ca:"MÃ¨xic", es:"MÃ©xico", en:"Mexico", fr:"Mexique", de:"Mexiko", it:"Messico", pt:"MÃ©xico"},
  "Costa-Rica":     {flag:"ðŸ‡¨ðŸ‡·", iso:"CRC", ca:"Costa Rica", es:"Costa Rica", en:"Costa Rica", fr:"Costa Rica", de:"Costa Rica", it:"Costa Rica", pt:"Costa Rica"},
  "Honduras":       {flag:"ðŸ‡­ðŸ‡³", iso:"HON", ca:"Hondures", es:"Honduras", en:"Honduras", fr:"Honduras", de:"Honduras", it:"Honduras", pt:"Honduras"},
  "Guatemala":      {flag:"ðŸ‡¬ðŸ‡¹", iso:"GUA", ca:"Guatemala", es:"Guatemala", en:"Guatemala", fr:"Guatemala", de:"Guatemala", it:"Guatemala", pt:"Guatemala"},
  "Panama":         {flag:"ðŸ‡µðŸ‡¦", iso:"PAN", ca:"PanamÃ ", es:"PanamÃ¡", en:"Panama", fr:"Panama", de:"Panama", it:"Panama", pt:"PanamÃ¡"},
  "Canada":         {flag:"ðŸ‡¨ðŸ‡¦", iso:"CAN", ca:"CanadÃ ", es:"CanadÃ¡", en:"Canada", fr:"Canada", de:"Kanada", it:"Canada", pt:"CanadÃ¡"},

  // ---- AFC ----
  "Japan":          {flag:"ðŸ‡¯ðŸ‡µ", iso:"JPN", ca:"JapÃ³", es:"JapÃ³n", en:"Japan", fr:"Japon", de:"Japan", it:"Giappone", pt:"JapÃ£o"},
  "Saudi-Arabia":   {flag:"ðŸ‡¸ðŸ‡¦", iso:"KSA", ca:"ArÃ bia Saudita", es:"Arabia SaudÃ­", en:"Saudi Arabia", fr:"Arabie saoudite", de:"Saudi-Arabien", it:"Arabia Saudita", pt:"ArÃ¡bia Saudita"},
  "South-Korea":    {flag:"ðŸ‡°ðŸ‡·", iso:"KOR", ca:"Corea del Sud", es:"Corea del Sur", en:"South Korea", fr:"CorÃ©e du Sud", de:"SÃ¼dkorea", it:"Corea del Sud", pt:"Coreia do Sul"},
  "China":          {flag:"ðŸ‡¨ðŸ‡³", iso:"CHN", ca:"Xina", es:"China", en:"China", fr:"Chine", de:"China", it:"Cina", pt:"China"},
  "Australia":      {flag:"ðŸ‡¦ðŸ‡º", iso:"AUS", ca:"AustrÃ lia", es:"Australia", en:"Australia", fr:"Australie", de:"Australien", it:"Australia", pt:"AustrÃ¡lia"},
  "Qatar":          {flag:"ðŸ‡¶ðŸ‡¦", iso:"QAT", ca:"Qatar", es:"Catar", en:"Qatar", fr:"Qatar", de:"Katar", it:"Qatar", pt:"Catar"},
  "United-Arab-Emirates":{flag:"ðŸ‡¦ðŸ‡ª", iso:"UAE", ca:"Emirats Ã€rabs Units", es:"Emiratos Ãrabes Unidos", en:"United Arab Emirates", fr:"Ã‰mirats arabes unis", de:"Vereinigte Arabische Emirate", it:"Emirati Arabi Uniti", pt:"Emirados Ãrabes Unidos"},
  "Iran":           {flag:"ðŸ‡®ðŸ‡·", iso:"IRN", ca:"Iran", es:"IrÃ¡n", en:"Iran", fr:"Iran", de:"Iran", it:"Iran", pt:"IrÃ£o"},
  "Thailand":       {flag:"ðŸ‡¹ðŸ‡­", iso:"THA", ca:"TailÃ ndia", es:"Tailandia", en:"Thailand", fr:"ThaÃ¯lande", de:"Thailand", it:"Thailandia", pt:"TailÃ¢ndia"},
  "India":          {flag:"ðŸ‡®ðŸ‡³", iso:"IND", ca:"Ãndia", es:"India", en:"India", fr:"Inde", de:"Indien", it:"India", pt:"Ãndia"},

  // ---- CAF ----
  "Egypt":          {flag:"ðŸ‡ªðŸ‡¬", iso:"EGY", ca:"Egipte", es:"Egipto", en:"Egypt", fr:"Ã‰gypte", de:"Ã„gypten", it:"Egitto", pt:"Egito"},
  "Morocco":        {flag:"ðŸ‡²ðŸ‡¦", iso:"MAR", ca:"Marroc", es:"Marruecos", en:"Morocco", fr:"Maroc", de:"Marokko", it:"Marocco", pt:"Marrocos"},
  "South-Africa":   {flag:"ðŸ‡¿ðŸ‡¦", iso:"RSA", ca:"Sud-Ã frica", es:"SudÃ¡frica", en:"South Africa", fr:"Afrique du Sud", de:"SÃ¼dafrika", it:"Sudafrica", pt:"Ãfrica do Sul"},
  "Nigeria":        {flag:"ðŸ‡³ðŸ‡¬", iso:"NGA", ca:"NigÃ¨ria", es:"Nigeria", en:"Nigeria", fr:"NigÃ©ria", de:"Nigeria", it:"Nigeria", pt:"NigÃ©ria"},
  "Tunisia":        {flag:"ðŸ‡¹ðŸ‡³", iso:"TUN", ca:"TunÃ­sia", es:"TÃºnez", en:"Tunisia", fr:"Tunisie", de:"Tunesien", it:"Tunisia", pt:"TunÃ­sia"},
  "Algeria":        {flag:"ðŸ‡©ðŸ‡¿", iso:"ALG", ca:"AlgÃ¨ria", es:"Argelia", en:"Algeria", fr:"AlgÃ©rie", de:"Algerien", it:"Algeria", pt:"ArgÃ©lia"},

  // ---- OFC ----
  "New-Zealand":    {flag:"ðŸ‡³ðŸ‡¿", iso:"NZL", ca:"Nova Zelanda", es:"Nueva Zelanda", en:"New Zealand", fr:"Nouvelle-ZÃ©lande", de:"Neuseeland", it:"Nuova Zelanda", pt:"Nova ZelÃ¢ndia"},

  // --- afegits automaticament per al ranquing de seleccions ---
  // Nom en angles als set idiomes: es pot anar traduint el que calgui.
  "Afghanistan": {flag:"ðŸ‡¦ðŸ‡«", iso:"AF", ca:"Afghanistan", es:"Afghanistan", en:"Afghanistan", fr:"Afghanistan", de:"Afghanistan", it:"Afghanistan", pt:"Afghanistan"},
  "Angola": {flag:"ðŸ‡¦ðŸ‡´", iso:"AO", ca:"Angola", es:"Angola", en:"Angola", fr:"Angola", de:"Angola", it:"Angola", pt:"Angola"},
  "Anguilla": {flag:"ðŸ‡¦ðŸ‡®", iso:"AI", ca:"Anguilla", es:"Anguilla", en:"Anguilla", fr:"Anguilla", de:"Anguilla", it:"Anguilla", pt:"Anguilla"},
  "Antigua-and-Barbuda": {flag:"ðŸ‡¦ðŸ‡¬", iso:"AG", ca:"Antigua and Barbuda", es:"Antigua and Barbuda", en:"Antigua and Barbuda", fr:"Antigua and Barbuda", de:"Antigua and Barbuda", it:"Antigua and Barbuda", pt:"Antigua and Barbuda"},
  "Aruba": {flag:"ðŸ‡¦ðŸ‡¼", iso:"AW", ca:"Aruba", es:"Aruba", en:"Aruba", fr:"Aruba", de:"Aruba", it:"Aruba", pt:"Aruba"},
  "Bahamas": {flag:"ðŸ‡§ðŸ‡¸", iso:"BS", ca:"Bahamas", es:"Bahamas", en:"Bahamas", fr:"Bahamas", de:"Bahamas", it:"Bahamas", pt:"Bahamas"},
  "Bahrain": {flag:"ðŸ‡§ðŸ‡­", iso:"BH", ca:"Bahrain", es:"Bahrain", en:"Bahrain", fr:"Bahrain", de:"Bahrain", it:"Bahrain", pt:"Bahrain"},
  "Bangladesh": {flag:"ðŸ‡§ðŸ‡©", iso:"BD", ca:"Bangladesh", es:"Bangladesh", en:"Bangladesh", fr:"Bangladesh", de:"Bangladesh", it:"Bangladesh", pt:"Bangladesh"},
  "Barbados": {flag:"ðŸ‡§ðŸ‡§", iso:"BB", ca:"Barbados", es:"Barbados", en:"Barbados", fr:"Barbados", de:"Barbados", it:"Barbados", pt:"Barbados"},
  "Belarus": {flag:"ðŸ‡§ðŸ‡¾", iso:"BY", ca:"Belarus", es:"Belarus", en:"Belarus", fr:"Belarus", de:"Belarus", it:"Belarus", pt:"Belarus"},
  "Belize": {flag:"ðŸ‡§ðŸ‡¿", iso:"BZ", ca:"Belize", es:"Belize", en:"Belize", fr:"Belize", de:"Belize", it:"Belize", pt:"Belize"},
  "Benin": {flag:"ðŸ‡§ðŸ‡¯", iso:"BJ", ca:"Benin", es:"Benin", en:"Benin", fr:"Benin", de:"Benin", it:"Benin", pt:"Benin"},
  "Bermuda": {flag:"ðŸ‡§ðŸ‡²", iso:"BM", ca:"Bermuda", es:"Bermuda", en:"Bermuda", fr:"Bermuda", de:"Bermuda", it:"Bermuda", pt:"Bermuda"},
  "Bhutan": {flag:"ðŸ‡§ðŸ‡¹", iso:"BT", ca:"Bhutan", es:"Bhutan", en:"Bhutan", fr:"Bhutan", de:"Bhutan", it:"Bhutan", pt:"Bhutan"},
  "Bonaire": {flag:"ðŸ‡§ðŸ‡¶", iso:"BQ", ca:"Bonaire", es:"Bonaire", en:"Bonaire", fr:"Bonaire", de:"Bonaire", it:"Bonaire", pt:"Bonaire"},
  "Botswana": {flag:"ðŸ‡§ðŸ‡¼", iso:"BW", ca:"Botswana", es:"Botswana", en:"Botswana", fr:"Botswana", de:"Botswana", it:"Botswana", pt:"Botswana"},
  "British-Virgin-Islands": {flag:"ðŸ‡»ðŸ‡¬", iso:"VG", ca:"British Virgin Islands", es:"British Virgin Islands", en:"British Virgin Islands", fr:"British Virgin Islands", de:"British Virgin Islands", it:"British Virgin Islands", pt:"British Virgin Islands"},
  "Brunei": {flag:"ðŸ‡§ðŸ‡³", iso:"BN", ca:"Brunei", es:"Brunei", en:"Brunei", fr:"Brunei", de:"Brunei", it:"Brunei", pt:"Brunei"},
  "Burkina-Faso": {flag:"ðŸ‡§ðŸ‡«", iso:"BF", ca:"Burkina Faso", es:"Burkina Faso", en:"Burkina Faso", fr:"Burkina Faso", de:"Burkina Faso", it:"Burkina Faso", pt:"Burkina Faso"},
  "Burundi": {flag:"ðŸ‡§ðŸ‡®", iso:"BI", ca:"Burundi", es:"Burundi", en:"Burundi", fr:"Burundi", de:"Burundi", it:"Burundi", pt:"Burundi"},
  "Cambodia": {flag:"ðŸ‡°ðŸ‡­", iso:"KH", ca:"Cambodia", es:"Cambodia", en:"Cambodia", fr:"Cambodia", de:"Cambodia", it:"Cambodia", pt:"Cambodia"},
  "Cameroon": {flag:"ðŸ‡¨ðŸ‡²", iso:"CM", ca:"Cameroon", es:"Cameroon", en:"Cameroon", fr:"Cameroon", de:"Cameroon", it:"Cameroon", pt:"Cameroon"},
  "Cape-Verde": {flag:"ðŸ‡¨ðŸ‡»", iso:"CV", ca:"Cape Verde Islands", es:"Cape Verde Islands", en:"Cape Verde Islands", fr:"Cape Verde Islands", de:"Cape Verde Islands", it:"Cape Verde Islands", pt:"Cape Verde Islands"},
  "Cayman-Islands": {flag:"ðŸ‡°ðŸ‡¾", iso:"KY", ca:"Cayman Islands", es:"Cayman Islands", en:"Cayman Islands", fr:"Cayman Islands", de:"Cayman Islands", it:"Cayman Islands", pt:"Cayman Islands"},
  "Central-African-Republic": {flag:"ðŸ‡¨ðŸ‡«", iso:"CF", ca:"Central African Republic", es:"Central African Republic", en:"Central African Republic", fr:"Central African Republic", de:"Central African Republic", it:"Central African Republic", pt:"Central African Republic"},
  "Chad": {flag:"ðŸ‡¹ðŸ‡©", iso:"TD", ca:"Chad", es:"Chad", en:"Chad", fr:"Chad", de:"Chad", it:"Chad", pt:"Chad"},
  "Chinese-Taipei": {flag:"ðŸ‡¹ðŸ‡¼", iso:"TW", ca:"Chinese Taipei", es:"Chinese Taipei", en:"Chinese Taipei", fr:"Chinese Taipei", de:"Chinese Taipei", it:"Chinese Taipei", pt:"Chinese Taipei"},
  "Comoros": {flag:"ðŸ‡°ðŸ‡²", iso:"KM", ca:"Comoros", es:"Comoros", en:"Comoros", fr:"Comoros", de:"Comoros", it:"Comoros", pt:"Comoros"},
  "Congo": {flag:"ðŸ‡¨ðŸ‡©", iso:"CD", ca:"Congo", es:"Congo", en:"Congo", fr:"Congo", de:"Congo", it:"Congo", pt:"Congo"},
  "Congo-DR": {flag:"ðŸ‡¨ðŸ‡¬", iso:"CG", ca:"Congo DR", es:"Congo DR", en:"Congo DR", fr:"Congo DR", de:"Congo DR", it:"Congo DR", pt:"Congo DR"},
  "Cuba": {flag:"ðŸ‡¨ðŸ‡º", iso:"CU", ca:"Cuba", es:"Cuba", en:"Cuba", fr:"Cuba", de:"Cuba", it:"Cuba", pt:"Cuba"},
  "Curacao": {flag:"ðŸ‡¨ðŸ‡¼", iso:"CW", ca:"CuraÃ§ao", es:"CuraÃ§ao", en:"CuraÃ§ao", fr:"CuraÃ§ao", de:"CuraÃ§ao", it:"CuraÃ§ao", pt:"CuraÃ§ao"},
  "Dominica": {flag:"ðŸ‡©ðŸ‡²", iso:"DM", ca:"Dominica", es:"Dominica", en:"Dominica", fr:"Dominica", de:"Dominica", it:"Dominica", pt:"Dominica"},
  "Dominican-Republic": {flag:"ðŸ‡©ðŸ‡´", iso:"DO", ca:"Dominican Republic", es:"Dominican Republic", en:"Dominican Republic", fr:"Dominican Republic", de:"Dominican Republic", it:"Dominican Republic", pt:"Dominican Republic"},
  "El-Salvador": {flag:"ðŸ‡¸ðŸ‡»", iso:"SV", ca:"El Salvador", es:"El Salvador", en:"El Salvador", fr:"El Salvador", de:"El Salvador", it:"El Salvador", pt:"El Salvador"},
  "Equatorial-Guinea": {flag:"ðŸ‡¬ðŸ‡¶", iso:"GQ", ca:"Equatorial Guinea", es:"Equatorial Guinea", en:"Equatorial Guinea", fr:"Equatorial Guinea", de:"Equatorial Guinea", it:"Equatorial Guinea", pt:"Equatorial Guinea"},
  "Eswatini": {flag:"ðŸ‡¸ðŸ‡¿", iso:"SZ", ca:"Eswatini", es:"Eswatini", en:"Eswatini", fr:"Eswatini", de:"Eswatini", it:"Eswatini", pt:"Eswatini"},
  "Ethiopia": {flag:"ðŸ‡ªðŸ‡¹", iso:"ET", ca:"Ethiopia", es:"Ethiopia", en:"Ethiopia", fr:"Ethiopia", de:"Ethiopia", it:"Ethiopia", pt:"Ethiopia"},
  "Fiji": {flag:"ðŸ‡«ðŸ‡¯", iso:"FJ", ca:"Fiji", es:"Fiji", en:"Fiji", fr:"Fiji", de:"Fiji", it:"Fiji", pt:"Fiji"},
  "Gabon": {flag:"ðŸ‡¬ðŸ‡¦", iso:"GA", ca:"Gabon", es:"Gabon", en:"Gabon", fr:"Gabon", de:"Gabon", it:"Gabon", pt:"Gabon"},
  "Gambia": {flag:"ðŸ‡¬ðŸ‡²", iso:"GM", ca:"Gambia", es:"Gambia", en:"Gambia", fr:"Gambia", de:"Gambia", it:"Gambia", pt:"Gambia"},
  "Ghana": {flag:"ðŸ‡¬ðŸ‡­", iso:"GH", ca:"Ghana", es:"Ghana", en:"Ghana", fr:"Ghana", de:"Ghana", it:"Ghana", pt:"Ghana"},
  "Grenada": {flag:"ðŸ‡¬ðŸ‡©", iso:"GD", ca:"Grenada", es:"Grenada", en:"Grenada", fr:"Grenada", de:"Grenada", it:"Grenada", pt:"Grenada"},
  "Guadeloupe": {flag:"ðŸ‡¬ðŸ‡µ", iso:"GP", ca:"Guadeloupe", es:"Guadeloupe", en:"Guadeloupe", fr:"Guadeloupe", de:"Guadeloupe", it:"Guadeloupe", pt:"Guadeloupe"},
  "Guinea": {flag:"ðŸ‡¬ðŸ‡³", iso:"GN", ca:"Guinea", es:"Guinea", en:"Guinea", fr:"Guinea", de:"Guinea", it:"Guinea", pt:"Guinea"},
  "Guinea-Bissau": {flag:"ðŸ‡¬ðŸ‡¼", iso:"GW", ca:"Guinea-Bissau", es:"Guinea-Bissau", en:"Guinea-Bissau", fr:"Guinea-Bissau", de:"Guinea-Bissau", it:"Guinea-Bissau", pt:"Guinea-Bissau"},
  "Guyana": {flag:"ðŸ‡¬ðŸ‡¾", iso:"GY", ca:"Guyana", es:"Guyana", en:"Guyana", fr:"Guyana", de:"Guyana", it:"Guyana", pt:"Guyana"},
  "Haiti": {flag:"ðŸ‡­ðŸ‡¹", iso:"HT", ca:"Haiti", es:"Haiti", en:"Haiti", fr:"Haiti", de:"Haiti", it:"Haiti", pt:"Haiti"},
  "Hong-Kong": {flag:"ðŸ‡­ðŸ‡°", iso:"HK", ca:"Hong Kong", es:"Hong Kong", en:"Hong Kong", fr:"Hong Kong", de:"Hong Kong", it:"Hong Kong", pt:"Hong Kong"},
  "Indonesia": {flag:"ðŸ‡®ðŸ‡©", iso:"ID", ca:"Indonesia", es:"Indonesia", en:"Indonesia", fr:"Indonesia", de:"Indonesia", it:"Indonesia", pt:"Indonesia"},
  "Iraq": {flag:"ðŸ‡®ðŸ‡¶", iso:"IQ", ca:"Iraq", es:"Iraq", en:"Iraq", fr:"Iraq", de:"Iraq", it:"Iraq", pt:"Iraq"},
  "Ivory-Coast": {flag:"ðŸ‡¨ðŸ‡®", iso:"CI", ca:"Ivory Coast", es:"Ivory Coast", en:"Ivory Coast", fr:"Ivory Coast", de:"Ivory Coast", it:"Ivory Coast", pt:"Ivory Coast"},
  "Jamaica": {flag:"ðŸ‡¯ðŸ‡²", iso:"JM", ca:"Jamaica", es:"Jamaica", en:"Jamaica", fr:"Jamaica", de:"Jamaica", it:"Jamaica", pt:"Jamaica"},
  "Jordan": {flag:"ðŸ‡¯ðŸ‡´", iso:"JO", ca:"Jordan", es:"Jordan", en:"Jordan", fr:"Jordan", de:"Jordan", it:"Jordan", pt:"Jordan"},
  "Kenya": {flag:"ðŸ‡°ðŸ‡ª", iso:"KE", ca:"Kenya", es:"Kenya", en:"Kenya", fr:"Kenya", de:"Kenya", it:"Kenya", pt:"Kenya"},
  "Kuwait": {flag:"ðŸ‡°ðŸ‡¼", iso:"KW", ca:"Kuwait", es:"Kuwait", en:"Kuwait", fr:"Kuwait", de:"Kuwait", it:"Kuwait", pt:"Kuwait"},
  "Kyrgyzstan": {flag:"ðŸ‡°ðŸ‡¬", iso:"KG", ca:"Kyrgyzstan", es:"Kyrgyzstan", en:"Kyrgyzstan", fr:"Kyrgyzstan", de:"Kyrgyzstan", it:"Kyrgyzstan", pt:"Kyrgyzstan"},
  "Laos": {flag:"ðŸ‡±ðŸ‡¦", iso:"LA", ca:"Laos", es:"Laos", en:"Laos", fr:"Laos", de:"Laos", it:"Laos", pt:"Laos"},
  "Lebanon": {flag:"ðŸ‡±ðŸ‡§", iso:"LB", ca:"Lebanon", es:"Lebanon", en:"Lebanon", fr:"Lebanon", de:"Lebanon", it:"Lebanon", pt:"Lebanon"},
  "Lesotho": {flag:"ðŸ‡±ðŸ‡¸", iso:"LS", ca:"Lesotho", es:"Lesotho", en:"Lesotho", fr:"Lesotho", de:"Lesotho", it:"Lesotho", pt:"Lesotho"},
  "Liberia": {flag:"ðŸ‡±ðŸ‡·", iso:"LR", ca:"Liberia", es:"Liberia", en:"Liberia", fr:"Liberia", de:"Liberia", it:"Liberia", pt:"Liberia"},
  "Libya": {flag:"ðŸ‡±ðŸ‡¾", iso:"LY", ca:"Libya", es:"Libya", en:"Libya", fr:"Libya", de:"Libya", it:"Libya", pt:"Libya"},
  "Liechtenstein": {flag:"ðŸ‡±ðŸ‡®", iso:"LI", ca:"Liechtenstein", es:"Liechtenstein", en:"Liechtenstein", fr:"Liechtenstein", de:"Liechtenstein", it:"Liechtenstein", pt:"Liechtenstein"},
  "Madagascar": {flag:"ðŸ‡²ðŸ‡¬", iso:"MG", ca:"Madagascar", es:"Madagascar", en:"Madagascar", fr:"Madagascar", de:"Madagascar", it:"Madagascar", pt:"Madagascar"},
  "Malawi": {flag:"ðŸ‡²ðŸ‡¼", iso:"MW", ca:"Malawi", es:"Malawi", en:"Malawi", fr:"Malawi", de:"Malawi", it:"Malawi", pt:"Malawi"},
  "Malaysia": {flag:"ðŸ‡²ðŸ‡¾", iso:"MY", ca:"Malaysia", es:"Malaysia", en:"Malaysia", fr:"Malaysia", de:"Malaysia", it:"Malaysia", pt:"Malaysia"},
  "Maldives": {flag:"ðŸ‡²ðŸ‡»", iso:"MV", ca:"Maldives", es:"Maldives", en:"Maldives", fr:"Maldives", de:"Maldives", it:"Maldives", pt:"Maldives"},
  "Mali": {flag:"ðŸ‡²ðŸ‡±", iso:"ML", ca:"Mali", es:"Mali", en:"Mali", fr:"Mali", de:"Mali", it:"Mali", pt:"Mali"},
  "Martinique": {flag:"ðŸ‡²ðŸ‡¶", iso:"MQ", ca:"Martinique", es:"Martinique", en:"Martinique", fr:"Martinique", de:"Martinique", it:"Martinique", pt:"Martinique"},
  "Mauritania": {flag:"ðŸ‡²ðŸ‡·", iso:"MR", ca:"Mauritania", es:"Mauritania", en:"Mauritania", fr:"Mauritania", de:"Mauritania", it:"Mauritania", pt:"Mauritania"},
  "Mauritius": {flag:"ðŸ‡²ðŸ‡º", iso:"MU", ca:"Mauritius", es:"Mauritius", en:"Mauritius", fr:"Mauritius", de:"Mauritius", it:"Mauritius", pt:"Mauritius"},
  "Montserrat": {flag:"ðŸ‡²ðŸ‡¸", iso:"MS", ca:"Montserrat", es:"Montserrat", en:"Montserrat", fr:"Montserrat", de:"Montserrat", it:"Montserrat", pt:"Montserrat"},
  "Mozambique": {flag:"ðŸ‡²ðŸ‡¿", iso:"MZ", ca:"Mozambique", es:"Mozambique", en:"Mozambique", fr:"Mozambique", de:"Mozambique", it:"Mozambique", pt:"Mozambique"},
  "Myanmar": {flag:"ðŸ‡²ðŸ‡²", iso:"MM", ca:"Myanmar", es:"Myanmar", en:"Myanmar", fr:"Myanmar", de:"Myanmar", it:"Myanmar", pt:"Myanmar"},
  "Namibia": {flag:"ðŸ‡³ðŸ‡¦", iso:"NA", ca:"Namibia", es:"Namibia", en:"Namibia", fr:"Namibia", de:"Namibia", it:"Namibia", pt:"Namibia"},
  "Nepal": {flag:"ðŸ‡³ðŸ‡µ", iso:"NP", ca:"Nepal", es:"Nepal", en:"Nepal", fr:"Nepal", de:"Nepal", it:"Nepal", pt:"Nepal"},
  "Nicaragua": {flag:"ðŸ‡³ðŸ‡®", iso:"NI", ca:"Nicaragua", es:"Nicaragua", en:"Nicaragua", fr:"Nicaragua", de:"Nicaragua", it:"Nicaragua", pt:"Nicaragua"},
  "Niger": {flag:"ðŸ‡³ðŸ‡ª", iso:"NE", ca:"Niger", es:"Niger", en:"Niger", fr:"Niger", de:"Niger", it:"Niger", pt:"Niger"},
  "North-Korea": {flag:"ðŸ‡°ðŸ‡µ", iso:"KP", ca:"North Korea", es:"North Korea", en:"North Korea", fr:"North Korea", de:"North Korea", it:"North Korea", pt:"North Korea"},
  "Oman": {flag:"ðŸ‡´ðŸ‡²", iso:"OM", ca:"Oman", es:"Oman", en:"Oman", fr:"Oman", de:"Oman", it:"Oman", pt:"Oman"},
  "Pakistan": {flag:"ðŸ‡µðŸ‡°", iso:"PK", ca:"Pakistan", es:"Pakistan", en:"Pakistan", fr:"Pakistan", de:"Pakistan", it:"Pakistan", pt:"Pakistan"},
  "Palestine": {flag:"ðŸ‡µðŸ‡¸", iso:"PS", ca:"Palestine", es:"Palestine", en:"Palestine", fr:"Palestine", de:"Palestine", it:"Palestine", pt:"Palestine"},
  "Philippines": {flag:"ðŸ‡µðŸ‡­", iso:"PH", ca:"Philippines", es:"Philippines", en:"Philippines", fr:"Philippines", de:"Philippines", it:"Philippines", pt:"Philippines"},
  "Puerto-Rico": {flag:"ðŸ‡µðŸ‡·", iso:"PR", ca:"Puerto Rico", es:"Puerto Rico", en:"Puerto Rico", fr:"Puerto Rico", de:"Puerto Rico", it:"Puerto Rico", pt:"Puerto Rico"},
  "Rwanda": {flag:"ðŸ‡·ðŸ‡¼", iso:"RW", ca:"Rwanda", es:"Rwanda", en:"Rwanda", fr:"Rwanda", de:"Rwanda", it:"Rwanda", pt:"Rwanda"},
  "Saint-Kitts-and-Nevis": {flag:"ðŸ‡°ðŸ‡³", iso:"KN", ca:"St. Kitts and Nevis", es:"St. Kitts and Nevis", en:"St. Kitts and Nevis", fr:"St. Kitts and Nevis", de:"St. Kitts and Nevis", it:"St. Kitts and Nevis", pt:"St. Kitts and Nevis"},
  "Saint-Lucia": {flag:"ðŸ‡±ðŸ‡¨", iso:"LC", ca:"St. Lucia", es:"St. Lucia", en:"St. Lucia", fr:"St. Lucia", de:"St. Lucia", it:"St. Lucia", pt:"St. Lucia"},
  "Saint-Martin": {flag:"ðŸ‡²ðŸ‡«", iso:"MF", ca:"Saint Martin", es:"Saint Martin", en:"Saint Martin", fr:"Saint Martin", de:"Saint Martin", it:"Saint Martin", pt:"Saint Martin"},
  "Saint-Vincent": {flag:"ðŸ‡»ðŸ‡¨", iso:"VC", ca:"St. Vincent / Grenadines", es:"St. Vincent / Grenadines", en:"St. Vincent / Grenadines", fr:"St. Vincent / Grenadines", de:"St. Vincent / Grenadines", it:"St. Vincent / Grenadines", pt:"St. Vincent / Grenadines"},
  "Senegal": {flag:"ðŸ‡¸ðŸ‡³", iso:"SN", ca:"Senegal", es:"Senegal", en:"Senegal", fr:"Senegal", de:"Senegal", it:"Senegal", pt:"Senegal"},
  "Sierra-Leone": {flag:"ðŸ‡¸ðŸ‡±", iso:"SL", ca:"Sierra Leone", es:"Sierra Leone", en:"Sierra Leone", fr:"Sierra Leone", de:"Sierra Leone", it:"Sierra Leone", pt:"Sierra Leone"},
  "Singapore": {flag:"ðŸ‡¸ðŸ‡¬", iso:"SG", ca:"Singapore", es:"Singapore", en:"Singapore", fr:"Singapore", de:"Singapore", it:"Singapore", pt:"Singapore"},
  "Sint-Maarten": {flag:"ðŸ‡¸ðŸ‡½", iso:"SX", ca:"Sint Maarten", es:"Sint Maarten", en:"Sint Maarten", fr:"Sint Maarten", de:"Sint Maarten", it:"Sint Maarten", pt:"Sint Maarten"},
  "Solomon-Islands": {flag:"ðŸ‡¸ðŸ‡§", iso:"SB", ca:"Solomon Islands", es:"Solomon Islands", en:"Solomon Islands", fr:"Solomon Islands", de:"Solomon Islands", it:"Solomon Islands", pt:"Solomon Islands"},
  "Somalia": {flag:"ðŸ‡¸ðŸ‡´", iso:"SO", ca:"Somalia", es:"Somalia", en:"Somalia", fr:"Somalia", de:"Somalia", it:"Somalia", pt:"Somalia"},
  "South-Sudan": {flag:"ðŸ‡¸ðŸ‡¸", iso:"SS", ca:"South Sudan", es:"South Sudan", en:"South Sudan", fr:"South Sudan", de:"South Sudan", it:"South Sudan", pt:"South Sudan"},
  "Sri-Lanka": {flag:"ðŸ‡±ðŸ‡°", iso:"LK", ca:"Sri Lanka", es:"Sri Lanka", en:"Sri Lanka", fr:"Sri Lanka", de:"Sri Lanka", it:"Sri Lanka", pt:"Sri Lanka"},
  "Sudan": {flag:"ðŸ‡¸ðŸ‡©", iso:"SD", ca:"Sudan", es:"Sudan", en:"Sudan", fr:"Sudan", de:"Sudan", it:"Sudan", pt:"Sudan"},
  "Suriname": {flag:"ðŸ‡¸ðŸ‡·", iso:"SR", ca:"Suriname", es:"Suriname", en:"Suriname", fr:"Suriname", de:"Suriname", it:"Suriname", pt:"Suriname"},
  "Syria": {flag:"ðŸ‡¸ðŸ‡¾", iso:"SY", ca:"Syria", es:"Syria", en:"Syria", fr:"Syria", de:"Syria", it:"Syria", pt:"Syria"},
  "Tajikistan": {flag:"ðŸ‡¹ðŸ‡¯", iso:"TJ", ca:"Tajikistan", es:"Tajikistan", en:"Tajikistan", fr:"Tajikistan", de:"Tajikistan", it:"Tajikistan", pt:"Tajikistan"},
  "Tanzania": {flag:"ðŸ‡¹ðŸ‡¿", iso:"TZ", ca:"Tanzania", es:"Tanzania", en:"Tanzania", fr:"Tanzania", de:"Tanzania", it:"Tanzania", pt:"Tanzania"},
  "Timor-Leste": {flag:"ðŸ‡¹ðŸ‡±", iso:"TL", ca:"Timor-Leste", es:"Timor-Leste", en:"Timor-Leste", fr:"Timor-Leste", de:"Timor-Leste", it:"Timor-Leste", pt:"Timor-Leste"},
  "Togo": {flag:"ðŸ‡¹ðŸ‡¬", iso:"TG", ca:"Togo", es:"Togo", en:"Togo", fr:"Togo", de:"Togo", it:"Togo", pt:"Togo"},
  "Trinidad-and-Tobago": {flag:"ðŸ‡¹ðŸ‡¹", iso:"TT", ca:"Trinidad and Tobago", es:"Trinidad and Tobago", en:"Trinidad and Tobago", fr:"Trinidad and Tobago", de:"Trinidad and Tobago", it:"Trinidad and Tobago", pt:"Trinidad and Tobago"},
  "Turkmenistan": {flag:"ðŸ‡¹ðŸ‡²", iso:"TM", ca:"Turkmenistan", es:"Turkmenistan", en:"Turkmenistan", fr:"Turkmenistan", de:"Turkmenistan", it:"Turkmenistan", pt:"Turkmenistan"},
  "US-Virgin-Islands": {flag:"ðŸ‡»ðŸ‡®", iso:"VI", ca:"US Virgin Islands", es:"US Virgin Islands", en:"US Virgin Islands", fr:"US Virgin Islands", de:"US Virgin Islands", it:"US Virgin Islands", pt:"US Virgin Islands"},
  "Uganda": {flag:"ðŸ‡ºðŸ‡¬", iso:"UG", ca:"Uganda", es:"Uganda", en:"Uganda", fr:"Uganda", de:"Uganda", it:"Uganda", pt:"Uganda"},
  "Uzbekistan": {flag:"ðŸ‡ºðŸ‡¿", iso:"UZ", ca:"Uzbekistan", es:"Uzbekistan", en:"Uzbekistan", fr:"Uzbekistan", de:"Uzbekistan", it:"Uzbekistan", pt:"Uzbekistan"},
  "Vanuatu": {flag:"ðŸ‡»ðŸ‡º", iso:"VU", ca:"Vanuatu", es:"Vanuatu", en:"Vanuatu", fr:"Vanuatu", de:"Vanuatu", it:"Vanuatu", pt:"Vanuatu"},
  "Vietnam": {flag:"ðŸ‡»ðŸ‡³", iso:"VN", ca:"Vietnam", es:"Vietnam", en:"Vietnam", fr:"Vietnam", de:"Vietnam", it:"Vietnam", pt:"Vietnam"},
  "Yemen": {flag:"ðŸ‡¾ðŸ‡ª", iso:"YE", ca:"Yemen", es:"Yemen", en:"Yemen", fr:"Yemen", de:"Yemen", it:"Yemen", pt:"Yemen"},
  "Zambia": {flag:"ðŸ‡¿ðŸ‡²", iso:"ZM", ca:"Zambia", es:"Zambia", en:"Zambia", fr:"Zambia", de:"Zambia", it:"Zambia", pt:"Zambia"},
  "Zimbabwe": {flag:"ðŸ‡¿ðŸ‡¼", iso:"ZW", ca:"Zimbabwe", es:"Zimbabwe", en:"Zimbabwe", fr:"Zimbabwe", de:"Zimbabwe", it:"Zimbabwe", pt:"Zimbabwe"},

};

// Helpers compartits per les tres vistes.
// nomPais(clau, idioma) â†’ nom traduÃ¯t (cau a la clau crua si no hi Ã©s).
// banderaPais(clau) â†’ emoji de bandera (o bandera blanca si no hi Ã©s).
function nomPais(clau, idioma){
  const p = PAISOS[clau];
  return (p && p[idioma]) || (p && p.en) || clau;
}
function banderaPais(clau){
  const p = PAISOS[clau];
  return (p && p.flag) || "ðŸ³ï¸";
}

/* ============================================================
   UI Â· textos d'interfÃ­cie de les subpÃ gines, en 7 idiomes.
   (La portada index.html mantÃ© el seu propi objecte T;
    aquÃ­ cobrim pais.html i ranquing_paisos.html.)
   ============================================================ */
const UI = {
  ca:{
    // comÃº
    mon:"MÃ³n", conf:"ConfederaciÃ³", lliga:"Lliga", pais:"PaÃ­s", club:"Club",
    europa:"Europa", sudamerica:"Sud-amÃ¨rica", nordamerica:"Nord-amÃ¨rica",
    asia:"Ã€sia", africa:"Ã€frica", oceania:"Oceania", totelmon:"Tot el mÃ³n",
    // vista de paÃ¯sos
    p_title:"Quines <em>lligÃ¼es</em> sÃ³n les mÃ©s fortes del mÃ³n",
    p_sub:"La forÃ§a d'un paÃ­s es mesura pels seus millors clubs que competeixen a escala continental. La barra de connexiÃ³ indica quanta activitat internacional tÃ© cada lliga â€” com mÃ©s alta, mÃ©s fiable Ã©s la seva posiciÃ³ global. Clica un paÃ­s per veure'n els clubs.",
    p_eyebrow:"ForÃ§a de les federacions Â· Temporada 2025",
    th_force:"ForÃ§a", th_conn:"ConnexiÃ³ internacional", th_clubs:"Clubs",
    veureclubs:"veure clubs â†’",
    conn_molt:"Molt alta", conn_alta:"Alta", conn_mitjana:"Mitjana", conn_baixa:"Baixa",
    note_read:"<b>Com llegir-ho.</b> La <b>forÃ§a</b> Ã©s la mitjana dels millors clubs del paÃ­s a l'escala mundial. La <b>connexiÃ³ internacional</b> mesura quants partits continentals juguen els seus clubs: les lligues molt connectades (barra verda) tenen una posiciÃ³ global molt fiable; les poc connectades (barra daurada) es comparen amb menys informaciÃ³, i la seva posiciÃ³ tÃ© mÃ©s marge. Ã‰s la mateixa mesura per a tots els continents.",
    // vista de clubs d'un paÃ­s
    c_worldrank:"Al rÃ nquing mundial", c_force:"ForÃ§a del paÃ­s",
    c_clubs:"Clubs al model", c_divs:"Divisions",
    c_division:"DivisiÃ³", c_totes:"Totes", c_search:"Cerca un clubâ€¦",
    th_world:"MÃ³n", th_club:"Club", th_trend:"TendÃ¨ncia", th_rating:"Rating",
    c_clubsof:"Clubs d'", loading:"Carregantâ€¦", nomatch:"Cap club coincideix.",
    footer:"RÃ nquing generat automÃ ticament a partir de resultats esportius Â· Sense afiliaciÃ³ amb la UEFA ni la FIFA",
  },
  es:{
    mon:"Mundo", conf:"ConfederaciÃ³n", lliga:"Liga", pais:"PaÃ­s", club:"Club",
    europa:"Europa", sudamerica:"SudamÃ©rica", nordamerica:"NorteamÃ©rica",
    asia:"Asia", africa:"Ãfrica", oceania:"OceanÃ­a", totelmon:"Todo el mundo",
    p_title:"QuÃ© <em>ligas</em> son las mÃ¡s fuertes del mundo",
    p_sub:"La fuerza de un paÃ­s se mide por sus mejores clubes que compiten a escala continental. La barra de conexiÃ³n indica cuÃ¡nta actividad internacional tiene cada liga â€” cuanto mÃ¡s alta, mÃ¡s fiable es su posiciÃ³n global. Haz clic en un paÃ­s para ver sus clubes.",
    p_eyebrow:"Fuerza de las federaciones Â· Temporada 2025",
    th_force:"Fuerza", th_conn:"ConexiÃ³n internacional", th_clubs:"Clubes",
    veureclubs:"ver clubes â†’",
    conn_molt:"Muy alta", conn_alta:"Alta", conn_mitjana:"Media", conn_baixa:"Baja",
    note_read:"<b>CÃ³mo leerlo.</b> La <b>fuerza</b> es la media de los mejores clubes del paÃ­s en la escala mundial. La <b>conexiÃ³n internacional</b> mide cuÃ¡ntos partidos continentales juegan sus clubes: las ligas muy conectadas (barra verde) tienen una posiciÃ³n global muy fiable; las poco conectadas (barra dorada) se comparan con menos informaciÃ³n, y su posiciÃ³n tiene mÃ¡s margen. Es la misma medida para todos los continentes.",
    c_worldrank:"En el ranking mundial", c_force:"Fuerza del paÃ­s",
    c_clubs:"Clubes en el modelo", c_divs:"Divisiones",
    c_division:"DivisiÃ³n", c_totes:"Todas", c_search:"Busca un clubâ€¦",
    th_world:"Mundo", th_club:"Club", th_trend:"Tendencia", th_rating:"Rating",
    c_clubsof:"Clubes de ", loading:"Cargandoâ€¦", nomatch:"NingÃºn club coincide.",
    footer:"Ranking generado automÃ¡ticamente a partir de resultados deportivos Â· Sin afiliaciÃ³n con la UEFA ni la FIFA",
  },
  en:{
    mon:"World", conf:"Confederation", lliga:"League", pais:"Country", club:"Club",
    europa:"Europe", sudamerica:"South America", nordamerica:"North America",
    asia:"Asia", africa:"Africa", oceania:"Oceania", totelmon:"Whole world",
    p_title:"Which <em>leagues</em> are the strongest in the world",
    p_sub:"A country's strength is measured by its best clubs competing at continental level. The connection bar shows how much international activity each league has â€” the higher it is, the more reliable its global position. Click a country to see its clubs.",
    p_eyebrow:"Federation strength Â· 2025 season",
    th_force:"Strength", th_conn:"International connection", th_clubs:"Clubs",
    veureclubs:"view clubs â†’",
    conn_molt:"Very high", conn_alta:"High", conn_mitjana:"Medium", conn_baixa:"Low",
    note_read:"<b>How to read this.</b> <b>Strength</b> is the average of the country's best clubs on the world scale. <b>International connection</b> measures how many continental matches its clubs play: well-connected leagues (green bar) have a very reliable global position; poorly-connected ones (gold bar) are compared with less information, so their position carries more uncertainty. It's the same measure for every continent.",
    c_worldrank:"In the world ranking", c_force:"Country strength",
    c_clubs:"Clubs in the model", c_divs:"Divisions",
    c_division:"Division", c_totes:"All", c_search:"Search a clubâ€¦",
    th_world:"World", th_club:"Club", th_trend:"Trend", th_rating:"Rating",
    c_clubsof:"Clubs of ", loading:"Loadingâ€¦", nomatch:"No club matches.",
    footer:"Ranking generated automatically from match results Â· Not affiliated with UEFA or FIFA",
  },
  fr:{
    mon:"Monde", conf:"ConfÃ©dÃ©ration", lliga:"Ligue", pais:"Pays", club:"Club",
    europa:"Europe", sudamerica:"AmÃ©rique du Sud", nordamerica:"AmÃ©rique du Nord",
    asia:"Asie", africa:"Afrique", oceania:"OcÃ©anie", totelmon:"Monde entier",
    p_title:"Quels <em>championnats</em> sont les plus forts du monde",
    p_sub:"La force d'un pays se mesure par ses meilleurs clubs qui jouent Ã  l'Ã©chelle continentale. La barre de connexion indique l'activitÃ© internationale de chaque championnat â€” plus elle est haute, plus sa position mondiale est fiable. Cliquez sur un pays pour voir ses clubs.",
    p_eyebrow:"Force des fÃ©dÃ©rations Â· Saison 2025",
    th_force:"Force", th_conn:"Connexion internationale", th_clubs:"Clubs",
    veureclubs:"voir les clubs â†’",
    conn_molt:"TrÃ¨s Ã©levÃ©e", conn_alta:"Ã‰levÃ©e", conn_mitjana:"Moyenne", conn_baixa:"Faible",
    note_read:"<b>Comment lire ceci.</b> La <b>force</b> est la moyenne des meilleurs clubs du pays Ã  l'Ã©chelle mondiale. La <b>connexion internationale</b> mesure combien de matchs continentaux jouent ses clubs : les championnats bien connectÃ©s (barre verte) ont une position mondiale trÃ¨s fiable ; les peu connectÃ©s (barre dorÃ©e) sont comparÃ©s avec moins d'informations, et leur position comporte plus d'incertitude. C'est la mÃªme mesure pour tous les continents.",
    c_worldrank:"Au classement mondial", c_force:"Force du pays",
    c_clubs:"Clubs dans le modÃ¨le", c_divs:"Divisions",
    c_division:"Division", c_totes:"Toutes", c_search:"Chercher un clubâ€¦",
    th_world:"Monde", th_club:"Club", th_trend:"Tendance", th_rating:"Rating",
    c_clubsof:"Clubs de ", loading:"Chargementâ€¦", nomatch:"Aucun club ne correspond.",
    footer:"Classement gÃ©nÃ©rÃ© automatiquement Ã  partir des rÃ©sultats Â· Sans affiliation avec l'UEFA ni la FIFA",
  },
  de:{
    mon:"Welt", conf:"KonfÃ¶deration", lliga:"Liga", pais:"Land", club:"Klub",
    europa:"Europa", sudamerica:"SÃ¼damerika", nordamerica:"Nordamerika",
    asia:"Asien", africa:"Afrika", oceania:"Ozeanien", totelmon:"Ganze Welt",
    p_title:"Welche <em>Ligen</em> sind die stÃ¤rksten der Welt",
    p_sub:"Die StÃ¤rke eines Landes bemisst sich an seinen besten Klubs im kontinentalen Wettbewerb. Der Verbindungsbalken zeigt, wie viel internationale AktivitÃ¤t jede Liga hat â€” je hÃ¶her, desto zuverlÃ¤ssiger ihre globale Position. Klicke auf ein Land, um seine Klubs zu sehen.",
    p_eyebrow:"StÃ¤rke der VerbÃ¤nde Â· Saison 2025",
    th_force:"StÃ¤rke", th_conn:"Internationale Verbindung", th_clubs:"Klubs",
    veureclubs:"Klubs ansehen â†’",
    conn_molt:"Sehr hoch", conn_alta:"Hoch", conn_mitjana:"Mittel", conn_baixa:"Niedrig",
    note_read:"<b>So liest man das.</b> Die <b>StÃ¤rke</b> ist der Durchschnitt der besten Klubs des Landes auf der Weltskala. Die <b>internationale Verbindung</b> misst, wie viele kontinentale Spiele seine Klubs bestreiten: gut vernetzte Ligen (grÃ¼ner Balken) haben eine sehr zuverlÃ¤ssige globale Position; schwach vernetzte (goldener Balken) werden mit weniger Informationen verglichen, ihre Position ist unsicherer. Es ist dasselbe MaÃŸ fÃ¼r alle Kontinente.",
    c_worldrank:"In der Weltrangliste", c_force:"LandesstÃ¤rke",
    c_clubs:"Klubs im Modell", c_divs:"Divisionen",
    c_division:"Division", c_totes:"Alle", c_search:"Klub suchenâ€¦",
    th_world:"Welt", th_club:"Klub", th_trend:"Trend", th_rating:"Rating",
    c_clubsof:"Klubs aus ", loading:"LÃ¤dtâ€¦", nomatch:"Kein Klub gefunden.",
    footer:"Rangliste automatisch aus Spielergebnissen erstellt Â· Keine Verbindung zu UEFA oder FIFA",
  },
  it:{
    mon:"Mondo", conf:"Confederazione", lliga:"Lega", pais:"Paese", club:"Club",
    europa:"Europa", sudamerica:"Sud America", nordamerica:"Nord America",
    asia:"Asia", africa:"Africa", oceania:"Oceania", totelmon:"Tutto il mondo",
    p_title:"Quali <em>campionati</em> sono i piÃ¹ forti del mondo",
    p_sub:"La forza di un paese si misura dai suoi migliori club che competono a livello continentale. La barra di connessione indica quanta attivitÃ  internazionale ha ogni campionato â€” piÃ¹ Ã¨ alta, piÃ¹ affidabile Ã¨ la sua posizione globale. Clicca un paese per vederne i club.",
    p_eyebrow:"Forza delle federazioni Â· Stagione 2025",
    th_force:"Forza", th_conn:"Connessione internazionale", th_clubs:"Club",
    veureclubs:"vedi i club â†’",
    conn_molt:"Molto alta", conn_alta:"Alta", conn_mitjana:"Media", conn_baixa:"Bassa",
    note_read:"<b>Come leggerlo.</b> La <b>forza</b> Ã¨ la media dei migliori club del paese sulla scala mondiale. La <b>connessione internazionale</b> misura quante partite continentali giocano i suoi club: i campionati ben collegati (barra verde) hanno una posizione globale molto affidabile; quelli poco collegati (barra dorata) si confrontano con meno informazioni, e la loro posizione ha piÃ¹ incertezza. Ãˆ la stessa misura per tutti i continenti.",
    c_worldrank:"Nella classifica mondiale", c_force:"Forza del paese",
    c_clubs:"Club nel modello", c_divs:"Divisioni",
    c_division:"Divisione", c_totes:"Tutte", c_search:"Cerca un clubâ€¦",
    th_world:"Mondo", th_club:"Club", th_trend:"Tendenza", th_rating:"Rating",
    c_clubsof:"Club di ", loading:"Caricamentoâ€¦", nomatch:"Nessun club corrisponde.",
    footer:"Classifica generata automaticamente dai risultati Â· Senza affiliazione con UEFA o FIFA",
  },
  pt:{
    mon:"Mundo", conf:"ConfederaÃ§Ã£o", lliga:"Liga", pais:"PaÃ­s", club:"Clube",
    europa:"Europa", sudamerica:"AmÃ©rica do Sul", nordamerica:"AmÃ©rica do Norte",
    asia:"Ãsia", africa:"Ãfrica", oceania:"Oceania", totelmon:"Todo o mundo",
    p_title:"Que <em>ligas</em> sÃ£o as mais fortes do mundo",
    p_sub:"A forÃ§a de um paÃ­s mede-se pelos seus melhores clubes que competem Ã  escala continental. A barra de ligaÃ§Ã£o indica quanta atividade internacional tem cada liga â€” quanto mais alta, mais fiÃ¡vel Ã© a sua posiÃ§Ã£o global. Clica num paÃ­s para ver os seus clubes.",
    p_eyebrow:"ForÃ§a das federaÃ§Ãµes Â· Ã‰poca 2025",
    th_force:"ForÃ§a", th_conn:"LigaÃ§Ã£o internacional", th_clubs:"Clubes",
    veureclubs:"ver clubes â†’",
    conn_molt:"Muito alta", conn_alta:"Alta", conn_mitjana:"MÃ©dia", conn_baixa:"Baixa",
    note_read:"<b>Como ler isto.</b> A <b>forÃ§a</b> Ã© a mÃ©dia dos melhores clubes do paÃ­s na escala mundial. A <b>ligaÃ§Ã£o internacional</b> mede quantos jogos continentais jogam os seus clubes: as ligas bem ligadas (barra verde) tÃªm uma posiÃ§Ã£o global muito fiÃ¡vel; as pouco ligadas (barra dourada) sÃ£o comparadas com menos informaÃ§Ã£o, e a sua posiÃ§Ã£o tem mais incerteza. Ã‰ a mesma medida para todos os continentes.",
    c_worldrank:"No ranking mundial", c_force:"ForÃ§a do paÃ­s",
    c_clubs:"Clubes no modelo", c_divs:"DivisÃµes",
    c_division:"DivisÃ£o", c_totes:"Todas", c_search:"Procurar um clubeâ€¦",
    th_world:"Mundo", th_club:"Clube", th_trend:"TendÃªncia", th_rating:"Rating",
    c_clubsof:"Clubes de ", loading:"A carregarâ€¦", nomatch:"Nenhum clube corresponde.",
    footer:"Ranking gerado automaticamente a partir dos resultados Â· Sem afiliaÃ§Ã£o com a UEFA ou a FIFA",
  },
};

// noms de confederaciÃ³ traduÃ¯ts, per al fil conductor i els xips
function confName(conf, idioma){
  const u=UI[idioma]||UI.ca;
  return {UEFA:u.europa, CONMEBOL:u.sudamerica, CONCACAF:u.nordamerica,
          AFC:u.asia, CAF:u.africa, OFC:u.oceania, all:u.totelmon}[conf] || conf;
}

// codi ISO del paÃ­s (3 lletres), per a l'escut provisional del club.
function isoPais(clau){ const p=PAISOS[clau]; return (p&&p.iso)||clau.slice(0,3).toUpperCase(); }

// ordinal segons idioma i posiciÃ³. CatalÃ : 1r,2n,3r,4t, la resta Ã¨.
// Espanyol: 1Âº. AnglÃ¨s: 1st/2nd/3rd/4th. Altres: nÃºm. + punt o res.
function ordinal(n, idioma){
  n = Number(n);
  if(idioma==='ca'){
    if(n===1) return n+'r';
    if(n===2) return n+'n';
    if(n===3) return n+'r';
    if(n===4) return n+'t';
    return n+'Ã¨';
  }
  if(idioma==='es') return n+'Âº';
  if(idioma==='en'){
    const s=["th","st","nd","rd"], v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]);
  }
  if(idioma==='fr') return n===1 ? n+'er' : n+'e';
  if(idioma==='it') return n+'Âº';
  if(idioma==='pt') return n+'Âº';
  if(idioma==='de') return n+'.';
  return n+'.';
}
