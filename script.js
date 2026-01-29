// @ts-check
/**
 * @fileoverview BioBuilds Offer Generator - Main Application Script
 *
 * Type Definitions:
 * @typedef {'ro' | 'en' | 'de' | 'fr'} Language
 * @typedef {'nest-24' | 'wanderlust-48' | 'serenity-95' | 'sanctuary-142'} ModelId
 * @typedef {'turnkey' | 'semi-finished'} FinishType
 * @typedef {'yakisugi' | 'lunawood'} FacadeType
 * @typedef {'osb' | 'cashmere' | 'hazelnut'} ParquetType
 * @typedef {'a' | 'b' | 'c'} FloorplanId
 *
 * @typedef {Object} FloorplanDetails
 * @property {string} totalArea
 * @property {string} interior
 * @property {string} exterior
 * @property {Record<string, string>} rooms
 *
 * @typedef {Object} Floorplan
 * @property {string} name
 * @property {string} url
 * @property {FloorplanDetails} details
 *
 * @typedef {Object} ModelImages
 * @property {Record<FacadeType, string>} facade
 * @property {Record<'cashmere' | 'hazelnut', string>} parquet
 * @property {Record<ParquetType, string>} semi_parquet
 * @property {Record<string, Floorplan>} floorplan
 *
 * @typedef {Object} ModelData
 * @property {string} name
 * @property {string} co2Savings
 * @property {string} passiveImg
 * @property {ModelImages} images
 *
 * @typedef {Object} ModelPricing
 * @property {Record<FinishType, number>} base
 * @property {{parquet: Record<'cashmere' | 'hazelnut', number>, ventilation: number, blinds: number, solar: number}} upgrades
 *
 * @typedef {Object} SelectionState
 * @property {ModelId} model
 * @property {FinishType} finish
 * @property {FacadeType} facade
 * @property {ParquetType} parquet
 * @property {FloorplanId} floorplan
 * @property {boolean} blinds
 * @property {boolean} ventilation
 * @property {boolean} solar
 * @property {string} clientName
 * @property {string|null} offerNr
 * @property {string} offerDate
 * @property {string} mentions
 * @property {number|null} basePriceOverride
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- Edit Mode Detection ---
  // Check if #edit is in the URL hash
  /** @type {boolean} */
  const isEditMode = window.location.hash.includes('edit');

  // --- Auxiliary Mode Detection ---
  // Check if #auxiliary is in the URL hash
  const isAuxiliaryMode = window.location.hash.includes('auxiliary');

  // If auxiliary mode, render auxiliary cost guide and exit
  if (isAuxiliaryMode) {
    initializeAuxiliaryMode(isEditMode);
    return; // Don't run normal offer initialization
  }

  // Store the hash to preserve it
  let preservedHash = window.location.hash;

  // Apply view-only mode if not in edit mode
  if (!isEditMode) {
    document.body.classList.add('view-only');
    // Remove contenteditable attributes in view-only mode
    document.querySelectorAll('[contenteditable="true"]').forEach(el => {
      el.removeAttribute('contenteditable');
    });
  }

  // Preserve #edit hash when URL changes (e.g., from UTM parameters)
  const originalPushState = history.pushState;
  history.pushState = function() {
    originalPushState.apply(history, arguments);
    if (preservedHash && !window.location.hash.includes('edit') && preservedHash.includes('edit')) {
      window.location.hash = preservedHash;
    }
  };

  const originalReplaceState = history.replaceState;
  history.replaceState = function() {
    originalReplaceState.apply(history, arguments);
    if (preservedHash && !window.location.hash.includes('edit') && preservedHash.includes('edit')) {
      window.location.hash = preservedHash;
    }
  };

  let currentLang = "en";

  // Check URL hash for language routing (#ro, #en, #de, #fr)
  const hashLang = window.location.hash.match(/#(ro|en|de|fr)(?:\b|$)/i);
  let langFromHash = false;
  if (hashLang) {
    currentLang = hashLang[1].toLowerCase();
    langFromHash = true;
  }

  const translations = {
    ro: {
      pageTitle: "Oferta Generata - Biobuilds",
      validity: "VALABILITATE: 30 ZILE",
      offerLabel: "OFERTA",
      offerFor: "Ofertă ",
      clientNamePlaceholder: "Nume Client",
      footerSlogan:
        "Modular este modern, inovator și sustenabil. Alege spațiul ideal pentru tine, construit la cele mai înalte standarde de construcție din lume.",
      passiveHouseQuote:
        '"Modulele sunt fixate cu șuruburi de oțel, apoi acoperite cu o membrană impermeabilă și placate cu lemn durabil. Sistemul este prefabricat în fabrica BioBuilds, oferind livrare rapidă și timpi scurți de asamblare. Sistemul de construcție este certificat Passivhaus, având valori U excepționale și eliminând punțile termice."',
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
      ventilationSystemTitle: "Sistem de ventilație Zehnder",
      ventilationSystemDesc:
        "Recuperare de căldură de până la 95% și pompă de căldură pentru încălzire și răcire.",
      turnkeyDisclaimer:
        "Inclus: finisaje complete la cheie + mobilier de baie conform specificațiilor. Toate celelalte piese de mobilier, decorațiuni și elemente interioare afișate în imaginile din configurator care nu sunt menționate în ofertă sunt doar cu titlu ilustrativ. Unii producători de materiale pot diferi de cei prezentați, ca parte a procesului nostru continuu de inovare. Veți fi informat din timp cu privire la orice actualizare.",
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
      ventilationSystemTitleUpgrade: "Sistem de ventilație Zehnder",
      ventilationSystemDescUpgrade: "Recuperare de căldură de până la 95% + pompă de căldură pentru încălzire și răcire.",
      solarPanelsTitleUpgrade: "Panouri solare",
      solarPanelsDescUpgrade: "Produc cu 60% mai multă energie decât consumă casa anual.",
      notesLabel: "Mențiuni:",
      termsAndConditions:
        "Această ofertă este supusă termenilor și condițiilor aplicabile, care pot fi consultate la biobuilds.com/TC. Continuând, confirmați că le înțelegeți și le acceptați.",
      downloadOffer: "Descarcă Oferta",
      auxCosts: "Costuri Auxiliare",
      totalLabel: "TOTAL",
      vatLabel: "+TVA",
      turnkey: "La Cheie",
      "semi-finished": "Semifinisat",
      plan: "Plan",
      customPlan: "Plan personalizat",
      osbStandard: "OSB (Standard)",
      included: "Inclus",
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
        "Permeabilă la vapori (permite pereților să respire menținându-i etanși la aer din exterior; unidirecțional); certificată CE.",
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
      offerFor: "Offer ",
      clientNamePlaceholder: "Client Name",
      footerSlogan:
        "Modular is modern, innovative, and sustainable. Choose the ideal space for you, built to the highest construction standards in the world.",
      passiveHouseQuote:
  '"The modules are fixed with steel screws, then covered with a waterproof membrane and clad in durable wood. The system is prefabricated in the BioBuilds factory, offering fast delivery and short assembly times. The construction system is Passivhaus certified, having exceptional U-values and eliminating thermal bridges."',
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
      ventilationSystemTitle: "Zehnder Ventilation System",
      ventilationSystemDesc:
        "Heat recovery up to 95% + heat pump for heating and cooling.",
      turnkeyDisclaimer:
        "Included: full turnkey finishes + bathroom furniture as specified. All other furniture, décor, and interior elements displayed in configurator images not mentioned in the offer are for illustrative purposes only. Some material producers may differ from those shown as part of our continuous innovation process. You should know any updates ahead of time.",
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
      ventilationSystemTitleUpgrade: "Zehnder Ventilation System",
      ventilationSystemDescUpgrade: "Heat recovery up to 95% plus heat pump for heating and cooling.",
      solarPanelsTitleUpgrade: "Solar panels",
      solarPanelsDescUpgrade: "Produces 60% more energy than your home consumes annually.",
      notesLabel: "Notes:",
      termsAndConditions:
        "This offer is subject to the applicable terms and conditions, which can be viewed at biobuilds.com/TC. By proceeding, you confirm that you understand and accept them.",
      downloadOffer: "Download Offer",
      auxCosts: "Auxiliary Costs",
      totalLabel: "TOTAL",
      vatLabel: "+VAT",
      turnkey: "Turnkey",
      "semi-finished": "Semi-finished",
      plan: "Plan",
      customPlan: "Custom plan",
      osbStandard: "OSB (Standard)",
      included: "Included",
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
        'Vapor permeable (allows walls to breathe while keeping them airtight from the outside; unidirectional); CE certified.',
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
      offerFor: "Angebot ",
      clientNamePlaceholder: "Kunde Name",
      footerSlogan:
        "Modular ist modern, innovativ und nachhaltig. Wählen Sie den idealen Raum für sich, gebaut nach den höchsten Baustandards der Welt.",
      passiveHouseQuote:
  '"Die Module werden mit Stahlschrauben fixiert, anschließend mit einer wasserdichten Membran abgedeckt und mit langlebigem Holz verkleidet. Das System wird im BioBuilds-Werk vorgefertigt und ermöglicht schnelle Lieferung und kurze Montagezeiten. Das Bausystem ist vom Passivhaus Institut zertifiziert, weist außergewöhnliche U-Werte auf und eliminiert Wärmebrücken."',
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
      ventilationSystemTitle: "Zehnder Lüftungssystem",
      ventilationSystemDesc:
        "Wärmerückgewinnung bis zu 95 % plus Wärmepumpe zum Heizen und Kühlen.",
      turnkeyDisclaimer:
        "Inklusive: Komplette schlüsselfertige Ausstattung + Badezimmermöbel wie angegeben. Alle anderen Möbel, Dekorationen und Innenelemente, die in den Konfigurator-Bildern angezeigt werden und nicht im Angebot erwähnt sind, dienen nur zur Veranschaulichung. Einige Materialhersteller können im Rahmen unseres kontinuierlichen Innovationsprozesses von den gezeigten abweichen. Sie werden rechtzeitig über Änderungen informiert.",
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
      ventilationSystemTitleUpgrade: "Zehnder Lüftungssystem",
      ventilationSystemDescUpgrade: "Wärmerückgewinnung bis zu 95 % plus Wärmepumpe zum Heizen und Kühlen.",
      solarPanelsTitleUpgrade: "Solarpaneele",
      solarPanelsDescUpgrade: "Erzeugt 60 % mehr Energie als Ihr Haus jährlich verbraucht.",
      notesLabel: "Anmerkungen:",
      termsAndConditions:
        "Dieses Angebot unterliegt den geltenden AGB, einsehbar unter biobuilds.com/TC. Mit der Annahme bestätigen Sie, dass Sie diese verstanden und akzeptiert haben.",
      downloadOffer: "Angebot herunterladen",
      auxCosts: "Nebenkosten",
      totalLabel: "GESAMT",
      vatLabel: "+ MwSt.",
      turnkey: "Schlüsselfertig",
      "semi-finished": "Teilfertig",
      plan: "Plan",
      customPlan: "Individueller Plan",
      osbStandard: "OSB (Standard)",
      included: "Inklusive",
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
        "Dampfdurchlässig (ermöglicht atmende Wände, bleibt aber außen luftdicht, unidirektional); CE-zertifiziert.",
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
      offerFor: "Offre ",
      clientNamePlaceholder: "Nom du client",
      footerSlogan:
        "Le modulaire est moderne, innovant et durable. Choisissez l'espace idéal pour vous, construit selon les standards de construction les plus élevés au monde.",
      passiveHouseQuote:
  '"Les modules sont fixés avec des vis en acier, puis recouverts d\'une membrane étanche et bardés de bois durable. Le système est préfabriqué dans l\'usine BioBuilds, offrant une livraison rapide et des temps de montage courts. Le système constructif est certifié Passivhaus, présente des valeurs U exceptionnelles et élimine les ponts thermiques."',
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
      ventilationSystemTitle: "Système de ventilation Zehnder",
      ventilationSystemDesc:
        "Récupération de chaleur jusqu'à 95 % avec pompe à chaleur pour le chauffage et le refroidissement.",
      turnkeyDisclaimer:
        "Inclus : finitions clé en main complètes + mobilier de salle de bain tel que spécifié. Tous les autres meubles, éléments de décoration et éléments intérieurs affichés dans les images du configurateur non mentionnés dans l'offre sont fournis à titre indicatif uniquement. Certains fabricants de matériaux peuvent différer de ceux présentés dans le cadre de notre processus d'innovation continue. Vous serez informé à l'avance de toute mise à jour.",
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
      ventilationSystemTitleUpgrade: "Système de ventilation Zehnder",
      ventilationSystemDescUpgrade: "Recuperare de căldură de până la 95% și pompă de căldură pentru încălzire și răcire.",
      solarPanelsTitleUpgrade: "Panneaux solaires",
      solarPanelsDescUpgrade: "Produit 60 % d'énergie en plus que votre maison n'en consomme annuellement.",
      notesLabel: "Notes :",
      termsAndConditions:
        "Cette offre est soumise aux conditions générales applicables, consultables sur biobuilds.com/TC. En poursuivant, vous confirmez les avoir comprises et acceptées.",
      downloadOffer: "Télécharger l'offre",
      auxCosts: "Coûts Auxiliaires",
      totalLabel: "TOTAL",
      vatLabel: "+ TVA",
      turnkey: "Clé en main",
      "semi-finished": "Prêt à finir",
      plan: "Plan",
      customPlan: "Plan personnalisé",
      osbStandard: "OSB (Standard)",
      included: "Inclus",
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
        "Perméable à la vapeur (laisse respirer les parois tout en assurant l'étanchéité à l'air depuis l'extérieur ; unidirectionnel) ; certifié CE.",
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

    // Update finish select dropdown with correct language
    const finishSelect = document.getElementById("finish-text");
    if (finishSelect) {
      const turnkeyOption = finishSelect.querySelector('[value="turnkey"]');
      const semiOption = finishSelect.querySelector('[value="semi-finished"]');
      if (turnkeyOption) turnkeyOption.textContent = translations[lang].turnkey;
      if (semiOption) semiOption.textContent = translations[lang]["semi-finished"];
    }

    updateOffer();
  }

  // --- DATA STRUCTURES ---
  const offerData = {
    models: {
      "nest-24": {
        name: "Nest",
        co2Savings: "56.3",
        passiveImg:
          "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69303cdf299025f5b7e0e219_95%20Wall%20Section.avif",
        images: {
          facade: {
            yakisugi:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2de1073da9af1229b5a_24%20EXT.avif",
            lunawood:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2db5bc300eaac8d8d34_24%20EXT%20LUNA.avif",
          },
          parquet: {
            cashmere:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2d5825431c8de2a4647_24%20INT.avif",
            hazelnut:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301c999e84b323b4840928_24%20INT%20TURNKEY%20HAZELNUT.avif",
          },
          semi_parquet: {
            osb: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2de2f5f16c2ddd166de_24%20INT%20SEMI.avif",
            cashmere:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301c9e626baf48e649fa6f_24%20INT%20SEMI%20CASHMERE.avif",
            hazelnut:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301c9ded2f00c9544f77e8_24%20INT%20SEMI%20HAZELNUT.avif",
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
          "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69303cdf299025f5b7e0e219_95%20Wall%20Section.avif",
        images: {
          facade: {
            yakisugi:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2e1dfc362059ebe425a_48%20EXT.avif",
            lunawood:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2de138a2e743e8b46a5_48%20EXT%20LUNA.avif",
          },
          parquet: {
            cashmere:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2d4c4987465f99fdb83_48%20INT.avif",
            hazelnut:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301c9c67b49cdd4284575f_48%20INT%20TURNKEY%20HAZELNUT.avif",
          },
          semi_parquet: {
            osb: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2dbc3983bc6c1db37d5_48%20INT%20SEMI.avif",
            cashmere:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301c9d58a01418fbcb2041_48%20INT%20SEMI%20CASHMERE.avif",
            hazelnut:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301c9fdc93278ac1ebcb15_48%20INT%20SEMI%20HAZELNUT.avif",
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
          "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69303cdf299025f5b7e0e219_95%20Wall%20Section.avif",
        images: {
          facade: {
            yakisugi:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2def577675af1e0311b_95%20EXT.avif",
            lunawood:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2de42d32a56c177baee_95%20EXT%20LUNA.avif",
          },
          parquet: {
            cashmere:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2e1032083199a0f6c91_b01fd90d9516b5947a7ebf431c594038_95%20INT.avif",
            hazelnut:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301ca4896ae35084ea4c8a_95%20INT%20TURNKEY%20HAZELNUT.avif",
          },
          semi_parquet: {
            osb: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2d570c656a121f2f894_95%20INT%20SEMI.avif",
            cashmere:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301c9d2329a1114c0b4a71_95%20INT%20SEMI%20CASHMERE.avif",
            hazelnut:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301c9fa6475a26839192bd_95%20INT%20SEMI%20HAZELNUT.avif",
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
          "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69303cdf299025f5b7e0e219_95%20Wall%20Section.avif",
        images: {
          facade: {
            yakisugi:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2dbf906e66f4ea4c2c0_142%20EXT.avif",
            lunawood:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2d4db512d9db681f6e6_142%20EXT%20LUNA.avif",
          },
          parquet: {
            cashmere:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2def7f9aedcdd1efa47_142%20INT.avif",
            hazelnut:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301c9d43a6473248399be6_142%20INT%20TURNKEY%20HAZELNUT.avif",
          },
          semi_parquet: {
            osb: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2e013c0363b4b84943c_142%20INT%20SEMI.avif",
            cashmere:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301ca3e171b36af9268036_142%20INT%20SEMI%20CASHMERE.avif",
            hazelnut:
              "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301ca4d06d247c753b592b_142%20INT%20SEMI%20HAZELNUT.avif",
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
    "nest-24": {
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

  // Get current date in DD.MM.YYYY format
  const getCurrentDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}.${month}.${year}`;
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
    offerDate: getCurrentDate(),
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
}

// Solar can be added in both semi-finished AND turnkey modes
if (selectionState.solar) {
  price += modelPricing.upgrades.solar;
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
        `- ${translations[currentLang].smartBlindsTitleUpgrade} ${finish === "turnkey" ? translations[currentLang].included : ""}`,
      );
    if (selectionState.ventilation)
      addInclusion(
        `- ${translations[currentLang].ventilationSystemTitleUpgrade} ${finish === "turnkey" ? translations[currentLang].included : ""}`,
      );
    if (selectionState.solar)
      addInclusion(
        `- ${translations[currentLang].solarPanelsTitleUpgrade} ${finish === "turnkey" ? translations[currentLang].included : ""}`,
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
        .classList.toggle("disabled", false); // Solar always enabled
  }

  function updateUrlParams() {
    // Build URL params in SQF_* format for compatibility
    const params = new URLSearchParams();

    params.set("SQF_TYPE", selectionState.model);
    params.set("SQF_FINISH", selectionState.finish);
    params.set("SQF_FLOORPLAN", "floorplan-" + selectionState.floorplan);
    params.set("SQF_PARQUET", "parquet-" + selectionState.parquet);
    params.set("SQF_FACADE", "facade-" + selectionState.facade);
    params.set("SQF_VENTILATION", selectionState.ventilation ? "ventilation-system" : "no-ventilation");
    params.set("SQF_BLINDS", selectionState.blinds ? "blinds" : "no-blinds");
    params.set("SQF_SOLAR", selectionState.solar ? "solar" : "no-solar");

    if (selectionState.basePriceOverride !== null) {
      params.set("SQF_PRICE", selectionState.basePriceOverride);
    }

    // Keep the simple params for backwards compatibility and additional data
    if (selectionState.clientName && selectionState.clientName !== "Nume Client") {
      params.set("clientName", selectionState.clientName);
    }
    if (selectionState.offerNr) {
      params.set("offerNr", selectionState.offerNr);
    }
    if (selectionState.offerDate) {
      params.set("offerDate", selectionState.offerDate);
    }
    if (selectionState.mentions) {
      params.set("mentions", selectionState.mentions);
    }

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

    // Helper function to extract value from prefixed format (e.g., "floorplan-a" -> "a")
    function extractValue(prefixedValue, prefix) {
      if (!prefixedValue) return null;
      if (prefixedValue.startsWith(prefix + "-")) {
        return prefixedValue.substring(prefix.length + 1);
      }
      return prefixedValue;
    }

    // Support both SQF_* format and simple format for model/type
    const sqfType = params.get("SQF_TYPE");
    selectionState.model = sqfType || params.get("model") || selectionState.model;

    // Support both SQF_FINISH and finish
    const sqfFinish = params.get("SQF_FINISH");
    selectionState.finish = sqfFinish || params.get("finish") || selectionState.finish;

    // Support both SQF_FACADE and facade (extract from "facade-yakisugi" format)
    const sqfFacade = params.get("SQF_FACADE");
    if (sqfFacade) {
      selectionState.facade = extractValue(sqfFacade, "facade");
    } else {
      selectionState.facade = params.get("facade") || selectionState.facade;
    }

    // Support both SQF_FLOORPLAN and floorplan (extract from "floorplan-a" format)
    const sqfFloorplan = params.get("SQF_FLOORPLAN");
    if (sqfFloorplan) {
      selectionState.floorplan = extractValue(sqfFloorplan, "floorplan");
    } else {
      selectionState.floorplan = params.get("floorplan") || selectionState.floorplan;
    }

    // Support both SQF_BLINDS and blinds
    const sqfBlinds = params.get("SQF_BLINDS");
    const simpleBlinds = params.get("blinds");
    if (sqfBlinds !== null) {
      // SQF_BLINDS: "blinds" or truthy value means enabled, "no-blinds" or empty means disabled
      selectionState.blinds = sqfBlinds === "blinds" || sqfBlinds === "true" || sqfBlinds === "";
    } else if (simpleBlinds !== null) {
      selectionState.blinds = simpleBlinds !== "false";
    } else {
      selectionState.blinds = true; // default
    }

    // Support both SQF_VENTILATION and ventilation
    const sqfVentilation = params.get("SQF_VENTILATION");
    const simpleVentilation = params.get("ventilation");
    if (sqfVentilation !== null) {
      // SQF_VENTILATION: "ventilation-system" or truthy means enabled
      selectionState.ventilation = sqfVentilation === "ventilation-system" || sqfVentilation === "true" || sqfVentilation === "";
    } else if (simpleVentilation !== null) {
      selectionState.ventilation = simpleVentilation !== "false";
    } else {
      selectionState.ventilation = true; // default
    }

    // Support both SQF_SOLAR and solar
    const sqfSolar = params.get("SQF_SOLAR");
    const simpleSolar = params.get("solar");
    if (sqfSolar !== null) {
      selectionState.solar = sqfSolar === "solar" || sqfSolar === "true";
    } else if (simpleSolar !== null) {
      selectionState.solar = simpleSolar === "true";
    } else {
      selectionState.solar = false; // default
    }

    // Support both SQF_PARQUET and parquet (extract from "parquet-cashmere" format)
    const sqfParquet = params.get("SQF_PARQUET");
    if (sqfParquet) {
      selectionState.parquet = extractValue(sqfParquet, "parquet");
    } else {
      selectionState.parquet =
        params.get("parquet") ||
        (selectionState.finish === "turnkey" ? "cashmere" : "osb");
    }

    selectionState.clientName =
      params.get("clientName") || selectionState.clientName;
    selectionState.offerNr = params.get("offerNr") || null;
    selectionState.offerDate =
      params.get("offerDate") || selectionState.offerDate;
    selectionState.mentions = params.get("mentions") || selectionState.mentions;

    // Support both SQF_PRICE and basePriceOverride
    // Only use price override in edit mode - in view-only mode, calculate price from selections
    const sqfPrice = params.get("SQF_PRICE");
    const urlBasePrice = sqfPrice || params.get("basePriceOverride");
    if (urlBasePrice && urlBasePrice !== "null" && isEditMode) {
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
    finishSelect.innerHTML = `<option value="turnkey">${translations[currentLang].turnkey}</option><option value="semi-finished">${translations[currentLang]["semi-finished"]}</option>`;

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
  // Allow solar toggling in any mode; others only in semi-finished
  if (id === "solar" || selectionState.finish === "semi-finished") {
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

    // --- PDF Download Function ---
    // Detect iOS/iPadOS/mobile devices that don't support print CSS properly
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const needsPdfGeneration = isIOS || isMobile;

    // Create language selection modal (shown on page load for view-only mode)
    const langModal = document.createElement('div');
    langModal.id = 'lang-select-modal';
    langModal.innerHTML = `
      <div class="lang-modal-content">
        <h3>Language</h3>
        <div class="lang-options">
          <button data-lang="en" class="lang-btn">English</button>
          <button data-lang="ro" class="lang-btn">Română</button>
          <button data-lang="de" class="lang-btn">Deutsch</button>
          <button data-lang="fr" class="lang-btn">Français</button>
        </div>
      </div>
    `;
    langModal.style.cssText = `
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.7);
      z-index: 99999;
      justify-content: center;
      align-items: center;
    `;
    const modalContent = langModal.querySelector('.lang-modal-content');
    modalContent.style.cssText = `
      background: white;
      padding: 30px;
      border-radius: 12px;
      text-align: center;
      max-width: 350px;
      width: 90%;
    `;
    const modalTitle = langModal.querySelector('h3');
    modalTitle.style.cssText = `
      margin: 0 0 20px 0;
      font-size: 18px;
      color: #333;
    `;
    const langOptionsDiv = langModal.querySelector('.lang-options');
    langOptionsDiv.style.cssText = `
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    `;
    langModal.querySelectorAll('.lang-btn').forEach(btn => {
      btn.style.cssText = `
        padding: 15px 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background: white;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
        transition: all 0.2s;
      `;
    });
    document.body.appendChild(langModal);

    // Show language modal on page load if NOT in edit mode AND no language hash
    if (!isEditMode && !langFromHash) {
      langModal.style.display = 'flex';
      langOptionsDiv.addEventListener('click', (e) => {
        if (e.target.classList.contains('lang-btn')) {
          const selectedLang = e.target.dataset.lang;
          setLanguage(selectedLang);
          langModal.style.display = 'none';
        }
      });
    }

    // Auxiliary costs button - navigate to auxiliary view
    document.getElementById('aux-costs-btn').addEventListener('click', function() {
      const currentUrl = new URL(window.location.href);
      const hash = currentUrl.hash.replace('#', '');
      const langMatch = hash.match(/^(ro|en|de|fr)$/i);
      const lang = langMatch ? langMatch[1] : 'ro';
      currentUrl.hash = lang + '-auxiliary';
      window.location.href = currentUrl.toString();
    });

    // Simple download button - window.print() for desktop, PDF for iOS
    document.getElementById('download-offer-btn').addEventListener('click', async function() {
      const btn = this;
      const originalText = btn.querySelector('span').textContent;

      // For desktop browsers, just use window.print()
      if (!needsPdfGeneration) {
        window.print();
        return;
      }

      // For iOS/mobile, generate a PDF file
      btn.querySelector('span').textContent = 'LOADING';
      btn.disabled = true;

      try {
        const PDF_WIDTH_MM = 297;
        const PDF_HEIGHT_MM = 210;
        const RENDER_WIDTH = 1122;
        const RENDER_HEIGHT = 793;

        const pages = Array.from(document.querySelectorAll('.page:not(.page-hidden)'));

        if (pages.length === 0) {
          throw new Error('No pages to export');
        }

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: 'a4',
          compress: true
        });

        const renderContainer = document.createElement('div');
        renderContainer.style.cssText = `
          position: fixed;
          left: -10000px;
          top: 0;
          width: ${RENDER_WIDTH}px;
          height: ${RENDER_HEIGHT}px;
          overflow: hidden;
          background: white;
          z-index: -9999;
        `;
        document.body.appendChild(renderContainer);

        // Helper function to convert background-image to img element
        // html2canvas doesn't support object-fit well, so we manually calculate dimensions
        function addBgAsImg(originalEl, cloneEl, objectFit = 'cover') {
          const bgImage = window.getComputedStyle(originalEl).backgroundImage;
          if (bgImage && bgImage !== 'none') {
            const urlMatch = bgImage.match(/url\(["']?([^"')]+)["']?\)/);
            if (urlMatch) {
              // Get container dimensions
              const containerWidth = cloneEl.offsetWidth;
              const containerHeight = cloneEl.offsetHeight;

              // Clear background and set up container
              cloneEl.style.backgroundImage = 'none';
              cloneEl.style.position = 'relative';
              cloneEl.style.overflow = 'hidden';

              const img = document.createElement('img');
              img.src = urlMatch[1];
              img.crossOrigin = 'anonymous';

              // For 'cover': fill container completely (crop if needed)
              // For 'contain': fit within container (may have empty space)
              if (objectFit === 'cover') {
                img.style.cssText = `
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  min-width: 100%;
                  min-height: 100%;
                  width: auto;
                  height: auto;
                `;
              } else {
                // contain - fit within container, centered
                img.style.cssText = `
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  max-width: 100%;
                  max-height: 100%;
                  width: auto;
                  height: auto;
                `;
              }
              cloneEl.insertBefore(img, cloneEl.firstChild);
            }
          }
        }

        for (let i = 0; i < pages.length; i++) {
          const page = pages[i];
          const pageId = page.id;

          const clone = page.cloneNode(true);

          // Set page dimensions while preserving the flex layout
          clone.style.width = RENDER_WIDTH + 'px';
          clone.style.height = RENDER_HEIGHT + 'px';
          clone.style.minHeight = RENDER_HEIGHT + 'px';
          clone.style.maxHeight = RENDER_HEIGHT + 'px';
          clone.style.margin = '0';
          clone.style.border = 'none';
          clone.style.boxShadow = 'none';
          clone.style.overflow = 'hidden';
          clone.style.boxSizing = 'border-box';

          // Add to DOM for rendering
          renderContainer.innerHTML = '';
          renderContainer.appendChild(clone);

          // Wait for flex layout to calculate
          await new Promise(resolve => setTimeout(resolve, 50));

          // Convert background images to actual img elements for html2canvas
          // Section 1: content-area background
          if (pageId === 'section-1') {
            const contentArea = page.querySelector('.content-area');
            const cloneContentArea = clone.querySelector('.content-area');
            if (contentArea && cloneContentArea) {
              addBgAsImg(contentArea, cloneContentArea, 'cover');
            }
          }

          // Section passive-info: side image background
          if (pageId === 'section-passive-info') {
            const passiveImg = page.querySelector('#passive-info-image');
            const clonePassiveImg = clone.querySelector('#passive-info-image');
            if (passiveImg && clonePassiveImg) {
              addBgAsImg(passiveImg, clonePassiveImg, 'contain');
            }
          }

          // Full-page background images
          if (pageId === 'section-2-image' || pageId === 'section-3-image') {
            addBgAsImg(page, clone, 'cover');
          }

          // Replace select elements with spans showing selected text
          // html2canvas doesn't render select elements properly
          // Get values from live DOM elements by ID before processing clones
          const selectValues = {};
          page.querySelectorAll('.interactive-select').forEach(sel => {
            if (sel.id) {
              const val = sel.value;
              let text = val;
              for (let opt of sel.options) {
                if (opt.value === val) {
                  text = opt.text;
                  break;
                }
              }
              selectValues[sel.id] = { text };
            }
          });

          // Font sizes in vw from CSS - calculate for RENDER_WIDTH since vw units won't work in off-screen container
          const fontSizeMap = {
            'model-name-select': Math.min(RENDER_WIDTH * 0.045, 60) + 'px', // 4.5vw, max 60px
            'finish-text': Math.min(RENDER_WIDTH * 0.018, 22) + 'px', // 1.8vw, max 22px
            'floorplan-title-select': Math.min(RENDER_WIDTH * 0.022, 28) + 'px' // 2.2vw, max 28px
          };

          clone.querySelectorAll('.interactive-select').forEach(selectEl => {
            const selId = selectEl.id;
            const info = selectValues[selId];
            const selectedText = info?.text || selectEl.value || '';

            const span = document.createElement('span');
            span.textContent = selectedText;
            span.id = selId;
            span.style.cssText = `
              display: block;
              font-size: ${fontSizeMap[selId] || '16px'};
              font-weight: 500;
              text-transform: ${selId === 'model-name-select' ? 'uppercase' : (selId === 'finish-text' ? 'capitalize' : 'none')};
              line-height: 1.1;
              margin: 0;
              padding: 0;
            `;
            // Also fix the wrapper to not add extra space
            const wrapper = selectEl.parentNode;
            if (wrapper.classList.contains('interactive-select-wrapper')) {
              wrapper.style.display = 'block';
              wrapper.style.margin = '0';
              wrapper.style.padding = '0';
            }
            wrapper.replaceChild(span, selectEl);
          });
          clone.querySelectorAll('[contenteditable]').forEach(el => {
            el.removeAttribute('contenteditable');
          });

          // Wait for all images to load
          const images = clone.querySelectorAll('img');
          await Promise.all(Array.from(images).map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
              img.onload = resolve;
              img.onerror = resolve;
            });
          }));

          // Short delay for final layout
          await new Promise(resolve => setTimeout(resolve, 100));

          if (i > 0) {
            pdf.addPage('a4', 'landscape');
          }

          const canvas = await html2canvas(clone, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            logging: false,
            backgroundColor: '#ffffff',
            width: RENDER_WIDTH,
            height: RENDER_HEIGHT,
            windowWidth: RENDER_WIDTH,
            windowHeight: RENDER_HEIGHT
          });

          const imgData = canvas.toDataURL('image/jpeg', 0.92);
          pdf.addImage(imgData, 'JPEG', 0, 0, PDF_WIDTH_MM, PDF_HEIGHT_MM);
        }

        document.body.removeChild(renderContainer);

        const clientName = document.getElementById('client-name')?.textContent || 'Client';
        const safeName = clientName.replace(/[^a-zA-Z0-9\s-]/g, '').trim() || 'Client';
        const filename = `Oferta-Biobuilds-${safeName}.pdf`;
        pdf.save(filename);

      } catch (error) {
        console.error('PDF generation failed:', error);
        window.print();
      }

      btn.querySelector('span').textContent = originalText;
      btn.disabled = false;
    });
  }

  // --- Auxiliary Mode Function ---
  function initializeAuxiliaryMode(isEditMode) {
    // Get model from URL parameters
    const params = new URLSearchParams(window.location.search);
    const sqfType = params.get('SQF_TYPE') || params.get('model');

    // Map model names to auxiliary format
    const modelMap = {
      'nest': 'nomad',
      'nomad': 'nomad',
      'wanderlust': 'wanderlust',
      'serenity': 'serenity',
      'sanctuary': 'sanctuary'
    };

    let urlModel = null;
    if (sqfType) {
      const modelKey = sqfType.split('-')[0].toLowerCase();
      urlModel = modelMap[modelKey] || null;
    }

    // Get language from URL hash
    const hashLang = window.location.hash.match(/#(ro|en|de)(?:\b|$)/i);
    const currentLang = hashLang ? hashLang[1].toLowerCase() : 'ro';

    // Generate auxiliary HTML and replace body content
    document.body.innerHTML = generateAuxiliaryHTML();

    // Add Poppins font via link tag (more reliable than @import)
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap';
    document.head.appendChild(fontLink);

    // Add auxiliary-specific styles
    const auxiliaryStyles = document.createElement('style');
    auxiliaryStyles.textContent = getAuxiliaryStyles();
    document.head.appendChild(auxiliaryStyles);

    // Initialize auxiliary functionality
    let auxCurrentLang = currentLang;
    const langModal = document.getElementById('aux-lang-modal');

    // Language switcher function
    window.switchAuxLanguage = function(lang) {
      auxCurrentLang = lang;
      document.querySelectorAll('[data-lang]').forEach(el => {
        el.classList.remove('active-lang');
        if (el.getAttribute('data-lang') === lang) {
          el.classList.add('active-lang');
        }
      });
      // Hide modal after selection
      langModal.style.display = 'none';
    };

    // Setup modal language buttons
    langModal.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-select-lang');
        window.switchAuxLanguage(lang);
      });
    });

    // Model filter function
    window.filterAuxModels = function() {
      const checkboxes = document.querySelectorAll('.model-checkbox input[type="checkbox"]');
      const selectedModels = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

      document.querySelectorAll('.page[data-model]').forEach(page => {
        const modelName = page.getAttribute('data-model');
        if (selectedModels.includes(modelName)) {
          page.classList.remove('hidden');
        } else {
          page.classList.add('hidden');
        }
      });
    };

    // Hide model selector if not in edit mode
    if (!isEditMode) {
      const modelSelector = document.querySelector('.model-selector');
      if (modelSelector) {
        modelSelector.style.display = 'none';
      }
    }

    // Set model filter from URL parameter
    if (urlModel) {
      const checkboxes = document.querySelectorAll('.model-checkbox input[type="checkbox"]');
      checkboxes.forEach(cb => {
        cb.checked = (cb.value === urlModel);
      });
    }

    // Apply initial language and filter
    window.filterAuxModels();

    // Show language modal if no language in URL hash, otherwise apply language
    if (!hashLang) {
      langModal.style.display = 'flex';
    } else {
      window.switchAuxLanguage(currentLang);
    }

    // Download button handler
    document.getElementById('aux-download-btn').addEventListener('click', function() {
      window.print();
    });

    // Back to offer button handler
    document.getElementById('back-to-offer-btn').addEventListener('click', function() {
      const currentUrl = new URL(window.location.href);
      // Remove 'auxiliary' from hash, keep language
      const hash = currentUrl.hash.replace('#', '').replace('-auxiliary', '').replace('auxiliary', '');
      currentUrl.hash = hash || 'ro';
      window.location.href = currentUrl.toString();
    });
  }

  function getAuxiliaryStyles() {
    return `
      * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
      :root {
        --title-color: #14171c;
        --paragraph-color: #737579;
        --accent-color: #000;
        --border-color: #e5e7eb;
        --bg-white: #ffffff;
      }
      body {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
        color: var(--title-color);
        background: #f3f4f6;
        line-height: 1.6;
        padding: 20px 0;
      }
      a, button, input, select, textarea { -webkit-tap-highlight-color: transparent; outline-color: #000; }
      ::selection { background: #000; color: #fff; }
      h1 { font-size: 4.8rem; line-height: 1.1em; font-weight: 500; }
      h2 { font-size: 2rem; line-height: 1.2em; font-weight: 500; }
      h3 { font-size: 1.6rem; line-height: 1.25em; font-weight: 500; }
      p { font-size: 0.75rem; line-height: 1.6em; font-weight: 300; color: var(--paragraph-color); }
      .page {
        width: 297mm; height: 210mm; margin: 0 auto 20px; background: white;
        position: relative; padding: 40px 48px; display: flex; flex-direction: column;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      .intro-page {
        justify-content: flex-end; align-items: flex-start; text-align: left;
        background-image:
          linear-gradient(to right, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%),
          linear-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.6) 70%, rgba(255,255,255,0.85) 85%, rgba(255,255,255,1) 100%),
          url('https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg');
        background-size: cover; background-position: center; padding-bottom: 60px; padding-left: 60px;
      }
      .intro-page h1 { margin-bottom: 16px; letter-spacing: -0.02em; }
      .intro-page .subtitle { font-size: 1.4rem; font-weight: 300; color: var(--paragraph-color); margin-bottom: 8px; max-width: 600px; }
      .intro-page .description { max-width: 500px; font-size: 1rem; line-height: 1.8em; }
      .model-header { margin-bottom: 32px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color); }
      .model-title { font-size: 2.4rem; font-weight: 500; margin-bottom: 4px; }
      .model-size { font-size: 1rem; color: var(--paragraph-color); font-weight: 300; }
      .phases-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 32px; margin-bottom: 32px; }
      .phase-title { font-size: 0.95rem; font-weight: 500; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.05em; }
      table { width: 100%; border-collapse: collapse; margin-bottom: 8px; }
      thead { display: none; }
      td { font-size: 0.75rem; padding: 8px 0; color: var(--paragraph-color); font-weight: 300; }
      .price-cell { text-align: right; font-weight: 400; white-space: nowrap; }
      .total-row { background: transparent; font-weight: 500; border-top: 1px solid var(--border-color); }
      .total-row td { padding: 12px 0; padding-top: 16px; font-size: 0.85rem; color: var(--title-color); }
      .grand-total { margin-top: auto; padding-top: 24px; border-top: 2px solid var(--title-color); display: flex; justify-content: space-between; align-items: baseline; }
      .grand-total-label { font-size: 0.95rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; }
      .grand-total-amount { font-size: 2.4rem; font-weight: 500; letter-spacing: -0.02em; }
      [data-lang]:not(.active-lang) { display: none; }
      .model-selector {
        position: fixed; top: 24px; left: 40px; display: flex; gap: 12px;
        background: #f9fafb; border-radius: 8px; padding: 8px 12px; z-index: 1000;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      }
      .model-checkbox { display: flex; align-items: center; gap: 6px; cursor: pointer; font-size: 0.8rem; color: var(--paragraph-color); }
      .model-checkbox input[type="checkbox"] { width: 16px; height: 16px; cursor: pointer; accent-color: var(--accent-color); }
      .model-checkbox input[type="checkbox"]:checked + span { color: var(--title-color); font-weight: 500; }
      .page[data-model].hidden { display: none; }
      .total-row, .grand-total { display: none; }
      .info-page { padding: 48px 60px; }
      .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px 64px; margin-top: 40px; }
      .info-section { display: flex; flex-direction: column; gap: 16px; }
      .info-section h3 { font-size: 1.1rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; padding-bottom: 12px; border-bottom: 1px solid var(--border-color); }
      .info-section p { font-size: 0.85rem; line-height: 1.8em; font-weight: 300; }
      .info-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 12px; }
      .info-list li { font-size: 0.85rem; line-height: 1.7em; color: var(--paragraph-color); font-weight: 300; padding-left: 20px; position: relative; }
      .info-list li:before { content: "•"; position: absolute; left: 0; color: var(--title-color); font-weight: 400; }
      .disclaimer { margin-top: auto; padding-top: 16px; text-align: left; }
      .disclaimer p { font-size: 0.7rem; line-height: 1.6em; color: var(--paragraph-color); font-weight: 300; }
      .disclaimer p strong { color: var(--title-color); font-weight: 400; }
      #aux-sticky-buttons {
        position: fixed; bottom: 30px; right: 30px; z-index: 9999;
        display: flex; gap: 12px;
      }
      #aux-download-btn, #back-to-offer-btn {
        display: flex; align-items: center; gap: 10px;
        font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 500;
        padding: 13px 20px; border-radius: 50px;
        cursor: pointer; transition: all 0.3s ease;
      }
      #aux-download-btn {
        background: #000; color: #fff; border: none;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      }
      #aux-download-btn:hover { background: #333; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.4); }
      #aux-download-btn:active { transform: translateY(0); }
      #aux-download-btn svg { flex-shrink: 0; }
      #back-to-offer-btn {
        background: #000; color: #fff; border: none;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      }
      #back-to-offer-btn:hover { background: #333; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.4); }
      #back-to-offer-btn:active { transform: translateY(0); }
      #back-to-offer-btn svg { flex-shrink: 0; }
      #back-to-offer-btn [data-lang]:not(.active-lang) { display: none; }
      @media (max-width: 768px) {
        #aux-sticky-buttons { flex-direction: column; left: 15px; right: 15px; bottom: 120px; }
        #aux-download-btn, #back-to-offer-btn { font-size: 14px; padding: 12px 18px; width: 100%; justify-content: center; }
      }
      #aux-lang-modal {
        display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.7); z-index: 99999; justify-content: center; align-items: center;
      }
      #aux-lang-modal .lang-modal-content {
        background: white; padding: 30px; border-radius: 12px; text-align: center; max-width: 350px; width: 90%;
      }
      #aux-lang-modal h3 { margin: 0 0 20px 0; font-size: 18px; color: #333; }
      #aux-lang-modal .lang-options { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
      #aux-lang-modal .lang-btn {
        padding: 15px 20px; border: 1px solid #ddd; border-radius: 8px; background: white;
        cursor: pointer; font-size: 16px; font-weight: 500; transition: all 0.2s; font-family: 'Poppins', sans-serif;
      }
      #aux-lang-modal .lang-btn:hover { border-color: #000; background: #f5f5f5; }
      @media print {
        @page { size: A4 landscape; margin: 0; }
        body { margin: 0; padding: 0; background: white; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        .page { margin: 0 !important; box-shadow: none !important; page-break-after: always; padding: 40px 48px !important; width: 297mm !important; height: 210mm !important; }
        .intro-page { padding: 40px 48px 60px 60px !important; }
        .info-page { padding: 48px 60px !important; }
        .model-selector, #aux-sticky-buttons, #aux-lang-modal { display: none !important; }
      }
    `;
  }

  function generateAuxiliaryHTML() {
    return `
      <div id="aux-lang-modal">
        <div class="lang-modal-content">
          <h3>Language</h3>
          <div class="lang-options">
            <button data-select-lang="en" class="lang-btn">English</button>
            <button data-select-lang="ro" class="lang-btn">Română</button>
            <button data-select-lang="de" class="lang-btn">Deutsch</button>
          </div>
        </div>
      </div>

      <div class="model-selector">
        <label class="model-checkbox"><input type="checkbox" value="nomad" checked onchange="filterAuxModels()"><span>Nomad</span></label>
        <label class="model-checkbox"><input type="checkbox" value="wanderlust" checked onchange="filterAuxModels()"><span>Wanderlust</span></label>
        <label class="model-checkbox"><input type="checkbox" value="serenity" checked onchange="filterAuxModels()"><span>Serenity</span></label>
        <label class="model-checkbox"><input type="checkbox" value="sanctuary" checked onchange="filterAuxModels()"><span>Sanctuary</span></label>
      </div>

      <div id="aux-sticky-buttons">
        <button id="back-to-offer-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span class="active-lang" data-lang="ro">Înapoi la Ofertă</span>
          <span data-lang="en">Back to Offer</span>
          <span data-lang="de">Zurück zum Angebot</span>
        </button>
        <button id="aux-download-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span class="active-lang" data-lang="ro">Descarcă</span>
          <span data-lang="en">Download</span>
          <span data-lang="de">Herunterladen</span>
        </button>
      </div>

      <div class="page intro-page">
        <p class="subtitle active-lang" data-lang="ro">Transparență Absolută a Costurilor</p>
        <p class="subtitle" data-lang="en">Absolute Cost Transparency</p>
        <p class="subtitle" data-lang="de">Absolute Kostentransparenz</p>
        <h1>BIOBUILDS</h1>
        <div class="description active-lang" data-lang="ro"><p>Claritate bugetară pe etape (înainte / în timpul / după construcție). Aliniere cu practicile locale și execuție rapidă.</p></div>
        <div class="description" data-lang="en"><p>Budget clarity by phases (before / during / after construction). Alignment with local practices and rapid execution.</p></div>
        <div class="description" data-lang="de"><p>Budgetklarheit nach Phasen (vor / während / nach dem Bau). Ausrichtung auf lokale Praktiken und schnelle Ausführung.</p></div>
      </div>

      <!-- Nomad 24m² -->
      <div class="page" data-model="nomad">
        <div class="model-header"><div class="model-title">Nomad</div><div class="model-size">24 m²</div></div>
        <div class="phases-grid">
          <div class="phase-section">
            <div class="phase-title active-lang" data-lang="ro">Înainte de construcție</div>
            <div class="phase-title" data-lang="en">Before construction</div>
            <div class="phase-title" data-lang="de">Vor Baubeginn</div>
            <table><tbody>
              <tr><td class="active-lang" data-lang="ro">Topograf</td><td data-lang="en">Surveyor & base plan</td><td data-lang="de">Vermesser + Lageplan</td><td class="price-cell">1.500–2.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Studiu geotehnic</td><td data-lang="en">Geotechnical report</td><td data-lang="de">Geotechnisches Gutachten</td><td class="price-cell">1.500–2.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Arhitect (faze 1–5)</td><td data-lang="en">Architect (phases 1–5)</td><td data-lang="de">Architekt HOAI LPH 1–5</td><td class="price-cell">3.000–4.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Taxă dosar</td><td data-lang="en">Building application fee</td><td data-lang="de">Bauantragsgebühr</td><td class="price-cell">1.000–1.500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Aviz rețea electrică</td><td data-lang="en">Grid connection application</td><td data-lang="de">Netzanschluss Strom</td><td class="price-cell">500–500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Aviz apă</td><td data-lang="en">Water connection application</td><td data-lang="de">Wasseranschluss</td><td class="price-cell">500–500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Statică pentru autorizație</td><td data-lang="en">Structural calc. for permit</td><td data-lang="de">Statische Berechnung</td><td class="price-cell">1.000–1.500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Manager de șantier (faze 6–8)</td><td data-lang="en">Construction manager (6–8)</td><td data-lang="de">Bauleitung LPH 6–8</td><td class="price-cell">1.500–2.000 EUR</td></tr>
              <tr class="total-row"><td class="active-lang" data-lang="ro"><strong>Subtotal</strong></td><td data-lang="en"><strong>Subtotal</strong></td><td data-lang="de"><strong>Zwischensumme</strong></td><td class="price-cell"><strong>10.500 EUR</strong></td></tr>
            </tbody></table>
          </div>
          <div class="phase-section">
            <div class="phase-title active-lang" data-lang="ro">În timpul construcției</div>
            <div class="phase-title" data-lang="en">During construction</div>
            <div class="phase-title" data-lang="de">Während Bau</div>
            <table><tbody>
              <tr><td class="active-lang" data-lang="ro">Șuruburi fundație (6 buc.)</td><td data-lang="en">Screw foundations (6 pcs)</td><td data-lang="de">Schraubfundamente (6 Stk)</td><td class="price-cell">2.800–4.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Branșamente locale</td><td data-lang="en">Local utility hookups</td><td data-lang="de">Hausanschlüsse lokal</td><td class="price-cell">2.000–4.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Macara + închideri stradale</td><td data-lang="en">Mobile crane + road closure</td><td data-lang="de">Autokran + Straßensperrung</td><td class="price-cell">1.500–3.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Electrician</td><td data-lang="en">Electrician T&M</td><td data-lang="de">Elektriker nach Aufwand</td><td class="price-cell">500–1.500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Terasamente</td><td data-lang="en">Earthworks</td><td data-lang="de">Erdarbeiten</td><td class="price-cell">2.000–10.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Stâlp racordare contoare</td><td data-lang="en">Meter pillar</td><td data-lang="de">Zähleranschlusssäule</td><td class="price-cell">1.000–3.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Canalizare/Cămine</td><td data-lang="en">Drains/shafts</td><td data-lang="de">Entwässerung/Schächte</td><td class="price-cell">1.000–10.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Tablou conexiune exterior</td><td data-lang="en">External distribution board</td><td data-lang="de">Außenanschlussverteiler</td><td class="price-cell">2.000–3.000 EUR</td></tr>
              <tr class="total-row"><td class="active-lang" data-lang="ro"><strong>Subtotal</strong></td><td data-lang="en"><strong>Subtotal</strong></td><td data-lang="de"><strong>Zwischensumme</strong></td><td class="price-cell"><strong>12.800 EUR</strong></td></tr>
            </tbody></table>
          </div>
          <div class="phase-section">
            <div class="phase-title active-lang" data-lang="ro">După construcție</div>
            <div class="phase-title" data-lang="en">After construction</div>
            <div class="phase-title" data-lang="de">Nach Bau</div>
            <table><tbody>
              <tr><td class="active-lang" data-lang="ro">Cămin apă</td><td data-lang="en">Water inspection chamber</td><td data-lang="de">Kontrollschacht Wasser</td><td class="price-cell">1.000–1.500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Amenajări (terasă)</td><td data-lang="en">Minimal landscaping (terrace)</td><td data-lang="de">Außenanlagen (Terrasse)</td><td class="price-cell">1.500–2.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Diverse / rezervă</td><td data-lang="en">Contingency</td><td data-lang="de">Unvorhergesehenes</td><td class="price-cell">500–1.500 EUR</td></tr>
              <tr class="total-row"><td class="active-lang" data-lang="ro"><strong>Subtotal</strong></td><td data-lang="en"><strong>Subtotal</strong></td><td data-lang="de"><strong>Zwischensumme</strong></td><td class="price-cell"><strong>3.000 EUR</strong></td></tr>
            </tbody></table>
          </div>
        </div>
        <div class="grand-total">
          <div class="grand-total-label active-lang" data-lang="ro">Total Costuri</div>
          <div class="grand-total-label" data-lang="en">Total Costs</div>
          <div class="grand-total-label" data-lang="de">Gesamtkosten</div>
          <div class="grand-total-amount">26.300 EUR</div>
        </div>
        <div class="disclaimer">
          <p class="active-lang" data-lang="ro"><strong>Notă:</strong> Multe dintre aceste costuri pot să nu fie necesare. Aceasta este o prezentare completă pentru transparență. Multe poziții sunt opționale. Totul depinde de specificul proiectului, zona și cerințele dumneavoastră.</p>
          <p data-lang="en"><strong>Note:</strong> Many of these costs may not be required. This is a full scope overview for transparency. Many items are optional. It depends on your project, location, and requirements.</p>
          <p data-lang="de"><strong>Hinweis:</strong> Viele Kosten sind möglicherweise nicht erforderlich. Dies ist eine vollständige Übersicht für Transparenz. Viele Positionen sind optional. Es hängt von Ihrem Projekt, Standort und Anforderungen ab.</p>
        </div>
      </div>

      <!-- Wanderlust 48m² -->
      <div class="page" data-model="wanderlust">
        <div class="model-header"><div class="model-title">Wanderlust</div><div class="model-size">48 m²</div></div>
        <div class="phases-grid">
          <div class="phase-section">
            <div class="phase-title active-lang" data-lang="ro">Înainte de construcție</div>
            <div class="phase-title" data-lang="en">Before construction</div>
            <div class="phase-title" data-lang="de">Vor Baubeginn</div>
            <table><tbody>
              <tr><td class="active-lang" data-lang="ro">Arhitect (faze 1–5)</td><td data-lang="en">Architect (phases 1–5)</td><td data-lang="de">Architekt HOAI LPH 1–5</td><td class="price-cell">5.000–6.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Manager de șantier (faze 6–8)</td><td data-lang="en">Construction manager (6–8)</td><td data-lang="de">Bauleitung LPH 6–8</td><td class="price-cell">3.000–4.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Taxă dosar</td><td data-lang="en">Building application fee</td><td data-lang="de">Bauantragsgebühr</td><td class="price-cell">1.500–2.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Consultant energetic</td><td data-lang="en">Energy consultant</td><td data-lang="de">Energieberater</td><td class="price-cell">3.000–5.500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Topograf</td><td data-lang="en">Surveyor & base plan</td><td data-lang="de">Vermesser + Lageplan</td><td class="price-cell">2.000–2.500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Statică pentru autorizație</td><td data-lang="en">Structural calc. for permit</td><td data-lang="de">Statische Berechnung</td><td class="price-cell">1.500–2.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Studiu geotehnic</td><td data-lang="en">Geotechnical report</td><td data-lang="de">Geotechnisches Gutachten</td><td class="price-cell">1.500–2.000 EUR</td></tr>
              <tr class="total-row"><td class="active-lang" data-lang="ro"><strong>Subtotal</strong></td><td data-lang="en"><strong>Subtotal</strong></td><td data-lang="de"><strong>Zwischensumme</strong></td><td class="price-cell"><strong>17.500 EUR</strong></td></tr>
            </tbody></table>
          </div>
          <div class="phase-section">
            <div class="phase-title active-lang" data-lang="ro">În timpul construcției</div>
            <div class="phase-title" data-lang="en">During construction</div>
            <div class="phase-title" data-lang="de">Während Bau</div>
            <table><tbody>
              <tr><td class="active-lang" data-lang="ro">Șuruburi fundație (12 buc.)</td><td data-lang="en">Screw foundations (12 pcs)</td><td data-lang="de">Schraubfundamente (12 Stk)</td><td class="price-cell">5.000–6.500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Branșamente locale</td><td data-lang="en">Local utility hookups</td><td data-lang="de">Hausanschlüsse lokal</td><td class="price-cell">4.000–8.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Macara + închideri stradale</td><td data-lang="en">Mobile crane + road closure</td><td data-lang="de">Autokran + Straßensperrung</td><td class="price-cell">3.000–8.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Aviz rețea electrică</td><td data-lang="en">Electricity application</td><td data-lang="de">Netzanschluss Strom</td><td class="price-cell">500–500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Aviz apă</td><td data-lang="en">Water application</td><td data-lang="de">Wasseranschluss</td><td class="price-cell">500–500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Cămin apă</td><td data-lang="en">Water inspection chamber</td><td data-lang="de">Kontrollschacht Wasser</td><td class="price-cell">1.000–1.500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Electrician</td><td data-lang="en">Electrician T&M</td><td data-lang="de">Elektriker nach Aufwand</td><td class="price-cell">1.000–2.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Tablou conexiune ext.</td><td data-lang="en">External distribution board</td><td data-lang="de">Außenanschlussverteiler</td><td class="price-cell">2.000–4.000 EUR</td></tr>
              <tr class="total-row"><td class="active-lang" data-lang="ro"><strong>Subtotal</strong></td><td data-lang="en"><strong>Subtotal</strong></td><td data-lang="de"><strong>Zwischensumme</strong></td><td class="price-cell"><strong>17.000 EUR</strong></td></tr>
            </tbody></table>
          </div>
          <div class="phase-section">
            <div class="phase-title active-lang" data-lang="ro">După construcție</div>
            <div class="phase-title" data-lang="en">After construction</div>
            <div class="phase-title" data-lang="de">Nach Bau</div>
            <table><tbody>
              <tr><td class="active-lang" data-lang="ro">Bucătărie</td><td data-lang="en">Kitchen</td><td data-lang="de">Küche</td><td class="price-cell">3.000–8.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Diverse / neprevăzute</td><td data-lang="en">Unforeseen</td><td data-lang="de">Unvorhergesehenes</td><td class="price-cell">500–2.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Terasă</td><td data-lang="en">Terrace</td><td data-lang="de">Terrasse</td><td class="price-cell">2.000–3.000 EUR</td></tr>
              <tr class="total-row"><td class="active-lang" data-lang="ro"><strong>Subtotal</strong></td><td data-lang="en"><strong>Subtotal</strong></td><td data-lang="de"><strong>Zwischensumme</strong></td><td class="price-cell"><strong>5.500 EUR</strong></td></tr>
            </tbody></table>
          </div>
        </div>
        <div class="grand-total">
          <div class="grand-total-label active-lang" data-lang="ro">Total Costuri</div>
          <div class="grand-total-label" data-lang="en">Total Costs</div>
          <div class="grand-total-label" data-lang="de">Gesamtkosten</div>
          <div class="grand-total-amount">40.000 EUR</div>
        </div>
        <div class="disclaimer">
          <p class="active-lang" data-lang="ro"><strong>Notă:</strong> Multe dintre aceste costuri pot să nu fie necesare. Aceasta este o prezentare completă pentru transparență. Multe poziții sunt opționale. Totul depinde de specificul proiectului, zona și cerințele dumneavoastră.</p>
          <p data-lang="en"><strong>Note:</strong> Many of these costs may not be required. This is a full scope overview for transparency. Many items are optional. It depends on your project, location, and requirements.</p>
          <p data-lang="de"><strong>Hinweis:</strong> Viele Kosten sind möglicherweise nicht erforderlich. Dies ist eine vollständige Übersicht für Transparenz. Viele Positionen sind optional. Es hängt von Ihrem Projekt, Standort und Anforderungen ab.</p>
        </div>
      </div>

      <!-- Serenity 95m² -->
      <div class="page" data-model="serenity">
        <div class="model-header"><div class="model-title">Serenity</div><div class="model-size">95 m²</div></div>
        <div class="phases-grid">
          <div class="phase-section">
            <div class="phase-title active-lang" data-lang="ro">Înainte de construcție</div>
            <div class="phase-title" data-lang="en">Before construction</div>
            <div class="phase-title" data-lang="de">Vor Baubeginn</div>
            <table><tbody>
              <tr><td class="active-lang" data-lang="ro">Arhitect (faze 1–5)</td><td data-lang="en">Architect (phases 1–5)</td><td data-lang="de">Architekt HOAI LPH 1–5</td><td class="price-cell">8.000–10.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Manager de șantier (faze 6–8)</td><td data-lang="en">Construction manager (6–8)</td><td data-lang="de">Bauleitung LPH 6–8</td><td class="price-cell">4.000–5.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Taxă dosar</td><td data-lang="en">Building application fee</td><td data-lang="de">Bauantragsgebühr</td><td class="price-cell">1.500–2.500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Consultant energetic</td><td data-lang="en">Energy consultant</td><td data-lang="de">Energieberater</td><td class="price-cell">3.000–5.500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Topograf</td><td data-lang="en">Surveyor & base plan</td><td data-lang="de">Vermesser + Lageplan</td><td class="price-cell">2.000–2.500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Statică pentru autorizație</td><td data-lang="en">Structural calc. for permit</td><td data-lang="de">Statische Berechnung</td><td class="price-cell">1.500–2.500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Studiu geotehnic</td><td data-lang="en">Geotechnical report</td><td data-lang="de">Geotechnisches Gutachten</td><td class="price-cell">1.500–2.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Aviz rețea electrică</td><td data-lang="en">Grid connection application</td><td data-lang="de">Netzanschluss Strom</td><td class="price-cell">500–500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Aviz apă</td><td data-lang="en">Water connection application</td><td data-lang="de">Wasseranschluss</td><td class="price-cell">500–500 EUR</td></tr>
              <tr class="total-row"><td class="active-lang" data-lang="ro"><strong>Subtotal</strong></td><td data-lang="en"><strong>Subtotal</strong></td><td data-lang="de"><strong>Zwischensumme</strong></td><td class="price-cell"><strong>22.500 EUR</strong></td></tr>
            </tbody></table>
          </div>
          <div class="phase-section">
            <div class="phase-title active-lang" data-lang="ro">În timpul construcției</div>
            <div class="phase-title" data-lang="en">During construction</div>
            <div class="phase-title" data-lang="de">Während Bau</div>
            <table><tbody>
              <tr><td class="active-lang" data-lang="ro">Șuruburi fundație (18 buc.)</td><td data-lang="en">Screw foundations (18 pcs)</td><td data-lang="de">Schraubfundamente (18 Stk)</td><td class="price-cell">8.280–12.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Grinzi suport (6 buc.)</td><td data-lang="en">Support beams (6 pcs)</td><td data-lang="de">Träger (6 Stk)</td><td class="price-cell">6.800–8.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Branșamente locale</td><td data-lang="en">Local utility hookups</td><td data-lang="de">Hausanschlüsse lokal</td><td class="price-cell">5.000–15.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Macara + închideri stradale</td><td data-lang="en">Mobile crane + road closure</td><td data-lang="de">Autokran + Straßensperrung</td><td class="price-cell">3.000–4.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Cămin apă</td><td data-lang="en">Water inspection chamber</td><td data-lang="de">Kontrollschacht Wasser</td><td class="price-cell">1.000–1.500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Electrician</td><td data-lang="en">Electrician T&M</td><td data-lang="de">Elektriker nach Aufwand</td><td class="price-cell">1.000–2.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Tablou conexiune ext.</td><td data-lang="en">External distribution board</td><td data-lang="de">Außenanschlussverteiler</td><td class="price-cell">2.000–6.000 EUR</td></tr>
              <tr class="total-row"><td class="active-lang" data-lang="ro"><strong>Subtotal</strong></td><td data-lang="en"><strong>Subtotal</strong></td><td data-lang="de"><strong>Zwischensumme</strong></td><td class="price-cell"><strong>27.080 EUR</strong></td></tr>
            </tbody></table>
          </div>
          <div class="phase-section">
            <div class="phase-title active-lang" data-lang="ro">După construcție</div>
            <div class="phase-title" data-lang="en">After construction</div>
            <div class="phase-title" data-lang="de">Nach Bau</div>
            <table><tbody>
              <tr><td class="active-lang" data-lang="ro">Bucătărie</td><td data-lang="en">Kitchen</td><td data-lang="de">Küche</td><td class="price-cell">5.000–12.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Diverse / neprevăzute</td><td data-lang="en">Unforeseen</td><td data-lang="de">Unvorhergesehenes</td><td class="price-cell">500–2.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Terasă</td><td data-lang="en">Terrace</td><td data-lang="de">Terrasse</td><td class="price-cell">2.000–3.500 EUR</td></tr>
              <tr class="total-row"><td class="active-lang" data-lang="ro"><strong>Subtotal</strong></td><td data-lang="en"><strong>Subtotal</strong></td><td data-lang="de"><strong>Zwischensumme</strong></td><td class="price-cell"><strong>7.500 EUR</strong></td></tr>
            </tbody></table>
          </div>
        </div>
        <div class="grand-total">
          <div class="grand-total-label active-lang" data-lang="ro">Total Costuri</div>
          <div class="grand-total-label" data-lang="en">Total Costs</div>
          <div class="grand-total-label" data-lang="de">Gesamtkosten</div>
          <div class="grand-total-amount">57.080 EUR</div>
        </div>
        <div class="disclaimer">
          <p class="active-lang" data-lang="ro"><strong>Notă:</strong> Multe dintre aceste costuri pot să nu fie necesare. Aceasta este o prezentare completă pentru transparență. Multe poziții sunt opționale. Totul depinde de specificul proiectului, zona și cerințele dumneavoastră.</p>
          <p data-lang="en"><strong>Note:</strong> Many of these costs may not be required. This is a full scope overview for transparency. Many items are optional. It depends on your project, location, and requirements.</p>
          <p data-lang="de"><strong>Hinweis:</strong> Viele Kosten sind möglicherweise nicht erforderlich. Dies ist eine vollständige Übersicht für Transparenz. Viele Positionen sind optional. Es hängt von Ihrem Projekt, Standort und Anforderungen ab.</p>
        </div>
      </div>

      <!-- Sanctuary 142m² -->
      <div class="page" data-model="sanctuary">
        <div class="model-header"><div class="model-title">Sanctuary</div><div class="model-size">142 m²</div></div>
        <div class="phases-grid">
          <div class="phase-section">
            <div class="phase-title active-lang" data-lang="ro">Înainte de construcție</div>
            <div class="phase-title" data-lang="en">Before construction</div>
            <div class="phase-title" data-lang="de">Vor Baubeginn</div>
            <table><tbody>
              <tr><td class="active-lang" data-lang="ro">Arhitect (faze 1–5)</td><td data-lang="en">Architect (phases 1–5)</td><td data-lang="de">Architekt HOAI LPH 1–5</td><td class="price-cell">11.000–13.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Manager de șantier (faze 6–8)</td><td data-lang="en">Construction manager (6–8)</td><td data-lang="de">Bauleitung LPH 6–8</td><td class="price-cell">5.000–6.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Taxă dosar</td><td data-lang="en">Building application fee</td><td data-lang="de">Bauantragsgebühr</td><td class="price-cell">2.000–2.500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Consultant energetic</td><td data-lang="en">Energy consultant</td><td data-lang="de">Energieberater</td><td class="price-cell">4.500–5.500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Topograf</td><td data-lang="en">Surveyor & base plan</td><td data-lang="de">Vermesser + Lageplan</td><td class="price-cell">2.000–2.500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Statică pentru autorizație</td><td data-lang="en">Structural calc. for permit</td><td data-lang="de">Statische Berechnung</td><td class="price-cell">1.500–2.500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Studiu geotehnic</td><td data-lang="en">Geotechnical report</td><td data-lang="de">Geotechnisches Gutachten</td><td class="price-cell">1.500–2.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Aviz rețea electrică</td><td data-lang="en">Grid connection application</td><td data-lang="de">Netzanschluss Strom</td><td class="price-cell">500–500 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Aviz apă</td><td data-lang="en">Water connection application</td><td data-lang="de">Wasseranschluss</td><td class="price-cell">500–500 EUR</td></tr>
              <tr class="total-row"><td class="active-lang" data-lang="ro"><strong>Subtotal</strong></td><td data-lang="en"><strong>Subtotal</strong></td><td data-lang="de"><strong>Zwischensumme</strong></td><td class="price-cell"><strong>28.500 EUR</strong></td></tr>
            </tbody></table>
          </div>
          <div class="phase-section">
            <div class="phase-title active-lang" data-lang="ro">În timpul construcției</div>
            <div class="phase-title" data-lang="en">During construction</div>
            <div class="phase-title" data-lang="de">Während Bau</div>
            <table><tbody>
              <tr><td class="active-lang" data-lang="ro">Șuruburi fundație (24 buc.)</td><td data-lang="en">Screw foundations (24 pcs)</td><td data-lang="de">Schraubfundamente (24 Stk)</td><td class="price-cell">11.000–18.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Grinzi suport (6 buc.)</td><td data-lang="en">Support beams (6 pcs)</td><td data-lang="de">Träger (6 Stk)</td><td class="price-cell">6.000–9.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Lucrări edilitare</td><td data-lang="en">Civil engineering works</td><td data-lang="de">Tiefbauarbeiten</td><td class="price-cell">5.000–15.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Macara + închideri stradale</td><td data-lang="en">Mobile crane + road closure</td><td data-lang="de">Autokran + Straßensperrung</td><td class="price-cell">5.000–10.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Branșamente locale</td><td data-lang="en">Local utility hookups</td><td data-lang="de">Hausanschlüsse lokal</td><td class="price-cell">2.000–5.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Electrician</td><td data-lang="en">Electrician T&M</td><td data-lang="de">Elektriker nach Aufwand</td><td class="price-cell">1.000–2.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Tablou conexiune ext.</td><td data-lang="en">External distribution board</td><td data-lang="de">Außenanschlussverteiler</td><td class="price-cell">3.000–7.000 EUR</td></tr>
              <tr class="total-row"><td class="active-lang" data-lang="ro"><strong>Subtotal</strong></td><td data-lang="en"><strong>Subtotal</strong></td><td data-lang="de"><strong>Zwischensumme</strong></td><td class="price-cell"><strong>33.000 EUR</strong></td></tr>
            </tbody></table>
          </div>
          <div class="phase-section">
            <div class="phase-title active-lang" data-lang="ro">După construcție</div>
            <div class="phase-title" data-lang="en">After construction</div>
            <div class="phase-title" data-lang="de">Nach Bau</div>
            <table><tbody>
              <tr><td class="active-lang" data-lang="ro">Bucătărie</td><td data-lang="en">Kitchen</td><td data-lang="de">Küche</td><td class="price-cell">7.000–18.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Diverse / neprevăzute</td><td data-lang="en">Unforeseen</td><td data-lang="de">Unvorhergesehenes</td><td class="price-cell">500–2.000 EUR</td></tr>
              <tr><td class="active-lang" data-lang="ro">Terasă</td><td data-lang="en">Terrace</td><td data-lang="de">Terrasse</td><td class="price-cell">2.500–4.000 EUR</td></tr>
              <tr class="total-row"><td class="active-lang" data-lang="ro"><strong>Subtotal</strong></td><td data-lang="en"><strong>Subtotal</strong></td><td data-lang="de"><strong>Zwischensumme</strong></td><td class="price-cell"><strong>10.000 EUR</strong></td></tr>
            </tbody></table>
          </div>
        </div>
        <div class="grand-total">
          <div class="grand-total-label active-lang" data-lang="ro">Total Costuri</div>
          <div class="grand-total-label" data-lang="en">Total Costs</div>
          <div class="grand-total-label" data-lang="de">Gesamtkosten</div>
          <div class="grand-total-amount">71.500 EUR</div>
        </div>
        <div class="disclaimer">
          <p class="active-lang" data-lang="ro"><strong>Notă:</strong> Multe dintre aceste costuri pot să nu fie necesare. Aceasta este o prezentare completă pentru transparență. Multe poziții sunt opționale. Totul depinde de specificul proiectului, zona și cerințele dumneavoastră.</p>
          <p data-lang="en"><strong>Note:</strong> Many of these costs may not be required. This is a full scope overview for transparency. Many items are optional. It depends on your project, location, and requirements.</p>
          <p data-lang="de"><strong>Hinweis:</strong> Viele Kosten sind möglicherweise nicht erforderlich. Dies ist eine vollständige Übersicht für Transparenz. Viele Positionen sind optional. Es hängt von Ihrem Projekt, Standort und Anforderungen ab.</p>
        </div>
      </div>

      <!-- Info Page -->
      <div class="page info-page">
        <div class="info-grid">
          <div class="info-section">
            <h3 class="active-lang" data-lang="ro">Legendă</h3>
            <h3 data-lang="en">Legend</h3>
            <h3 data-lang="de">Legende</h3>
            <ul class="info-list">
              <li class="active-lang" data-lang="ro">Esențial–max = interval estimativ (Esențial este folosit în totaluri)</li>
              <li data-lang="en">Essential–max = estimated range (Essential is used in totals)</li>
              <li data-lang="de">Wesentlich–max = geschätzter Bereich (Wesentlich wird in Summen verwendet)</li>
              <li class="active-lang" data-lang="ro">Valori în euro, fără TVA, fără prețul modulului</li>
              <li data-lang="en">Values in euros, without VAT, without module price</li>
              <li data-lang="de">Werte in Euro, ohne MwSt., ohne Modulpreis</li>
              <li class="active-lang" data-lang="ro">„Esențiale" = strict necesare pentru punerea în operă</li>
              <li data-lang="en">"Essential" = strictly necessary for implementation</li>
              <li data-lang="de">„Wesentlich" = unbedingt erforderlich für die Umsetzung</li>
            </ul>
          </div>
          <div class="info-section">
            <h3 class="active-lang" data-lang="ro">De ce acest ghid</h3>
            <h3 data-lang="en">Why this guide</h3>
            <h3 data-lang="de">Warum dieser Leitfaden</h3>
            <ul class="info-list">
              <li class="active-lang" data-lang="ro">Claritate bugetară pe etape (înainte / în timpul / după construcție)</li>
              <li data-lang="en">Budget clarity by phases (before / during / after construction)</li>
              <li data-lang="de">Budgetklarheit nach Phasen (vor / während / nach dem Bau)</li>
              <li class="active-lang" data-lang="ro">Aliniere cu practicile locale și execuție rapidă</li>
              <li data-lang="en">Alignment with local practices and rapid execution</li>
              <li data-lang="de">Ausrichtung auf lokale Praktiken und schnelle Ausführung</li>
            </ul>
          </div>
          <div class="info-section">
            <h3 class="active-lang" data-lang="ro">Variabile bugetare</h3>
            <h3 data-lang="en">Budget variables</h3>
            <h3 data-lang="de">Budgetvariablen</h3>
            <ul class="info-list">
              <li class="active-lang" data-lang="ro">Distanța până la utilități, tip contor, capacități disponibile</li>
              <li data-lang="en">Distance to utilities, meter type, available capacities</li>
              <li data-lang="de">Entfernung zu Versorgungsleitungen, Zählertyp, verfügbare Kapazitäten</li>
              <li class="active-lang" data-lang="ro">Sol dificil → terasamente suplimentare, fundație clasică</li>
              <li data-lang="en">Difficult soil → additional earthworks, classic foundation</li>
              <li data-lang="de">Schwieriger Boden → zusätzliche Erdarbeiten, klassisches Fundament</li>
              <li class="active-lang" data-lang="ro">Reglementări locale pentru macara și închideri</li>
              <li data-lang="en">Local regulations for crane and road closures</li>
              <li data-lang="de">Lokale Vorschriften für Kran und Straßensperrungen</li>
            </ul>
            <p class="active-lang" data-lang="ro" style="margin-top: 16px; font-style: italic;">Toate prețurile sunt estimări și pot varia în funcție de teren, locație, dimensiunea proiectului.</p>
            <p data-lang="en" style="margin-top: 16px; font-style: italic;">All prices are estimates and can vary based on land, location, project size.</p>
            <p data-lang="de" style="margin-top: 16px; font-style: italic;">Alle Preise sind Schätzungen und können je nach Grundstück, Standort, Projektgröße variieren.</p>
          </div>
          <div class="info-section">
            <h3 class="active-lang" data-lang="ro">Pași următori</h3>
            <h3 data-lang="en">Next steps</h3>
            <h3 data-lang="de">Nächste Schritte</h3>
            <ul class="info-list">
              <li class="active-lang" data-lang="ro">Verificare teren (foto, plan cadastral)</li>
              <li data-lang="en">Site verification (photos, cadastral plan)</li>
              <li data-lang="de">Grundstücksüberprüfung (Fotos, Katasterplan)</li>
              <li class="active-lang" data-lang="ro">Pachet proiectare: arhitect + statică + studii</li>
              <li data-lang="en">Design package: architect + structural + studies</li>
              <li data-lang="de">HOAI-Set: Architekt + Statik + Studien</li>
              <li class="active-lang" data-lang="ro">Layout fundații și plan logistic (macara, acces)</li>
              <li data-lang="en">Foundation layout and logistics plan (crane, access)</li>
              <li data-lang="de">Fundamentlayout und Logistikplan (Kran, Zugang)</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  initialize();
});
