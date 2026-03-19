import type { ContactId } from './ids.js';
import type { WAState } from './enums.js';

/** Current connection information */
export interface ClientInfo {
  /**
   * Current user ID
   * @deprecated Use `.wid` instead
   */
  me: ContactId;
  /** Current user ID */
  wid: ContactId;
  /**
   * Information about the phone this client is connected to.
   * Not available in multi-device.
   * @deprecated
   */
  phone: ClientInfoPhone;
  /** Platform the phone is running on */
  platform: string;
  /** Name configured to be shown in push notifications */
  pushname: string;
  /** Get current battery percentage and charging status for the attached device */
  getBatteryStatus: () => Promise<BatteryInfo>;
}

/**
 * Information about the phone this client is connected to
 * @deprecated
 */
export interface ClientInfoPhone {
  wa_version: string;
  os_version: string;
  device_manufacturer: string;
  device_model: string;
  os_build_number: string;
}

/** Options for initializing the WhatsApp client */
export interface ClientOptions {
  /** Timeout in ms for the authentication selector in puppeteer. @default 0 */
  authTimeoutMs?: number;
  /** Function to be evaluated on new document. @default undefined */
  evalOnNewDoc?: Function;
  /** Puppeteer launch options */
  puppeteer?: Record<string, unknown>;
  /** Determines how to save and restore sessions */
  authStrategy?: AuthStrategyOptions;
  /** The version of WhatsApp Web to use */
  webVersion?: string;
  /** Determines how to retrieve the WhatsApp Web version */
  webVersionCache?: WebCacheOptions;
  /** How many times the QR code should be refreshed before giving up. @default 0 */
  qrMaxRetries?: number;
  /** If another WhatsApp Web session is detected, take over the session. @default false */
  takeoverOnConflict?: boolean;
  /** How much time to wait before taking over the session. @default 0 */
  takeoverTimeoutMs?: number;
  /** User agent to use in puppeteer */
  userAgent?: string;
  /** Path to ffmpeg binary for sticker generation. @default 'ffmpeg' */
  ffmpegPath?: string;
  /** Sets bypassing of page's Content-Security-Policy. @default false */
  bypassCSP?: boolean;
  /** Sets the device name of the current linked device */
  deviceName?: string;
  /** Sets the browser name of the current linked device */
  browserName?: 'Chrome' | 'Firefox' | 'IE' | 'Opera' | 'Safari' | 'Edge';
  /** Proxy authentication credentials */
  proxyAuthentication?: { username: string; password: string } | undefined;
  /** Phone number pairing configuration */
  pairWithPhoneNumber?: {
    phoneNumber: string;
    showNotification?: boolean;
    intervalMs?: number;
  };
}

/** Minimal interface for an auth strategy — implemented in whatsapp-web.js */
export interface AuthStrategyOptions {
  [key: string]: unknown;
}

export interface LocalWebCacheOptions {
  type: 'local';
  path?: string;
  strict?: boolean;
}

export interface RemoteWebCacheOptions {
  type: 'remote';
  remotePath: string;
  strict?: boolean;
}

export interface NoWebCacheOptions {
  type: 'none';
}

export type WebCacheOptions =
  | NoWebCacheOptions
  | LocalWebCacheOptions
  | RemoteWebCacheOptions;

/**
 * Battery status information
 * @deprecated
 */
export interface BatteryInfo {
  /** Current battery percentage */
  battery: number;
  /** Whether the phone is plugged in */
  plugged: boolean;
}

/** Result type returned by mute/unmute operations */
export interface MuteResult {
  isMuted: boolean;
  muteExpiration: number;
}

/** Result type for WAState disconnected event */
export type DisconnectReason = WAState | 'LOGOUT';
