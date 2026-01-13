/**
 * BioBuilds Offer Generator - Static Data
 * Offer data and pricing logic
 */

import type { OfferData, PricingLogic } from './types';

export const offerData: OfferData = {
  models: {
    'nest-24': {
      name: 'Nest',
      co2Savings: '56.3',
      passiveImg: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69303cdf299025f5b7e0e219_95%20Wall%20Section.avif',
      images: {
        facade: {
          yakisugi: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2de1073da9af1229b5a_24%20EXT.avif',
          lunawood: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2db5bc300eaac8d8d34_24%20EXT%20LUNA.avif',
        },
        parquet: {
          cashmere: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2d5825431c8de2a4647_24%20INT.avif',
          hazelnut: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301c999e84b323b4840928_24%20INT%20TURNKEY%20HAZELNUT.avif',
        },
        semi_parquet: {
          osb: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2de2f5f16c2ddd166de_24%20INT%20SEMI.avif',
          cashmere: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301c9e626baf48e649fa6f_24%20INT%20SEMI%20CASHMERE.avif',
          hazelnut: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301c9ded2f00c9544f77e8_24%20INT%20SEMI%20HAZELNUT.avif',
        },
        floorplan: {
          a: {
            name: 'Plan A',
            url: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c43d2244f5d6be3af87aab_24m2%20Floorplan%20A.avif',
            details: {
              totalArea: '24m²',
              interior: '5.70m x 3.10m x 2.50m',
              exterior: '6.40m x 3.80m x 3.20m',
              rooms: {
                Dormitor: '14.20m²',
                Baie: '2.65m²',
                'Depozitare / Chichinetă': '0.80m²',
              },
            },
          },
          b: {
            name: 'Plan B',
            url: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c43d22e33276e515d43a8f_24m2%20Floorplan%20B.avif',
            details: {
              totalArea: '24m²',
              interior: '5.70m x 3.10m x 2.50m',
              exterior: '6.40m x 3.80m x 3.20m',
              rooms: {
                Dormitor: '14.20m²',
                Baie: '2.65m²',
                'Depozitare / Chichinetă': '0.80m²',
              },
            },
          },
        },
      },
    },
    'wanderlust-48': {
      name: 'Wanderlust',
      co2Savings: '112.7',
      passiveImg: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69303cdf299025f5b7e0e219_95%20Wall%20Section.avif',
      images: {
        facade: {
          yakisugi: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2e1dfc362059ebe425a_48%20EXT.avif',
          lunawood: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2de138a2e743e8b46a5_48%20EXT%20LUNA.avif',
        },
        parquet: {
          cashmere: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2d4c4987465f99fdb83_48%20INT.avif',
          hazelnut: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301c9c67b49cdd4284575f_48%20INT%20TURNKEY%20HAZELNUT.avif',
        },
        semi_parquet: {
          osb: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2dbc3983bc6c1db37d5_48%20INT%20SEMI.avif',
          cashmere: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301c9d58a01418fbcb2041_48%20INT%20SEMI%20CASHMERE.avif',
          hazelnut: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301c9fdc93278ac1ebcb15_48%20INT%20SEMI%20HAZELNUT.avif',
        },
        floorplan: {
          a: {
            name: 'Plan A',
            url: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c525733fc3797a1ea68b6_48m2%20Floorplan%20A.png',
            details: {
              totalArea: '48m²',
              interior: '11.80m x 3.10m x 2.50m',
              exterior: '12.60m x 3.80m x 3.20m',
              rooms: {
                'Living + Bucătărie': '19.90m²',
                Dormitor: '11.80m²',
                Baie: '4.50m²',
              },
            },
          },
          b: {
            name: 'Plan B',
            url: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514f671a54486d036b53_48m2%20Floorplan%20B.png',
            details: {
              totalArea: '48m²',
              interior: '11.80m x 3.10m x 2.50m',
              exterior: '12.60m x 3.80m x 3.20m',
              rooms: {
                'Dormitor 1': '11.80m²',
                'Dormitor 2': '11.80m²',
                'Baie 1': '4.50m²',
                'Baie 2': '3.50m²',
                Hol: '3.50m²',
              },
            },
          },
        },
      },
    },
    'serenity-95': {
      name: 'Serenity',
      co2Savings: '225.2',
      passiveImg: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69303cdf299025f5b7e0e219_95%20Wall%20Section.avif',
      images: {
        facade: {
          yakisugi: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2def577675af1e0311b_95%20EXT.avif',
          lunawood: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2de42d32a56c177baee_95%20EXT%20LUNA.avif',
        },
        parquet: {
          cashmere: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2e1032083199a0f6c91_b01fd90d9516b5947a7ebf431c594038_95%20INT.avif',
          hazelnut: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301ca4896ae35084ea4c8a_95%20INT%20TURNKEY%20HAZELNUT.avif',
        },
        semi_parquet: {
          osb: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2d570c656a121f2f894_95%20INT%20SEMI.avif',
          cashmere: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301c9d2329a1114c0b4a71_95%20INT%20SEMI%20CASHMERE.avif',
          hazelnut: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301c9fa6475a26839192bd_95%20INT%20SEMI%20HAZELNUT.avif',
        },
        floorplan: {
          a: {
            name: 'Plan A',
            url: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514e29f50d2da31e84dc_95m2%20Floorplan%20A.png',
            details: {
              totalArea: '95m²',
              interior: '11.80m x 6.80m x 2.50m',
              exterior: '12.60m x 7.60m x 3.20m',
              rooms: {
                'Living + Bucătărie': '29.10m²',
                'Dormitor 1': '12.20m²',
                'Dormitor 2': '12.40m²',
                'Dormitor 3': '13.10m²',
                'Baie 1': '3.75m²',
                'Baie 2': '4.35m²',
              },
            },
          },
          b: {
            name: 'Plan B',
            url: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514fdf7becede16b71e9_95m2%20Floorplan%20B.png',
            details: {
              totalArea: '95m²',
              interior: '11.80m x 6.80m x 2.50m',
              exterior: '12.60m x 7.60m x 3.20m',
              rooms: {
                'Living + Bucătărie': '41.50m²',
                'Dormitor 1': '12.20m²',
                'Dormitor 2': '13.10m²',
                'Baie 1': '3.75m²',
                'Baie 2': '4.35m²',
              },
            },
          },
          c: {
            name: 'Plan C',
            url: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514ff885d32e87f5d5ef_95m2%20Floorplan%20C.png',
            details: {
              totalArea: '95m²',
              interior: '11.80m x 6.80m x 2.50m',
              exterior: '12.60m x 7.60m x 3.20m',
              rooms: {
                'Living + Bucătărie': '53.70m²',
                Dormitor: '13.10m²',
                'Baie 1': '3.75m²',
                'Baie 2': '4.35m²',
              },
            },
          },
        },
      },
    },
    'sanctuary-142': {
      name: 'Sanctuary',
      co2Savings: '337.8',
      passiveImg: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69303cdf299025f5b7e0e219_95%20Wall%20Section.avif',
      images: {
        facade: {
          yakisugi: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2dbf906e66f4ea4c2c0_142%20EXT.avif',
          lunawood: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2d4db512d9db681f6e6_142%20EXT%20LUNA.avif',
        },
        parquet: {
          cashmere: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2def7f9aedcdd1efa47_142%20INT.avif',
          hazelnut: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301c9d43a6473248399be6_142%20INT%20TURNKEY%20HAZELNUT.avif',
        },
        semi_parquet: {
          osb: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/692ef2e013c0363b4b84943c_142%20INT%20SEMI.avif',
          cashmere: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301ca3e171b36af9268036_142%20INT%20SEMI%20CASHMERE.avif',
          hazelnut: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/69301ca4d06d247c753b592b_142%20INT%20SEMI%20HAZELNUT.avif',
        },
        floorplan: {
          a: {
            name: 'Plan A',
            url: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514ff7e14cb1b083351b_142m2%20Floorplan%20A.png',
            details: {
              totalArea: '142m²',
              interior: '11.80m x 10.60m x 2.50m',
              exterior: '12.60m x 11.30m x 3.20m',
              rooms: {
                'Living + Bucătărie': '62.90m²',
                'Dormitor 1': '12.40m²',
                'Dormitor 2': '12.20m²',
                'Dormitor 3': '12.40m²',
                'Dormitor 4': '13.10m²',
                'Baie 1': '3.75m²',
                'Baie 2': '4.35m²',
              },
            },
          },
          b: {
            name: 'Plan B',
            url: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514f6966128dbeb27986_142m2%20Floorplan%20B.png',
            details: {
              totalArea: '142m²',
              interior: '11.80m x 10.60m x 2.50m',
              exterior: '12.60m x 11.30m x 3.20m',
              rooms: {
                'Living + Bucătărie': '75.30m²',
                'Dormitor 1': '12.20m²',
                'Dormitor 2': '12.40m²',
                'Dormitor 3': '13.10m²',
                'Baie 1': '3.75m²',
                'Baie 2': '4.35m²',
              },
            },
          },
          c: {
            name: 'Plan C',
            url: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514fd4d57aa8ff3d75e9_142m2%20Floorplan%20C.png',
            details: {
              totalArea: '142m²',
              interior: '11.80m x 10.60m x 2.50m',
              exterior: '12.60m x 11.30m x 3.20m',
              rooms: {
                'Living + Bucătărie': '87.50m²',
                'Dormitor 1': '12.40m²',
                'Dormitor 2': '13.10m²',
                'Baie 1': '3.75m²',
                'Baie 2': '4.35m²',
              },
            },
          },
        },
      },
    },
  },
  common: {
    logos: {
      passiveHouse: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/680248132febd7da21dcfe3a_Biobuilds%20Passive%20House%20Clean%20White.avif',
      epd: 'https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68028d2a23638226fd81a56e_BIOBUILDS%20EPD%20Logo.avif',
    },
  },
};

export const pricingLogic: PricingLogic = {
  'nest-24': {
    base: { 'semi-finished': 39800, turnkey: 59800 },
    upgrades: {
      parquet: { cashmere: 1800, hazelnut: 1800 },
      ventilation: 4800,
      blinds: 2000,
      solar: 7800,
    },
  },
  'wanderlust-48': {
    base: { 'semi-finished': 59800, turnkey: 109800 },
    upgrades: {
      parquet: { cashmere: 3800, hazelnut: 3800 },
      ventilation: 7800,
      blinds: 4000,
      solar: 11800,
    },
  },
  'serenity-95': {
    base: { 'semi-finished': 109800, turnkey: 189800 },
    upgrades: {
      parquet: { cashmere: 7800, hazelnut: 7800 },
      ventilation: 9800,
      blinds: 7000,
      solar: 14800,
    },
  },
  'sanctuary-142': {
    base: { 'semi-finished': 159800, turnkey: 279800 },
    upgrades: {
      parquet: { cashmere: 11800, hazelnut: 11800 },
      ventilation: 9800,
      blinds: 9000,
      solar: 16800,
    },
  },
};
