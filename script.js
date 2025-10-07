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
        "“Modulele sunt fixate cu șuruburi de oțel, apoi acoperite cu o membrană impermeabilă și placate cu lemn durabil. Sistemul este prefabricat în fabrica BioBuilds, oferind livrare rapidă și timpi scurți de asamblare. Sistemul de construcție este certificat Passivhaus, având valori U excepționale și eliminând punțile termice.”",
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
        "“The modules are fixed with steel screws, then covered with a waterproof membrane and clad in durable wood. The system is prefabricated in the BioBuilds factory, offering fast delivery and short assembly times. The construction system is Passivhaus certified, having exceptional U-values and eliminating thermal bridges.”",
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
    },
    de: {
      pageTitle: "Angebot Erstellt - Biobuilds",
      validity: "GÜLTIGKEIT: 30 TAGE",
      offerLabel: "ANGEBOT",
      offerFor: "Angebot-",
      clientNamePlaceholder: "Kunde Name",
      footerSlogan:
        "Modular ist modern, innovativ und nachhaltig. Wählen Sie den idealen Raum für sich, gebaut nach den höchsten Baustandards der Welt.",
      passiveHouseQuote:
        "„Die Module werden mit Stahlschrauben fixiert, anschließend mit einer wasserdichten Membran abgedeckt und mit langlebigem Holz verkleidet. Das System wird im BioBuilds-Werk vorgefertigt und ermöglicht schnelle Lieferung und kurze Montagezeiten. Das Bausystem ist vom Passivhaus Institut zertifiziert, weist außergewöhnliche U-Werte auf und eliminiert Wärmebrücken.“",
      energyConsumptionLabel: "Energieverbrauch:",
      energyConsumptionValue: ">90 % reduziert",
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
        "Premium-Vollformatplatten von 2,5 × 1,2 m; 100 % wasserdicht; sehr hohe Langlebigkeit.",
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
        "Blockieren >95 % der Sonneneinstrahlung; App- oder manuell steuerbar; zertifiziert vom Passivhaus Institut, Darmstadt; CE.",
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

    // Update active class on selector
    document.querySelectorAll("#language-selector a").forEach((a) => {
      a.classList.toggle("active", a.getAttribute("data-lang") === lang);
    });

    // Re-render components that depend on language
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

  // ... (Rest of the original JS)
  const pricingLogic = {
    "nomad-24": {
      base: { "semi-finished": 39800, turnkey: 59800 },
      upgrades: {
        parquet: { cashmere: 1800, hazelnut: 1800 },
        ventilation: 4800,
        blinds: 2000,
      },
    },
    "wanderlust-48": {
      base: { "semi-finished": 59800, turnkey: 109800 },
      upgrades: {
        parquet: { cashmere: 3800, hazelnut: 3800 },
        ventilation: 7800,
        blinds: 4000,
      },
    },
    "serenity-95": {
      base: { "semi-finished": 109800, turnkey: 189800 },
      upgrades: {
        parquet: { cashmere: 7800, hazelnut: 7800 },
        ventilation: 9800,
        blinds: 7000,
      },
    },
    "sanctuary-142": {
      base: { "semi-finished": 159800, turnkey: 279800 },
      upgrades: {
        parquet: { cashmere: 11800, hazelnut: 11800 },
        ventilation: 9800,
        blinds: 9000,
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

  // MODIFIED to use translation object
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

  // MODIFIED to use translation object
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

    // MODIFIED to use translation object for dynamic text
    const turnkeyVentH4 = document.querySelector(
      "#section-3-text .column:last-child h4:last-of-type",
    );
    if (turnkeyVentH4) {
      turnkeyVentH4.innerHTML =
        translations[currentLang][
          modelId === "nomad-24"
            ? "ventilationSystemTitle"
            : "Genvex Premium Preheat 250"
        ];
    }
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
      .getElementById("upgrade-blinds")
      .classList.toggle("disabled", selectionState.finish === "turnkey");
    document
      .getElementById("upgrade-ventilation")
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

  // This function is not translated as it generates raw HTML structure.
  // The static content it creates should have data-key attributes for translation.
  function generateSection2Content(container, facadeType) {
    let facadeTitle =
      facadeType === "lunawood"
        ? "Fațadă Lunawood"
        : "Fațadă ventilată Yakisugi";
    let facadeDescription =
      facadeType === "lunawood"
        ? "O fațadă din pin nordic, tratată la presiuni imense cu aburi (termotratat, fără chimicale), pentru a obține Thermowood: o fațadă durabilă, excepțional de stabilă, rezistentă la intemperii și ușor de întreținut, cu o nuanță caldă de caramel."
        : "Mentenanță estimată o dată la 10 ani; Cea mai bună rezistență la foc din clasa de lemn natural; impermeabilă.";
    container.innerHTML = `<h2>MODULAR</h2><div class="flex-wrapper"><div class="column"><h3>STRUCTURĂ</h3><h4>Structura MODULAR</h4><p>Combină rezistența mecanică remarcabilă cu proprietăți de ultra-izolare ce elimină complet punțile termice. Certificată de Institutul de Case Pasive din Darmstadt, Germania și de EPD International. U ≈ 0,11 W/m²K, U-wert.</p><h4>Cadru din lemn C24</h4><p>Lemn C24 cu certificare FSC/PEFC; rezistență foarte mare la sarcina structurală.</p><h4>Izolație din fibră de lemn ultra-eficientă</h4><p>Izolație pentru pereți, acoperiș și podea; fibră de lemn ultra-eficientă STEICO λ ≈ 0,036 W/m·K; certificată CE.</p><h4>OSB 3 ECO, Germania</h4><p>Panou structural fără formaldehidă și VOC, aprobat de Institutul de Case Pasive din Darmstadt, Germania; certificat CE.</p><h4>Placă DWD, Austria</h4><p>Permeabilă la vapori (permite pereților să „respire” menținându-i etanși la aer din exterior; unidirecțional); certificată CE.</p><h4>Membrană Smart (folie)</h4><p>Creează un interior etanș la aer, permițând difuzia vaporilor spre exterior. Certificată de Institutul de Case Pasive din Darmstadt, Germania; certificată CE.</p></div><div class="column"><h3>FINISAJE EXTERIOARE COMPLETE</h3><h4>${facadeTitle}</h4><p>${facadeDescription}</p><h4>Acoperiș ventilat</h4><p>Spațiul ventilat crește performanța termică și durata de viață a acoperișului.</p><h4>Membrană EPDM</h4><p>Impermeabilă; garanție de 30 de ani de la producător.</p><h4>Sistem de colectare a apei pluviale</h4><p>Jgheab ascuns integrat în fațadă; pregătit pentru colectare.</p><h3>FERESTRE ȘI UȘI EXTERIOARE</h3><h4>Cadru din aluminiu Genesis 90</h4><p>Profil rigid, ultra-eficient; Uwi ≤ 0,85 W/m²K; certificat de Institutul de Case Pasive din Darmstadt, Germania; certificat CE.</p><h4>Geam tripan laminat</h4><p>U = 0,50 W/m²K; sticlă securizată laminată; certificat de Institutul de Case Pasive din Darmstadt, Germania; certificat CE.</p></div><div class="column"><h3>BUCĂTĂRIE</h3><h4>Instalații pentru bucătărie</h4><p>Complet pregătite pe poziție pentru mobilierul tău.</p><h3>INSTALAȚII</h3><h4>Instalații electrice</h4><p>Cabluri și copex complet instalate, conforme cu toate reglementările locale aplicabile (ex. CE / Standardul I7/2011 / IEC 60364).</p><h4>Instalații sanitare</h4><p>Țevi și fitinguri conforme cu toate reglementările locale necesare. PPR / PEX.</p><h3>CERTIFICĂRI & GARANȚII</h3><h4>Certificare Passivhaus</h4><p>Emitent: Institutul de Case Pasive din Darmstadt, Germania.</p><h4>Certificare EPD</h4><p>Emitent: EPD, Europa.</p><h4>Marcaj CE</h4><p>Toate componentele relevante respectă Regulamentul UE privind produsele pentru construcții.</p><h4>Garanție standard UE</h4><p>24 de luni pentru uz privat; 12 luni pentru uz comercial.</p></div></div>`;
  }

  // MODIFIED to use translation object
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
    floorplanSelect.innerHTML = ""; // Clear previous options
    Object.keys(floorplans).forEach((planId) => {
      const option = document.createElement("option");
      option.value = planId;
      option.textContent = `${translations[currentLang].plan} ${planId.toUpperCase()}`; // Using planId for name
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

    // MODIFIED to populate from translation object
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

        // Also update the finish dropdown text to the new language
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

    // Initial page load with default language
    setLanguage(currentLang);
  }

  initialize();
});
