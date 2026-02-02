// Language types
export type Language = 'ro' | 'en' | 'de' | 'fr';

// Model types
export type ModelId = 'nest-24' | 'wanderlust-48' | 'serenity-95' | 'sanctuary-142';
export type FinishType = 'turnkey' | 'semi-finished';
export type FacadeType = 'yakisugi' | 'lunawood';
export type ParquetType = 'osb' | 'cashmere' | 'hazelnut';
export type FloorplanId = 'a' | 'b' | 'c';

// Translations interface
export interface TranslationStrings {
  pageTitle: string;
  validity: string;
  offerLabel: string;
  offerFor: string;
  clientNamePlaceholder: string;
  footerSlogan: string;
  passiveHouseQuote: string;
  energyConsumptionLabel: string;
  energyConsumptionValue: string;
  co2Saved: string;
  co2Lifespan: string;
  organicWood: string;
  lowerEnergy: string;
  turnkeyTitle: string;
  interiorFinishes: string;
  woodSlatCeilingTitle: string;
  woodSlatCeilingDesc: string;
  fiberglassWallpaperTitle: string;
  fiberglassWallpaperDesc: string;
  parquetTitle: string;
  parquetDesc: string;
  s10DoorsTitle: string;
  s10DoorsDesc: string;
  bathroomFinishes: string;
  stoneCompositePanelsTitle: string;
  stoneCompositePanelsDesc: string;
  italianSinkTitle: string;
  italianSinkDesc: string;
  groheWCTitle: string;
  groheWCDesc: string;
  aristonBoilerTitle: string;
  aristonBoilerDesc: string;
  walkInShowerTitle: string;
  walkInShowerDesc: string;
  smartSystems: string;
  lightingTrackTitle: string;
  lightingTrackDesc: string;
  smartLightingTitle: string;
  smartLightingDesc: string;
  smartBlindsTitle: string;
  smartBlindsDesc: string;
  ventilationSystemTitle: string;
  ventilationSystemDesc: string;
  turnkeyDisclaimer: string;
  upgradesAndDelivery: string;
  delivery: string;
  deliveryCost: string;
  screwFoundation: string;
  deliveryTime: string;
  addOns: string;
  facade: string;
  parquetUpgradeLabel: string;
  smartBlindsTitleUpgrade: string;
  smartBlindsDescUpgrade: string;
  ventilationSystemTitleUpgrade: string;
  ventilationSystemDescUpgrade: string;
  solarPanelsTitleUpgrade: string;
  solarPanelsDescUpgrade: string;
  notesLabel: string;
  termsAndConditions: string;
  downloadOffer: string;
  totalLabel: string;
  vatLabel: string;
  turnkey: string;
  'semi-finished': string;
  plan: string;
  customPlan: string;
  osbStandard: string;
  included: string;
  total: string;
  dimensions: string;
  exteriorTotal: string;
  interiorTotal: string;
  interiorDimensions: string;
  exteriorDimensions: string;
  rooms: string;
  // Room names
  Dormitor: string;
  Baie: string;
  'Depozitare / Chichinetă': string;
  'Living + Bucătărie': string;
  'Dormitor 1': string;
  'Dormitor 2': string;
  'Dormitor 3': string;
  'Dormitor 4': string;
  'Baie 1': string;
  'Baie 2': string;
  Hol: string;
  // Section 2 translations
  s2_modular: string;
  s2_structure: string;
  s2_modularStructure_title: string;
  s2_modularStructure_desc: string;
  s2_c24Frame_title: string;
  s2_c24Frame_desc: string;
  s2_woodInsulation_title: string;
  s2_woodInsulation_desc: string;
  s2_osb_title: string;
  s2_osb_desc: string;
  s2_dwd_title: string;
  s2_dwd_desc: string;
  s2_smartMembrane_title: string;
  s2_smartMembrane_desc: string;
  s2_exteriorFinishes: string;
  s2_facadeYakisugi_title: string;
  s2_facadeYakisugi_desc: string;
  s2_facadeLunawood_title: string;
  s2_facadeLunawood_desc: string;
  s2_ventRoof_title: string;
  s2_ventRoof_desc: string;
  s2_epdmMembrane_title: string;
  s2_epdmMembrane_desc: string;
  s2_rainwater_title: string;
  s2_rainwater_desc: string;
  s2_windowsDoors: string;
  s2_genesisFrame_title: string;
  s2_genesisFrame_desc: string;
  s2_tripleGlazing_title: string;
  s2_tripleGlazing_desc: string;
  s2_kitchen: string;
  s2_kitchenInstall_title: string;
  s2_kitchenInstall_desc: string;
  s2_installations: string;
  s2_electrical_title: string;
  s2_electrical_desc: string;
  s2_plumbing_title: string;
  s2_plumbing_desc: string;
  s2_certs: string;
  s2_passivhaus_title: string;
  s2_passivhaus_desc: string;
  s2_epd_title: string;
  s2_epd_desc: string;
  s2_ce_title: string;
  s2_ce_desc: string;
  s2_warranty_title: string;
  s2_warranty_desc: string;
  // Timeline
  timeline_online: string;
  timeline_offer: string;
  timeline_reservation: string;
  timeline_payment10: string;
  timeline_preproduction: string;
  timeline_payment40: string;
  timeline_production: string;
  timeline_payment40_2: string;
  timeline_delivery: string;
  timeline_payment10_final: string;
  // Index signature for dynamic keys
  [key: string]: string;
}

export type Translations = Record<Language, TranslationStrings>;

// Floorplan details
export interface FloorplanDetails {
  exteriorTotal: string;
  interiorTotal: string;
  interior: string;
  exterior: string;
  rooms: Record<string, string>;
}

export interface Floorplan {
  name: string;
  url: string;
  details: FloorplanDetails;
}

// Model images structure
export interface ModelImages {
  facade: Record<FacadeType, string>;
  parquet: Record<Exclude<ParquetType, 'osb'>, string>;
  semi_parquet: Record<ParquetType, string>;
  floorplan: Record<FloorplanId, Floorplan>;
}

// Model data structure
export interface ModelData {
  name: string;
  co2Savings: string;
  passiveImg: string;
  images: ModelImages;
}

// Offer data structure
export interface OfferData {
  models: Record<ModelId, ModelData>;
  common: {
    logos: {
      passiveHouse: string;
      epd: string;
    };
  };
}

// Pricing structure
export interface ModelPricing {
  base: Record<FinishType, number>;
  upgrades: {
    parquet: Record<Exclude<ParquetType, 'osb'>, number>;
    ventilation: number;
    blinds: number;
    solar: number;
  };
}

export type PricingLogic = Record<ModelId, ModelPricing>;

// Selection state
export interface SelectionState {
  model: ModelId;
  finish: FinishType;
  facade: FacadeType;
  parquet: ParquetType;
  floorplan: FloorplanId;
  blinds: boolean;
  ventilation: boolean;
  solar: boolean;
  clientName: string;
  offerNr: string | null;
  offerDate: string;
  mentions: string;
  basePriceOverride: number | null;
}

// Auxiliary model names (used in cost guide)
export type AuxiliaryModelName = 'nomad' | 'wanderlust' | 'serenity' | 'sanctuary';

// Model name mapping from main app to auxiliary
export const MODEL_NAME_MAP: Record<string, AuxiliaryModelName> = {
  'nest': 'nomad',
  'nomad': 'nomad',
  'wanderlust': 'wanderlust',
  'serenity': 'serenity',
  'sanctuary': 'sanctuary'
};
