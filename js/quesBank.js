var country_name_code = [
    {name: "الأمارات" , code: "ae"},        {name: "منغوليا" , code: "mn"},
    {name: "الأرجنتين" , code: "ar"},       {name: "جزر المالديف" , code: "mv"},
    {name: "أستراليا" , code: "au"},       {name: "المكسيك" , code: "mx"},
    {name: "أذربيجان" , code: "az"},       {name: "ماليزيا" , code: "my"},
    {name: "بنغلادش" , code: "bd"},         {name: "حلف الناتو" , code: "nato"},
    {name: "بلجيكا" , code: "be"},         {name: "هولندا" , code: "nl"},
    {name: "البحرين" , code: "bh"},        {name: "النرويج" , code: "no"},
    {name: "البرازيل" , code: "br"},       {name: "نيوزيلاند" , code: "nz"},
    {name: "كندا" , code: "ca"},            {name: "باناما" , code: "pa"},
    {name: "الكاميرون" , code: "cm"},      {name: "بولندا" , code: "pl"},
    {name: "الصين" , code: "cn"},           {name: "البرتغال" , code: "pt"},
    {name: "التشيك" , code: "cz"},          {name: "قطر" , code: "qa"},
    {name: "ألمانيا" , code: "de"},         {name: "روسيا" , code: "ru"},
    {name: "الجزائر" , code: "dz"},         {name: "السعودية" , code: "sa"},
    {name: "إسبانيا" , code: "es"},         {name: "السويد" , code: "se"},
    {name: "الإتحاد الأوروبي" , code: "eu"},    {name: "سانغافورة" , code: "sg"},
    {name: "فرنسا" , code: "fr"},           {name: "سلوفاكيا" , code: "sk"},
    {name: "اليونان" , code: "gr"},         {name: "الصومال" , code: "so"},
    {name: "كرواتيا" , code: "hr"},         {name: "تونس" , code: "tn"},
    {name: "جمايكا" , code: "jm"},          {name: "تركيا" , code: "tr"},
    {name: "اليابان" , code: "jp"},         {name: "الأمم المتحدة" , code: "us"},
    {name: "قرغيستان" , code: "kg"},        {name: "الولايات المتحدة الأمريكية" , code: "us"},
    {name: "كوريا الجنوبية" , code: "kr"},  {name: "أوروجواي" , code: "uy"},
    {name: "سيريلانكا" , code: "lk"},        {name: "فينيزويلا" , code: "ve"},
    {name: "ليتوانيا" , code: "lt"},        {name: "فيتنام" , code: "vn"},
    {name: "المغرب" , code: "ma"},          {name: "جنوب أفريقيا" , code: "za"}, 
    {name: "الدينمارك" , code: "dk"}
]
var w = 0;
var flagsBank = new Array();
flagsBank[w++] = {qs:"الولايات المتحدة الأمريكية", ans1:"us",ans2:"my",ans3:"ru",ans4:"hr", cor:1, ua:-1}; 
flagsBank[w++] = {qs:"أوروجواي", ans1:"no",ans2:"uy",ans3:"se",ans4:"ar", cor:2, ua:-1}; 
flagsBank[w++] = {qs:"فينيزويلا", ans1:"jm",ans2:"pt",ans3:"ve",ans4:"cn", cor:3, ua:-1}; 
flagsBank[w++] = {qs:"فيتنام", ans1:"nz",ans2:"es",ans3:"tr",ans4:"vn", cor:4, ua:-1};
flagsBank[w++] = {qs:"جنوب أفريقيا", ans1:"de",ans2:"es",ans3:"jp",ans4:"za", cor:4, ua:-1};


flagsBank[w++] = {qs:"الصومال", ans1:"so",ans2:"sa",ans3:"qa",ans4:"vn", cor:1, ua:-1}; 
flagsBank[w++] = {qs:"تونس", ans1:"no",ans2:"tn",ans3:"se",ans4:"es", cor:2, ua:-1}; 
flagsBank[w++] = {qs:"تركيا", ans1:"jm",ans2:"pt",ans3:"tr",ans4:"cn", cor:3, ua:-1}; 
flagsBank[w++] = {qs:"الأمم المتحدة", ans1:"hr",ans2:"es",ans3:"us",ans4:"un", cor:4, ua:-1};

flagsBank[w++] = {qs:"السعودية", ans1:"dz",ans2:"sa",ans3:"so",ans4:"vn", cor:2, ua:-1}; 
flagsBank[w++] = {qs:"السويد", ans1:"no",ans2:"ar",ans3:"se",ans4:"es", cor:3, ua:-1}; 
flagsBank[w++] = {qs:"سانغافورة", ans1:"sg",ans2:"ar",ans3:"my",ans4:"gr", cor:1, ua:-1}; 
flagsBank[w++] = {qs:"سلوفاكيا", ans1:"hr",ans2:"es",ans3:"us",ans4:"sk", cor:4, ua:-1}; 

flagsBank[w++] = {qs:"بولندا", ans1:"ru",ans2:"pl",ans3:"fr",ans4:"sk", cor:2, ua:-1}; 
flagsBank[w++] = {qs:"البرتغال", ans1:"fr",ans2:"ar",ans3:"pt",ans4:"es", cor:3, ua:-1}; 
flagsBank[w++] = {qs:"قطر", ans1:"qa",ans2:"ar",ans3:"sk",ans4:"gr", cor:1, ua:-1}; 
flagsBank[w++] = {qs:"روسيا", ans1:"hr",ans2:"sk",ans3:"us",ans4:"ru", cor:4, ua:-1}; 

flagsBank[w++] = {qs:"هولندا", ans1:"ru",ans2:"nl",ans3:"fr",ans4:"sk", cor:2, ua:-1}; 
flagsBank[w++] = {qs:"النرويج", ans1:"fr",ans2:"se",ans3:"no",ans4:"sg", cor:3, ua:-1}; 
flagsBank[w++] = {qs:"نيوزيلاند", ans1:"nz",ans2:"ar",ans3:"sk",ans4:"gr", cor:1, ua:-1}; 
flagsBank[w++] = {qs:"باناما", ans1:"hr",ans2:"mx",ans3:"us",ans4:"pa", cor:4, ua:-1}; 

flagsBank[w++] = {qs:"جزر المالديف", ans1:"bd",ans2:"mv",ans3:"nl",ans4:"sk", cor:2, ua:-1}; 
flagsBank[w++] = {qs:"المكسيك", ans1:"de",ans2:"se",ans3:"mx",ans4:"sg", cor:3, ua:-1}; 
flagsBank[w++] = {qs:"ماليزيا", ans1:"my",ans2:"tr",ans3:"sg",ans4:"cn", cor:1, ua:-1}; 
flagsBank[w++] = {qs:"حلف الناتو", ans1:"eu",ans2:"mx",ans3:"us",ans4:"nato", cor:4, ua:-1}; 

flagsBank[w++] = {qs:"ليتوانيا", ans1:"my",ans2:"lt",ans3:"nl",ans4:"br", cor:2, ua:-1}; 
flagsBank[w++] = {qs:"المغرب", ans1:"hr",ans2:"sg",ans3:"ma",ans4:"ru", cor:3, ua:-1}; 
flagsBank[w++] = {qs:"الدينمارك", ans1:"dk",ans2:"de",ans3:"sg",ans4:"fr", cor:1, ua:-1}; 
flagsBank[w++] = {qs:"منغوليا", ans1:"ma",ans2:"mx",ans3:"mv",ans4:"mn", cor:4, ua:-1}; 

flagsBank[w++] = {qs:"الأمارات", ans1:"ar",ans2:"ae",ans3:"br",ans4:"cm", cor:2, ua:-1}; 
flagsBank[w++] = {qs:"الأرجنتين", ans1:"tr",ans2:"gr",ans3:"ar",ans4:"dk", cor:3, ua:-1}; 
flagsBank[w++] = {qs:"أستراليا", ans1:"au",ans2:"mn",ans3:"my",ans4:"nl", cor:1, ua:-1}; 
flagsBank[w++] = {qs:"أذربيجان", ans1:"no",ans2:"sg",ans3:"ru",ans4:"az", cor:4, ua:-1};

flagsBank[w++] = {qs:"بنغلادش", ans1:"no",ans2:"bd",ans3:"ru",ans4:"se", cor:2, ua:-1}; 
flagsBank[w++] = {qs:"بلجيكا", ans1:"no",ans2:"sg",ans3:"be",ans4:"az", cor:3, ua:-1}; 
flagsBank[w++] = {qs:"البحرين", ans1:"bh",ans2:"sg",ans3:"ru",ans4:"az", cor:1, ua:-1}; 
flagsBank[w++] = {qs:"البرازيل", ans1:"no",ans2:"sg",ans3:"ru",ans4:"br", cor:4, ua:-1}; 

flagsBank[w++] = {qs:"كندا", ans1:"no",ans2:"ca",ans3:"ru",ans4:"az", cor:2, ua:-1}; 
flagsBank[w++] = {qs:"الكاميرون", ans1:"no",ans2:"sg",ans3:"cm",ans4:"az", cor:3, ua:-1}; 
flagsBank[w++] = {qs:"الصين", ans1:"cn",ans2:"sg",ans3:"ru",ans4:"az", cor:1, ua:-1}; 
flagsBank[w++] = {qs:"التشيك", ans1:"no",ans2:"sg",ans3:"ru",ans4:"cz", cor:4, ua:-1}; 

flagsBank[w++] = {qs:"ألمانيا", ans1:"eu",ans2:"de",ans3:"br",ans4:"tr", cor:2, ua:-1}; 
flagsBank[w++] = {qs:"الجزائر", ans1:"no",ans2:"sg",ans3:"dz",ans4:"az", cor:3, ua:-1}; 
flagsBank[w++] = {qs:"إسبانيا", ans1:"es",ans2:"za",ans3:"dk",ans4:"ca", cor:1, ua:-1}; 
flagsBank[w++] = {qs:"الإتحاد الأوروبي", ans1:"nato",ans2:"ve",ans3:"pl",ans4:"eu", cor:4, ua:-1}; 

flagsBank[w++] = {qs:"فرنسا", ans1:"sa",ans2:"fr",ans3:"nl",ans4:"mx", cor:2, ua:-1}; 
flagsBank[w++] = {qs:"اليونان", ans1:"de",ans2:"sg",ans3:"gr",ans4:"ru", cor:3, ua:-1}; 
flagsBank[w++] = {qs:"كرواتيا", ans1:"hr",ans2:"jp",ans3:"lk",ans4:"vn", cor:1, ua:-1}; 
flagsBank[w++] = {qs:"جمايكا", ans1:"es",ans2:"sg",ans3:"so",ans4:"jm", cor:4, ua:-1}; 

flagsBank[w++] = {qs:"اليابان", ans1:"us",ans2:"jp",ans3:"nl",ans4:"ar", cor:2, ua:-1}; 
flagsBank[w++] = {qs:"قرغيستان", ans1:"de",ans2:"sg",ans3:"kg",ans4:"ru", cor:3, ua:-1}; 
flagsBank[w++] = {qs:"كوريا الجنوبية", ans1:"kr",ans2:"jp",ans3:"sg",ans4:"vn", cor:1, ua:-1}; 
flagsBank[w++] = {qs:"سيريلانكا", ans1:"ma",ans2:"bd",ans3:"so",ans4:"lk", cor:4, ua:-1}; 