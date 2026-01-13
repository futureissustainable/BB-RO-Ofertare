/**
 * BioBuilds Offer Generator - Utility Functions
 * Input validation, sanitization, and helper functions
 */

import type {
  ModelId,
  FinishType,
  FacadeType,
  ParquetType,
  ValidationResult
} from './types';
import {
  CURRENCY_FORMAT_OPTIONS,
  PATTERNS,
  VALIDATION,
  VALID_MODELS,
  VALID_FINISHES,
  VALID_FACADES,
  VALID_PARQUETS,
  VALID_FLOORPLANS,
  OFFER_ID_CHARS,
} from './constants';

/**
 * Format a number as EUR currency
 */
export function formatCurrency(value: number): string {
  return value.toLocaleString('ro-RO', CURRENCY_FORMAT_OPTIONS);
}

/**
 * Parse a currency string to a number with improved handling
 * Handles edge cases like negative numbers and large values
 */
export function parseCurrency(text: string | null | undefined): number {
  if (!text) return 0;

  // Remove everything except digits, comma, period, and minus
  const cleaned = String(text)
    .replace(PATTERNS.currencyClean, '')
    .replace(/\s/g, '');

  // Handle empty string after cleaning
  if (!cleaned) return 0;

  // Handle European format (1.234,56) vs US format (1,234.56)
  // Check if comma is used as decimal separator (European)
  let normalized: string;
  const commaIndex = cleaned.lastIndexOf(',');
  const periodIndex = cleaned.lastIndexOf('.');

  if (commaIndex > periodIndex) {
    // European format: periods as thousands separator, comma as decimal
    normalized = cleaned.replace(/\./g, '').replace(',', '.');
  } else {
    // US format or no decimals: commas as thousands separator
    normalized = cleaned.replace(/,/g, '');
  }

  const number = parseFloat(normalized);

  // Validate result
  if (isNaN(number)) return 0;
  if (number < VALIDATION.minPriceValue) return 0;
  if (number > VALIDATION.maxPriceValue) return VALIDATION.maxPriceValue;

  return Math.round(number); // Round to nearest integer for EUR
}

/**
 * Get current date formatted as DD.MM.YYYY
 */
export function getCurrentDate(): string {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  return `${day}.${month}.${year}`;
}

/**
 * Generate random characters for offer ID
 */
export function generateRandomChars(length: number): string {
  let result = '';
  const chars = OFFER_ID_CHARS;
  const charsLength = chars.length;
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  return result;
}

/**
 * Sanitize string input for safe display
 * Prevents XSS by escaping HTML entities
 */
export function sanitizeString(input: string | null | undefined): string {
  if (!input) return '';
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Sanitize text content (for textContent assignment, less strict)
 */
export function sanitizeTextContent(input: string | null | undefined): string {
  if (!input) return '';
  return String(input).substring(0, VALIDATION.maxClientNameLength);
}

/**
 * Validate and sanitize model ID
 */
export function validateModelId(input: string | null): ValidationResult {
  if (!input) {
    return { isValid: false, sanitizedValue: null, error: 'Model ID is required' };
  }
  const normalized = input.toLowerCase().trim() as ModelId;
  if (VALID_MODELS.includes(normalized)) {
    return { isValid: true, sanitizedValue: normalized };
  }
  return { isValid: false, sanitizedValue: null, error: `Invalid model: ${input}` };
}

/**
 * Validate and sanitize finish type
 */
export function validateFinishType(input: string | null): ValidationResult {
  if (!input) {
    return { isValid: false, sanitizedValue: null, error: 'Finish type is required' };
  }
  const normalized = input.toLowerCase().trim() as FinishType;
  if (VALID_FINISHES.includes(normalized)) {
    return { isValid: true, sanitizedValue: normalized };
  }
  return { isValid: false, sanitizedValue: null, error: `Invalid finish: ${input}` };
}

/**
 * Validate and sanitize facade type
 */
export function validateFacadeType(input: string | null): ValidationResult {
  if (!input) {
    return { isValid: true, sanitizedValue: 'yakisugi' }; // Default
  }
  const normalized = input.toLowerCase().trim() as FacadeType;
  if (VALID_FACADES.includes(normalized)) {
    return { isValid: true, sanitizedValue: normalized };
  }
  return { isValid: true, sanitizedValue: 'yakisugi' }; // Fallback to default
}

/**
 * Validate and sanitize parquet type
 */
export function validateParquetType(input: string | null, finish: FinishType): ValidationResult {
  if (!input) {
    const defaultValue = finish === 'turnkey' ? 'cashmere' : 'osb';
    return { isValid: true, sanitizedValue: defaultValue };
  }
  const normalized = input.toLowerCase().trim() as ParquetType;
  if (VALID_PARQUETS.includes(normalized)) {
    // OSB is only valid for semi-finished
    if (normalized === 'osb' && finish === 'turnkey') {
      return { isValid: true, sanitizedValue: 'cashmere' };
    }
    return { isValid: true, sanitizedValue: normalized };
  }
  const defaultValue = finish === 'turnkey' ? 'cashmere' : 'osb';
  return { isValid: true, sanitizedValue: defaultValue };
}

/**
 * Validate and sanitize floorplan
 */
export function validateFloorplan(input: string | null): ValidationResult {
  if (!input) {
    return { isValid: true, sanitizedValue: 'a' };
  }
  const normalized = input.toLowerCase().trim();
  if (VALID_FLOORPLANS.includes(normalized as typeof VALID_FLOORPLANS[number])) {
    return { isValid: true, sanitizedValue: normalized };
  }
  return { isValid: true, sanitizedValue: 'a' };
}

/**
 * Validate boolean from URL parameter
 */
export function validateBoolean(input: string | null, defaultValue: boolean): boolean {
  if (input === null) return defaultValue;
  const normalized = input.toLowerCase().trim();
  if (['true', '1', 'yes', 'on', 'blinds', 'solar', 'ventilation-system'].includes(normalized)) {
    return true;
  }
  if (['false', '0', 'no', 'off', 'no-blinds', 'no-solar', 'no-ventilation'].includes(normalized)) {
    return false;
  }
  return defaultValue;
}

/**
 * Validate price override
 */
export function validatePriceOverride(input: string | null): number | null {
  if (!input || input === 'null') return null;
  const price = parseFloat(input);
  if (isNaN(price)) return null;
  if (price < VALIDATION.minPriceValue) return null;
  if (price > VALIDATION.maxPriceValue) return VALIDATION.maxPriceValue;
  return Math.round(price);
}

/**
 * Extract value from prefixed URL parameter format
 * e.g., "floorplan-a" -> "a", "facade-yakisugi" -> "yakisugi"
 */
export function extractPrefixedValue(prefixedValue: string | null, prefix: string): string | null {
  if (!prefixedValue) return null;
  if (prefixedValue.startsWith(`${prefix}-`)) {
    return prefixedValue.substring(prefix.length + 1);
  }
  return prefixedValue;
}

/**
 * Sanitize filename for PDF download
 */
export function sanitizeFilename(input: string): string {
  return input.replace(PATTERNS.safeFilename, '').trim() || 'Client';
}

/**
 * Detect if running on iOS/iPadOS
 */
export function isIOSDevice(): boolean {
  // Check for iOS user agent
  const isIOSUA = /iPad|iPhone|iPod/.test(navigator.userAgent);

  // Check for iPadOS (reports as Mac but has touch)
  const isIPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

  return isIOSUA || isIPadOS;
}

/**
 * Detect if running on mobile device using feature detection
 * More reliable than user agent string matching
 */
export function isMobileDevice(): boolean {
  // Primary check: touch capability combined with screen size
  const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

  // iOS detection (special case for iPadOS)
  if (isIOSDevice()) return true;

  // Feature-based detection
  if (hasTouchScreen && (isSmallScreen || isCoarsePointer)) return true;

  // Fallback to user agent for edge cases (Android tablets, etc.)
  const mobileUA = /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return mobileUA && hasTouchScreen;
}

/**
 * Parse discount from mentions text
 * Returns discount percentage (0-100) or null if no discount found
 */
export function parseDiscount(mentionsText: string): number | null {
  const match = mentionsText.match(PATTERNS.discount);
  if (match) {
    const discount = parseFloat(match[1]);
    if (!isNaN(discount) && discount >= 0 && discount <= 100) {
      return discount;
    }
  }
  return null;
}

/**
 * Parse additions from mentions text
 * Returns total EUR amount to add
 */
export function parseAdditions(mentionsText: string): number {
  let total = 0;
  const matches = mentionsText.matchAll(PATTERNS.addition);
  for (const match of matches) {
    const amount = parseInt(match[1], 10);
    if (!isNaN(amount) && amount > 0) {
      total += amount;
    }
  }
  return total;
}

/**
 * Create a detail item HTML string safely
 */
export function createDetailItemHTML(label: string, value: string): string {
  const safeLabel = sanitizeString(label);
  const safeValue = sanitizeString(value);
  return `<div class="detail-item"><span>${safeLabel}</span><span>${safeValue}</span></div>`;
}

/**
 * Safely set text content of an element
 */
export function setTextContent(element: HTMLElement | null, text: string): void {
  if (element) {
    element.textContent = text;
  }
}

/**
 * Safely get element by ID with type assertion
 */
export function getElementById<T extends HTMLElement>(id: string): T | null {
  return document.getElementById(id) as T | null;
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function(this: unknown, ...args: Parameters<T>): void {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

/**
 * Wait for a specified number of milliseconds
 */
export function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Safely parse URL hash for language
 */
export function parseLanguageFromHash(hash: string): string | null {
  const match = hash.match(PATTERNS.languageHash);
  return match ? match[1].toLowerCase() : null;
}

/**
 * Check if edit mode is enabled in URL hash
 */
export function isEditModeEnabled(hash: string): boolean {
  return PATTERNS.editHash.test(hash);
}
