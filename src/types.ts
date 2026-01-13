/**
 * BioBuilds Offer Generator - Type Definitions
 */

// Language codes supported by the application
export type LanguageCode = 'ro' | 'en' | 'de' | 'fr';

// Model identifiers
export type ModelId = 'nest-24' | 'wanderlust-48' | 'serenity-95' | 'sanctuary-142';

// Finish types
export type FinishType = 'turnkey' | 'semi-finished';

// Facade options
export type FacadeType = 'yakisugi' | 'lunawood';

// Parquet options
export type ParquetType = 'osb' | 'cashmere' | 'hazelnut';

// Floorplan options (dynamic per model + custom)
export type FloorplanType = 'a' | 'b' | 'c' | 'custom';

// Room details for floorplans
export interface RoomDetails {
  [roomName: string]: string;
}

// Floorplan details structure
export interface FloorplanDetails {
  totalArea: string;
  interior: string;
  exterior: string;
  rooms: RoomDetails;
}

// Individual floorplan data
export interface FloorplanData {
  name: string;
  url: string;
  details: FloorplanDetails;
}

// Model image structure
export interface ModelImages {
  facade: Record<FacadeType, string>;
  parquet: Record<Exclude<ParquetType, 'osb'>, string>;
  semi_parquet: Record<ParquetType, string>;
  floorplan: Record<string, FloorplanData>;
}

// Model data structure
export interface ModelData {
  name: string;
  co2Savings: string;
  passiveImg: string;
  images: ModelImages;
}

// Pricing structure for upgrades
export interface UpgradePricing {
  parquet: Record<Exclude<ParquetType, 'osb'>, number>;
  ventilation: number;
  blinds: number;
  solar: number;
}

// Model pricing structure
export interface ModelPricing {
  base: Record<FinishType, number>;
  upgrades: UpgradePricing;
}

// Common assets (logos)
export interface CommonAssets {
  logos: {
    passiveHouse: string;
    epd: string;
  };
}

// Complete offer data structure
export interface OfferData {
  models: Record<ModelId, ModelData>;
  common: CommonAssets;
}

// Pricing logic for all models
export type PricingLogic = Record<ModelId, ModelPricing>;

// Selection state structure
export interface SelectionState {
  model: ModelId;
  finish: FinishType;
  facade: FacadeType;
  parquet: ParquetType;
  floorplan: string;
  blinds: boolean;
  ventilation: boolean;
  solar: boolean;
  clientName: string;
  offerNr: string | null;
  offerDate: string;
  mentions: string;
  basePriceOverride: number | null;
}

// Translation dictionary type
export type TranslationDictionary = Record<string, string>;

// All translations
export type Translations = Record<LanguageCode, TranslationDictionary>;

// DOM element cache
export interface DOMCache {
  section1ContentArea: HTMLElement | null;
  passiveInfoImage: HTMLElement | null;
  section2Text: HTMLElement | null;
  section2Image: HTMLElement | null;
  section3Text: HTMLElement | null;
  section3Image: HTMLElement | null;
  floorplanDetails: HTMLElement | null;
  floorplanImage: HTMLImageElement | null;
  floorplanDetailsWrapper: HTMLElement | null;
  summaryModelName: HTMLElement | null;
  summaryFinish: HTMLElement | null;
  inclusionList: HTMLElement | null;
  summaryTotal: HTMLElement | null;
  modelSelect: HTMLSelectElement | null;
  finishSelect: HTMLSelectElement | null;
  floorplanSelect: HTMLSelectElement | null;
  clientName: HTMLElement | null;
  offerNr: HTMLElement | null;
  offerDate: HTMLElement | null;
  mentionsEditable: HTMLElement | null;
  upgradeColumns: HTMLElement | null;
  co2StatEl: HTMLElement | null;
  logoPassiveHouse: HTMLImageElement | null;
  logoEpd: HTMLImageElement | null;
  downloadBtn: HTMLElement | null;
  langModal: HTMLElement | null;
}

// URL parameter names (SQF format)
export const URL_PARAMS = {
  TYPE: 'SQF_TYPE',
  FINISH: 'SQF_FINISH',
  FLOORPLAN: 'SQF_FLOORPLAN',
  PARQUET: 'SQF_PARQUET',
  FACADE: 'SQF_FACADE',
  VENTILATION: 'SQF_VENTILATION',
  BLINDS: 'SQF_BLINDS',
  SOLAR: 'SQF_SOLAR',
  PRICE: 'SQF_PRICE',
  CLIENT_NAME: 'clientName',
  OFFER_NR: 'offerNr',
  OFFER_DATE: 'offerDate',
  MENTIONS: 'mentions',
} as const;

// Validation result
export interface ValidationResult {
  isValid: boolean;
  sanitizedValue: string | number | boolean | null;
  error?: string;
}

// PDF generation options
export interface PDFOptions {
  widthMM: number;
  heightMM: number;
  renderWidth: number;
  renderHeight: number;
  imageQuality: number;
}

// Declare external libraries
declare global {
  interface Window {
    jspdf: {
      jsPDF: new (options: {
        orientation: string;
        unit: string;
        format: string;
        compress: boolean;
      }) => {
        addPage: (format: string, orientation: string) => void;
        addImage: (data: string, format: string, x: number, y: number, w: number, h: number) => void;
        save: (filename: string) => void;
      };
    };
    html2canvas: (element: HTMLElement, options: Record<string, unknown>) => Promise<HTMLCanvasElement>;
  }
}
