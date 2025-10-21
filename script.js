document.addEventListener("DOMContentLoaded", () => {
  // --- LANGUAGE AND TRANSLATION ---
  let currentLang = "ro";
  const translations = {
    ro: {
      pageTitle: "Oferta Generata - Biobuilds",
      validity: "VALABILITATE: 30 ZILE",
      offerLabel: "OFERTA",
      offerFor: "Ofertă-",
      clientNamePlaceholder: "Nume Client",
      footerSlogan:
        "Modular este modern, inovator și sustenabil. Alege spațiul ideal pentru tine, construit la cele mai înalte standarde de construcție din lume.",
      passiveHouseQuote:
        ""Modulele sunt fixate cu șuruburi de oțel, apoi acoperite cu o membrană impermeabilă și placate cu lemn durabil. Sistemul este prefabricat în fabrica BioBuilds, oferind livrare rapidă și timpi scurți de asamblare. Sistemul de construcție este certificat Passivhaus, având valori U excepționale și eliminând punțile termice."",
      energyConsumptionLabel: "Consum de energie:",
      energyConsumptionValue: ">90% redus",
      co2Saved: "Tone de CO₂ salvate",
      co2Lifespan: "pe durata de viață a clădirii",
      organicWood:
        "Structură și sistem pe bază de <strong>lemn organic</strong>, cu certificare EPD",
      lowerEnergy:
        "Consum de energie cu <strong>95% mai mic</strong>, datorită sistemului Modular",
      turnkeyTitle: "LA CHEIE",
      interiorFinishes: "FINISAJE INTERIOARE COMPLETE",
      woodSlatCeilingTitle: "Tavan cu lamele din lemn + fetru",
      woodSlatCeilingDesc:
        "Lemn natural și fetru reciclat; absorbție acustică excelentă.",
      fiberglassWallpaperTitle: "Tapet din fibră de sticlă",
      fiberglassWallpaperDesc:
        "Rezistență foarte mare la tracțiune și uzură; lavabil; aspect modern.",
      parquetTitle: "Parchet triplustratificat din lemn natural",
      parquetDesc:
        "Grosime 9–14 mm; lemn certificat FSC/PEFC; finisaj foarte durabil.",
      s10DoorsTitle: "Uși interioare S10",
      s10DoorsDesc: "Certificate CE; Interior solid.",
      bathroomFinishes: "FINISAJE COMPLETE BAIE",
      stoneCompositePanelsTitle: "Plăci din compozit de piatră",
      stoneCompositePanelsDesc:
        "Plăci întregi premium de 2.5 × 1.2 m; 100% impermeabile; rezistență foarte mare în timp.",
      italianSinkTitle: "Lavoar cu design italian",
      italianSinkDesc:
        "Material compozit premium; ultra-subțire, modern și durabil.",
      groheWCTitle: "WC suspendat Grohe",
      groheWCDesc: "Produs în Germania; design minimalist, modern.",
      aristonBoilerTitle: "Boiler Ariston Velis",
      aristonBoilerDesc: "Design ultra-subțire; eficiență energetică ridicată.",
      walkInShowerTitle: "Duș walk-in",
      walkInShowerDesc: "Proiectat în Franța; design minimalist, modern.",
      smartSystems: "SISTEME SMART",
      lightingTrackTitle: "Șină de iluminat",
      lightingTrackDesc:
        "Configurare flexibilă pentru LED și spoturi; estetică modernă.",
      smartLightingTitle: "Iluminat Smart",
      smartLightingDesc:
        "Philips HUE sau IKEA TRÅDFRI; configurare Smart ușoară.",
      smartBlindsTitle: "Jaluzele exterioare Smart",
      smartBlindsDesc:
        "Blochează > 95% din radiația solară; control prin aplicație/manual; certificate de Institutul de Case Pasive din Darmstadt, Germania; certificate CE.",
      ventilationSystemTitle: "Genvex Premium Preheat 250",
      ventilationSystemDesc:
        "Recuperare de căldură de până la 95%; pompă de căldură integrată pentru încălzire și răcire.",
      upgradesAndDelivery: "Upgrades & Livrare",
      delivery: "Livrare",
      deliveryCost: "Costul transportului depinde de locație.",
      screwFoundation: "Fundație pe șuruburi (opțional)",
      deliveryTime:
        "Livrarea și instalarea durează între 1 și 5 zile. În cazuri speciale, când proiectul necesită echipamente suplimentare, orice cost suplimentar va fi comunicat transparent.",
      addOns: "Aditionale",
      facade: "Fațadă",
      parquetUpgradeLabel: "Parchet",
      smartBlindsTitleUpgrade: "Jaluzele exterioare Smart",
      smartBlindsDescUpgrade:
        "Blochează peste 95% din radiația solară, controlate prin aplicație sau manual.",
      ventilationSystemTitleUpgrade: "Sistem de ventilație",
      solarPanelsTitleUpgrade: "Panouri solare",
      solarPanelsDescUpgrade: "Produc cu 60% mai multă energie decât consumă casa anual.",
      notesLabel: "Mențiuni:",
      termsAndConditions:
        "Această ofertă este supusă termenilor și condițiilor aplicabile, care pot fi consultate la biobuilds.com/TC. Continuând, confirmați că le înțelegeți și le acceptați.",
      totalLabel: "TOTAL",
      vatLabel: "+TVA",
      turnkey: "La Cheie",
      "semi-finished": "Semifinisat",
      plan: "Plan",
      customPlan: "Plan personalizat",
      osbStandard: "OSB (Standard)",
      included: "(Inclus)",
      dimensions: "Dimensiuni",
      totalArea: "Suprafață Totală",
      interiorDimensions: "Dimensiuni Interioare",
      exteriorDimensions: "Dimensiuni Exterioare",
      rooms: "Camere",
      Dormitor: "Dormitor",
      Baie: "Baie",
      "Depozitare / Chichinetă": "Depozitare / Chichinetă",
      "Living + Bucătărie": "Living + Bucătărie",
      "Dormitor 1": "Dormitor 1",
      "Dormitor 2": "Dormitor 2",
      "Dormitor 3": "Dormitor 3",
      "Dormitor 4": "Dormitor 4",
      "Baie 1": "Baie 1",
      "Baie 2": "Baie 2",
      Hol: "Hol",
      s2_modular: "MODULAR",
      s2_structure: "STRUCTURĂ",
      s2_modularStructure_title: "Structura MODULAR",
      s2_modularStructure_desc:
        "Combină rezistența mecanică remarcabilă cu proprietăți de ultra-izolare ce elimină complet punțile termice. Certificată de Institutul de Case Pasive din Darmstadt, Germania și de EPD International. U ≈ 0,11 W/m²K, U-wert.",
      s2_c24Frame_title: "Cadru din lemn C24",
      s2_c24Frame_desc:
        "Lemn C24 cu certificare FSC/PEFC; rezistență foarte mare la sarcina structurală.",
      s2_woodInsulation_title: "Izolație din fibră de lemn ultra-eficientă",
      s2_woodInsulation_desc:
        "Izolație pentru pereți, acoperiș și podea; fibră de lemn ultra-eficientă STEICO λ ≈ 0,036 W/m·K; certificată CE.",
      s2_osb_title: "OSB 3 ECO, Germania",
      s2_osb_desc:
        "Panou structural fără formaldehidă și VOC, aprobat de Institutul de Case Pasive din Darmstadt, Germania; certificat CE.",
      s2_dwd_title: "Placă DWD, Austria",
      s2_dwd_desc:
        "Permeabilă la vapori (permite pereților să „respire" menținându-i etanși la aer din exterior; unidirecțional); certificată CE.",
      s2_smartMembrane_title: "Membrană Smart (folie)",
      s2_smartMembrane_desc:
        "Creează un interior etanș la aer, permițând difuzia vaporilor spre exterior. Certificată de Institutul de Case Pasive din Darmstadt, Germania; certificată CE.",
      s2_exteriorFinishes: "FINISAJE EXTERIOARE COMPLETE",
      s2_facadeYakisugi_title: "Fațadă ventilată Yakisugi",
      s2_facadeYakisugi_desc:
        "Mentenanță estimată o dată la 10 ani; Cea mai bună rezistență la foc din clasa de lemn natural; impermeabilă.",
      s2_facadeLunawood_title: "Fațadă Lunawood",
      s2_facadeLunawood_desc:
        "O fațadă din pin nordic, tratată termic fără chimicale, pentru o durabilitate excepțională, stabilitate și o nuanță caldă de caramel.",
      s2_ventRoof_title: "Acoperiș ventilat",
      s2_ventRoof_desc:
        "Spațiul ventilat crește performanța termică și durata de viață a acoperișului.",
      s2_epdmMembrane_title: "Membrană EPDM",
      s2_epdmMembrane_desc:
        "Impermeabilă; garanție de 30 de ani de la producător.",
      s2_rainwater_title: "Sistem de colectare a apei pluviale",
      s2_rainwater_desc:
        "Jgheab ascuns integrat în fațadă; pregătit pentru colectare.",
      s2_windowsDoors: "FERESTRE ȘI UȘI EXTERIOARE",
      s2_genesisFrame_title: "Cadru din aluminiu Genesis 90",
      s2_genesisFrame_desc:
        "Profil rigid, ultra-eficient; Uwi ≤ 0,85 W/m²K; certificat de Institutul de Case Pasive din Darmstadt, Germania; certificat CE.",
      s2_tripleGlazing_title: "Geam tripan laminat",
      s2_tripleGlazing_desc:
        "U = 0,50 W/m²K; sticlă securizată laminată; certificat de Institutul de Case Pasive din Darmstadt, Germania; certificat CE.",
      s2_kitchen: "BUCĂTĂRIE",
      s2_kitchenInstall_title: "Instalații pentru bucătărie",
      s2_kitchenInstall_desc:
        "Complet pregătite pe poziție pentru mobilierul tău.",
      s2_installations: "INSTALAȚII",
      s2_electrical_title: "Instalații electrice",
      s2_electrical_desc:
        "Cabluri și copex complet instalate, conforme cu toate reglementările locale aplicabile (ex. CE / Standardul I7/2011 / IEC 60364).",
      s2_plumbing_title: "Instalații sanitare",
      s2_plumbing_desc:
        "Țevi și fitinguri conforme cu toate reglementările locale necesare. PPR / PEX.",
      s2_certs: "CERTIFICĂRI & GARANȚII",
      s2_passivhaus_title: "Certificare Passivhaus",
      s2_passivhaus_desc:
        "Emitent: Institutul de Case Pasive din Darmstadt, Germania.",
      s2_epd_title: "Certificare EPD",
      s2_epd_desc: "Emitent: EPD, Europa.",
      s2_ce_title: "Marcaj CE",
      s2_ce_desc:
        "Toate componentele relevante respectă Regulamentul UE privind produsele pentru construcții.",
      s2_warranty_title: "Garanție standard UE",
      s2_warranty_desc:
        "24 de luni pentru uz privat; 12 luni pentru uz comercial.",
      timeline_online: "Online",
      timeline_offer: "Ofertă",
      timeline_reservation: "Rezervare",
      timeline_payment10: "10% Plată",
      timeline_preproduction: "Pre-producție",
      timeline_payment40: "40% Plată",
      timeline_production: "Producție",
      timeline_payment40_2: "40% Plată",
      timeline_delivery: "Livrare",
      timeline_payment10_final: "10% Plată",
    },
    en: {
      pageTitle: "Generated Offer - Biobuilds",
      validity: "VALIDITY: 30 DAYS",
      offerLabel: "OFFER",
      offerFor: "Offer-",
      clientNamePlaceholder: "Client Name",
      footerSlogan:
        "Modular is modern, innovative, and sustainable. Choose the ideal space for you, built to the highest construction standards in the world.",
      passiveHouseQuote:
        ""The modules are fixed with steel screws, then covered with a waterproof membrane and clad in durable wood. The system is prefabricated in the BioBuilds factory, offering fast delivery and short assembly times. The construction system is Passivhaus certified, having exceptional U-values and eliminating thermal bridges."",
      energyConsumptionLabel: "Energy Consumption:",
      energyConsumptionValue: ">90% reduced",
      co2Saved: "Tons of CO₂ saved",
      co2Lifespan: "over the building's lifespan",
      organicWood:
        "Structure and system based on <strong>organic wood</strong>, with EPD certification",
      lowerEnergy:
        "<strong>95% lower</strong> energy consumption, thanks to the Modular system",
      turnkeyTitle: "TURNKEY",
      interiorFinishes: "COMPLETE INTERIOR FINISHES",
      woodSlatCeilingTitle: "Wood slat + felt ceiling",
      woodSlatCeilingDesc:
        "Natural wood and recycled felt; excellent acoustic absorption.",
      fiberglassWallpaperTitle: "Fiberglass wallpaper",
      fiberglassWallpaperDesc:
        "Very high tensile strength and wear resistance; washable; modern look.",
      parquetTitle: "Triple-layered natural wood parquet",
      parquetDesc:
        "9–14 mm thickness; FSC/PEFC certified wood; very durable finish.",
      s10DoorsTitle: "S10 interior doors",
      s10DoorsDesc: "CE certified; Solid core.",
      bathroomFinishes: "COMPLETE BATHROOM FINISHES",
      stoneCompositePanelsTitle: "Stone composite panels",
      stoneCompositePanelsDesc:
        "Premium full-size panels of 2.5 × 1.2 m; 100% waterproof; very high durability over time.",
      italianSinkTitle: "Italian design sink",
      italianSinkDesc:
        "Premium composite material; ultra-thin, modern, and durable.",
      groheWCTitle: "Grohe suspended toilet",
      groheWCDesc: "Made in Germany; minimalist, modern design.",
      aristonBoilerTitle: "Ariston Velis boiler",
      aristonBoilerDesc: "Ultra-slim design; high energy efficiency.",
      walkInShowerTitle: "Walk-in shower",
      walkInShowerDesc: "Designed in France; minimalist, modern design.",
      smartSystems: "SMART SYSTEMS",
      lightingTrackTitle: "Lighting track",
      lightingTrackDesc:
        "Flexible configuration for LEDs and spotlights; modern aesthetic.",
      smartLightingTitle: "Smart Lighting",
      smartLightingDesc:
        "Philips HUE or IKEA TRÅDFRI; easy Smart configuration.",
      smartBlindsTitle: "Smart exterior blinds",
      smartBlindsDesc:
        "Block > 95% of solar radiation; app/manual control; certified by the Passive House Institute in Darmstadt, Germany; CE certified.",
      ventilationSystemTitle: "Genvex Premium Preheat 250",
      ventilationSystemDesc:
        "Heat recovery up to 95%; integrated heat pump for heating and cooling.",
      upgradesAndDelivery: "Upgrades & Delivery",
      delivery: "Delivery",
      deliveryCost: "Shipping cost depends on location.",
      screwFoundation: "Screw pile foundation (optional)",
      deliveryTime:
        "Delivery and installation take between 1 and 5 days. In special cases where the project requires additional equipment, any extra costs will be transparently communicated.",
      addOns: "Add-ons",
      facade: "Facade",
      parquetUpgradeLabel: "Parquet",
      smartBlindsTitleUpgrade: "Smart exterior blinds",
      smartBlindsDescUpgrade:
        "Block over 95% of solar radiation, controlled by app or manually.",
      ventilationSystemTitleUpgrade: "Ventilation system",
      solarPanelsTitleUpgrade: "Solar panels",
      solarPanelsDescUpgrade: "Produces 60% more energy than your home consumes annually.",
      notesLabel: "Notes:",
      termsAndConditions:
        "This offer is subject to the applicable terms and conditions, which can be viewed at biobuilds.com/TC. By proceeding, you confirm that you understand and accept them.",
      totalLabel: "TOTAL",
      vatLabel: "+VAT",
      turnkey: "Turnkey",
      "semi-finished": "Semi-finished",
      plan: "Plan",
      customPlan: "Custom plan",
      osbStandard: "OSB (Standard)",
      included: "(Included)",
      dimensions: "Dimensions",
      totalArea: "Total Area",
      interiorDimensions: "Internal Dimensions",
      exteriorDimensions: "External Dimensions",
      rooms: "Rooms",
      Dormitor: "Bedroom",
      Baie: "Bathroom",
      "Depozitare / Chichinetă": "Storage / Kitchenette",
      "Living + Bucătărie": "Living + Kitchen",
      "Dormitor 1": "Bedroom 1",
      "Dormitor 2": "Bedroom 2",
      "Dormitor 3": "Bedroom 3",
      "Dormitor 4": "Bedroom 4",
      "Baie 1": "Bathroom 1",
      "Baie 2": "Bathroom 2",
      Hol: "Hallway",
      s2_modular: "MODULAR",
      s2_structure: "STRUCTURE",
      s2_modularStructure_title: "MODULAR Structure",
      s2_modularStructure_desc:
        "Combines remarkable mechanical strength with ultra-insulating properties that completely eliminate thermal bridges. Certified by the Passive House Institute in Darmstadt, Germany, and by EPD International. U ≈ 0.11 W/m²K, U-wert.",
      s2_c24Frame_title: "C24 Timber Frame",
      s2_c24Frame_desc:
        "C24 wood with FSC/PEFC certification; very high resistance to structural load.",
      s2_woodInsulation_title: "Ultra-efficient Wood Fiber",
      s2_woodInsulation_desc:
        "Insulation for walls, roof, and floor; ultra-efficient STEICO wood fiber λ ≈ 0.036 W/m·K; CE certified.",
      s2_osb_title: "OSB 3 ECO, Germany",
      s2_osb_desc:
        "Formaldehyde and VOC-free structural panel, approved by the Passive House Institute in Darmstadt, Germany; CE certified.",
      s2_dwd_title: "DWD Board, Austria",
      s2_dwd_desc:
        'Vapor permeable (allows walls to "breathe" while keeping them airtight from the outside; unidirectional); CE certified.',
      s2_smartMembrane_title: "Smart Membrane (foil)",
      s2_smartMembrane_desc:
        "Creates an airtight interior, allowing vapor diffusion to the outside. Certified by the Passive House Institute in Darmstadt, Germany; CE certified.",
      s2_exteriorFinishes: "COMPLETE EXTERIOR FINISHES",
      s2_facadeYakisugi_title: "Yakisugi Ventilated Facade",
      s2_facadeYakisugi_desc:
        "Maintenance estimated once every 10 years; Best fire resistance in its class of natural wood; waterproof.",
      s2_facadeLunawood_title: "Lunawood Facade",
      s2_facadeLunawood_desc:
        "A Nordic pine facade, heat-treated without chemicals for exceptional durability, stability, and a warm caramel hue.",
      s2_ventRoof_title: "Ventilated Roof",
      s2_ventRoof_desc:
        "The ventilated space increases thermal performance and the lifespan of the roof.",
      s2_epdmMembrane_title: "EPDM Membrane",
      s2_epdmMembrane_desc: "Waterproof; 30-year manufacturer warranty.",
      s2_rainwater_title: "Rainwater Collection System",
      s2_rainwater_desc:
        "Hidden gutter integrated into the facade; ready for collection.",
      s2_windowsDoors: "WINDOWS AND EXTERIOR DOORS",
      s2_genesisFrame_title: "Genesis 90 Aluminum Frame",
      s2_genesisFrame_desc:
        "Rigid, ultra-efficient profile; Uwi ≤ 0.85 W/m²K; certified by the Passive House Institute in Darmstadt, Germany; CE certified.",
      s2_tripleGlazing_title: "Laminated Triple Glazing",
      s2_tripleGlazing_desc:
        "U = 0.50 W/m²K; laminated safety glass; certified by the Passive House Institute in Darmstadt, Germany; CE certified.",
      s2_kitchen: "KITCHEN",
      s2_kitchenInstall_title: "Kitchen Installations",
      s2_kitchenInstall_desc: "Fully prepared in position for your furniture.",
      s2_installations: "INSTALLATIONS",
      s2_electrical_title: "Electrical Installations",
      s2_electrical_desc:
        "Cables and conduits fully installed, compliant with all applicable local regulations (e.g., CE / I7/2011 Standard / IEC 60364).",
      s2_plumbing_title: "Plumbing Installations",
      s2_plumbing_desc:
        "Pipes and fittings compliant with all necessary local regulations. PPR / PEX.",
      s2_certs: "CERTIFICATIONS & WARRANTIES",
      s2_passivhaus_title: "Passivhaus Certification",
      s2_passivhaus_desc:
        "Issuer: Passive House Institute, Darmstadt, Germany.",
      s2_epd_title: "EPD Certification",
      s2_epd_desc: "Issuer: EPD, Europe.",
      s2_ce_title: "CE Marking",
      s2_ce_desc:
        "All relevant components comply with the EU Construction Products Regulation.",
      s2_warranty_title: "Standard EU Warranty",
      s2_warranty_desc:
        "24 months for private use; 12 months for commercial use.",
      timeline_online: "Online",
      timeline_offer: "Offer",
      timeline_reservation: "Reservation",
      timeline_payment10: "10% Payment",
      timeline_preproduction: "Pre-production",
      timeline_payment40: "40% Payment",
      timeline_production: "Production",
      timeline_payment40_2: "40% Payment",
      timeline_delivery: "Delivery",
      timeline_payment10_final: "10% Payment",
    },
    de: {
      pageTitle: "Angebot Erstellt – Biobuilds",
      validity: "GÜLTIGKEIT: 30 TAGE",
      offerLabel: "ANGEBOT",
      offerFor: "Angebot–",
      clientNamePlaceholder: "Kunde Name",
      footerSlogan:
        "Modular ist modern, innovativ und nachhaltig. Wählen Sie den idealen Raum für sich, gebaut nach den höchsten Baustandards der Welt.",
      passiveHouseQuote:
        "„Die Module werden mit Stahlschrauben fixiert, anschließend mit einer wasserdichten Membran abgedeckt und mit langlebigem Holz verkleidet. Das System wird im BioBuilds-Werk vorgefertigt und ermöglicht schnelle Lieferung und kurze Montagezeiten. Das Bausystem ist vom Passivhaus Institut zertifiziert, weist außergewöhnliche U-Werte auf und eliminiert Wärmebrücken."",
      energyConsumptionLabel: "Energieverbrauch:",
      energyConsumptionValue: "90 % reduziert",
      co2Saved: "Tonnen CO₂ eingespart",
      co2Lifespan: "über die Lebensdauer des Gebäudes",
      organicWood:
        "Struktur & System: auf <strong>organischem Holz</strong> basierend, mit EPD-Zertifizierung",
      lowerEnergy:
        "<strong>95 % geringerer</strong> Energieverbrauch dank des Modular-Systems",
      turnkeyTitle: "SCHLÜSSELFERTIG",
      interiorFinishes: "KOMPLETTE INNENAUSSTATTUNG",
      woodSlatCeilingTitle: "Holzlamellen + Filzdecke",
      woodSlatCeilingDesc:
        "Naturholz und Recycling-Filz; hervorragende Akustikdämpfung.",
      fiberglassWallpaperTitle: "Glasfasertapete",
      fiberglassWallpaperDesc:
        "Sehr hohe Reiß- und Abriebfestigkeit; abwaschbar; modernes Erscheinungsbild.",
      parquetTitle: "Dreischicht-Parkett",
      parquetDesc: "9–14 mm, FSC/PEFC-Holz; extrem langlebige Oberfläche.",
      s10DoorsTitle: "Innentüren S10",
      s10DoorsDesc: "CE-zertifiziert; Vollkern.",
      bathroomFinishes: "BADEZIMMERAUSSTATTUNG",
      stoneCompositePanelsTitle: "Steinverbundplatten",
      stoneCompositePanelsDesc:
        "Premium-Vollformatplatten 2,5 × 1,2 m; 100 % wasserdicht; sehr hohe Langlebigkeit.",
      italianSinkTitle: "Italienisches Design-Waschbecken",
      italianSinkDesc:
        "Premium-Verbundstoff; ultra-dünn, modern und langlebig.",
      groheWCTitle: "Grohe Hänge-WC",
      groheWCDesc: "Made in Germany; minimalistisches, modernes Design.",
      aristonBoilerTitle: "Ariston Velis Boiler",
      aristonBoilerDesc: "Ultra-schlankes Design; hohe Energieeffizienz.",
      walkInShowerTitle: "Walk-in-Dusche",
      walkInShowerDesc: "Design aus Frankreich; minimalistisch, modern.",
      smartSystems: "SMART-SYSTEME",
      lightingTrackTitle: "Lichtschiene",
      lightingTrackDesc:
        "Flexible Konfiguration für LEDs und Spots; moderne Ästhetik.",
      smartLightingTitle: "Smart Lighting",
      smartLightingDesc:
        "Philips HUE oder IKEA TRÅDFRI; einfache Smart-Konfiguration.",
      smartBlindsTitle: "Smart-Außenjalousien",
      smartBlindsDesc:
        "Blockieren >95 % der Sonneneinstrahlung; App- oder manuell steuerbar; zertifiziert vom Passivhaus Institut Darmstadt; CE.",
      ventilationSystemTitle: "Genvex Premium Preheat 250",
      ventilationSystemDesc:
        "Wärmerückgewinnung bis zu 95 %; integrierte Wärmepumpe zum Heizen und Kühlen.",
      upgradesAndDelivery: "Upgrades & Lieferung",
      delivery: "Lieferung",
      deliveryCost: "Lieferkosten abhängig vom Standort.",
      screwFoundation: "Schraubfundamente (optional)",
      deliveryTime:
        "Lieferung und Montage dauern zwischen 1 und 5 Tagen. In besonderen Fällen, in denen das Projekt zusätzliche Ausrüstung erfordert, werden alle Mehrkosten transparent kommuniziert.",
      addOns: "Zusätze",
      facade: "Fassaden",
      parquetUpgradeLabel: "Parkett",
      smartBlindsTitleUpgrade: "Smart-Außenjalousien",
      smartBlindsDescUpgrade:
        "Blockieren über 95 % der Sonneneinstrahlung, per App oder manuell steuerbar.",
      ventilationSystemTitleUpgrade: "Lüftungssystem",
      solarPanelsTitleUpgrade: "Solarpaneele",
      solarPanelsDescUpgrade: "Erzeugt 60 % mehr Energie als Ihr Haus jährlich verbraucht.",
      notesLabel: "Anmerkungen:",
      termsAndConditions:
        "Dieses Angebot unterliegt den geltenden AGB, einsehbar unter biobuilds.com/TC. Mit der Annahme bestätigen Sie, dass Sie diese verstanden und akzeptiert haben.",
      totalLabel: "GESAMT",
      vatLabel: "+ MwSt.",
      turnkey: "Schlüsselfertig",
      "semi-finished": "Teilfertig",
      plan: "Plan",
      customPlan: "Individueller Plan",
      osbStandard: "OSB (Standard)",
      included: "(Inklusive)",
      dimensions: "Dimensionen",
      totalArea: "Gesamtfläche",
      interiorDimensions: "Innenmaße",
      exteriorDimensions: "Außenmaße",
      rooms: "Räume",
      Dormitor: "Schlafzimmer",
      Baie: "Badezimmer",
      "Depozitare / Chichinetă": "Abstellraum / Kochnische",
      "Living + Bucătărie": "Wohnen + Küche",
      "Dormitor 1": "Schlafzimmer 1",
      "Dormitor 2": "Schlafzimmer 2",
      "Dormitor 3": "Schlafzimmer 3",
      "Dormitor 4": "Schlafzimmer 4",
      "Baie 1": "Badezimmer 1",
      "Baie 2": "Badezimmer 2",
      Hol: "Flur",
      s2_modular: "MODULAR",
      s2_structure: "STRUKTUR",
      s2_modularStructure_title: "MODULAR Struktur",
      s2_modularStructure_desc:
        "Kombiniert herausragende mechanische Festigkeit mit ultra-isolierenden Eigenschaften, die Wärmebrücken vollständig eliminieren. Zertifiziert durch das Passivhaus Institut Darmstadt und EPD International. U ≈ 0,11 W/m²K.",
      s2_c24Frame_title: "C24 Holzrahmen",
      s2_c24Frame_desc:
        "FSC/PEFC-zertifiziertes C24-Holz; sehr hohe Tragfähigkeit.",
      s2_woodInsulation_title: "Ultra-effiziente Holzfaserdämmung",
      s2_woodInsulation_desc:
        "Dämmung für Wände, Dach und Boden; hocheffiziente STEICO-Holzfaser λ ≈ 0,036 W/m·K; CE-zertifiziert.",
      s2_osb_title: "OSB 3 ECO, Deutschland",
      s2_osb_desc:
        "Frei von Formaldehyd und VOC; vom Passivhaus Institut Darmstadt freigegeben; CE-zertifiziert.",
      s2_dwd_title: "DWD-Platte, Österreich",
      s2_dwd_desc:
        "Dampfdurchlässig (ermöglicht „atmende" Wände, bleibt aber außen luftdicht, unidirektional); CE-zertifiziert.",
      s2_smartMembrane_title: "Intelligente Membran (Folie)",
      s2_smartMembrane_desc:
        "Sorgt für eine luftdichte Innenhülle und ermöglicht gleichzeitig Dampfdiffusion nach außen. Zertifiziert vom Passivhaus Institut Darmstadt; CE.",
      s2_exteriorFinishes: "KOMPLETTE AUSSENFERTIGUNG",
      s2_facadeYakisugi_title: "Yakisugi hinterlüftete Fassade",
      s2_facadeYakisugi_desc:
        "Wartung nur ca. alle 10 Jahre; beste Feuerbeständigkeit in ihrer Klasse; wasserdicht.",
      s2_facadeLunawood_title: "Lunawood Fassade",
      s2_facadeLunawood_desc:
        "Fassade aus nordischer Kiefer, ohne Chemikalien wärmebehandelt, für außergewöhnliche Haltbarkeit, Stabilität und warmen Karamellton.",
      s2_ventRoof_title: "Hinterlüftetes Dach",
      s2_ventRoof_desc:
        "Der belüftete Zwischenraum erhöht die thermische Leistung und die Lebensdauer des Daches.",
      s2_epdmMembrane_title: "EPDM-Membran",
      s2_epdmMembrane_desc: "Wasserdicht; 30 Jahre Herstellergarantie.",
      s2_rainwater_title: "Regenwassersammelsystem",
      s2_rainwater_desc:
        "Verdeckte Dachrinne, in die Fassade integriert; sammelbereit.",
      s2_windowsDoors: "FENSTER UND AUSSENTÜREN",
      s2_genesisFrame_title: "Genesis 90 Aluminiumrahmen",
      s2_genesisFrame_desc:
        "Stabiles, hocheffizientes Profil; Uwi ≤ 0,85 W/m²K; zertifiziert vom Passivhaus Institut Darmstadt; CE.",
      s2_tripleGlazing_title: "Verbund-Dreifachverglasung",
      s2_tripleGlazing_desc:
        "U = 0,50 W/m²K; Verbundsicherheitsglas; Passivhaus Institut Darmstadt zertifiziert; CE.",
      s2_kitchen: "KÜCHE",
      s2_kitchenInstall_title: "Kücheninstallationen",
      s2_kitchenInstall_desc:
        "Anschlüsse vollständig vorbereitet, Möbel frei wählbar.",
      s2_installations: "INSTALLATIONEN",
      s2_electrical_title: "Elektroinstallationen",
      s2_electrical_desc:
        "Vollständig verlegt, gemäß geltenden Normen (CE / I7/2011 / IEC 60364).",
      s2_plumbing_title: "Sanitärinstallationen",
      s2_plumbing_desc:
        "Leitungen und Anschlüsse PPR/PEX, konform mit lokalen Vorschriften.",
      s2_certs: "ZERTIFIKATE & GARANTIEN",
      s2_passivhaus_title: "Passivhaus-Zertifizierung",
      s2_passivhaus_desc:
        "Aussteller: Passivhaus Institut, Darmstadt, Deutschland.",
      s2_epd_title: "EPD-Zertifikat",
      s2_epd_desc: "Aussteller: EPD Europe.",
      s2_ce_title: "CE-Kennzeichnung",
      s2_ce_desc:
        "Alle relevanten Komponenten erfüllen die EU-Bauprodukteverordnung.",
      s2_warranty_title: "Standard EU-Garantie",
      s2_warranty_desc:
        "24 Monate für private Nutzung; 12 Monate für gewerbliche Nutzung.",
      timeline_online: "Online",
      timeline_offer: "Angebot",
      timeline_reservation: "Reservierung",
      timeline_payment10: "10% Zahlung",
      timeline_preproduction: "Vorproduktion",
      timeline_payment40: "40% Zahlung",
      timeline_production: "Produktion",
      timeline_payment40_2: "40% Zahlung",
      timeline_delivery: "Lieferung",
      timeline_payment10_final: "10% Zahlung",
    },
    fr: {
      pageTitle: "Offre générée - Biobuilds",
      validity: "VALIDITÉ : 30 JOURS",
      offerLabel: "OFFRE",
      offerFor: "Offre -",
      clientNamePlaceholder: "Nom du client",
      footerSlogan:
        "Le modulaire est moderne, innovant et durable. Choisissez l'espace idéal pour vous, construit selon les standards de construction les plus élevés au monde.",
      passiveHouseQuote:
        "« Les modules sont fixés avec des vis en acier, puis recouverts d'une membrane étanche et bardés de bois durable. Le système est préfabriqué dans l'usine BioBuilds, offrant une livraison rapide et des temps de montage courts. Le système constructif est certifié Passivhaus, présente des valeurs U exceptionnelles et élimine les ponts thermiques. »",
      energyConsumptionLabel: "Consommation d'énergie :",
      energyConsumptionValue: "> 90 % de moins",
      co2Saved: "Tonnes de CO₂ économisées",
      co2Lifespan: "sur la durée de vie du bâtiment",
      organicWood:
        "Structure et système en <strong>bois naturel</strong>, avec certification EPD",
      lowerEnergy:
        "<strong>95 % de consommation en moins</strong> grâce au système modulaire",
      turnkeyTitle: "CLÉ EN MAIN",
      interiorFinishes: "FINITIONS INTÉRIEURES COMPLÈTES",
      woodSlatCeilingTitle: "Plafond à lames de bois + feutre",
      woodSlatCeilingDesc:
        "Bois naturel et feutre recyclé ; excellente absorption acoustique.",
      fiberglassWallpaperTitle: "Toile de verre",
      fiberglassWallpaperDesc:
        "Très haute résistance à la traction et à l'usure ; lavable ; rendu moderne.",
      parquetTitle: "Parquet en bois naturel trois couches",
      parquetDesc:
        "Épaisseur 9 à 14 mm ; bois certifié FSC/PEFC ; finition très durable.",
      s10DoorsTitle: "Portes intérieures S10",
      s10DoorsDesc: "Certifiées CE ; âme pleine.",
      bathroomFinishes: "FINITIONS DE SALLE DE BAINS COMPLÈTES",
      stoneCompositePanelsTitle: "Panneaux en composite de pierre",
      stoneCompositePanelsDesc:
        "Panneaux grand format 2,5 × 1,2 m ; 100 % étanches ; très durables dans le temps.",
      italianSinkTitle: "Vasque design italien",
      italianSinkDesc:
        "Matériau composite premium ; ultra-fine, moderne et durable.",
      groheWCTitle: "WC suspendu Grohe",
      groheWCDesc: "Fabriqué en Allemagne ; design minimaliste et moderne.",
      aristonBoilerTitle: "Chauffe-eau Ariston Velis",
      aristonBoilerDesc: "Design ultra-fin ; haute efficacité énergétique.",
      walkInShowerTitle: "Douche à l'italienne",
      walkInShowerDesc: "Conçue en France ; design minimaliste et moderne.",
      smartSystems: "SYSTÈMES INTELLIGENTS",
      lightingTrackTitle: "Rail d'éclairage",
      lightingTrackDesc:
        "Configuration flexible pour LED et spots ; esthétique moderne.",
      smartLightingTitle: "Éclairage intelligent",
      smartLightingDesc:
        "Philips Hue ou IKEA TRÅDFRI ; configuration domotique simple.",
      smartBlindsTitle: "Stores extérieurs intelligents",
      smartBlindsDesc:
        "Bloque > 95 % du rayonnement solaire ; commande par application ou manuelle ; certifié par le Passive House Institute de Darmstadt, Allemagne ; marquage CE.",
      ventilationSystemTitle: "Genvex Premium Preheat 250",
      ventilationSystemDesc:
        "Récupération de chaleur jusqu'à 95 % ; pompe à chaleur intégrée pour chauffage et rafraîchissement.",
      upgradesAndDelivery: "Options et Livraison",
      delivery: "Livraison",
      deliveryCost: "Les frais de livraison dépendent de votre localisation.",
      screwFoundation: "Fondations sur pieux vissés (optionnel)",
      deliveryTime:
        "La livraison et l'installation prennent entre 1 et 5 jours. Dans les cas particuliers nécessitant des équipements supplémentaires, tout coût additionnel sera communiqué en toute transparence.",
      addOns: "Options",
      facade: "Façade",
      parquetUpgradeLabel: "Parquet",
      smartBlindsTitleUpgrade: "Stores extérieurs intelligents",
      smartBlindsDescUpgrade:
        "Bloque > 95 % du rayonnement solaire, commande via application ou manuelle.",
      ventilationSystemTitleUpgrade: "Système de ventilation",
      solarPanelsTitleUpgrade: "Panneaux solaires",
      solarPanelsDescUpgrade: "Produit 60 % d'énergie en plus que votre maison n'en consomme annuellement.",
      notesLabel: "Notes :",
      termsAndConditions:
        "Cette offre est soumise aux conditions générales applicables, consultables sur biobuilds.com/TC. En poursuivant, vous confirmez les avoir comprises et acceptées.",
      totalLabel: "TOTAL",
      vatLabel: "+ TVA",
      turnkey: "Clé en main",
      "semi-finished": "Prêt à finir",
      plan: "Plan",
      customPlan: "Plan personnalisé",
      osbStandard: "OSB (Standard)",
      included: "(Inclus)",
      dimensions: "Dimensions",
      totalArea: "Surface totale",
      interiorDimensions: "Dimensions intérieures",
      exteriorDimensions: "Dimensions extérieures",
      rooms: "Pièces",
      Dormitor: "Chambre",
      Baie: "Salle de bains",
      "Depozitare / Chichinetă": "Rangement / Kitchenette",
      "Living + Bucătărie": "Salon + Cuisine",
      "Dormitor 1": "Chambre 1",
      "Dormitor 2": "Chambre 2",
      "Dormitor 3": "Chambre 3",
      "Dormitor 4": "Chambre 4",
      "Baie 1": "Salle de bains 1",
      "Baie 2": "Salle de bains 2",
      Hol: "Couloir",
      s2_modular: "MODULAIRE",
      s2_structure: "STRUCTURE",
      s2_modularStructure_title: "Structure MODULAIRE",
      s2_modularStructure_desc:
        "Allie une résistance mécanique remarquable à des propriétés ultra-isolantes éliminant totalement les ponts thermiques. Certifiée par le Passive House Institute de Darmstadt, Allemagne, et par EPD International. U ≈ 0,11 W/m²K, valeur U.",
      s2_c24Frame_title: "Ossature bois C24",
      s2_c24Frame_desc:
        "Bois C24 certifié FSC/PEFC ; très haute résistance aux charges structurelles.",
      s2_woodInsulation_title: "Fibre de bois ultra-performante",
      s2_woodInsulation_desc:
        "Isolation des murs, du toit et du plancher ; fibre de bois STEICO ultra-performante λ ≈ 0,036 W/m·K ; certifiée CE.",
      s2_osb_title: "OSB 3 ECO, Allemagne",
      s2_osb_desc:
        "Panneau structurel sans formaldéhyde ni COV, approuvé par le Passive House Institute de Darmstadt, Allemagne ; certifié CE.",
      s2_dwd_title: "Panneau DWD, Autriche",
      s2_dwd_desc:
        "Perméable à la vapeur (laisse « respirer » les parois tout en assurant l'étanchéité à l'air depuis l'extérieur ; unidirectionnel) ; certifié CE.",
      s2_smartMembrane_title: "Membrane intelligente (film)",
      s2_smartMembrane_desc:
        "Crée une étanchéité à l'air intérieure tout en permettant la diffusion de vapeur vers l'extérieur. Certifiée par le Passive House Institute de Darmstadt, Allemagne ; certifiée CE.",
      s2_exteriorFinishes: "FINITIONS EXTÉRIEURES COMPLÈTES",
      s2_facadeYakisugi_title: "Façade ventilée Yakisugi",
      s2_facadeYakisugi_desc:
        "Entretien estimé tous les 10 ans ; meilleure résistance au feu de sa catégorie en bois naturel ; étanche.",
      s2_facadeLunawood_title: "Façade Lunawood",
      s2_facadeLunawood_desc:
        "Façade en pin nordique, traitée thermiquement sans produits chimiques pour une durabilité et une stabilité exceptionnelles, teinte caramel chaleureuse.",
      s2_ventRoof_title: "Toiture ventilée",
      s2_ventRoof_desc:
        "L'espace ventilé augmente la performance thermique et la durée de vie de la toiture.",
      s2_epdmMembrane_title: "Membrane EPDM",
      s2_epdmMembrane_desc: "Étanchéité ; garantie fabricant 30 ans.",
      s2_rainwater_title: "Système de collecte des eaux pluviales",
      s2_rainwater_desc:
        "Gouttière dissimulée intégrée à la façade ; prête pour la récupération.",
      s2_windowsDoors: "FENÊTRES ET PORTES EXTÉRIEURES",
      s2_genesisFrame_title: "Châssis aluminium Genesis 90",
      s2_genesisFrame_desc:
        "Profil rigide et ultra-performant ; Uwi ≤ 0,85 W/m²K ; certifié par le Passive House Institute de Darmstadt, Allemagne ; marquage CE.",
      s2_tripleGlazing_title: "Vitrage triple feuilleté",
      s2_tripleGlazing_desc:
        "U = 0,50 W/m²K ; verre feuilleté de sécurité ; certifié par le Passive House Institute de Darmstadt, Allemagne ; marquage CE.",
      s2_kitchen: "CUISINE",
      s2_kitchenInstall_title: "Raccordements cuisine",
      s2_kitchenInstall_desc:
        "Entièrement préparés en position pour votre mobilier.",
      s2_installations: "INSTALLATIONS",
      s2_electrical_title: "Installations électriques",
      s2_electrical_desc:
        "Câbles et gaines entièrement posés, conformes aux réglementations locales applicables (p. ex. CE / Norme I7/2011 / IEC 60364).",
      s2_plumbing_title: "Installations de plomberie",
      s2_plumbing_desc:
        "Tuyauteries et raccords conformes aux réglementations locales nécessaires. PPR / PEX.",
      s2_certs: "CERTIFICATIONS ET GARANTIES",
      s2_passivhaus_title: "Certification Passivhaus",
      s2_passivhaus_desc:
        "Émetteur : Passive House Institute, Darmstadt, Allemagne.",
      s2_epd_title: "Certification EPD",
      s2_epd_desc: "Émetteur : EPD, Europe.",
      s2_ce_title: "Marquage CE",
      s2_ce_desc:
        "Tous les composants concernés sont conformes au règlement européen sur les produits de construction.",
      s2_warranty_title: "Garantie standard UE",
      s2_warranty_desc:
        "24 mois pour usage privé ; 12 mois pour usage professionnel.",
      timeline_online: "En ligne",
      timeline_offer: "Offre",
      timeline_reservation: "Réservation",
      timeline_payment10: "10% Paiement",
      timeline_preproduction: "Pré-production",
      timeline_payment40: "40% Paiement",
      timeline_production: "Production",
      timeline_payment40_2: "40% Paiement",
      timeline_delivery: "Livraison",
      timeline_payment10_final: "10% Paiement",
    },
  };

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-key]").forEach((element) => {
      const key = element.getAttribute("data-key");
      if (translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });

    document.querySelectorAll("#language-selector a").forEach((a) => {
      a.classList.toggle("active", a.getAttribute("data-lang") === lang);
    });

    updateOffer();
  }

  // --- DATA STRUCTURES ---
  const offerData = {
    models: {
      "nomad-24": {
        name: "Nomad",
        co2Savings: "56.3",
        passiveImg:
          "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c6bdf250202676001401d_24m2.png",
        images: {
          facade: {
            yakisugi:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4339236794245a361e6b9_742d4a56b01c157fcfb78d250a5c284b_24m2%20Nomad%204.1.avif",
            lunawood:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283757ec629f34a599c8_24m2%20Nomad%20Lunawood%204.0.avif",
          },
          parquet: {
            cashmere:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283437fe5ebcf02aa7ab_24m2%20Nomad%20Interior%204.0.avif",
            hazelnut:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c43ad5d75d99a4806d7d4b_24m2%20Nomad%20Interior%20Hazelnut%204.0.avif",
          },
          semi_parquet: {
            osb: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f0499f53b61b42090_24m2%20Nomad%20OSB%204.0.avif",
            cashmere:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4388b838ef609a824c885_24m2%20Nomad%20OSB%20%2B%20Cashmere%204.0.avif",
            hazelnut:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4388ba91d0f79d44ce0d2_24m2%20Nomad%20OSB%20%2B%20Hazelnut%204.0.avif",
          },
          floorplan: {
            a: {
              name: "Plan A",
              url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c43d2244f5d6be3af87aab_24m2%20Floorplan%20A.avif",
              details: {
                totalArea: "24m²",
                interior: "5.70m x 3.10m x 2.50m",
                exterior: "6.40m x 3.80m x 3.20m",
                rooms: {
                  Dormitor: "14.20m²",
                  Baie: "2.65m²",
                  "Depozitare / Chichinetă": "0.80m²",
                },
              },
            },
            b: {
              name: "Plan B",
              url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c43d22e33276e515d43a8f_24m2%20Floorplan%20B.avif",
              details: {
                totalArea: "24m²",
                interior: "5.70m x 3.10m x 2.50m",
                exterior: "6.40m x 3.80m x 3.20m",
                rooms: {
                  Dormitor: "14.20m²",
                  Baie: "2.65m²",
                  "Depozitare / Chichinetă": "0.80m²",
                },
              },
            },
          },
        },
      },
      "wanderlust-48": {
        name: "Wanderlust",
        co2Savings: "112.7",
        passiveImg:
          "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c6be9a17781eb55e6b63f_48m2.png",
        images: {
          facade: {
            yakisugi:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283782a535d591653c65_48m2%20Wanderlust%204.0.avif",
            lunawood:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428347a78da3d6cd218de_48m2%20Wanderlust%20Lunawood%204.0.avif",
          },
          parquet: {
            cashmere:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282fadd6a68f7235f463_48m2%20Wanderlust%20Interior%20Cashmere%204.0.avif",
            hazelnut:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f1a20245ff5ca4510_48m2%20Wanderlust%20Interior%20Hazelnut%204.0.avif",
          },
          semi_parquet: {
            osb: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834c118eb9aa4496812_48m2%20Wanderlust%20OSB%204.0.avif",
            cashmere:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834f6342091f39dfedb_48m2%20Wanderlust%20OSB%20%2B%20Cashmere%204.0.avif",
            hazelnut:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283416e5d5e698aa09c6_48m2%20Wanderlust%20OSB%20%2B%20Hazelnut%204.0.avif",
          },
          floorplan: {
            a: {
              name: "Plan A",
              url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c525733fc3797a1ea68b6_48m2%20Floorplan%20A.png",
              details: {
                totalArea: "48m²",
                interior: "11.80m x 3.10m x 2.50m",
                exterior: "12.60m x 3.80m x 3.20m",
                rooms: {
                  "Living + Bucătărie": "19.90m²",
                  Dormitor: "11.80m²",
                  Baie: "4.50m²",
                },
              },
            },
            b: {
              name: "Plan B",
              url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514f671a54486d036b53_48m2%20Floorplan%20B.png",
              details: {
                totalArea: "48m²",
                interior: "11.80m x 3.10m x 2.50m",
                exterior: "12.60m x 3.80m x 3.20m",
                rooms: {
                  "Dormitor 1": "11.80m²",
                  "Dormitor 2": "11.80m²",
                  "Baie 1": "4.50m²",
                  "Baie 2": "3.50m²",
                  Hol: "3.50m²",
                },
              },
            },
          },
        },
      },
      "serenity-95": {
        name: "Serenity",
        co2Savings: "225.2",
        passiveImg:
          "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c6bf2d847e2b6f5051525_95m2.png",
        images: {
          facade: {
            yakisugi:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428362a03aef0fc05960f_95m2%20Serenity%204.0.avif",
            lunawood:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834c7a50abaf20e6a83_95m2%20Serenity%20Lunawood%204.0.avif",
          },
          parquet: {
            cashmere:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f9eb780fb3d07ba0f_95m2%20Serenity%20Cashmere%204.0.avif",
            hazelnut:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f8de7c20305542612_95m2%20Serenity%20Hazelnut%204.0.avif",
          },
          semi_parquet: {
            osb: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834cbf67979df378474_95m2%20Serenity%20OSB%204.0.avif",
            cashmere:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283456778eb848b0ef0a_95m2%20Serenity%20OSB%20%2B%20Cashmere%204.0.avif",
            hazelnut:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428364c8e49bed391084c_95m2%20Serenity%20OSB%20%2B%20Hazelnut%204.0.avif",
          },
          floorplan: {
            a: {
              name: "Plan A",
              url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514e29f50d2da31e84dc_95m2%20Floorplan%20A.png",
              details: {
                totalArea: "95m²",
                interior: "11.80m x 6.80m x 2.50m",
                exterior: "12.60m x 7.60m x 3.20m",
                rooms: {
                  "Living + Bucătărie": "29.10m²",
                  "Dormitor 1": "12.20m²",
                  "Dormitor 2": "12.40m²",
                  "Dormitor 3": "13.10m²",
                  "Baie 1": "3.75m²",
                  "Baie 2": "4.35m²",
                },
              },
            },
            b: {
              name: "Plan B",
              url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514fdf7becede16b71e9_95m2%20Floorplan%20B.png",
              details: {
                totalArea: "95m²",
                interior: "11.80m x 6.80m x 2.50m",
                exterior: "12.60m x 7.60m x 3.20m",
                rooms: {
                  "Living + Bucătărie": "41.50m²",
                  "Dormitor 1": "12.20m²",
                  "Dormitor 2": "13.10m²",
                  "Baie 1": "3.75m²",
                  "Baie 2": "4.35m²",
                },
              },
            },
            c: {
              name: "Plan C",
              url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514ff885d32e87f5d5ef_95m2%20Floorplan%20C.png",
              details: {
                totalArea: "95m²",
                interior: "11.80m x 6.80m x 2.50m",
                exterior: "12.60m x 7.60m x 3.20m",
                rooms: {
                  "Living + Bucătărie": "53.70m²",
                  Dormitor: "13.10m²",
                  "Baie 1": "3.75m²",
                  "Baie 2": "4.35m²",
                },
              },
            },
          },
        },
      },
      "sanctuary-142": {
        name: "Sanctuary",
        co2Savings: "337.8",
        passiveImg:
          "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c6bf82cbff70a35076e34_142m2.png",
        images: {
          facade: {
            yakisugi:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42836759488180078dc28_142m2%20Sanctuary%204.0.avif",
            lunawood:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428364c5adf6fa2aec1c1_142m2%20Sanctuary%20Lunawood%204.0.avif",
          },
          parquet: {
            cashmere:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c440551c75cb12af61eff9_142m2%20Sanctuary%20Interior%20Cashmere%204.0.avif",
            hazelnut:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c44055256a682dd59e9ad7_142m2%20Sanctuary%20Interior%20Hazelnut%204.0.avif",
          },
          semi_parquet: {
            osb: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c440552e93c6b2b6549f82_142m2%20Sanctuary%20OSB%204.0.avif",
            cashmere:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c440551ad361e009f1da6e_142m2%20Sanctuary%20OSB%20%2B%20Cashmere%204.0.avif",
            hazelnut:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c44055c519f4722b8ef029_142m2%20Sanctuary%20OSB%20%2B%20Hazelnut%204.0.avif",
          },
          floorplan: {
            a: {
              name: "Plan A",
              url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514ff7e14cb1b083351b_142m2%20Floorplan%20A.png",
              details: {
                totalArea: "142m²",
                interior: "11.80m x 10.60m x 2.50m",
                exterior: "12.60m x 11.30m x 3.20m",
                rooms: {
                  "Living + Bucătărie": "62.90m²",
                  "Dormitor 1": "12.40m²",
                  "Dormitor 2": "12.20m²",
                  "Dormitor 3": "12.40m²",
                  "Dormitor 4": "13.10m²",
                  "Baie 1": "3.75m²",
                  "Baie 2": "4.35m²",
                },
              },
            },
            b: {
              name: "Plan B",
              url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514f6966128dbeb27986_142m2%20Floorplan%20B.png",
              details: {
                totalArea: "142m²",
                interior: "11.80m x 10.60m x 2.50m",
                exterior: "12.60m x 11.30m x 3.20m",
                rooms: {
                  "Living + Bucătărie": "75.30m²",
                  "Dormitor 1": "12.20m²",
                  "Dormitor 2": "12.40m²",
                  "Dormitor 3": "13.10m²",
                  "Baie 1": "3.75m²",
                  "Baie 2": "4.35m²",
                },
              },
            },
            c: {
              name: "Plan C",
              url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514fd4d57aa8ff3d75e9_142m2%20Floorplan%20C.png",
              details: {
                totalArea: "142m²",
                interior: "11.80m x 10.60m x 2.50m",
                exterior: "12.60m x 11.30m x 3.20m",
                rooms: {
                  "Living + Bucătărie": "87.50m²",
                  "Dormitor 1": "12.40m²",
                  "Dormitor 2": "13.10m²",
                  "Baie 1": "3.75m²",
                  "Baie 2": "4.35m²",
                },
              },
            },
          },
        },
      },
    },
    common: {
      logos: {
        passiveHouse:
          "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/680248132febd7da21dcfe3a_Biobuilds%20Passive%20House%20Clean%20White.avif",
        epd: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68028d2a23638226fd81a56e_BIOBUILDS%20EPD%20Logo.avif",
      },
    },
  };

  const pricingLogic = {
    "nomad-24": {
      base: { "semi-finished": 39800, turnkey: 59800 },
      upgrades: {
        parquet: { cashmere: 1800, hazelnut: 1800 },
        ventilation: 4800,
        blinds: 2000,
        solar: 7800,
      },
    },
    "wanderlust-48": {
      base: { "semi-finished": 59800, turnkey: 109800 },
      upgrades: {
        parquet: { cashmere: 3800, hazelnut: 3800 },
        ventilation: 7800,
        blinds: 4000,
        solar: 11800,
      },
    },
    "serenity-95": {
      base: { "semi-finished": 109800, turnkey: 189800 },
      upgrades: {
        parquet: { cashmere: 7800, hazelnut: 7800 },
        ventilation: 9800,
        blinds: 7000,
        solar: 14800,
      },
    },
    "sanctuary-142": {
      base: { "semi-finished": 159800, turnkey: 279800 },
      upgrades: {
        parquet: { cashmere: 11800, hazelnut: 11800 },
        ventilation: 9800,
        blinds: 9000,
        solar: 16800,
      },
    },
  };

  const selectionState = {
    model: "sanctuary-142",
    finish: "turnkey",
    facade: "yakisugi",
    parquet: "cashmere",
    floorplan: "a",
    blinds: true,
    ventilation: true,
    solar: false,
    clientName: "Nume Client",
    offerNr: null,
    offerDate: "xx.06.2025",
    mentions: "",
    basePriceOverride: null,
  };

  function formatCurrency(value) {
    return value.toLocaleString("ro-RO", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
    });
  }

  function parseCurrency(text) {
    if (!text) return 0;
    const number = parseFloat(
      String(text)
        .replace(/[^0-9,-]/g, "")
        .replace(".", "")
        .replace(",", "."),
    );
    return isNaN(number) ? 0 : number;
  }

  function createDetailItem(label, value) {
    return `<div class="detail-item"><span>${label}</span><span>${value}</span></div>`;
  }

  function formatFinish(finishParam) {
    return translations[currentLang][finishParam];
  }

  function generateRandomLetters(length) {
    let result = "";
    const characters = "1234567890";
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
    document.getElementById("offer-nr").textContent = newId;
  }

  function recalculateTotals() {
    const basePriceEl = document.getElementById("base-price-editable");
    if (!basePriceEl) return;
    const basePrice = parseCurrency(basePriceEl.textContent);
    const mentiuniText =
      document.querySelector(".mentiuni-editable").textContent;
    const summaryTotalEl = document.getElementById("summary-total");
    const discountMatch = mentiuniText.match(/-(\d+(\.\d+)?)\s*%/);
    let finalPrice = basePrice;
    if (discountMatch) {
      finalPrice = basePrice * (1 - parseFloat(discountMatch[1]) / 100);
    }
    const additionMatches = mentiuniText.matchAll(/\+(\d+)\s*EUR/gi);
    let additionsTotal = 0;
    for (const match of additionMatches) {
      additionsTotal += parseInt(match[1], 10);
    }
    finalPrice += additionsTotal;
    summaryTotalEl.innerHTML = `${translations[currentLang].totalLabel} ${formatCurrency(finalPrice)} ${translations[currentLang].vatLabel}`;
  }

  // MAIN UPDATE FUNCTION
  function updateOffer() {
    const modelId = selectionState.model;
    const finish = selectionState.finish;
    const facade = selectionState.facade;
    const parquet = selectionState.parquet;
    const floorplan = selectionState.floorplan;
    const modelData = offerData.models[modelId];
    const modelPricing = pricingLogic[modelId];

    const co2StatEl = document.getElementById("co2-savings-stat");
    if (co2StatEl) {
      co2StatEl.innerHTML = `<strong>${modelData.co2Savings} ${translations[currentLang].co2Saved}</strong> ${translations[currentLang].co2Lifespan}`;
    }

    updateDynamicOptions();

    const showTurnkeyDetails = finish === "turnkey";
    document
      .getElementById("section-3-text")
      .classList.toggle("page-hidden", !showTurnkeyDetails);
    document
      .getElementById("section-3-image")
      .classList.toggle("page-hidden", !showTurnkeyDetails);

    let price = modelPricing.base[finish];
    if (finish === "semi-finished") {
      if (parquet !== "osb")
        price += modelPricing.upgrades.parquet[parquet] || 0;
      if (selectionState.blinds) price += modelPricing.upgrades.blinds;
      if (selectionState.ventilation)
        price += modelPricing.upgrades.ventilation;
      if (selectionState.solar) price += modelPricing.upgrades.solar;
    }

    document.querySelector("#section-1 .content-area").style.backgroundImage =
      `url('${modelData.images.facade[facade]}')`;
    document.getElementById("passive-info-image").style.backgroundImage =
      `url('${modelData.passiveImg}')`;
    generateSection2Content(document.getElementById("section-2-text"), facade);
    let section2ImageUrl;
    if (finish === "semi-finished") {
      section2ImageUrl = modelData.images.semi_parquet[parquet];
    } else {
      section2ImageUrl = modelData.images.facade[facade];
    }
    document.getElementById("section-2-image").style.backgroundImage =
      `url('${section2ImageUrl}')`;
    if (showTurnkeyDetails) {
      document.getElementById("section-3-image").style.backgroundImage =
        `url('${modelData.images.parquet[parquet]}')`;
    }

    const detailsWrapper = document.getElementById(
      "floorplan-details-content-wrapper",
    );
    const floorplanImage = document.getElementById("floorplan-image");
    detailsWrapper.style.display = "block";
    if (floorplan !== "custom") {
      const floorplanData = modelData.images.floorplan[floorplan];
      if (floorplanData) {
        floorplanImage.src = floorplanData.url;
        let detailsHtml = `<h3>${translations[currentLang].dimensions}</h3>`;
        detailsHtml += createDetailItem(
          translations[currentLang].totalArea,
          floorplanData.details.totalArea,
        );
        detailsHtml += createDetailItem(
          translations[currentLang].interiorDimensions,
          floorplanData.details.interior,
        );
        detailsHtml += createDetailItem(
          translations[currentLang].exteriorDimensions,
          floorplanData.details.exterior,
        );
        detailsHtml += `<h3>${translations[currentLang].rooms}</h3>`;
        for (const roomName in floorplanData.details.rooms) {
          detailsHtml += createDetailItem(
            translations[currentLang][roomName] || roomName,
            floorplanData.details.rooms[roomName],
          );
        }
        detailsWrapper.innerHTML = detailsHtml;
      } else {
        detailsWrapper.innerHTML = "";
      }
    } else {
      detailsWrapper.style.display = "none";
    }

    updateOptionHighlights();
    document.getElementById("summary-model-name").textContent = modelData.name;
    document.getElementById("summary-finish").textContent =
      formatFinish(finish);
    document.getElementById("logo-passive-house").src =
      offerData.common.logos.passiveHouse;
    document.getElementById("logo-epd").src = offerData.common.logos.epd;

    const inclusionList = document.getElementById("inclusion-list");
    inclusionList.innerHTML = "";
    const firstLi = document.createElement("li");
    const priceSpan = document.createElement("span");
    priceSpan.id = "base-price-editable";
    priceSpan.setAttribute("contenteditable", "true");
    let displayPrice =
      selectionState.basePriceOverride !== null
        ? selectionState.basePriceOverride
        : price;
    priceSpan.textContent = formatCurrency(displayPrice);
    priceSpan.addEventListener("input", () => {
      const numericValue = parseCurrency(priceSpan.textContent);
      selectionState.basePriceOverride = numericValue;
      recalculateTotals();
      updateUrlParams();
    });
    firstLi.append(
      `- Modular ${modelData.name} ${formatFinish(finish)} - `,
      priceSpan,
    );
    inclusionList.appendChild(firstLi);

    const addInclusion = (text) => {
      const li = document.createElement("li");
      li.textContent = text;
      inclusionList.appendChild(li);
    };

    const facadeText =
      selectionState.facade === "yakisugi" ? "Yakisugi" : "Lunawood";
    const parquetGroup = document.querySelector(
      '[data-upgrade-type="parquet"] .option-group',
    );
    const selectedParquetButton = parquetGroup.querySelector(".selected");
    const parquetText = selectedParquetButton
      ? selectedParquetButton.textContent.split("(")[0].trim()
      : "N/A";
    addInclusion(`- ${translations[currentLang].facade} ${facadeText}`);
    addInclusion(
      `- ${translations[currentLang].parquetUpgradeLabel} ${parquetText}`,
    );
    if (selectionState.blinds)
      addInclusion(
        `- ${translations[currentLang].smartBlindsTitleUpgrade} ${finish === "turnkey" ? `(${translations[currentLang].included})` : ""}`,
      );
    if (selectionState.ventilation)
      addInclusion(
        `- ${translations[currentLang].ventilationSystemTitleUpgrade} ${finish === "turnkey" ? `(${translations[currentLang].included})` : ""}`,
      );
    if (selectionState.solar)
      addInclusion(
        `- ${translations[currentLang].solarPanelsTitleUpgrade} ${finish === "turnkey" ? `(${translations[currentLang].included})` : ""}`,
      );

    recalculateTotals();
    updateUrlParams();
  }

  function updateOptionHighlights() {
    document
      .querySelectorAll('[data-upgrade-type="facade"] .option-button')
      .forEach((btn) => {
        btn.classList.toggle(
          "selected",
          btn.dataset.value === selectionState.facade,
        );
      });
    document
      .querySelectorAll('[data-upgrade-type="parquet"] .option-button')
      .forEach((btn) => {
        btn.classList.toggle(
          "selected",
          btn.dataset.value === selectionState.parquet,
        );
      });
    document
      .getElementById("upgrade-blinds")
      .classList.toggle("selected", selectionState.blinds);
    document
      .getElementById("upgrade-ventilation")
      .classList.toggle("selected", selectionState.ventilation);
    document
      .getElementById("upgrade-solar")
      .classList.toggle("selected", selectionState.solar);
    document
      .getElementById("upgrade-blinds")
      .classList.toggle("disabled", selectionState.finish === "turnkey");
    document
      .getElementById("upgrade-ventilation")
      .classList.toggle("disabled", selectionState.finish === "turnkey");
    document
      .getElementById("upgrade-solar")
      .classList.toggle("disabled", selectionState.finish === "turnkey");
  }

  function updateUrlParams() {
    const stateForUrl = { ...selectionState };
    if (stateForUrl.basePriceOverride === null) {
      delete stateForUrl.basePriceOverride;
    }
    const params = new URLSearchParams(stateForUrl);
    window.history.pushState(
      { path: `?${params.toString()}` },
      "",
      `?${params.toString()}`,
    );
  }

  function generateSection2Content(container, facadeType) {
    const t = translations[currentLang];
    let facadeTitle, facadeDescription;

    if (facadeType === "lunawood") {
      facadeTitle = t.s2_facadeLunawood_title;
      facadeDescription = t.s2_facadeLunawood_desc;
    } else {
      facadeTitle = t.s2_facadeYakisugi_title;
      facadeDescription = t.s2_facadeYakisugi_desc;
    }

    container.innerHTML = `
      <h2>${t.s2_modular}</h2>
      <div class="flex-wrapper">
          <div class="column">
              <h3>${t.s2_structure}</h3>
              <h4>${t.s2_modularStructure_title}</h4><p>${t.s2_modularStructure_desc}</p>
              <h4>${t.s2_c24Frame_title}</h4><p>${t.s2_c24Frame_desc}</p>
              <h4>${t.s2_woodInsulation_title}</h4><p>${t.s2_woodInsulation_desc}</p>
              <h4>${t.s2_osb_title}</h4><p>${t.s2_osb_desc}</p>
              <h4>${t.s2_dwd_title}</h4><p>${t.s2_dwd_desc}</p>
              <h4>${t.s2_smartMembrane_title}</h4><p>${t.s2_smartMembrane_desc}</p>
          </div>
          <div class="column">
              <h3>${t.s2_exteriorFinishes}</h3>
              <h4>${facadeTitle}</h4><p>${facadeDescription}</p>
              <h4>${t.s2_ventRoof_title}</h4><p>${t.s2_ventRoof_desc}</p>
              <h4>${t.s2_epdmMembrane_title}</h4><p>${t.s2_epdmMembrane_desc}</p>
              <h4>${t.s2_rainwater_title}</h4><p>${t.s2_rainwater_desc}</p>
              <h3>${t.s2_windowsDoors}</h3>
              <h4>${t.s2_genesisFrame_title}</h4><p>${t.s2_genesisFrame_desc}</p>
              <h4>${t.s2_tripleGlazing_title}</h4><p>${t.s2_tripleGlazing_desc}</p>
          </div>
          <div class="column">
              <h3>${t.s2_kitchen}</h3>
              <h4>${t.s2_kitchenInstall_title}</h4><p>${t.s2_kitchenInstall_desc}</p>
              <h3>${t.s2_installations}</h3>
              <h4>${t.s2_electrical_title}</h4><p>${t.s2_electrical_desc}</p>
              <h4>${t.s2_plumbing_title}</h4><p>${t.s2_plumbing_desc}</p>
              <h3>${t.s2_certs}</h3>
              <h4>${t.s2_passivhaus_title}</h4><p>${t.s2_passivhaus_desc}</p>
              <h4>${t.s2_epd_title}</h4><p>${t.s2_epd_desc}</p>
              <h4>${t.s2_ce_title}</h4><p>${t.s2_ce_desc}</p>
              <h4>${t.s2_warranty_title}</h4><p>${t.s2_warranty_desc}</p>
          </div>
      </div>`;
  }

  function updateDynamicOptions() {
    const parquetContainer = document.querySelector(
      '[data-upgrade-type="parquet"] .option-group',
    );
    const modelPricing = pricingLogic[selectionState.model];
    let parquetHtml = "";
    if (selectionState.finish === "turnkey") {
      parquetHtml = `<div class="option-button" data-value="cashmere">Cashmere ${translations[currentLang].included}</div><div class="option-button" data-value="hazelnut">Hazelnut ${translations[currentLang].included}</div>`;
    } else {
      const parquetUpgrades = modelPricing.upgrades.parquet;
      parquetHtml = `<div class="option-button" data-value="osb">${translations[currentLang].osbStandard}</div><div class="option-button" data-value="cashmere">Cashmere (+${formatCurrency(parquetUpgrades.cashmere)})</div><div class="option-button" data-value="hazelnut">Hazelnut (+${formatCurrency(parquetUpgrades.hazelnut)})</div>`;
    }
    parquetContainer.innerHTML = parquetHtml;

    const floorplanSelect = document.getElementById("floorplan-title-select");
    const floorplans = offerData.models[selectionState.model].images.floorplan;
    floorplanSelect.innerHTML = "";
    Object.keys(floorplans).forEach((planId) => {
      const option = document.createElement("option");
      option.value = planId;
      option.textContent = `${translations[currentLang].plan} ${planId.toUpperCase()}`;
      floorplanSelect.appendChild(option);
    });
    const customOption = document.createElement("option");
    customOption.value = "custom";
    customOption.textContent = translations[currentLang].customPlan;
    floorplanSelect.appendChild(customOption);
    if (
      !floorplanSelect.querySelector(`[value="${selectionState.floorplan}"]`)
    ) {
      if (selectionState.floorplan !== "custom") {
        selectionState.floorplan = floorplanSelect.options[0].value;
      }
    }
    floorplanSelect.value = selectionState.floorplan;
  }

  // --- INITIALIZATION ---
  function initialize() {
    const params = new URLSearchParams(window.location.search);
    selectionState.model = params.get("model") || selectionState.model;
    selectionState.finish = params.get("finish") || selectionState.finish;
    selectionState.facade = params.get("facade") || selectionState.facade;
    selectionState.floorplan =
      params.get("floorplan") || selectionState.floorplan;
    selectionState.blinds = params.get("blinds") === "false" ? false : true;
    selectionState.ventilation =
      params.get("ventilation") === "false" ? false : true;
    selectionState.solar = params.get("solar") === "true" ? true : false;
    selectionState.parquet =
      params.get("parquet") ||
      (selectionState.finish === "turnkey" ? "cashmere" : "osb");
    selectionState.clientName =
      params.get("clientName") || selectionState.clientName;
    selectionState.offerNr = params.get("offerNr") || null;
    selectionState.offerDate =
      params.get("offerDate") || selectionState.offerDate;
    selectionState.mentions = params.get("mentions") || selectionState.mentions;
    const urlBasePrice = params.get("basePriceOverride");
    if (urlBasePrice && urlBasePrice !== "null") {
      selectionState.basePriceOverride = parseFloat(urlBasePrice);
    }

    document.getElementById("model-name-select").innerHTML = Object.keys(
      offerData.models,
    )
      .map(
        (id) => `<option value="${id}">${offerData.models[id].name}</option>`,
      )
      .join("");

    const finishSelect = document.getElementById("finish-text");
    finishSelect.innerHTML = `<option value="turnkey">${translations.ro.turnkey}</option><option value="semi-finished">${translations.ro["semi-finished"]}</option>`;

    document.querySelector(
      '[data-upgrade-type="facade"] .option-group',
    ).innerHTML =
      `<div class="option-button" data-value="yakisugi">Yakisugi</div><div class="option-button" data-value="lunawood">Lunawood</div>`;

    document.getElementById("model-name-select").value = selectionState.model;
    finishSelect.value = selectionState.finish;
    document.getElementById("client-name").textContent =
      selectionState.clientName;
    if (selectionState.offerNr) {
      document.getElementById("offer-nr").textContent = selectionState.offerNr;
    } else {
      generateAndSetOfferId();
    }
    document.getElementById("offer-date").textContent =
      selectionState.offerDate;
    document.querySelector(".mentiuni-editable").textContent =
      selectionState.mentions;

    // --- EVENT LISTENERS ---
    document.querySelectorAll("#language-selector a").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        setLanguage(a.getAttribute("data-lang"));

        finishSelect.querySelector('[value="turnkey"]').textContent =
          translations[currentLang].turnkey;
        finishSelect.querySelector('[value="semi-finished"]').textContent =
          translations[currentLang]["semi-finished"];
      });
    });

    const modelSelect = document.getElementById("model-name-select");
    modelSelect.addEventListener("change", (e) => {
      selectionState.model = e.target.value;
      selectionState.basePriceOverride = null;
      generateAndSetOfferId();
      updateOffer();
    });

    finishSelect.addEventListener("change", (e) => {
      selectionState.finish = e.target.value;
      selectionState.basePriceOverride = null;
      if (selectionState.finish === "turnkey") {
        selectionState.blinds = true;
        selectionState.ventilation = true;
        selectionState.solar = false;
        if (selectionState.parquet === "osb")
          selectionState.parquet = "cashmere";
      }
      generateAndSetOfferId();
      updateOffer();
    });

    const floorplanSelect = document.getElementById("floorplan-title-select");
    const customUploadInput = document.getElementById(
      "custom-floorplan-upload",
    );
    floorplanSelect.addEventListener("change", () => {
      const selectedValue = floorplanSelect.value;
      if (selectedValue === "custom") {
        customUploadInput.setAttribute(
          "data-previous-plan",
          selectionState.floorplan,
        );
        customUploadInput.click();
      } else {
        selectionState.floorplan = selectedValue;
        updateOffer();
      }
    });

    customUploadInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          document.getElementById("floorplan-image").src = event.target.result;
          selectionState.floorplan = "custom";
          updateOffer();
          updateUrlParams();
        };
        reader.readAsDataURL(file);
      } else {
        const previousPlan =
          customUploadInput.getAttribute("data-previous-plan") || "a";
        floorplanSelect.value = previousPlan;
      }
      e.target.value = null;
    });

    document
      .getElementById("upgrades-column")
      .addEventListener("click", (e) => {
        const button = e.target.closest(".option-button");
        const clickableItem = e.target.closest(".upgrade-item.clickable");
        let needsUpdate = false;
        let priceChanged = false;

        if (button) {
          const parent = button.closest(".upgrade-item");
          const type = parent.dataset.upgradeType;
          const value = button.dataset.value;
          if (selectionState[type] !== value) {
            selectionState[type] = value;
            if (type === "parquet" && selectionState.finish === "semi-finished")
              priceChanged = true;
            needsUpdate = true;
          }
        } else if (clickableItem) {
          const id = clickableItem.dataset.upgradeId;
          if (selectionState.finish === "semi-finished") {
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
        element.addEventListener("input", () => {
          selectionState[stateKey] = element.textContent;
          updateUrlParams();
        });
      }
    };

    addStateUpdateListener(
      document.getElementById("client-name"),
      "clientName",
    );
    addStateUpdateListener(document.getElementById("offer-nr"), "offerNr");
    addStateUpdateListener(document.getElementById("offer-date"), "offerDate");

    const mentionsEl = document.querySelector(".mentiuni-editable");
    mentionsEl.addEventListener("input", () => {
      selectionState.mentions = mentionsEl.textContent;
      recalculateTotals();
      updateUrlParams();
    });

    setLanguage(currentLang);
  }

  initialize();
});
