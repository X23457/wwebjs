import type { ContactId } from '../ids.js';
import type { BusinessCategory, BusinessHours } from '../contact.js';

/**
 * Raw contact data as received from the WhatsApp Web internal API.
 * This is the DataType used by the Contact structure in @wwebjs/structs.
 */
export interface RawContact {
  id: ContactId;
  number: string;
  isBusiness: boolean;
  isEnterprise: boolean;
  labels?: string[];
  name?: string;
  pushname: string;
  sectionHeader?: string;
  shortName?: string;
  statusMute: boolean;
  type: string;
  verifiedLevel?: unknown;
  verifiedName?: unknown;
  isMe: boolean;
  isUser: boolean;
  isGroup: boolean;
  isWAContact: boolean;
  isMyContact: boolean;
  isBlocked: boolean;
}

/** Business profile data embedded in a RawBusinessContact */
export interface RawBusinessProfile {
  id: ContactId;
  tag: string;
  description: string;
  categories: BusinessCategory[];
  profileOptions: {
    commerceExperience: string;
    cartEnabled: boolean;
  };
  email: string;
  website: string[];
  latitude: number;
  longitude: number;
  businessHours: BusinessHours;
  address: string;
  fbPage: object;
  ifProfileLinked: boolean;
  coverPhoto: null | unknown;
}

/**
 * Raw business contact data as received from the WhatsApp Web internal API.
 * This is the DataType used by the BusinessContact structure in @wwebjs/structs.
 */
export interface RawBusinessContact extends RawContact {
  businessProfile: RawBusinessProfile;
}
