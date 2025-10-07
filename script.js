// Language translations object
const translations = {
    ro: {
        validity: "VALABILITATE: 30 ZILE",
        offer: "OFERTA:",
        offerTitle: "Ofertă-",
        description: "Modular este modern, inovator și sustenabil. Alege spațiul ideal pentru tine, construit la cele mai înalte standarde de construcție din lume.",
        passiveQuote: "Modulele sunt fixate cu șuruburi de oțel, apoi acoperite cu o membrană impermeabilă și placate cu lemn durabil. Sistemul este prefabricat în fabrica BioBuilds, oferind livrare rapidă și timpi scurți de asamblare. Sistemul de construcție este certificat Passivhaus, având valori U excepționale și eliminând punțile termice.",
        passiveQuoteAuthor: "– Passivhaus Institute",
        passiveU: "Passivhaus U Value:",
        energyConsumption: "Energy Consumption:",
        energyValue: ">90% reduced",
        airTightness: "Air Tightness:",
        co2Sequestration: "CO2 Sequestration:",
        co2Savings: "Tone de CO₂ salvate",
        co2Duration: "pe durata de viață a clădirii",
        organicWood: "Structură și sistem pe bază de <strong>lemn organic</strong>, cu certificare EPD",
        energyReduction: "Consum de energie cu <strong>95% mai mic</strong>, datorită sistemului Modular",
        modular: "MODULAR",
        structure: "STRUCTURĂ",
        structureTitle: "Structura MODULAR",
        structureDesc: "Combină rezistența mecanică remarcabilă cu proprietăți de ultra-izolare ce elimină complet punțile termice. Certificată de Institutul de Case Pasive din Darmstadt, Germania și de EPD International. U ≈ 0,11 W/m²K, U-wert.",
        c24Frame: "Cadru din lemn C24",
        c24Desc: "Lemn C24 cu certificare FSC/PEFC; rezistență foarte mare la sarcina structurală.",
        insulation: "Izolație din fibră de lemn ultra-eficientă",
        insulationDesc: "Izolație pentru pereți, acoperiș și podea; fibră de lemn ultra-eficientă STEICO λ ≈ 0,036 W/m·K; certificată CE.",
        osb3: "OSB 3 ECO, Germania",
        osb3Desc: "Panou structural fără formaldehidă și VOC, aprobat de Institutul de Case Pasive din Darmstadt, Germania; certificat CE.",
        dwd: "Placă DWD, Austria",
        dwdDesc: "Permeabilă la vapori (permite pereților să „respire" menținându-i etanși la aer din exterior; unidirecțional); certificată CE.",
        smartMembrane: "Membrană Smart (folie)",
        smartMembraneDesc: "Creează un interior etanș la aer, permițând difuzia vaporilor spre exterior. Certificată de Institutul de Case Pasive din Darmstadt, Germania; certificată CE.",
        exteriorFinishes: "FINISAJE EXTERIOARE COMPLETE",
        yakisugiFacade: "Fațadă ventilată Yakisugi",
        yakisugiDesc: "Mentenanță estimată o dată la 10 ani; Cea mai bună rezistență la foc din clasa de lemn natural; impermeabilă.",
        lunawoodFacade: "Fațadă Lunawood",
        lunawoodDesc: "O fațadă din pin nordic, tratată la presiuni imense cu aburi (termotratat, fără chimicale), pentru a obține Thermowood: o fațadă durabilă, excepțional de stabilă, rezistentă la intemperii și ușor de întreținut, cu o nuanță caldă de caramel.",
        ventilatedRoof: "Acoperiș ventilat",
        ventilatedRoofDesc: "Spațiul ventilat crește performanța termică și durata de viață a acoperișului.",
        epdmMembrane: "Membrană EPDM",
        epdmDesc: "Impermeabilă; garanție de 30 de ani de la producător.",
        rainwater: "Sistem de colectare a apei pluviale",
        rainwaterDesc: "Jgheab ascuns integrat în fațadă; pregătit pentru colectare.",
        windowsDoors: "FERESTRE ȘI UȘI EXTERIOARE",
        genesis90: "Cadru din aluminiu Genesis 90",
        genesis90Desc: "Profil rigid, ultra-eficient; Uwi ≤ 0,85 W/m²K; certificat de Institutul de Case Pasive din Darmstadt, Germania; certificat CE.",
        tripleGlazing: "Geam tripan laminat",
        tripleGlazingDesc: "U = 0,50 W/m²K; sticlă securizată laminată; certificat de Institutul de Case Pasive din Darmstadt, Germania; certificat CE.",
        kitchen: "BUCĂTĂRIE",
        kitchenInstallations: "Instalații pentru bucătărie",
        kitchenDesc: "Complet pregătite pe poziție pentru mobilierul tău.",
        installations: "INSTALAȚII",
        electrical: "Instalații electrice",
        electricalDesc: "Cabluri și copex complet instalate, conforme cu toate reglementările locale aplicabile (ex. CE / Standardul I7/2011 / IEC 60364).",
        plumbing: "Instalații sanitare",
        plumbingDesc: "Țevi și fitinguri conforme cu toate reglementările locale necesare. PPR / PEX.",
        certifications: "CERTIFICĂRI & GARANȚII",
        passivhausCert: "Certificare Passivhaus",
        passivhausCertDesc: "Emitent: Institutul de Case Pasive din Darmstadt, Germania.",
        epdCert: "Certificare EPD",
        epdCertDesc: "Emitent: EPD, Europa.",
        ceMarking: "Marcaj CE",
        ceMarkingDesc: "Toate componentele relevante respectă Regulamentul UE privind produsele pentru construcții.",
        warranty: "Garanție standard UE",
        warrantyDesc: "24 de luni pentru uz privat; 12 luni pentru uz comercial.",
        turnkey: "LA CHEIE",
        interiorFinishes: "FINISAJE INTERIOARE COMPLETE",
        ceiling: "Tavan cu lamele din lemn + fetru",
        ceilingDesc: "Lemn natural și fetru reciclat; absorbție acustică excelentă.",
        wallpaper: "Tapet din fibră de sticlă",
        wallpaperDesc: "Rezistență foarte mare la tracțiune și uzură; lavabil; aspect modern.",
        parquet: "Parchet triplustratificat din lemn natural",
        parquetDesc: "Grosime 9–14 mm; lemn certificat FSC/PEFC; finisaj foarte durabil.",
        interiorDoors: "UȘI INTERIOARE",
        s10Doors: "Uși interioare S10",
        s10DoorsDesc: "Certificate CE; Interior solid.",
        bathroomFinishes: "FINISAJE COMPLETE BAIE",
        stonePanels: "Plăci din compozit de piatră",
        stonePanelsDesc: "Plăci întregi premium de 2.5 × 1.2 m; 100% impermeabile; rezistență foarte mare în timp.",
        italianSink: "Lavoar cu design italian",
        italianSinkDesc: "Material compozit premium; ultra-subțire, modern și durabil.",
        groheToilet: "WC suspendat Grohe",
        groheToiletDesc: "Produs în Germania; design minimalist, modern.",
        aristonBoiler: "Boiler Ariston Velis",
        aristonBoilerDesc: "Design ultra-subțire; eficiență energetică ridicată.",
        walkInShower: "Duș walk-in",
        walkInShowerDesc: "Proiectat în Franța; design minimalist, modern.",
        smartSystems: "SISTEME SMART",
        lightingTrack: "Șină de iluminat",
        lightingTrackDesc: "Configurare flexibilă pentru LED și spoturi; estetică modernă.",
        smartLighting: "Iluminat Smart",
        smartLightingDesc: "Philips HUE sau IKEA TRÅDFRI; configurare Smart ușoară.",
        smartBlinds: "Jaluzele exterioare Smart",
        smartBlindsDesc: "Blochează > 95% din radiația solară; control prin aplicație/manual; certificate de Institutul de Case Pasive din Darmstadt, Germania; certificate CE.",
        genvexSystem: "Genvex Premium Preheat 250",
        genvexDesc: "Recuperare de căldură de până la 95%; pompă de căldură integrată pentru încălzire și răcire.",
        genvexBasic: "Sistem de ventilație cu recuperare de căldură",
        genvexBasicDesc: "Asigură un climat interior sănătos și confortabil cu un aport constant de aer proaspăt, cu recuperare eficientă a căldurii.",
        dimensions: "Dimensiuni",
        totalArea: "Suprafață Totală",
        interiorDimensions: "Dimensiuni Interioare",
        exteriorDimensions: "Dimensiuni Exterioare",
        rooms: "Camere",
        upgradesDelivery: "Upgrades & Livrare",
        delivery: "Livrare",
        deliveryDesc: "<strong>Costul transportului depinde de locație.</strong>",
        foundation: "Fundație pe șuruburi (opțional)",
        deliveryTime: "Livrarea și instalarea durează între 1 și 5 zile. În cazuri speciale, când proiectul necesită echipamente suplimentare, orice cost suplimentar va fi comunicat transparent.",
        addons: "Aditionale",
        facade: "Fațadă",
        parquetUpgrade: "Parchet",
        smartBlindsUpgrade: "Jaluzele exterioare Smart",
        smartBlindsUpgradeDesc: "Blochează peste 95% din radiația solară, controlate prin aplicație sau manual.",
        ventilationUpgrade: "Sistem de ventilație",
        ventilationUpgradeDesc: "Sistem Genvex Premium cu recuperare de căldură de până la 95% și pompă de căldură integrată.",
        ventilationUpgradeBasic: "Sistem de ventilație cu recuperare de căldură, pentru un climat interior optim.",
        mentions: "Mențiuni:",
        total: "TOTAL",
        vat: "+TVA",
        companyInfo: "BIOBUILDS HOME S.R.L., VAT:43154291, EUID: ROONRC.J20/2000/2193246",
        terms: "Această ofertă este supusă termenilor și condițiilor aplicabile, care pot fi consultate la biobuilds.com/TC. Continuând, confirmați că le înțelegeți și le acceptați.",
        website: "biobuilds.com",
        semifinished: "Semifinisat",
        turnkeyFinish: "La Cheie",
        included: "(Inclus)",
        standard: "(Standard)",
        cashmere: "Cashmere",
        hazelnut: "Hazelnut",
        osb: "OSB",
        yakisugi: "Yakisugi",
        lunawood: "Lunawood",
        planA: "Plan A",
        planB: "Plan B",
        planC: "Plan C",
        customPlan: "Plan personalizat"
    },
    en: {
        validity: "VALIDITY: 30 DAYS",
        offer: "OFFER:",
        offerTitle: "Offer-",
        description: "Modular is modern, innovative, and sustainable. Choose the ideal space for you, built to the highest construction standards in the world.",
        passiveQuote: "The modules are fixed with steel screws, then covered with a waterproof membrane and clad in durable wood. The system is prefabricated in the BioBuilds factory, offering fast delivery and short assembly times. The construction system is Passivhaus certified, having exceptional U-values and eliminating thermal bridges.",
        passiveQuoteAuthor: "– Passivhaus Institute",
        passiveU: "Passivhaus U Value:",
        energyConsumption: "Energy Consumption:",
        energyValue: ">90% reduced",
        airTightness: "Air Tightness:",
        co2Sequestration: "CO2 Sequestration:",
        co2Savings: "Tons of CO₂ saved",
        co2Duration: "over the building's lifespan",
        organicWood: "Structure and system based on <strong>organic wood</strong>, with EPD certification",
        energyReduction: "<strong>95% lower</strong> energy consumption, thanks to the Modular system",
        modular: "MODULAR",
        structure: "STRUCTURE",
        structureTitle: "MODULAR Structure",
        structureDesc: "Combines remarkable mechanical strength with ultra-insulating properties that completely eliminate thermal bridges. Certified by the Passive House Institute in Darmstadt, Germany, and by EPD International. U ≈ 0.11 W/m²K, U-wert.",
        c24Frame: "C24 Timber Frame",
        c24Desc: "C24 wood with FSC/PEFC certification; very high resistance to structural load.",
        insulation: "Ultra-efficient Wood Fiber Insulation",
        insulationDesc: "Insulation for walls, roof, and floor; ultra-efficient STEICO wood fiber λ ≈ 0.036 W/m·K; CE certified.",
        osb3: "OSB 3 ECO, Germany",
        osb3Desc: "Formaldehyde and VOC-free structural panel, approved by the Passive House Institute in Darmstadt, Germany; CE certified.",
        dwd: "DWD Board, Austria",
        dwdDesc: "Vapor permeable (allows walls to 'breathe' while keeping them airtight from the outside; unidirectional); CE certified.",
        smartMembrane: "Smart Membrane (foil)",
        smartMembraneDesc: "Creates an airtight interior, allowing vapor diffusion to the outside. Certified by the Passive House Institute in Darmstadt, Germany; CE certified.",
        exteriorFinishes: "COMPLETE EXTERIOR FINISHES",
        yakisugiFacade: "Yakisugi Ventilated Facade",
        yakisugiDesc: "Maintenance estimated once every 10 years; Best fire resistance in its class of natural wood; waterproof.",
        lunawoodFacade: "Lunawood Facade",
        lunawoodDesc: "A Nordic pine facade, treated at immense pressure with steam (thermally modified, no chemicals), to obtain Thermowood: a durable, exceptionally stable, weather-resistant and easy-to-maintain facade, with a warm caramel hue.",
        ventilatedRoof: "Ventilated Roof",
        ventilatedRoofDesc: "The ventilated space increases thermal performance and the lifespan of the roof.",
        epdmMembrane: "EPDM Membrane",
        epdmDesc: "Waterproof; 30-year manufacturer warranty.",
        rainwater: "Rainwater Collection System",
        rainwaterDesc: "Hidden gutter integrated into the facade; ready for collection.",
        windowsDoors: "WINDOWS AND EXTERIOR DOORS",
        genesis90: "Genesis 90 Aluminum Frame",
        genesis90Desc: "Rigid, ultra-efficient profile; Uwi ≤ 0.85 W/m²K; certified by the Passive House Institute in Darmstadt, Germany; CE certified.",
        tripleGlazing: "Laminated Triple Glazing",
        tripleGlazingDesc: "U = 0.50 W/m²K; laminated safety glass; certified by the Passive House Institute in Darmstadt, Germany; CE certified.",
        kitchen: "KITCHEN",
        kitchenInstallations: "Kitchen Installations",
        kitchenDesc: "Fully prepared in position for your furniture.",
        installations: "INSTALLATIONS",
        electrical: "Electrical Installations",
        electricalDesc: "Cables and conduits fully installed, compliant with all applicable local regulations (e.g., CE / I7/2011 Standard / IEC 60364).",
        plumbing: "Plumbing Installations",
        plumbingDesc: "Pipes and fittings compliant with all necessary local regulations. PPR / PEX.",
        certifications: "CERTIFICATIONS & WARRANTIES",
        passivhausCert: "Passivhaus Certification",
        passivhausCertDesc: "Issuer: Passive House Institute, Darmstadt, Germany.",
        epdCert: "EPD Certification",
        epdCertDesc: "Issuer: EPD, Europe.",
        ceMarking: "CE Marking",
        ceMarkingDesc: "All relevant components comply with the EU Construction Products Regulation.",
        warranty: "Standard EU Warranty",
        warrantyDesc: "24 months for private use; 12 months for commercial use.",
        turnkey: "TURNKEY",
        interiorFinishes: "COMPLETE INTERIOR FINISHES",
        ceiling: "Wood slat + felt ceiling",
        ceilingDesc: "Natural wood and recycled felt; excellent acoustic absorption.",
        wallpaper: "Fiberglass wallpaper",
        wallpaperDesc: "Very high tensile strength and wear resistance; washable; modern look.",
        parquet: "Triple-layered natural wood parquet",
        parquetDesc: "9–14 mm thickness; FSC/PEFC certified wood; very durable finish.",
        interiorDoors: "INTERIOR DOORS",
        s10Doors: "S10 interior doors",
        s10DoorsDesc: "CE certified; Solid core.",
        bathroomFinishes: "COMPLETE BATHROOM FINISHES",
        stonePanels: "Stone composite panels",
        stonePanelsDesc: "Premium full-size panels of 2.5 × 1.2 m; 100% waterproof; very high durability over time.",
        italianSink: "Italian design sink",
        italianSinkDesc: "Premium composite material; ultra-thin, modern, and durable.",
        groheToilet: "Grohe suspended toilet",
        groheToiletDesc: "Made in Germany; minimalist, modern design.",
        aristonBoiler: "Ariston Velis boiler",
        aristonBoilerDesc: "Ultra-slim design; high energy efficiency.",
        walkInShower: "Walk-in shower",
        walkInShowerDesc: "Designed in France; minimalist, modern design.",
        smartSystems: "SMART SYSTEMS",
        lightingTrack: "Lighting track",
        lightingTrackDesc: "Flexible configuration for LEDs and spotlights; modern aesthetic.",
        smartLighting: "Smart Lighting",
        smartLightingDesc: "Philips HUE or IKEA TRÅDFRI; easy Smart configuration.",
        smartBlinds: "Smart exterior blinds",
        smartBlindsDesc: "Block > 95% of solar radiation; app/manual control; certified by the Passive House Institute in Darmstadt, Germany; CE certified.",
        genvexSystem: "Genvex Premium Preheat 250",
        genvexDesc: "Heat recovery up to 95%; integrated heat pump for heating and cooling.",
        genvexBasic: "Ventilation system with heat recovery",
        genvexBasicDesc: "Ensures a healthy and comfortable indoor climate with a constant supply of fresh air, with efficient heat recovery.",
        dimensions: "Dimensions",
        totalArea: "Total Area",
        interiorDimensions: "Internal Dimensions",
        exteriorDimensions: "External Dimensions",
        rooms: "Rooms",
        upgradesDelivery: "Upgrades & Delivery",
        delivery: "Delivery",
        deliveryDesc: "<strong>Shipping cost depends on location.</strong>",
        foundation: "Screw pile foundation (optional)",
        deliveryTime: "Delivery and installation take between 1 and 5 days. In special cases where the project requires additional equipment, any extra costs will be transparently communicated.",
        addons: "Add-ons",
        facade: "Facade",
        parquetUpgrade: "Parquet",
        smartBlindsUpgrade: "Smart exterior blinds",
        smartBlindsUpgradeDesc: "Block over 95% of solar radiation, controlled by app or manually.",
        ventilationUpgrade: "Ventilation system",
        ventilationUpgradeDesc: "Genvex Premium system with up to 95% heat recovery and integrated heat pump.",
        ventilationUpgradeBasic: "Ventilation system with heat recovery, for optimal indoor climate.",
        mentions: "Notes:",
        total: "TOTAL",
        vat: "+VAT",
        companyInfo: "BIOBUILDS HOME S.R.L., VAT:43154291, EUID: ROONRC.J20/2000/2193246",
        terms: "This offer is subject to the applicable terms and conditions, which can be viewed at biobuilds.com/TC. By proceeding, you confirm that you understand and accept them.",
        website: "biobuilds.com",
        semifinished: "Semi-finished",
        turnkeyFinish: "Turnkey",
        included: "(Included)",
        standard: "(Standard)",
        cashmere: "Cashmere",
        hazelnut: "Hazelnut",
        osb: "OSB",
        yakisugi: "Yakisugi",
        lunawood: "Lunawood",
        planA: "Plan A",
        planB: "Plan B",
        planC: "Plan C",
        customPlan: "Custom Plan"
    },
    de: {
        validity: "GÜLTIGKEIT: 30 TAGE",
        offer: "ANGEBOT:",
        offerTitle: "Angebot –",
        description: "Modular ist modern, innovativ und nachhaltig. Wählen Sie den idealen Raum für sich, gebaut nach den höchsten Baustandards der Welt.",
        passiveQuote: "Die Module werden mit Stahlschrauben fixiert, anschließend mit einer wasserdichten Membran abgedeckt und mit langlebigem Holz verkleidet. Das System wird im BioBuilds-Werk vorgefertigt und ermöglicht schnelle Lieferung und kurze Montagezeiten. Das Bausystem ist vom Passivhaus Institut zertifiziert, weist außergewöhnliche U-Werte auf und eliminiert Wärmebrücken.",
        passiveQuoteAuthor: "– Passivhaus Institut",
        passiveU: "Passivhaus U-Wert:",
        energyConsumption: "Energieverbrauch:",
        energyValue: ">90 % reduziert",
        airTightness: "Luftdichtheit:",
        co2Sequestration: "CO₂-Speicherung:",
        co2Savings: "Tonnen CO₂ eingespart",
        co2Duration: "über die Lebensdauer",
        organicWood: "Struktur & System: auf <strong>organischem Holz</strong> basierend, mit EPD-Zertifizierung",
        energyReduction: "<strong>95 % geringerer</strong> Energieverbrauch dank des Modular-Systems",
        modular: "MODULAR",
        structure: "STRUKTUR",
        structureTitle: "MODULAR Struktur",
        structureDesc: "Kombiniert herausragende mechanische Festigkeit mit ultra-isolierenden Eigenschaften, die Wärmebrücken vollständig eliminieren. Zertifiziert durch das Passivhaus Institut in Darmstadt und EPD International. U ≈ 0,11 W/m²K, U-Wert.",
        c24Frame: "C24 Holzrahmen",
        c24Desc: "FSC/PEFC-zertifiziertes C24-Holz; sehr hohe Tragfähigkeit.",
        insulation: "Ultra-effiziente Holzfaserdämmung",
        insulationDesc: "Dämmung für Wände, Dach und Boden; hocheffiziente STEICO-Holzfaser λ ≈ 0,036 W/m·K; CE-zertifiziert.",
        osb3: "OSB 3 ECO, Deutschland",
        osb3Desc: "Frei von Formaldehyd und VOC; vom Passivhaus Institut in Darmstadt freigegeben; CE-zertifiziert.",
        dwd: "DWD-Platte, Österreich",
        dwdDesc: "Dampfdurchlässig (ermöglicht 'atmende' Wände, bleibt aber außen luftdicht; unidirektional); CE-zertifiziert.",
        smartMembrane: "Intelligente Membran (Folie)",
        smartMembraneDesc: "Sorgt für eine luftdichte Innenhülle und ermöglicht gleichzeitig Dampfdiffusion nach außen. Zertifiziert vom Passivhaus Institut, Darmstadt; CE-zertifiziert.",
        exteriorFinishes: "KOMPLETTE AUSSENFERTIGUNG",
        yakisugiFacade: "Yakisugi hinterlüftete Fassade",
        yakisugiDesc: "Wartung nur ca. alle 10 Jahre; beste Feuerbeständigkeit in ihrer Klasse; wasserdicht.",
        lunawoodFacade: "Lunawood Fassade",
        lunawoodDesc: "Eine nordische Kiefernfassade, unter extremem Druck mit Dampf behandelt (thermisch modifiziert, keine Chemikalien), um Thermowood zu erhalten: eine langlebige, außergewöhnlich stabile, wetterbeständige und pflegeleichte Fassade mit einem warmen Karamellton.",
        ventilatedRoof: "Hinterlüftetes Dach",
        ventilatedRoofDesc: "Der belüftete Zwischenraum erhöht die thermische Leistung und die Lebensdauer des Daches.",
        epdmMembrane: "EPDM-Membran",
        epdmDesc: "Wasserdicht; 30 Jahre Herstellergarantie.",
        rainwater: "Regenwassersammelsystem",
        rainwaterDesc: "Verdeckte Dachrinne, in die Fassade integriert; sammelbereit.",
        windowsDoors: "FENSTER UND TÜREN",
        genesis90: "Genesis 90 Aluminiumrahmen",
        genesis90Desc: "Stabiles, hocheffizientes Profil; Uwi ≤ 0,85 W/m²K; zertifiziert vom Passivhaus Institut Darmstadt; CE-zertifiziert.",
        tripleGlazing: "Verbundene Dreifachverglasung",
        tripleGlazingDesc: "U = 0,50 W/m²K; Verbundsicherheitsglas; Passivhaus Institut Darmstadt zertifiziert; CE.",
        kitchen: "KÜCHE",
        kitchenInstallations: "Küchenanschlüsse",
        kitchenDesc: "Anschlüsse vollständig vorbereitet, Möbel frei wählbar.",
        installations: "INSTALLATIONEN",
        electrical: "Elektroinstallationen",
        electricalDesc: "Vollständig verlegt, gemäß geltenden Normen (CE / I7/2011 / IEC 60364).",
        plumbing: "Sanitärinstallationen",
        plumbingDesc: "Leitungen und Anschlüsse PPR/PEX, konform mit lokalen Vorschriften.",
        certifications: "ZERTIFIKATE & GARANTIEN",
        passivhausCert: "Passivhaus-Zertifizierung",
        passivhausCertDesc: "Aussteller: Passivhaus Institut, Darmstadt, Deutschland.",
        epdCert: "EPD-Zertifikat",
        epdCertDesc: "Aussteller: EPD Europe.",
        ceMarking: "CE-Kennzeichnung",
        ceMarkingDesc: "Alle relevanten Komponenten erfüllen die EU-Bauprodukteverordnung.",
        warranty: "Standard EU-Garantie",
        warrantyDesc: "24 Monate für private Nutzung; 12 Monate für gewerbliche Nutzung.",
        turnkey: "SCHLÜSSELFERTIG",
        interiorFinishes: "INNENAUSSTATTUNG",
        ceiling: "Holzlamellen + Filzdecke",
        ceilingDesc: "Naturholz und Recycling-Filz; hervorragende Akustikdämpfung.",
        wallpaper: "Glasfasertapete",
        wallpaperDesc: "Sehr hohe Reiß- und Abriebfestigkeit; abwaschbar; modernes Erscheinungsbild.",
        parquet: "Dreischicht-Parkett",
        parquetDesc: "9–14 mm, FSC/PEFC-Holz; extrem langlebige Oberfläche.",
        interiorDoors: "INNENTÜREN",
        s10Doors: "Innentüren S10",
        s10DoorsDesc: "CE-zertifiziert; Vollkern.",
        bathroomFinishes: "BADEZIMMERAUSSTATTUNG",
        stonePanels: "Steinverbundplatten",
        stonePanelsDesc: "Premium Platten 2,5 × 1,2 m; 100 % wasserdicht; sehr langlebig.",
        italianSink: "Italienisches Design-Waschbecken",
        italianSinkDesc: "Premium-Verbundstoff; ultra-schlank, modern und langlebig.",
        groheToilet: "Grohe Hänge-WC",
        groheToiletDesc: "Made in Germany; minimalistisch, modernes Design.",
        aristonBoiler: "Ariston Velis Boiler",
        aristonBoilerDesc: "Ultra-schlankes Design; energieeffizient.",
        walkInShower: "Walk-in-Dusche",
        walkInShowerDesc: "Design aus Frankreich; minimalistisch, modern.",
        smartSystems: "SMART-SYSTEME",
        lightingTrack: "Lichtschiene",
        lightingTrackDesc: "Flexible Konfiguration für LEDs und Spots.",
        smartLighting: "Smart Lighting",
        smartLightingDesc: "Philips HUE oder IKEA TRÅDFRI; einfache Smart-Konfiguration.",
        smartBlinds: "Smart-Außenjalousien",
        smartBlindsDesc: "Blockieren >95 % der Sonneneinstrahlung; App- oder manuelle Steuerung; Passivhaus & CE-zertifiziert.",
        genvexSystem: "Genvex Premium Preheat 250",
        genvexDesc: "Wärmerückgewinnung bis 95 %; integrierte Wärmepumpe für Heizen und Kühlen.",
        genvexBasic: "Lüftungssystem mit Wärmerückgewinnung",
        genvexBasicDesc: "Sorgt für ein gesundes und komfortables Raumklima mit konstanter Frischluftzufuhr und effizienter Wärmerückgewinnung.",
        dimensions: "Dimensionen",
        totalArea: "Gesamtfläche",
        interiorDimensions: "Innenmaße",
        exteriorDimensions: "Außenmaße",
        rooms: "Räume",
        upgradesDelivery: "Upgrades & Lieferung",
        delivery: "Lieferung",
        deliveryDesc: "<strong>Kosten abhängig vom Standort.</strong>",
        foundation: "Schraubfundamente (optional)",
        deliveryTime: "Montage in 1–5 Tagen; eventuelle Zusatzkosten werden transparent kommuniziert.",
        addons: "Zusätze",
        facade: "Fassade",
        parquetUpgrade: "Parkett",
        smartBlindsUpgrade: "Smart-Jalousien",
        smartBlindsUpgradeDesc: "Blockieren über 95 % der Sonneneinstrahlung; App- oder manuelle Steuerung.",
        ventilationUpgrade: "Lüftungssystem",
        ventilationUpgradeDesc: "Genvex Premium System mit bis zu 95 % Wärmerückgewinnung und integrierter Wärmepumpe.",
        ventilationUpgradeBasic: "Lüftungssystem mit Wärmerückgewinnung für optimales Raumklima.",
        mentions: "Anmerkungen:",
        total: "GESAMT",
        vat: "+ MwSt.",
        companyInfo: "BIOBUILDS HOME S.R.L., USt-IdNr.: 43154291, EUID: ROONRC.J20/2000/2193246",
        terms: "Dieses Angebot unterliegt den geltenden AGB, einsehbar unter biobuilds.com/TC. Mit der Annahme bestätigen Sie, dass Sie diese verstanden und akzeptiert haben.",
        website: "biobuilds.com",
        semifinished: "Halbfertig",
        turnkeyFinish: "Schlüsselfertig",
        included: "(Inkl.)",
        standard: "(Standard)",
        cashmere: "Cashmere",
        hazelnut: "Haselnuss",
        osb: "OSB",
        yakisugi: "Yakisugi",
        lunawood: "Lunawood",
        planA: "Plan A",
        planB: "Plan B",
        planC: "Plan C",
        customPlan: "Individueller Plan"
    }
};

// Current language state
let currentLanguage = 'ro';

// Initialize language selector
function initLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLanguage) {
                currentLanguage = lang;
                
                // Update button states
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Update all text content
                updateLanguage();
            }
        });
    });
}

// Function to update all text content based on selected language
function updateLanguage() {
    const t = translations[currentLanguage];
    
    // Update header
    document.querySelector('.header-right span:first-child').textContent = t.validity;
    document.querySelector('.header-right span:last-child').innerHTML = `${t.offer} <span id="offer-nr" contenteditable="true">${selectionState.offerNr || ''}</span>`;
    
    // Update footer
    document.querySelector('.footer-right h2').innerHTML = `${t.offerTitle}<span id="client-name" contenteditable="true">${selectionState.clientName}</span>`;
    document.querySelector('.footer-right p').textContent = t.description;
    
    // Update passive info section
    document.querySelector('#passive-info-text blockquote').innerHTML = `"${t.passiveQuote}"<cite>${t.passiveQuoteAuthor}</cite>`;
    
    const passiveStats = document.getElementById('passive-stats');
    const co2Value = offerData.models[selectionState.model].co2Savings;
    passiveStats.innerHTML = `
        <li><strong>${t.passiveU}</strong> 0.14 W/m2K</li>
        <li><strong>${t.energyConsumption}</strong> ${t.energyValue}</li>
        <li><strong>${t.airTightness}</strong> n50-value: 0.5h-1</li>
        <li><strong>${t.co2Sequestration}</strong> 36 kg/m2</li>
        <li><strong>${co2Value} ${t.co2Savings}</strong> ${t.co2Duration}</li>
        <li>${t.organicWood}</li>
        <li>${t.energyReduction}</li>
    `;
    
    // Update upgrades section
    document.querySelector('#section-upgrades h2').textContent = t.upgradesDelivery;
    const upgradesColumns = document.querySelectorAll('#section-upgrades .column');
    upgradesColumns[0].querySelector('h3').textContent = t.delivery;
    upgradesColumns[0].querySelector('p:first-of-type').innerHTML = t.deliveryDesc;
    upgradesColumns[0].querySelector('p:nth-of-type(2)').textContent = t.foundation;
    upgradesColumns[0].querySelector('p:last-of-type').textContent = t.deliveryTime;
    
    upgradesColumns[1].querySelector('h3').textContent = t.addons;
    document.querySelector('[data-upgrade-type="facade"] h4').textContent = t.facade;
    document.querySelector('[data-upgrade-type="parquet"] h4').textContent = t.parquetUpgrade;
    document.querySelector('#upgrade-blinds h4').textContent = t.smartBlindsUpgrade;
    document.querySelector('#upgrade-blinds p').textContent = t.smartBlindsUpgradeDesc;
    document.querySelector('#upgrade-ventilation h4').textContent = t.ventilationUpgrade;
    
    // Update ventilation description based on model
    if (selectionState.model === 'nomad-24') {
        document.querySelector('#upgrade-ventilation p').textContent = t.ventilationUpgradeBasic;
    } else {
        document.querySelector('#upgrade-ventilation p').textContent = t.ventilationUpgradeDesc;
    }
    
    // Update floorplan section
    const floorplanTitle = document.getElementById('floorplan-title-select');
    Array.from(floorplanTitle.options).forEach(option => {
        if (option.value === 'custom') {
            option.textContent = t.customPlan;
        } else {
            const planKey = 'plan' + option.value.toUpperCase();
            option.textContent = t[planKey] || option.textContent;
        }
    });
    
    // Update dimensions labels only if not custom plan
    if (selectionState.floorplan !== 'custom') {
        const detailsWrapper = document.getElementById('floorplan-details-content-wrapper');
        const h3Elements = detailsWrapper.querySelectorAll('h3');
        if (h3Elements[0]) h3Elements[0].textContent = t.dimensions;
        if (h3Elements[1]) h3Elements[1].textContent = t.rooms;
        
        const detailItems = detailsWrapper.querySelectorAll('.detail-item');
        if (detailItems[0]) detailItems[0].querySelector('span:first-child').textContent = t.totalArea;
        if (detailItems[1]) detailItems[1].querySelector('span:first-child').textContent = t.interiorDimensions;
        if (detailItems[2]) detailItems[2].querySelector('span:first-child').textContent = t.exteriorDimensions;
    }
    
    // Update summary page
    document.querySelector('.mentiuni-section strong').textContent = t.mentions;
    document.querySelector('.summary-fine-print:nth-of-type(1)').textContent = t.companyInfo;
    document.querySelector('.summary-fine-print:nth-of-type(2)').textContent = t.terms;
    document.querySelector('.website-link').textContent = t.website;
    
    // Re-run the main update to refresh section 2 content and other dynamic elements
    updateOffer();
}

document.addEventListener('DOMContentLoaded', () => {
    // --- DATA STRUCTURES ---
    const offerData = {
        models: {
            "nomad-24": {
                name: "Nomad",
                co2Savings: "56.3",
                passiveImg: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c6bdf250202676001401d_24m2.png",
                images: {
                    facade: { yakisugi: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4339236794245a361e6b9_742d4a56b01c157fcfb78d250a5c284b_24m2%20Nomad%204.1.avif", lunawood: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283757ec629f34a599c8_24m2%20Nomad%20Lunawood%204.0.avif" },
                    parquet: { cashmere: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283437fe5ebcf02aa7ab_24m2%20Nomad%20Interior%204.0.avif", hazelnut: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c43ad5d75d99a4806d7d4b_24m2%20Nomad%20Interior%20Hazelnut%204.0.avif" },
                    semi_parquet: { osb: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f0499f53b61b42090_24m2%20Nomad%20OSB%204.0.avif", cashmere: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4388b838ef609a824c885_24m2%20Nomad%20OSB%20%2B%20Cashmere%204.0.avif", hazelnut: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4388ba91d0f79d44ce0d2_24m2%20Nomad%20OSB%20%2B%20Hazelnut%204.0.avif" },
                    floorplan: {
                        a: { name: "Plan A", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c43d2244f5d6be3af87aab_24m2%20Floorplan%20A.avif", details: { totalArea: "24m²", interior: "5.70m x 3.10m x 2.50m", exterior: "6.40m x 3.80m x 3.20m", rooms: { "Dormitor": "14.20m²", "Baie": "2.65m²", "Depozitare / Chichinetă": "0.80m²" } } },
                        b: { name: "Plan B", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c43d22e33276e515d43a8f_24m2%20Floorplan%20B.avif", details: { totalArea: "24m²", interior: "5.70m x 3.10m x 2.50m", exterior: "6.40m x 3.80m x 3.20m", rooms: { "Dormitor": "14.20m²", "Baie": "2.65m²", "Depozitare / Chichinetă": "0.80m²" } } }
                    }
                }
            },
            "wanderlust-48": {
                name: "Wanderlust",
                co2Savings: "112.7",
                passiveImg: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c6be9a17781eb55e6b63f_48m2.png",
                images: {
                    facade: { yakisugi: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283782a535d591653c65_48m2%20Wanderlust%204.0.avif", lunawood: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428347a78da3d6cd218de_48m2%20Wanderlust%20Lunawood%204.0.avif" },
                    parquet: { cashmere: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282fadd6a68f7235f463_48m2%20Wanderlust%20Interior%20Cashmere%204.0.avif", hazelnut: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f1a20245ff5ca4510_48m2%20Wanderlust%20Interior%20Hazelnut%204.0.avif" },
                    semi_parquet: { osb: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834c118eb9aa4496812_48m2%20Wanderlust%20OSB%204.0.avif", cashmere: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834f6342091f39dfedb_48m2%20Wanderlust%20OSB%20%2B%20Cashmere%204.0.avif", hazelnut: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283416e5d5e698aa09c6_48m2%20Wanderlust%20OSB%20%2B%20Hazelnut%204.0.avif" },
                    floorplan: {
                        a: { name: "Plan A", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c525733fc3797a1ea68b6_48m2%20Floorplan%20A.png", details: { totalArea: "48m²", interior: "11.80m x 3.10m x 2.50m", exterior: "12.60m x 3.80m x 3.20m", rooms: { "Living + Bucătărie": "19.90m²", "Dormitor": "11.80m²", "Baie": "4.50m²" } } },
                        b: { name: "Plan B", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514f671a54486d036b53_48m2%20Floorplan%20B.png", details: { totalArea: "48m²", interior: "11.80m x 3.10m x 2.50m", exterior: "12.60m x 3.80m x 3.20m", rooms: { "Dormitor 1": "11.80m²", "Dormitor 2": "11.80m²", "Baie 1": "4.50m²", "Baie 2": "3.50m²", "Hol": "3.50m²" } } }
                    }
                }
            },
            "serenity-95": {
                name: "Serenity",
                co2Savings: "225.2",
                passiveImg: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c6bf2d847e2b6f5051525_95m2.png",
                images: {
                    facade: { yakisugi: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428362a03aef0fc05960f_95m2%20Serenity%204.0.avif", lunawood: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834c7a50abaf20e6a83_95m2%20Serenity%20Lunawood%204.0.avif" },
                    parquet: { cashmere: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f9eb780fb3d07ba0f_95m2%20Serenity%20Cashmere%204.0.avif", hazelnut: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f8de7c20305542612_95m2%20Serenity%20Hazelnut%204.0.avif" },
                    semi_parquet: { osb: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834cbf67979df378474_95m2%20Serenity%20OSB%204.0.avif", cashmere: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283456778eb848b0ef0a_95m2%20Serenity%20OSB%20%2B%20Cashmere%204.0.avif", hazelnut: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428364c8e49bed391084c_95m2%20Serenity%20OSB%20%2B%20Hazelnut%204.0.avif" },
                    floorplan: {
                        a: { name: "Plan A", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514e29f50d2da31e84dc_95m2%20Floorplan%20A.png", details: { totalArea: "95m²", interior: "11.80m x 6.80m x 2.50m", exterior: "12.60m x 7.60m x 3.20m", rooms: { "Living + Bucătărie": "29.10m²", "Dormitor 1": "12.20m²", "Dormitor 2": "12.40m²", "Dormitor 3": "13.10m²", "Baie 1": "3.75m²", "Baie 2": "4.35m²" } } },
                        b: { name: "Plan B", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514fdf7becede16b71e9_95m2%20Floorplan%20B.png", details: { totalArea: "95m²", interior: "11.80m x 6.80m x 2.50m", exterior: "12.60m x 7.60m x 3.20m", rooms: { "Living + Bucătărie": "41.50m²", "Dormitor 1": "12.20m²", "Dormitor 2": "13.10m²", "Baie 1": "3.75m²", "Baie 2": "4.35m²" } } },
                        c: { name: "Plan C", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514ff885d32e87f5d5ef_95m2%20Floorplan%20C.png", details: { totalArea: "95m²", interior: "11.80m x 6.80m x 2.50m", exterior: "12.60m x 7.60m x 3.20m", rooms: { "Living + Bucătărie": "53.70m²", "Dormitor": "13.10m²", "Baie 1": "3.75m²", "Baie 2": "4.35m²" } } }
                    }
                }
            },
            "sanctuary-142": {
                name: "Sanctuary",
                co2Savings: "337.8",
                passiveImg: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c6bf82cbff70a35076e34_142m2.png",
                images: {
                    facade: { yakisugi: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42836759488180078dc28_142m2%20Sanctuary%204.0.avif", lunawood: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428364c5adf6fa2aec1c1_142m2%20Sanctuary%20Lunawood%204.0.avif" },
                    parquet: { cashmere: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c440551c75cb12af61eff9_142m2%20Sanctuary%20Interior%20Cashmere%204.0.avif", hazelnut: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c44055256a682dd59e9ad7_142m2%20Sanctuary%20Interior%20Hazelnut%204.0.avif" },
                    semi_parquet: { osb: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c440552e93c6b2b6549f82_142m2%20Sanctuary%20OSB%204.0.avif", cashmere: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c440551ad361e009f1da6e_142m2%20Sanctuary%20OSB%20%2B%20Cashmere%204.0.avif", hazelnut: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c44055c519f4722b8ef029_142m2%20Sanctuary%20OSB%20%2B%20Hazelnut%204.0.avif" },
                    floorplan: {
                        a: { name: "Plan A", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514ff7e14cb1b083351b_142m2%20Floorplan%20A.png", details: { totalArea: "142m²", interior: "11.80m x 10.60m x 2.50m", exterior: "12.60m x 11.30m x 3.20m", rooms: { "Living + Bucătărie": "62.90m²", "Dormitor 1": "12.40m²", "Dormitor 2": "12.20m²", "Dormitor 3": "12.40m²", "Dormitor 4": "13.10m²", "Baie 1": "3.75m²", "Baie 2": "4.35m²" } } },
                        b: { name: "Plan B", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514f6966128dbeb27986_142m2%20Floorplan%20B.png", details: { totalArea: "142m²", interior: "11.80m x 10.60m x 2.50m", exterior: "12.60m x 11.30m x 3.20m", rooms: { "Living + Bucătărie": "75.30m²", "Dormitor 1": "12.20m²", "Dormitor 2": "12.40m²", "Dormitor 3": "13.10m²", "Baie 1": "3.75m²", "Baie 2": "4.35m²" } } },
                        c: { name: "Plan C", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514fd4d57aa8ff3d75e9_142m2%20Floorplan%20C.png", details: { totalArea: "142m²", interior: "11.80m x 10.60m x 2.50m", exterior: "12.60m x 11.30m x 3.20m", rooms: { "Living + Bucătărie": "87.50m²", "Dormitor 1": "12.40m²", "Dormitor 2": "13.10m²", "Baie 1": "3.75m²", "Baie 2": "4.35m²" } } }
                    }
                }
            }
        },
        common: {
            logos: { passiveHouse: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/680248132febd7da21dcfe3a_Biobuilds%20Passive%20House%20Clean%20White.avif", epd: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68028d2a23638226fd81a56e_BIOBUILDS%20EPD%20Logo.avif" }
        }
    };

    const pricingLogic = {
        "nomad-24": { base: { "semi-finished": 39800, "turnkey": 59800 }, upgrades: { parquet: { cashmere: 1800, hazelnut: 1800 }, ventilation: 4800, blinds: 2000 } },
        "wanderlust-48": { base: { "semi-finished": 59800, "turnkey": 109800 }, upgrades: { parquet: { cashmere: 3800, hazelnut: 3800 }, ventilation: 7800, blinds: 4000 } },
        "serenity-95": { base: { "semi-finished": 109800, "turnkey": 189800 }, upgrades: { parquet: { cashmere: 7800, hazelnut: 7800 }, ventilation: 9800, blinds: 7000 } },
        "sanctuary-142": { base: { "semi-finished": 159800, "turnkey": 279800 }, upgrades: { parquet: { cashmere: 11800, hazelnut: 11800 }, ventilation: 9800, blinds: 9000 } }
    };

    // State object to hold all selections and editable content
    const selectionState = {
        model: 'sanctuary-142',
        finish: 'turnkey',
        facade: 'yakisugi',
        parquet: 'cashmere',
        floorplan: 'a',
        blinds: true,
        ventilation: true,
        clientName: 'Nume Client',
        offerNr: null,
        offerDate: 'xx.06.2025',
        mentions: '',
        basePriceOverride: null
    };

    // --- HELPER FUNCTIONS ---
    function formatCurrency(value) { return value.toLocaleString('ro-RO', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }); }
    function parseCurrency(text) {
        if (!text) return 0;
        const number = parseFloat(String(text).replace(/[^0-9,-]/g, '').replace('.', '').replace(',', '.'));
        return isNaN(number) ? 0 : number;
    }
    function createDetailItem(label, value) { return `<div class="detail-item"><span>${label}</span><span>${value}</span></div>`; }
    function formatFinish(finishParam) { return finishParam === 'semi-finished' ? 'Semifinisat' : 'La Cheie'; }
    function generateRandomLetters(length) {
        let result = '';
        const characters = '1234567890';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function generateAndSetOfferId() {
        const modelData = offerData.models[selectionState.model];
        if (!modelData) return;

        const modelPrefix = modelData.name.substring(0, 2).toUpperCase();
        const finishPrefix = selectionState.finish.substring(0, 2).toUpperCase();
        const randomPart = generateRandomLetters(4);

        const newId = `${modelPrefix}/${finishPrefix}/${randomPart}`;

        selectionState.offerNr = newId;
        document.getElementById('offer-nr').textContent = newId;
    }


    // --- Price Calculation and UI Update ---
    function recalculateTotals() {
        const basePriceEl = document.getElementById('base-price-editable');
        if (!basePriceEl) return;

        const basePrice = parseCurrency(basePriceEl.textContent);

        const mentiuniText = document.querySelector('.mentiuni-editable').textContent;
        const summaryTotalEl = document.getElementById('summary-total');

        // Handle discounts like -10%
        const discountMatch = mentiuniText.match(/-(\d+(\.\d+)?)\s*%/);
        let finalPrice = basePrice;
        if (discountMatch) {
            finalPrice = basePrice * (1 - (parseFloat(discountMatch[1]) / 100));
        }

        // Find all additions in the format +<number>EUR (case-insensitive)
        const additionMatches = mentiuniText.matchAll(/\+(\d+)\s*EUR/gi);
        let additionsTotal = 0;
        for (const match of additionMatches) {
            // match[1] will contain the number
            additionsTotal += parseInt(match[1], 10);
        }

        // Add the total from the mentions to the final price
        finalPrice += additionsTotal;

        summaryTotalEl.innerHTML = `TOTAL ${formatCurrency(finalPrice)} +TVA`;
    }

    // --- MAIN UPDATE FUNCTION ---
    function updateOffer() {
        const modelId = selectionState.model;
        const finish = selectionState.finish;
        const facade = selectionState.facade;
        const parquet = selectionState.parquet;
        const floorplan = selectionState.floorplan;
        const modelData = offerData.models[modelId];
        const modelPricing = pricingLogic[modelId];

        // --- Update Ventilation Text based on Model ---
        const turnkeyVentH4 = document.querySelector('#section-3-text .column:last-child h4:last-of-type');
        const turnkeyVentP = turnkeyVentH4 ? turnkeyVentH4.nextElementSibling : null;
        const upgradeVentP = document.querySelector('#upgrade-ventilation p');

        if (modelId === 'nomad-24') {
            if (turnkeyVentH4) turnkeyVentH4.textContent = 'Sistem de ventilație cu recuperare de căldură';
            if (turnkeyVentP) turnkeyVentP.textContent = 'Asigură un climat interior sănătos și confortabil cu un aport constant de aer proaspăt, cu recuperare eficientă a căldurii.';
            if (upgradeVentP) upgradeVentP.textContent = 'Sistem de ventilație cu recuperare de căldură, pentru un climat interior optim.';
        } else {
            if (turnkeyVentH4) turnkeyVentH4.textContent = 'Genvex Premium Preheat 250';
            if (turnkeyVentP) turnkeyVentP.textContent = 'Recuperare de căldură de până la 95%; pompă de căldură integrată pentru încălzire și răcire.';
            if (upgradeVentP) upgradeVentP.textContent = 'Sistem Genvex Premium cu recuperare de căldură de până la 95% și pompă de căldură integrată.';
        }

        // --- Page Visibility Control ---
// --- Page Visibility Control ---
const showTurnkeyDetails = (finish === 'turnkey');
document.getElementById('section-3-text').classList.toggle('page-hidden', !showTurnkeyDetails);
document.getElementById('section-3-image').classList.toggle('page-hidden', !showTurnkeyDetails);

// Generate section 3 content with translations when visible
if (showTurnkeyDetails) {
    generateSection3Content();
}

        // --- Calculate Initial Base Price ---
        let price = modelPricing.base[finish];
        if (finish === 'semi-finished') {
            if (parquet !== 'osb') price += modelPricing.upgrades.parquet[parquet] || 0;
            if (selectionState.blinds) price += modelPricing.upgrades.blinds;
            if (selectionState.ventilation) price += modelPricing.upgrades.ventilation;
        }

        // --- Update UI Elements ---
        document.querySelector('#section-1 .content-area').style.backgroundImage = `url('${modelData.images.facade[facade]}')`;
        document.getElementById('passive-info-image').style.backgroundImage = `url('${modelData.passiveImg}')`;
        document.getElementById('co2-savings-stat').innerHTML = `<strong>${modelData.co2Savings} Tone de CO₂ salvate</strong> pe durata de viață a clădirii`;

        generateSection2Content(document.getElementById('section-2-text'), facade);

        let section2ImageUrl;
        if (finish === 'semi-finished') {
            section2ImageUrl = modelData.images.semi_parquet[parquet];
        } else {
            section2ImageUrl = modelData.images.facade[facade];
        }
        document.getElementById('section-2-image').style.backgroundImage = `url('${section2ImageUrl}')`;

        if (showTurnkeyDetails) {
            document.getElementById('section-3-image').style.backgroundImage = `url('${modelData.images.parquet[parquet]}')`;
        }

        const detailsWrapper = document.getElementById('floorplan-details-content-wrapper');
        const floorplanImage = document.getElementById('floorplan-image');
        detailsWrapper.style.display = 'block'; // Ensure it's visible by default

        if (floorplan !== 'custom') {
            const floorplanData = modelData.images.floorplan[floorplan];
            if (floorplanData) {
                floorplanImage.src = floorplanData.url;
                let detailsHtml = `<h3>Dimensiuni</h3>`;
                detailsHtml += createDetailItem('Suprafață Totală', floorplanData.details.totalArea);
                detailsHtml += createDetailItem('Dimensiuni Interioare', floorplanData.details.interior);
                detailsHtml += createDetailItem('Dimensiuni Exterioare', floorplanData.details.exterior);
                detailsHtml += `<h3>Camere</h3>`;
                for (const roomName in floorplanData.details.rooms) {
                    detailsHtml += createDetailItem(roomName, floorplanData.details.rooms[roomName]);
                }
                detailsWrapper.innerHTML = detailsHtml;
            } else {
                 detailsWrapper.innerHTML = '';
            }
        } else {
            // It's a custom plan, hide the details but don't change the image src
            detailsWrapper.style.display = 'none';
        }

        updateOptionHighlights();

        // Summary Page
        document.getElementById('summary-model-name').textContent = modelData.name;
        document.getElementById('summary-finish').textContent = formatFinish(finish);
        document.getElementById('logo-passive-house').src = offerData.common.logos.passiveHouse;
        document.getElementById('logo-epd').src = offerData.common.logos.epd;

        const inclusionList = document.getElementById('inclusion-list');
        inclusionList.innerHTML = '';

        const firstLi = document.createElement('li');
        const priceSpan = document.createElement('span');
        priceSpan.id = 'base-price-editable';
        priceSpan.setAttribute('contenteditable', 'true');

        let displayPrice = (selectionState.basePriceOverride !== null) ? selectionState.basePriceOverride : price;
        priceSpan.textContent = formatCurrency(displayPrice);

        priceSpan.addEventListener('input', () => {
            const numericValue = parseCurrency(priceSpan.textContent);
            selectionState.basePriceOverride = numericValue;
            recalculateTotals();
            updateUrlParams();
        });

        firstLi.append(`- Modular ${modelData.name} ${formatFinish(finish)} - `, priceSpan);
        inclusionList.appendChild(firstLi);

        const addInclusion = (text) => {
            const li = document.createElement('li');
            li.textContent = text;
            inclusionList.appendChild(li);
        };

        const facadeText = selectionState.facade === 'yakisugi' ? 'Yakisugi' : 'Lunawood';
        const parquetGroup = document.querySelector('[data-upgrade-type="parquet"] .option-group');
        const selectedParquetButton = parquetGroup.querySelector('.selected');
        const parquetText = selectedParquetButton ? selectedParquetButton.textContent : 'N/A';

        addInclusion(`- Fațadă ${facadeText}`);
        addInclusion(`- Parchet ${parquetText}`);
        if (selectionState.blinds) addInclusion(`- Jaluzele Smart ${finish === 'turnkey' ? '(Inclus)' : ''}`);
        if (selectionState.ventilation) addInclusion(`- Sistem de ventilație ${finish === 'turnkey' ? '(Inclus)' : ''}`);

        recalculateTotals();
        updateUrlParams();
    }

    function updateOptionHighlights() {
        document.querySelectorAll('[data-upgrade-type="facade"] .option-button').forEach(btn => {
            btn.classList.toggle('selected', btn.dataset.value === selectionState.facade);
        });
        document.querySelectorAll('[data-upgrade-type="parquet"] .option-button').forEach(btn => {
            btn.classList.toggle('selected', btn.dataset.value === selectionState.parquet);
        });
        document.getElementById('upgrade-blinds').classList.toggle('selected', selectionState.blinds);
        document.getElementById('upgrade-ventilation').classList.toggle('selected', selectionState.ventilation);
        document.getElementById('upgrade-blinds').classList.toggle('disabled', selectionState.finish === 'turnkey');
        document.getElementById('upgrade-ventilation').classList.toggle('disabled', selectionState.finish === 'turnkey');
    }

    function updateUrlParams() {
        const stateForUrl = {...selectionState};
        if (stateForUrl.basePriceOverride === null) {
            delete stateForUrl.basePriceOverride;
        }
        const params = new URLSearchParams(stateForUrl);
        window.history.pushState({ path: `?${params.toString()}` }, '', `?${params.toString()}`);
    }

   // Replace the existing generateSection2Content function with this one
function generateSection2Content(container, facadeType) {
    const t = translations[currentLanguage];
    
    let facadeTitle = facadeType === 'lunawood' ? t.lunawoodFacade : t.yakisugiFacade;
    let facadeDescription = facadeType === 'lunawood' ? t.lunawoodDesc : t.yakisugiDesc;
    
    container.innerHTML = `
        <h2>${t.modular}</h2>
        <div class="flex-wrapper">
            <div class="column">
                <h3>${t.structure}</h3>
                <h4>${t.structureTitle}</h4>
                <p>${t.structureDesc}</p>
                <h4>${t.c24Frame}</h4>
                <p>${t.c24Desc}</p>
                <h4>${t.insulation}</h4>
                <p>${t.insulationDesc}</p>
                <h4>${t.osb3}</h4>
                <p>${t.osb3Desc}</p>
                <h4>${t.dwd}</h4>
                <p>${t.dwdDesc}</p>
                <h4>${t.smartMembrane}</h4>
                <p>${t.smartMembraneDesc}</p>
            </div>
            <div class="column">
                <h3>${t.exteriorFinishes}</h3>
                <h4>${facadeTitle}</h4>
                <p>${facadeDescription}</p>
                <h4>${t.ventilatedRoof}</h4>
                <p>${t.ventilatedRoofDesc}</p>
                <h4>${t.epdmMembrane}</h4>
                <p>${t.epdmDesc}</p>
                <h4>${t.rainwater}</h4>
                <p>${t.rainwaterDesc}</p>
                <h3>${t.windowsDoors}</h3>
                <h4>${t.genesis90}</h4>
                <p>${t.genesis90Desc}</p>
                <h4>${t.tripleGlazing}</h4>
                <p>${t.tripleGlazingDesc}</p>
            </div>
            <div class="column">
                <h3>${t.kitchen}</h3>
                <h4>${t.kitchenInstallations}</h4>
                <p>${t.kitchenDesc}</p>
                <h3>${t.installations}</h3>
                <h4>${t.electrical}</h4>
                <p>${t.electricalDesc}</p>
                <h4>${t.plumbing}</h4>
                <p>${t.plumbingDesc}</p>
                <h3>${t.certifications}</h3>
                <h4>${t.passivhausCert}</h4>
                <p>${t.passivhausCertDesc}</p>
                <h4>${t.epdCert}</h4>
                <p>${t.epdCertDesc}</p>
                <h4>${t.ceMarking}</h4>
                <p>${t.ceMarkingDesc}</p>
                <h4>${t.warranty}</h4>
                <p>${t.warrantyDesc}</p>
            </div>
        </div>
    `;
}

// Add this new function to your JavaScript
function generateSection3Content() {
    const t = translations[currentLanguage];
    const section3 = document.getElementById('section-3-text');
    
    // Determine ventilation text based on model
    let ventH4, ventP;
    if (selectionState.model === 'nomad-24') {
        ventH4 = t.genvexBasic;
        ventP = t.genvexBasicDesc;
    } else {
        ventH4 = t.genvexSystem;
        ventP = t.genvexDesc;
    }
    
    section3.innerHTML = `
        <h2>${t.turnkey}</h2>
        <div class="flex-wrapper">
            <div class="column">
                <h3>${t.interiorFinishes}</h3>
                <h4>${t.ceiling}</h4>
                <p>${t.ceilingDesc}</p>
                <h4>${t.wallpaper}</h4>
                <p>${t.wallpaperDesc}</p>
                <h4>${t.parquet}</h4>
                <p>${t.parquetDesc}</p>
                <h3>${t.interiorDoors}</h3>
                <h4>${t.s10Doors}</h4>
                <p>${t.s10DoorsDesc}</p>
            </div>
            <div class="column">
                <h3>${t.bathroomFinishes}</h3>
                <h4>${t.stonePanels}</h4>
                <p>${t.stonePanelsDesc}</p>
                <h4>${t.italianSink}</h4>
                <p>${t.italianSinkDesc}</p>
                <h4>${t.groheToilet}</h4>
                <p>${t.groheToiletDesc}</p>
                <h4>${t.aristonBoiler}</h4>
                <p>${t.aristonBoilerDesc}</p>
                <h4>${t.walkInShower}</h4>
                <p>${t.walkInShowerDesc}</p>
            </div>
            <div class="column">
                <h3>${t.smartSystems}</h3>
                <h4>${t.lightingTrack}</h4>
                <p>${t.lightingTrackDesc}</p>
                <h4>${t.smartLighting}</h4>
                <p>${t.smartLightingDesc}</p>
                <h4>${t.smartBlinds}</h4>
                <p>${t.smartBlindsDesc}</p>
                <h4>${ventH4}</h4>
                <p>${ventP}</p>
            </div>
        </div>
    `;
}

    function updateDynamicOptions() {
        const parquetContainer = document.querySelector('[data-upgrade-type="parquet"] .option-group');
        const modelPricing = pricingLogic[selectionState.model];
        let parquetHtml = '';
        if (selectionState.finish === 'turnkey') {
            parquetHtml = `<div class="option-button" data-value="cashmere">Cashmere (Inclus)</div><div class="option-button" data-value="hazelnut">Hazelnut (Inclus)</div>`;
        } else {
            const parquetUpgrades = modelPricing.upgrades.parquet;
            parquetHtml = `<div class="option-button" data-value="osb">OSB (Standard)</div><div class="option-button" data-value="cashmere">Cashmere (+${formatCurrency(parquetUpgrades.cashmere)})</div><div class="option-button" data-value="hazelnut">Hazelnut (+${formatCurrency(parquetUpgrades.hazelnut)})</div>`;
        }
        parquetContainer.innerHTML = parquetHtml;

        const floorplanSelect = document.getElementById('floorplan-title-select');
        const floorplans = offerData.models[selectionState.model].images.floorplan;
        floorplanSelect.innerHTML = ''; // Clear previous options

        Object.keys(floorplans).forEach(planId => {
            const option = document.createElement('option');
            option.value = planId;
            option.textContent = floorplans[planId].name;
            floorplanSelect.appendChild(option);
        });

        // Add the custom upload option
        const customOption = document.createElement('option');
        customOption.value = 'custom';
        customOption.textContent = 'Plan personalizat';
        floorplanSelect.appendChild(customOption);

        if(!floorplanSelect.querySelector(`[value="${selectionState.floorplan}"]`)){
            if (selectionState.floorplan !== 'custom') {
                selectionState.floorplan = floorplanSelect.options[0].value;
            }
        }
        floorplanSelect.value = selectionState.floorplan;
    }

    // --- INITIALIZATION ---
    function initialize() {
        const params = new URLSearchParams(window.location.search);

        // Restore state from URL or use defaults
        selectionState.model = params.get('model') || selectionState.model;
        selectionState.finish = params.get('finish') || selectionState.finish;
        selectionState.facade = params.get('facade') || selectionState.facade;
        selectionState.floorplan = params.get('floorplan') || selectionState.floorplan;
        selectionState.blinds = params.get('blinds') === 'false' ? false : true;
        selectionState.ventilation = params.get('ventilation') === 'false' ? false : true;
        selectionState.parquet = params.get('parquet') || (selectionState.finish === 'turnkey' ? 'cashmere' : 'osb');

        selectionState.clientName = params.get('clientName') || selectionState.clientName;
        selectionState.offerNr = params.get('offerNr') || null;
        selectionState.offerDate = params.get('offerDate') || selectionState.offerDate;
        selectionState.mentions = params.get('mentions') || selectionState.mentions;
        const urlBasePrice = params.get('basePriceOverride');
        if (urlBasePrice && urlBasePrice !== 'null') {
            selectionState.basePriceOverride = parseFloat(urlBasePrice);
        }

        // Set initial values for controls
        document.getElementById('model-name-select').innerHTML = Object.keys(offerData.models).map(id => `<option value="${id}">${offerData.models[id].name}</option>`).join('');
        document.getElementById('finish-text').innerHTML = `<option value="turnkey">La Cheie</option><option value="semi-finished">Semifinisat</option>`;
        document.querySelector('[data-upgrade-type="facade"] .option-group').innerHTML = `<div class="option-button" data-value="yakisugi">Yakisugi</div><div class="option-button" data-value="lunawood">Lunawood</div>`;

        document.getElementById('model-name-select').value = selectionState.model;
        document.getElementById('finish-text').value = selectionState.finish;
        document.getElementById('client-name').textContent = selectionState.clientName;

        if (selectionState.offerNr) {
            document.getElementById('offer-nr').textContent = selectionState.offerNr;
        } else {
            generateAndSetOfferId();
        }

        document.getElementById('offer-date').textContent = selectionState.offerDate;
        document.querySelector('.mentiuni-editable').textContent = selectionState.mentions;

        updateDynamicOptions();

        // --- EVENT LISTENERS ---
        const modelSelect = document.getElementById('model-name-select');
        modelSelect.addEventListener('change', (e) => {
            selectionState.model = e.target.value;
            selectionState.basePriceOverride = null;
            generateAndSetOfferId();
            updateDynamicOptions();
            updateOffer();
        });

        const finishSelect = document.getElementById('finish-text');
        finishSelect.addEventListener('change', (e) => {
            selectionState.finish = e.target.value;
            selectionState.basePriceOverride = null;
            if(selectionState.finish === 'turnkey'){
                selectionState.blinds = true;
                selectionState.ventilation = true;
                if(selectionState.parquet === 'osb') selectionState.parquet = 'cashmere';
            }
            generateAndSetOfferId();
            updateDynamicOptions();
            updateOffer();
        });

        const floorplanSelect = document.getElementById('floorplan-title-select');
        const customUploadInput = document.getElementById('custom-floorplan-upload');

        floorplanSelect.addEventListener('change', () => {
            const selectedValue = floorplanSelect.value;
            if (selectedValue === 'custom') {
                customUploadInput.setAttribute('data-previous-plan', selectionState.floorplan);
                customUploadInput.click();
            } else {
                selectionState.floorplan = selectedValue;
                updateOffer();
            }
        });

        customUploadInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    document.getElementById('floorplan-image').src = event.target.result;
                    selectionState.floorplan = 'custom';
                    updateOffer(); // Update to hide details pane
                    updateUrlParams();
                };
                reader.readAsDataURL(file);
            } else {
                // If user cancels or selects a non-image, revert dropdown to previous state
                const previousPlan = customUploadInput.getAttribute('data-previous-plan') || 'a';
                floorplanSelect.value = previousPlan;
            }
            e.target.value = null; // Reset input to allow re-selection of the same file
        });

        document.getElementById('upgrades-column').addEventListener('click', (e) => {
            const button = e.target.closest('.option-button');
            const clickableItem = e.target.closest('.upgrade-item.clickable');
            let needsUpdate = false;
            let priceChanged = false;

            if (button) {
                const parent = button.closest('.upgrade-item');
                const type = parent.dataset.upgradeType;
                const value = button.dataset.value;
                if (selectionState[type] !== value) {
                    selectionState[type] = value;
                    if (type === 'parquet' && selectionState.finish === 'semi-finished') priceChanged = true;
                    needsUpdate = true;
                }
            } else if (clickableItem) {
                const id = clickableItem.dataset.upgradeId;
                if (selectionState.finish === 'semi-finished') {
                    selectionState[id] = !selectionState[id];
                    priceChanged = true;
                    needsUpdate = true;
                }
            }

            if (priceChanged) selectionState.basePriceOverride = null;
            if (needsUpdate) updateOffer();
        });

        const addStateUpdateListener = (element, stateKey) => {
            if (element) {
                element.addEventListener('input', () => {
                    selectionState[stateKey] = element.textContent;
                    updateUrlParams();
                });
            }
        };
        addStateUpdateListener(document.getElementById('client-name'), 'clientName');
        addStateUpdateListener(document.getElementById('offer-nr'), 'offerNr');
        addStateUpdateListener(document.getElementById('offer-date'), 'offerDate');

        const mentionsEl = document.querySelector('.mentiuni-editable');
        mentionsEl.addEventListener('input', () => {
            selectionState.mentions = mentionsEl.textContent;
            recalculateTotals();
            updateUrlParams();
        });


   initLanguageSelector();


        updateOffer();
    }

    initialize();
});
