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
        const showTurnkeyDetails = (finish === 'turnkey');
        document.getElementById('section-3-text').classList.toggle('page-hidden', !showTurnkeyDetails);
        document.getElementById('section-3-image').classList.toggle('page-hidden', !showTurnkeyDetails);

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

    function generateSection2Content(container, facadeType) {
        let facadeTitle = facadeType === 'lunawood' ? 'Fațadă Lunawood' : 'Fațadă ventilată Yakisugi';
        let facadeDescription = facadeType === 'lunawood' ? 'O fațadă din pin nordic, tratată la presiuni imense cu aburi (termotratat, fără chimicale), pentru a obține Thermowood: o fațadă durabilă, excepțional de stabilă, rezistentă la intemperii și ușor de întreținut, cu o nuanță caldă de caramel.' : 'Mentenanță estimată o dată la 10 ani; Cea mai bună rezistență la foc din clasa de lemn natural; impermeabilă.';
        container.innerHTML = `<h2>MODULAR</h2><div class="flex-wrapper"><div class="column"><h3>STRUCTURĂ</h3><h4>Structura MODULAR</h4><p>Combină rezistența mecanică remarcabilă cu proprietăți de ultra-izolare ce elimină complet punțile termice. Certificată de Institutul de Case Pasive din Darmstadt, Germania și de EPD International. U ≈ 0,11 W/m²K, U-wert.</p><h4>Cadru din lemn C24</h4><p>Lemn C24 cu certificare FSC/PEFC; rezistență foarte mare la sarcina structurală.</p><h4>Izolație din fibră de lemn ultra-eficientă</h4><p>Izolație pentru pereți, acoperiș și podea; fibră de lemn ultra-eficientă STEICO λ ≈ 0,036 W/m·K; certificată CE.</p><h4>OSB 3 ECO, Germania</h4><p>Panou structural fără formaldehidă și VOC, aprobat de Institutul de Case Pasive din Darmstadt, Germania; certificat CE.</p><h4>Placă DWD, Austria</h4><p>Permeabilă la vapori (permite pereților să „respire” menținându-i etanși la aer din exterior; unidirecțional); certificată CE.</p><h4>Membrană Smart (folie)</h4><p>Creează un interior etanș la aer, permițând difuzia vaporilor spre exterior. Certificată de Institutul de Case Pasive din Darmstadt, Germania; certificată CE.</p></div><div class="column"><h3>FINISAJE EXTERIOARE COMPLETE</h3><h4>${facadeTitle}</h4><p>${facadeDescription}</p><h4>Acoperiș ventilat</h4><p>Spațiul ventilat crește performanța termică și durata de viață a acoperișului.</p><h4>Membrană EPDM</h4><p>Impermeabilă; garanție de 30 de ani de la producător.</p><h4>Sistem de colectare a apei pluviale</h4><p>Jgheab ascuns integrat în fațadă; pregătit pentru colectare.</p><h3>FERESTRE ȘI UȘI EXTERIOARE</h3><h4>Cadru din aluminiu Genesis 90</h4><p>Profil rigid, ultra-eficient; Uwi ≤ 0,85 W/m²K; certificat de Institutul de Case Pasive din Darmstadt, Germania; certificat CE.</p><h4>Geam tripan laminat</h4><p>U = 0,50 W/m²K; sticlă securizată laminată; certificat de Institutul de Case Pasive din Darmstadt, Germania; certificat CE.</p></div><div class="column"><h3>BUCĂTĂRIE</h3><h4>Instalații pentru bucătărie</h4><p>Complet pregătite pe poziție pentru mobilierul tău.</p><h3>INSTALAȚII</h3><h4>Instalații electrice</h4><p>Cabluri și copex complet instalate, conforme cu toate reglementările locale aplicabile (ex. CE / Standardul I7/2011 / IEC 60364).</p><h4>Instalații sanitare</h4><p>Țevi și fitinguri conforme cu toate reglementările locale necesare. PPR / PEX.</p><h3>CERTIFICĂRI & GARANȚII</h3><h4>Certificare Passivhaus</h4><p>Emitent: Institutul de Case Pasive din Darmstadt, Germania.</p><h4>Certificare EPD</h4><p>Emitent: EPD, Europa.</p><h4>Marcaj CE</h4><p>Toate componentele relevante respectă Regulamentul UE privind produsele pentru construcții.</p><h4>Garanție standard UE</h4><p>24 de luni pentru uz privat; 12 luni pentru uz comercial.</p></div></div>`;
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

        updateOffer();
    }

    initialize();
});
