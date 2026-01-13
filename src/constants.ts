/**
 * BioBuilds Offer Generator - Constants
 * All magic numbers and configuration values extracted here
 */

import type { PDFOptions, ModelId, FinishType, FacadeType, ParquetType } from './types';

// PDF Generation Constants
export const PDF_CONFIG: PDFOptions = {
  widthMM: 297,        // A4 landscape width in mm
  heightMM: 210,       // A4 landscape height in mm
  renderWidth: 1122,   // Render container width in px
  renderHeight: 793,   // Render container height in px
  imageQuality: 0.92,  // JPEG quality for PDF images
};

// Font size map for PDF rendering (in vw units converted to pixels)
export const PDF_FONT_SIZES = {
  'model-name-select': { vw: 0.045, max: 60 },    // 4.5vw, max 60px
  'finish-text': { vw: 0.018, max: 22 },          // 1.8vw, max 22px
  'floorplan-title-select': { vw: 0.022, max: 28 }, // 2.2vw, max 28px
} as const;

// Timeouts for async operations (in milliseconds)
export const TIMEOUTS = {
  flexLayoutWait: 50,      // Wait for flex layout to calculate
  finalLayoutWait: 100,    // Final layout stabilization
} as const;

// Validation limits
export const VALIDATION = {
  maxClientNameLength: 100,
  maxMentionsLength: 500,
  maxOfferNrLength: 20,
  maxPriceValue: 10_000_000,    // 10 million EUR
  minPriceValue: 0,
  offerIdRandomDigits: 4,
} as const;

// Valid model IDs for validation
export const VALID_MODELS: readonly ModelId[] = [
  'nest-24',
  'wanderlust-48',
  'serenity-95',
  'sanctuary-142',
] as const;

// Valid finish types
export const VALID_FINISHES: readonly FinishType[] = [
  'turnkey',
  'semi-finished',
] as const;

// Valid facade types
export const VALID_FACADES: readonly FacadeType[] = [
  'yakisugi',
  'lunawood',
] as const;

// Valid parquet types
export const VALID_PARQUETS: readonly ParquetType[] = [
  'osb',
  'cashmere',
  'hazelnut',
] as const;

// Valid floorplan letters
export const VALID_FLOORPLANS = ['a', 'b', 'c', 'custom'] as const;

// Default selection state values
export const DEFAULT_SELECTION = {
  model: 'sanctuary-142' as ModelId,
  finish: 'turnkey' as FinishType,
  facade: 'yakisugi' as FacadeType,
  parquet: 'cashmere' as ParquetType,
  floorplan: 'a',
  blinds: true,
  ventilation: true,
  solar: false,
  clientName: 'Nume Client',
  mentions: '',
} as const;

// CDN base URL (for reference)
export const CDN_BASE = 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43';

// Characters for random offer ID generation
export const OFFER_ID_CHARS = '1234567890';

// Currency formatting options
export const CURRENCY_FORMAT_OPTIONS: Intl.NumberFormatOptions = {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0,
};

// Regex patterns for parsing
export const PATTERNS = {
  // Discount pattern: matches "-15%" or "- 15 %" etc.
  discount: /-(\d+(?:\.\d+)?)\s*%/,
  // Addition pattern: matches "+1000 EUR" or "+ 1000 EUR" etc.
  addition: /\+(\d+)\s*EUR/gi,
  // Currency parsing: removes everything except digits and comma/period
  currencyClean: /[^0-9,.-]/g,
  // Safe filename: removes special characters
  safeFilename: /[^a-zA-Z0-9\s-]/g,
  // Language hash: matches #ro, #en, #de, #fr in URL
  languageHash: /#(ro|en|de|fr)(?:\b|$)/i,
  // Edit mode hash
  editHash: /edit/i,
} as const;

// CSS selectors used throughout the app
export const SELECTORS = {
  pages: '.page:not(.page-hidden)',
  hiddenPages: '.page.page-hidden',
  contentEditable: '[contenteditable="true"]',
  dataKey: '[data-key]',
  interactiveSelect: '.interactive-select',
  optionButton: '.option-button',
  upgradeItem: '.upgrade-item',
  clickableUpgrade: '.upgrade-item.clickable',
  facadeOptions: '[data-upgrade-type="facade"] .option-group',
  parquetOptions: '[data-upgrade-type="parquet"] .option-group',
} as const;

// Element IDs used throughout the app
export const ELEMENT_IDS = {
  section1: 'section-1',
  sectionPassiveInfo: 'section-passive-info',
  section2Text: 'section-2-text',
  section2Image: 'section-2-image',
  section3Text: 'section-3-text',
  section3Image: 'section-3-image',
  sectionFloorplan: 'section-floorplan',
  sectionUpgrades: 'section-upgrades',
  sectionSummary: 'section-summary',
  passiveInfoImage: 'passive-info-image',
  floorplanDetails: 'floorplan-details',
  floorplanImage: 'floorplan-image',
  floorplanDetailsWrapper: 'floorplan-details-content-wrapper',
  floorplanTitleSelect: 'floorplan-title-select',
  customFloorplanUpload: 'custom-floorplan-upload',
  summaryModelName: 'summary-model-name',
  summaryFinish: 'summary-finish',
  summaryTotal: 'summary-total',
  inclusionList: 'inclusion-list',
  modelNameSelect: 'model-name-select',
  finishText: 'finish-text',
  clientName: 'client-name',
  offerNr: 'offer-nr',
  offerDate: 'offer-date',
  co2SavingsStat: 'co2-savings-stat',
  logoPassiveHouse: 'logo-passive-house',
  logoEpd: 'logo-epd',
  downloadOfferBtn: 'download-offer-btn',
  langSelectModal: 'lang-select-modal',
  languageSelector: 'language-selector',
  upgradesColumn: 'upgrades-column',
  basePriceEditable: 'base-price-editable',
  upgradeBlinds: 'upgrade-blinds',
  upgradeVentilation: 'upgrade-ventilation',
  upgradeSolar: 'upgrade-solar',
} as const;
