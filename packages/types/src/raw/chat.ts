import type { ChatId, ContactId } from '../ids.js';
import type { RawMessage } from './message.js';

/**
 * Raw chat data as received from the WhatsApp Web internal API.
 * This is the DataType used by the Chat structure in @wwebjs/structs.
 */
export interface RawChat {
  id: ChatId;
  name: string;
  isGroup: boolean;
  isReadOnly: boolean;
  unreadCount: number;
  timestamp: number;
  archived: boolean;
  pinned: boolean;
  isLocked: boolean;
  isMuted: boolean;
  muteExpiration: number;
  lastMessage?: RawMessage;
}

/** Raw group metadata embedded inside a RawGroupChat */
export interface RawGroupMetadata {
  owner: ContactId;
  desc?: string;
  descId?: string;
  restrict?: boolean;
  announce?: boolean;
  noFrequentlyForwarded?: boolean;
  ephemeralDuration?: number;
  memberAddMode?: boolean;
  reportToAdminMode?: boolean;
  participants: Array<{
    id: ContactId;
    isAdmin: boolean;
    isSuperAdmin: boolean;
  }>;
  pendingParticipants?: Array<ContactId>;
  pastParticipants?: Array<ContactId>;
  creation: number;
}

/**
 * Raw group chat data as received from the WhatsApp Web internal API.
 * This is the DataType used by the GroupChat structure in @wwebjs/structs.
 */
export interface RawGroupChat extends RawChat {
  groupMetadata: RawGroupMetadata;
}

/**
 * Raw channel data as received from the WhatsApp Web internal API.
 * This is the DataType used by the Channel structure in @wwebjs/structs.
 */
export interface RawChannel {
  id: {
    server: string;
    user: string;
    _serialized: string;
  };
  name: string;
  description?: string;
  isChannel: boolean;
  isGroup: boolean;
  isReadOnly: boolean;
  unreadCount: number;
  timestamp: number;
  isMuted: boolean;
  muteExpiration: number;
  lastMessage?: RawMessage;
  channelMetadata?: {
    subscriberCount?: number;
    viewerCount?: number;
  };
}
