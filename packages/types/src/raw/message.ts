import type { MessageId } from '../ids.js';
import type { MessageTypes, MessageAck } from '../enums.js';

/**
 * Raw message data as received from the WhatsApp Web internal API.
 * This is the DataType used by the Message structure in @wwebjs/structs.
 */
export interface RawMessage {
  id: MessageId;
  body: string;
  type: MessageTypes;
  timestamp: number;
  from: string;
  to: string;
  author?: string;
  ack: MessageAck;
  hasMedia: boolean;
  mediaKey?: string;
  mimetype?: string;
  isForwarded: boolean;
  forwardingScore: number;
  isStatus: boolean;
  isStarred: boolean;
  isGif: boolean;
  isEphemeral: boolean;
  broadcast: boolean;
  fromMe: boolean;
  hasQuotedMsg: boolean;
  hasReaction: boolean;
  duration?: string;
  deviceType: string;
  mentionedIds: string[];
  groupMentions: Array<{
    groupSubject: string;
    groupJid: string;
  }>;
  location?: {
    degreesLatitude: number;
    degreesLongitude: number;
    description?: string;
    name?: string;
    address?: string;
    url?: string;
  };
  vCards: string[];
  inviteV4?: {
    inviteCode: string;
    inviteCodeExp: number;
    groupId: string;
    groupName?: string;
    fromId: string;
    toId: string;
  };
  links: Array<{
    link: string;
    isSuspicious: boolean;
  }>;
  orderId?: string;
  title?: string;
  description?: string;
  businessOwnerJid?: string;
  productId?: string;
  latestEditSenderTimestampMs?: number;
  latestEditMsgKey?: MessageId;
  protocolMessageKey?: MessageId;
  dynamicReplyButtons?: object;
  selectedButtonId?: string;
  selectedRowId?: string;
  rawData: object;
  /** Poll fields */
  pollName?: string;
  pollOptions?: string[];
  allowMultipleAnswers?: boolean;
  messageSecret?: Array<number>;
  /** Scheduled event fields */
  eventStartTime?: number;
  eventEndTime?: number;
  eventDescription?: string;
  eventLocation?: {
    degreesLatitude: number;
    degreesLongitude: number;
    name: string;
  };
  eventJoinLink?: string;
  isEventCaneled?: boolean;
}
