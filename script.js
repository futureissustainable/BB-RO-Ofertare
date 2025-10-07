document.addEventListener('DOMContentLoaded', () => {

    // --- TRANSLATIONS OBJECT ---
    const translations = {
        ro: {
            page_title: "Oferta Generata - Biobuilds",
            validity: "VALABILITATE: 30 ZILE",
            offer: "OFERTA",
            offer_for: "Ofertă-",
            client_name_placeholder: "Nume Client",
            slogan: "Modular este modern, inovator și sustenabil. Alege spațiul ideal pentru tine, construit la cele mai înalte standarde de construcție din lume.",
            passive_quote: "“Modulele sunt fixate cu șuruburi de oțel, apoi acoperite cu o membrană impermeabilă și placate cu lemn durabil. Sistemul este prefabricat în fabrica BioBuilds, oferind livrare rapidă și timpi scurți de asamblare. Sistemul de construcție este certificat Passivhaus, având valori U excepționale și eliminând punțile termice.”",
            passive_cite: "– Passivhaus Institute",
            energy_consumption: "Energy Consumption",
            air_tightness: "Air Tightness",
            co2_saved: "Tone de CO₂ salvate",
            co2_lifespan: "pe durata de viață a clădirii",
            organic_wood: "Structură și sistem pe bază de <strong>lemn organic</strong>, cu certificare EPD",
            lower_consumption: "Consum de energie cu <strong>95% mai mic</strong>, datorită sistemului Modular",
            turnkey: "La Cheie",
            semi_finished: "Semifinisat",
            turnkey_title: "LA CHEIE",
            complete_interior_finishes: "FINISAJE INTERIOARE COMPLETE",
            wood_slat_ceiling_title: "Tavan cu lamele din lemn + fetru",
            wood_slat_ceiling_desc: "Lemn natural și fetru reciclat; absorbție acustică excelentă.",
            fiberglass_wallpaper_title: "Tapet din fibră de sticlă",
            fiberglass_wallpaper_desc: "Rezistență foarte mare la tracțiune și uzură; lavabil; aspect modern.",
            parquet_title: "Parchet triplustratificat din lemn natural",
            parquet_desc: "Grosime 9–14 mm; lemn certificat FSC/PEFC; finisaj foarte durabil.",
            interior_doors_title: "UȘI INTERIOARE",
            s10_doors_title: "Uși interioare S10",
            s10_doors_desc: "Certificate CE; Interior solid.",
            complete_bathroom_finishes: "FINISAJE COMPLETE BAIE",
            stone_panels_title: "Plăci din compozit de piatră",
            stone_panels_desc: "Plăci întregi premium de 2.5 × 1.2 m; 100% impermeabile; rezistență foarte mare în timp.",
            italian_sink_title: "Lavoar cu design italian",
            italian_sink_desc: "Material compozit premium; ultra-subțire, modern și durabil.",
            grohe_wc_title: "WC suspendat Grohe",
            grohe_wc_desc: "Produs în Germania; design minimalist, modern.",
            ariston_boiler_title: "Boiler Ariston Velis",
            ariston_boiler_desc: "Design ultra-subțire; eficiență energetică ridicată.",
            walk_in_shower_title: "Duș walk-in",
            walk_in_shower_desc: "Proiectat în Franța; design minimalist, modern.",
            smart_systems: "SISTEME SMART",
            lighting_track_title: "Șină de iluminat",
            lighting_track_desc: "Configurare flexibilă pentru LED și spoturi; estetică modernă.",
            smart_lighting_title: "Iluminat Smart",
            smart_lighting_desc: "Philips HUE sau IKEA TRÅDFRI; configurare Smart ușoară.",
            smart_blinds_title: "Jaluzele exterioare Smart",
            smart_blinds_desc: "Blochează > 95% din radiația solară; control prin aplicație/manual; certificate de Institutul de Case Pasive din Darmstadt, Germania; certificate CE.",
            upgrades_delivery_title: "Upgrades & Livrare",
            delivery_title: "Livrare",
            delivery_cost: "Costul transportului depinde de locație.",
            foundation_optional: "Fundație pe șuruburi (opțional)",
            delivery_duration: "Livrarea și instalarea durează între 1 și 5 zile. În cazuri speciale, când proiectul necesită echipamente suplimentare, orice cost suplimentar va fi comunicat transparent.",
            add_ons_title: "Aditionale",
            facade_title: "Fațadă",
            parquet_upgrade_title: "Parchet",
            smart_blinds_upgrade_title: "Jaluzele exterioare Smart",
            smart_blinds_upgrade_desc: "Blochează peste 95% din radiația solară, controlate prin aplicație sau manual.",
            ventilation_system_title: "Sistem de ventilație",
            mentions_label: "Mențiuni:",
            terms_conditions: "Această ofertă este supusă termenilor și condițiilor aplicabile, care pot fi consultate la biobuilds.com/TC. Continuând, confirmați că le înțelegeți și le acceptați.",
            floorplan_custom: "Plan personalizat",
            included: "(Inclus)",
            standard: "(Standard)",
            dimensions: "Dimensiuni",
            total_area: "Suprafață Totală",
            interior_dimensions: "Dimensiuni Interioare",
            exterior_dimensions: "Dimensiuni Exterioare",
            rooms: "Camere",
            vent_heat_recovery: "Sistem de ventilație cu recuperare de căldură",
            vent_heat_recovery_desc: "Asigură un climat interior sănătos și confortabil cu un aport constant de aer proaspăt, cu recuperare eficientă a căldurii.",
            vent_heat_recovery_upgrade_desc: "Sistem de ventilație cu recuperare de căldură, pentru un climat interior optim.",
            genvex_system: "Genvex Premium Preheat 250",
            genvex_system_desc: "Recuperare de căldură de până la 95%; pompă de căldură integrată pentru încălzire și răcire.",
            genvex_system_upgrade_desc: "Sistem Genvex Premium cu recuperare de căldură de până la 95% și pompă de căldură integrată."
        },
        en: {
            page_title: "Generated Offer - Biobuilds",
            validity: "VALIDITY: 30 DAYS",
            offer: "OFFER",
            offer_for: "Offer-",
            client_name_placeholder: "Client Name",
            slogan: "Modular is modern, innovative, and sustainable. Choose the ideal space for you, built to the highest construction standards in the world.",
            passive_quote: "“The modules are fixed with steel screws, then covered with a waterproof membrane and clad in durable wood. The system is prefabricated in the BioBuilds factory, offering fast delivery and short assembly times. The construction system is Passivhaus certified, having exceptional U-values and eliminating thermal bridges.”",
            passive_cite: "– Passivhaus Institute",
            energy_consumption: "Energy Consumption",
            air_tightness: "Air Tightness",
            co2_saved: "Tons of CO₂ saved",
            co2_lifespan: "over the building's lifespan",
            organic_wood: "Structure and system based on <strong>organic wood</strong>, with EPD certification",
            lower_consumption: "<strong>95% lower</strong> energy consumption, thanks to the Modular system",
            turnkey: "Turnkey",
            semi_finished: "Semi-finished",
            turnkey_title: "TURNKEY",
            complete_interior_finishes: "COMPLETE INTERIOR FINISHES",
            wood_slat_ceiling_title: "Wood slat + felt ceiling",
            wood_slat_ceiling_desc: "Natural wood and recycled felt; excellent acoustic absorption.",
            fiberglass_wallpaper_title: "Fiberglass wallpaper",
            fiberglass_wallpaper_desc: "Very high tensile strength and wear resistance; washable; modern look.",
            parquet_title: "Triple-layered natural wood parquet",
            parquet_desc: "9–14 mm thickness; FSC/PEFC certified wood; very durable finish.",
            interior_doors_title: "INTERIOR DOORS",
            s10_doors_title: "S10 interior doors",
            s10_doors_desc: "CE certified; Solid core.",
            complete_bathroom_finishes: "COMPLETE BATHROOM FINISHES",
            stone_panels_title: "Stone composite panels",
            stone_panels_desc: "Premium full-size panels of 2.5 × 1.2 m; 100% waterproof; very high durability over time.",
            italian_sink_title: "Italian design sink",
            italian_sink_desc: "Premium composite material; ultra-thin, modern, and durable.",
            grohe_wc_title: "Grohe suspended toilet",
            grohe_wc_desc: "Made in Germany; minimalist, modern design.",
            ariston_boiler_title: "Ariston Velis boiler",
            ariston_boiler_desc: "Ultra-slim design; high energy efficiency.",
            walk_in_shower_title: "Walk-in shower",
            walk_in_shower_desc: "Designed in France; minimalist, modern design.",
            smart_systems: "SMART SYSTEMS",
            lighting_track_title: "Lighting track",
            lighting_track_desc: "Flexible configuration for LEDs and spotlights; modern aesthetic.",
            smart_lighting_title: "Smart Lighting",
            smart_lighting_desc: "Philips HUE or IKEA TRÅDFRI; easy Smart configuration.",
            smart_blinds_title: "Smart exterior blinds",
            smart_blinds_desc: "Block > 95% of solar radiation; app/manual control; certified by the Passive House Institute in Darmstadt, Germany; CE certified.",
            upgrades_delivery_title: "Upgrades & Delivery",
            delivery_title: "Delivery",
            delivery_cost: "Shipping cost depends on location.",
            foundation_optional: "Screw pile foundation (optional)",
            delivery_duration: "Delivery and installation take between 1 and 5 days. In special cases where the project requires additional equipment, any extra costs will be transparently communicated.",
            add_ons_title: "Add-ons",
            facade_title: "Facade",
            parquet_upgrade_title: "Parquet",
            smart_blinds_upgrade_title: "Smart exterior blinds",
            smart_blinds_upgrade_desc: "Block over 95% of solar radiation, controlled by app or manually.",
            ventilation_system_title: "Ventilation system",
            mentions_label: "Notes:",
            terms_conditions: "This offer is subject to the applicable terms and conditions, which can be viewed at biobuilds.com/TC. By proceeding, you confirm that you understand and accept them.",
            floorplan_custom: "Custom plan",
            included: "(Included)",
            standard: "(Standard)",
            dimensions: "Dimensions",
            total_area: "Total Area",
            interior_dimensions: "Internal Dimensions",
            exterior_dimensions: "External Dimensions",
            rooms: "Rooms",
            vent_heat_recovery: "Ventilation system with heat recovery",
            vent_heat_recovery_desc: "Ensures a healthy and comfortable indoor climate with a constant supply of fresh air, with efficient heat recovery.",
            vent_heat_recovery_upgrade_desc: "Ventilation system with heat recovery, for an optimal indoor climate.",
            genvex_system: "Genvex Premium Preheat 250",
            genvex_system_desc: "Up to 95% heat recovery; integrated heat pump for heating and cooling.",
            genvex_system_upgrade_desc: "Genvex Premium system with up to 95% heat recovery and integrated heat pump."
        },
        de: {
            page_title: "Angebot Erstellt - Biobuilds",
            validity: "GÜLTIGKEIT: 30 TAGE",
            offer: "ANGEBOT",
            offer_for: "Angebot-",
            client_name_placeholder: "Kunde Name",
            slogan: "Modular ist modern, innovativ und nachhaltig. Wählen Sie den idealen Raum für sich, gebaut nach den höchsten Baustandards der Welt.",
            passive_quote: "„Die Module werden mit Stahlschrauben fixiert, anschließend mit einer wasserdichten Membran abgedeckt und mit langlebigem Holz verkleidet. Das System wird im BioBuilds-Werk vorgefertigt und ermöglicht schnelle Lieferung und kurze Montagezeiten. Das Bausystem ist vom Passivhaus Institut zertifiziert, weist außergewöhnliche U-Werte auf und eliminiert Wärmebrücken.“",
            passive_cite: "– Passivhaus Institut",
            energy_consumption: "Energieverbrauch",
            air_tightness: "Luftdichtheit",
            co2_saved: "Tonnen CO₂ eingespart",
            co2_lifespan: "über die Lebensdauer des Gebäudes",
            organic_wood: "Struktur und System basierend auf <strong>organischem Holz</strong>, mit EPD-Zertifizierung",
            lower_consumption: "<strong>95 % geringerer</strong> Energieverbrauch dank des Modular-Systems",
            turnkey: "Schlüsselfertig",
            semi_finished: "Teilfertig",
            turnkey_title: "SCHLÜSSELFERTIG",
            complete_interior_finishes: "KOMPLETTER INNENAUSBAU",
            wood_slat_ceiling_title: "Holzlamellen + Filzdecke",
            wood_slat_ceiling_desc: "Naturholz und recycelter Filz; hervorragende Schallabsorption.",
            fiberglass_wallpaper_title: "Glasfasertapete",
            fiberglass_wallpaper_desc: "Sehr hohe Zug- und Verschleißfestigkeit; abwaschbar; modernes Aussehen.",
            parquet_title: "Dreischichtiges Naturholzparkett",
            parquet_desc: "9–14 mm Stärke; FSC/PEFC-zertifiziertes Holz; sehr langlebige Oberfläche.",
            interior_doors_title: "INNENTÜREN",
            s10_doors_title: "Innentüren S10",
            s10_doors_desc: "CE-zertifiziert; Vollkern.",
            complete_bathroom_finishes: "KOMPLETTE BADAUSSTATTUNG",
            stone_panels_title: "Steinverbundplatten",
            stone_panels_desc: "Premium-Vollformatplatten von 2,5 × 1,2 m; 100 % wasserdicht; sehr hohe Langlebigkeit.",
            italian_sink_title: "Waschbecken im italienischen Design",
            italian_sink_desc: "Premium-Verbundwerkstoff; ultradünn, modern und langlebig.",
            grohe_wc_title: "Grohe Hänge-WC",
            grohe_wc_desc: "Hergestellt in Deutschland; minimalistisches, modernes Design.",
            ariston_boiler_title: "Ariston Velis Boiler",
            ariston_boiler_desc: "Ultraschlankes Design; hohe Energieeffizienz.",
            walk_in_shower_title: "Walk-in-Dusche",
            walk_in_shower_desc: "Entworfen in Frankreich; minimalistisches, modernes Design.",
            smart_systems: "SMART-SYSTEME",
            lighting_track_title: "Lichtschiene",
            lighting_track_desc: "Flexible Konfiguration für LEDs und Spots; moderne Ästhetik.",
            smart_lighting_title: "Intelligente Beleuchtung",
            smart_lighting_desc: "Philips HUE oder IKEA TRÅDFRI; einfache Smart-Konfiguration.",
            smart_blinds_title: "Smarte Außenjalousien",
            smart_blinds_desc: "Blockieren > 95 % der Sonneneinstrahlung; App-/manuelle Steuerung; zertifiziert vom Passivhaus Institut Darmstadt, Deutschland; CE-zertifiziert.",
            upgrades_delivery_title: "Upgrades & Lieferung",
            delivery_title: "Lieferung",
            delivery_cost: "Die Versandkosten hängen vom Standort ab.",
            foundation_optional: "Schraubfundament (optional)",
            delivery_duration: "Lieferung und Installation dauern zwischen 1 und 5 Tagen. In besonderen Fällen, in denen das Projekt zusätzliche Ausrüstung erfordert, werden alle zusätzlichen Kosten transparent kommuniziert.",
            add_ons_title: "Zusätzliches",
            facade_title: "Fassade",
            parquet_upgrade_title: "Parkett",
            smart_blinds_upgrade_title: "Smarte Außenjalousien",
            smart_blinds_upgrade_desc: "Blockieren über 95 % der Sonneneinstrahlung, per App oder manuell steuerbar.",
            ventilation_system_title: "Lüftungssystem",
            mentions_label: "Anmerkungen:",
            terms_conditions: "Dieses Angebot unterliegt den geltenden Allgemeinen Geschäftsbedingungen, die unter biobuilds.com/TC eingesehen werden können. Indem Sie fortfahren, bestätigen Sie, dass Sie diese verstehen und akzeptieren.",
            floorplan_custom: "Individueller Plan",
            included: "(Inklusive)",
            standard: "(Standard)",
            dimensions: "Dimensionen",
            total_area: "Gesamtfläche",
            interior_dimensions: "Innenmaße",
            exterior_dimensions: "Außenmaße",
            rooms: "Räume",
            vent_heat_recovery: "Lüftungsanlage mit Wärmerückgewinnung",
            vent_heat_recovery_desc: "Sorgt für ein gesundes und komfortables Raumklima durch konstante Frischluftzufuhr mit effizienter Wärmerückgewinnung.",
            vent_heat_recovery_upgrade_desc: "Lüftungsanlage mit Wärmerückgewinnung für ein optimales Raumklima.",
            genvex_system: "Genvex Premium Preheat 250",
            genvex_system_desc: "Bis zu 95 % Wärmerückgewinnung; integrierte Wärmepumpe zum Heizen und Kühlen.",
            genvex_system_upgrade_desc: "Genvex Premium-System mit bis zu 95 % Wärmerückgewinnung und integrierter Wärmepumpe."
        }
    };

    let currentLanguage = 'ro';

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
                        a: { name: "Plan A", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c43d2244f5d6be3af87aab_24m2%20Floorplan%20A.avif", details: { totalArea: "24m²", interior: "5.70m x 3.10m x 2.50m", exterior: "6.40m x 3.80m x 3.20m", rooms: { "Dormitor / Bedroom / Schlafzimmer": "14.20m²", "Baie / Bathroom / Badezimmer": "2.65m²", "Depozitare / Storage / Lagerung": "0.80m²" } } },
                        b: { name: "Plan B", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c43d22e33276e515d43a8f_24m2%20Floorplan%20B.avif", details: { totalArea: "24m²", interior: "5.70m x 3.10m x 2.50m", exterior: "6.40m x 3.80m x 3.20m", rooms: { "Dormitor / Bedroom / Schlafzimmer": "14.20m²", "Baie / Bathroom / Badezimmer": "2.65m²", "Depozitare / Storage / Lagerung": "0.80m²" } } }
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
                        a: { name: "Plan A", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c525733fc3797a1ea68b6_48m2%20Floorplan%20A.png", details: { totalArea: "48m²", interior: "11.80m x 3.10m x 2.50m", exterior: "12.60m x 3.80m x 3.20m", rooms: { "Living + Bucătărie / Kitchen": "19.90m²", "Dormitor / Bedroom": "11.80m²", "Baie / Bathroom": "4.50m²" } } },
                        b: { name: "Plan B", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514f671a54486d036b53_48m2%20Floorplan%20B.png", details: { totalArea: "48m²", interior: "11.80m x 3.10m x 2.50m", exterior: "12.60m x 3.80m x 3.20m", rooms: { "Dormitor 1 / Bedroom 1": "11.80m²", "Dormitor 2 / Bedroom 2": "11.80m²", "Baie 1 / Bathroom 1": "4.50m²", "Baie 2 / Bathroom 2": "3.50m²", "Hol / Hallway": "3.50m²" } } }
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
                        a: { name: "Plan A", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514e29f50d2da31e84dc_95m2%20Floorplan%20A.png", details: { totalArea: "95m²", interior: "11.80m x 6.80m x 2.50m", exterior: "12.60m x 7.60m x 3.20m", rooms: { "Living + Bucătărie / Kitchen": "29.10m²", "Dormitor 1 / Bedroom 1": "12.20m²", "Dormitor 2 / Bedroom 2": "12.40m²", "Dormitor 3 / Bedroom 3": "13.10m²", "Baie 1 / Bathroom 1": "3.75m²", "Baie 2 / Bathroom 2": "4.35m²" } } },
                        b: { name: "Plan B", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514fdf7becede16b71e9_95m2%20Floorplan%20B.png", details: { totalArea: "95m²", interior: "11.80m x 6.80m x 2.50m", exterior: "12.60m x 7.60m x 3.20m", rooms: { "Living + Bucătărie / Kitchen": "41.50m²", "Dormitor 1 / Bedroom 1": "12.20m²", "Dormitor 2 / Bedroom 2": "13.10m²", "Baie 1 / Bathroom 1": "3.75m²", "Baie 2 / Bathroom 2": "4.35m²" } } },
                        c: { name: "Plan C", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514ff885d32e87f5d5ef_95m2%20Floorplan%20C.png", details: { totalArea: "95m²", interior: "11.80m x 6.80m x 2.50m", exterior: "12.60m x 7.60m x 3.20m", rooms: { "Living + Bucătărie / Kitchen": "53.70m²", "Dormitor / Bedroom": "13.10m²", "Baie 1 / Bathroom 1": "3.75m²", "Baie 2 / Bathroom 2": "4.35m²" } } }
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
                        a: { name: "Plan A", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514ff7e14cb1b083351b_142m2%20Floorplan%20A.png", details: { totalArea: "142m²", interior: "11.80m x 10.60m x 2.50m", exterior: "12.60m x 11.30m x 3.20m", rooms: { "Living + Bucătărie / Kitchen": "62.90m²", "Dormitor 1 / Bedroom 1": "12.40m²", "Dormitor 2 / Bedroom 2": "12.20m²", "Dormitor 3 / Bedroom 3": "12.40m²", "Dormitor 4 / Bedroom 4": "13.10m²", "Baie 1 / Bathroom 1": "3.75m²", "Baie 2 / Bathroom 2": "4.35m²" } } },
                        b: { name: "Plan B", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514f6966128dbeb27986_142m2%20Floorplan%20B.png", details: { totalArea: "142m²", interior: "11.80m x 10.60m x 2.50m", exterior: "12.60m x 11.30m x 3.20m", rooms: { "Living + Bucătărie / Kitchen": "75.30m²", "Dormitor 1 / Bedroom 1": "12.20m²", "Dormitor 2 / Bedroom 2": "12.40m²", "Dormitor 3 / Bedroom 3": "13.10m²", "Baie 1 / Bathroom 1": "3.75m²", "Baie 2 / Bathroom 2": "4.35m²" } } },
                        c: { name: "Plan C", url: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514fd4d57aa8ff3d75e9_142m2%20Floorplan%20C.png", details: { totalArea: "142m²", interior: "11.80m x 10.60m x 2.50m", exterior: "12.60m x 11.30m x 3.20m", rooms: { "Living + Bucătărie / Kitchen": "87.50m²", "Dormitor 1 / Bedroom 1": "12.40m²", "Dormitor 2 / Bedroom 2": "13.10m²", "Baie 1 / Bathroom 1": "3.75m²", "Baie 2 / Bathroom 2": "4.35m²" } } }
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
    function formatCurrency(value) {
        const locale = currentLanguage === 'de' ? 'de-DE' : 'ro-RO';
        return value.toLocaleString(locale, { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 });
    }
    function parseCurrency(text) {
        if (!text) return 0;
        const number = parseFloat(String(text).replace(/[^0-9,-]/g, '').replace('.', '').replace(',', '.'));
        return isNaN(number) ? 0 : number;
    }
    function createDetailItem(label, value) { return `<div class="detail-item"><span>${label}</span><span>${value}</span></div>`; }
    function formatFinish(finishParam) { return translations[currentLanguage][finishParam === 'semi-finished' ? 'semi_finished' : 'turnkey']; }
    function generateRandomLetters(length) {
        let result = '';
        const characters = '1234567890';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
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
        const discountMatch = mentiuniText.match(/-(\d+(\.\d+)?)\s*%/);
        let finalPrice = basePrice;
        if (discountMatch) {
            finalPrice = basePrice * (1 - (parseFloat(discountMatch[1]) / 100));
        }
        const additionMatches = mentiuniText.matchAll(/\+(\d+)\s*EUR/gi);
        let additionsTotal = 0;
        for (const match of additionMatches) {
            additionsTotal += parseInt(match[1], 10);
        }
        finalPrice += additionsTotal;
        const totalLabel = currentLanguage === 'de' ? 'Gesamt' : 'TOTAL';
        summaryTotalEl.innerHTML = `${totalLabel} ${formatCurrency(finalPrice)} +TVA`;
    }

    // --- MAIN UPDATE FUNCTION ---
    function updateOffer() {
        const T = translations[currentLanguage];
        const modelId = selectionState.model;
        const finish = selectionState.finish;
        const facade = selectionState.facade;
        const parquet = selectionState.parquet;
        const floorplan = selectionState.floorplan;
        const modelData = offerData.models[modelId];
        const modelPricing = pricingLogic[modelId];

        const turnkeyVentH4 = document.querySelector('#section-3-text .column:last-child h4:last-of-type');
        const turnkeyVentP = turnkeyVentH4 ? turnkeyVentH4.nextElementSibling : null;
        const upgradeVentP = document.querySelector('#upgrade-ventilation p');

        if (modelId === 'nomad-24') {
            if (turnkeyVentH4) turnkeyVentH4.textContent = T.vent_heat_recovery;
            if (turnkeyVentP) turnkeyVentP.textContent = T.vent_heat_recovery_desc;
            if (upgradeVentP) upgradeVentP.textContent = T.vent_heat_recovery_upgrade_desc;
        } else {
            if (turnkeyVentH4) turnkeyVentH4.textContent = T.genvex_system;
            if (turnkeyVentP) turnkeyVentP.textContent = T.genvex_system_desc;
            if (upgradeVentP) upgradeVentP.textContent = T.genvex_system_upgrade_desc;
        }

        const showTurnkeyDetails = (finish === 'turnkey');
        document.getElementById('section-3-text').classList.toggle('page-hidden', !showTurnkeyDetails);
        document.getElementById('section-3-image').classList.toggle('page-hidden', !showTurnkeyDetails);

        let price = modelPricing.base[finish];
        if (finish === 'semi-finished') {
            if (parquet !== 'osb') price += modelPricing.upgrades.parquet[parquet] || 0;
            if (selectionState.blinds) price += modelPricing.upgrades.blinds;
            if (selectionState.ventilation) price += modelPricing.upgrades.ventilation;
        }

        document.querySelector('#section-1 .content-area').style.backgroundImage = `url('${modelData.images.facade[facade]}')`;
        document.getElementById('passive-info-image').style.backgroundImage = `url('${modelData.passiveImg}')`;
        document.getElementById('co2-savings-stat').innerHTML = `<strong>${modelData.co2Savings} ${T.co2_saved}</strong> ${T.co2_lifespan}`;

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
        detailsWrapper.style.display = 'block';

        if (floorplan !== 'custom') {
            const floorplanData = modelData.images.floorplan[floorplan];
            if (floorplanData) {
                floorplanImage.src = floorplanData.url;
                let detailsHtml = `<h3>${T.dimensions}</h3>`;
                detailsHtml += createDetailItem(T.total_area, floorplanData.details.totalArea);
                detailsHtml += createDetailItem(T.interior_dimensions, floorplanData.details.interior);
                detailsHtml += createDetailItem(T.exterior_dimensions, floorplanData.details.exterior);
                detailsHtml += `<h3>${T.rooms}</h3>`;
                for (const roomName in floorplanData.details.rooms) {
                    detailsHtml += createDetailItem(roomName, floorplanData.details.rooms[roomName]);
                }
                detailsWrapper.innerHTML = detailsHtml;
            } else {
                 detailsWrapper.innerHTML = '';
            }
        } else {
            detailsWrapper.style.display = 'none';
        }

        updateDynamicOptions(); // Needs to run before updateOptionHighlights
        updateOptionHighlights();

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
        const parquetText = selectedParquetButton ? selectedParquetButton.textContent.split('(')[0].trim() : 'N/A';

        addInclusion(`- ${T.facade_title} ${facadeText}`);
        addInclusion(`- ${T.parquet_upgrade_title} ${parquetText}`);
        if (selectionState.blinds) addInclusion(`- ${T.smart_blinds_upgrade_title} ${finish === 'turnkey' ? T.included : ''}`);
        if (selectionState.ventilation) addInclusion(`- ${T.ventilation_system_title} ${finish === 'turnkey' ? T.included : ''}`);

        recalculateTotals();
        updateUrlParams();
    }

    function updateOptionHighlights() {
        document.querySelectorAll('[data-upgrade-type="facade"] .option-button').forEach(btn => {
            btn.classList.toggle('selected', btn.dataset.value === selectionState.facade);
        });
        document.querySelectorAll('[data-upgrade-type="parquet"] .option-group').forEach(btn => {
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

    function generateSection2Content(container, facadeType) {
        // This function's content is now mostly static in the HTML with data-translate-key attributes.
        // We only need to update the facade-specific parts here.
        const T = translations[currentLanguage];
        let facadeTitle, facadeDescription;

        if (facadeType === 'lunawood') {
             facadeTitle = T.de.complete_exterior_finishes; // Example of getting a specific string if needed
             facadeDescription = T.de.s10_doors_desc; // Example
        } else {
             facadeTitle = T.de.complete_exterior_finishes;
             facadeDescription = T.de.s10_doors_desc;
        }

        // The innerHTML of the section will be translated by the setLanguage function
        // This function can be simplified or removed if all content is made static in HTML
    }
    
    function updateDynamicOptions() {
        const T = translations[currentLanguage];
        const parquetContainer = document.querySelector('[data-upgrade-type="parquet"] .option-group');
        const modelPricing = pricingLogic[selectionState.model];
        let parquetHtml = '';
        if (selectionState.finish === 'turnkey') {
            parquetHtml = `<div class="option-button" data-value="cashmere">Cashmere ${T.included}</div><div class="option-button" data-value="hazelnut">Hazelnut ${T.included}</div>`;
        } else {
            const parquetUpgrades = modelPricing.upgrades.parquet;
            parquetHtml = `<div class="option-button" data-value="osb">OSB ${T.standard}</div><div class="option-button" data-value="cashmere">Cashmere (+${formatCurrency(parquetUpgrades.cashmere)})</div><div class="option-button" data-value="hazelnut">Hazelnut (+${formatCurrency(parquetUpgrades.hazelnut)})</div>`;
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

        const customOption = document.createElement('option');
        customOption.value = 'custom';
        customOption.textContent = T.floorplan_custom;
        floorplanSelect.appendChild(customOption);

        if(!floorplanSelect.querySelector(`[value="${selectionState.floorplan}"]`)){
            if (selectionState.floorplan !== 'custom') {
                selectionState.floorplan = floorplanSelect.options[0].value;
            }
        }
        floorplanSelect.value = selectionState.floorplan;
    }

    // --- LANGUAGE SWITCHER LOGIC ---
    function setLanguage(lang) {
        currentLanguage = lang;
        document.documentElement.lang = lang;
        
        document.querySelectorAll('#language-selector button').forEach(button => {
            button.classList.toggle('active', button.dataset.lang === lang);
        });

        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.dataset.translateKey;
            if (translations[lang][key]) {
                 // Use innerHTML to support keys with <strong> tags
                element.innerHTML = translations[lang][key];
            }
        });
        
        // Re-initialize dropdowns with translated text
        const T = translations[currentLanguage];
        document.getElementById('finish-text').innerHTML = `<option value="turnkey">${T.turnkey}</option><option value="semi-finished">${T.semi_finished}</option>`;
        document.getElementById('finish-text').value = selectionState.finish;

        // Re-render dynamic parts of the page with the new language
        updateOffer();
    }

    // --- INITIALIZATION ---
    function initialize() {
        const params = new URLSearchParams(window.location.search);

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

        document.getElementById('model-name-select').innerHTML = Object.keys(offerData.models).map(id => `<option value="${id}">${offerData.models[id].name}</option>`).join('');
        document.querySelector('[data-upgrade-type="facade"] .option-group').innerHTML = `<div class="option-button" data-value="yakisugi">Yakisugi</div><div class="option-button" data-value="lunawood">Lunawood</div>`;

        document.getElementById('model-name-select').value = selectionState.model;
        document.getElementById('client-name').textContent = selectionState.clientName;

        if (selectionState.offerNr) {
            document.getElementById('offer-nr').textContent = selectionState.offerNr;
        } else {
            generateAndSetOfferId();
        }

        document.getElementById('offer-date').textContent = selectionState.offerDate;
        document.querySelector('.mentiuni-editable').textContent = selectionState.mentions;

        // --- EVENT LISTENERS ---
        document.getElementById('model-name-select').addEventListener('change', (e) => {
            selectionState.model = e.target.value;
            selectionState.basePriceOverride = null;
            generateAndSetOfferId();
            updateOffer();
        });

        document.getElementById('finish-text').addEventListener('change', (e) => {
            selectionState.finish = e.target.value;
            selectionState.basePriceOverride = null;
            if(selectionState.finish === 'turnkey'){
                selectionState.blinds = true;
                selectionState.ventilation = true;
                if(selectionState.parquet === 'osb') selectionState.parquet = 'cashmere';
            }
            generateAndSetOfferId();
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
                    updateOffer();
                    updateUrlParams();
                };
                reader.readAsDataURL(file);
            } else {
                const previousPlan = customUploadInput.getAttribute('data-previous-plan') || 'a';
                floorplanSelect.value = previousPlan;
            }
            e.target.value = null;
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

        // Language selector listener
        document.getElementById('language-selector').addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const lang = e.target.dataset.lang;
                if (lang) {
                    setLanguage(lang);
                }
            }
        });

        // Set initial language and render page
        setLanguage(currentLanguage);
    }

    initialize();
});
