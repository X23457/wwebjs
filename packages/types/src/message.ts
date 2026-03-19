import type { ContactId, MessageId } from './ids.js';

/** Delivery/read receipt information for a sent message */
export type MessageInfo = {
  delivery: Array<{ id: ContactId; t: number }>;
  deliveryRemaining: number;
  played: Array<{ id: ContactId; t: number }>;
  playedRemaining: number;
  read: Array<{ id: ContactId; t: number }>;
  readRemaining: number;
};

/** Data carried by a v4 group invite message */
export type InviteV4Data = {
  inviteCode: string;
  inviteCodeExp: number;
  groupId: string;
  groupName?: string;
  fromId: string;
  toId: string;
};

/** Options for sending a message */
export interface MessageSendOptions {
  /** Show link preview. Has no effect on multi-device accounts. */
  linkPreview?: boolean;
  /** Send audio as voice message with a generated waveform */
  sendAudioAsVoice?: boolean;
  /** Send video as GIF */
  sendVideoAsGif?: boolean;
  /** Send media as sticker */
  sendMediaAsSticker?: boolean;
  /** Send media as document */
  sendMediaAsDocument?: boolean;
  /** Send media in HD quality */
  sendMediaAsHd?: boolean;
  /** Send photo/video as a view-once message */
  isViewOnce?: boolean;
  /** Automatically parse vCards and send them as contacts */
  parseVCards?: boolean;
  /** Caption for image or video messages */
  caption?: string;
  /** ID of the message being quoted/replied to */
  quotedMessageId?: string;
  /** User IDs to mention in the message */
  mentions?: string[];
  /** Group mentions */
  groupMentions?: Array<{
    /** Name of the group to mention */
    subject: string;
    /** Group ID, e.g. `XXXXXXXXXX@g.us` */
    id: string;
  }>;
  /** Send 'seen' status */
  sendSeen?: boolean;
  /** Bot WID when doing a bot mention like @Meta AI */
  invokedBotWid?: string;
  /** Media to be sent */
  media?: RawMessageMedia;
  /** Extra options */
  extra?: unknown;
  /** Sticker name, if sendMediaAsSticker is true */
  stickerName?: string;
  /** Sticker author, if sendMediaAsSticker is true */
  stickerAuthor?: string;
  /** Sticker categories, if sendMediaAsSticker is true */
  stickerCategories?: string[];
  /**
   * Send a quoted message even if the quote fails to resolve.
   * @default true
   */
  ignoreQuoteErrors?: boolean;
  /**
   * Wait for the message send result before resolving.
   * @default false
   */
  waitUntilMsgSent?: boolean;
}

/** Options for editing a message */
export interface MessageEditOptions {
  /** Show link preview. Has no effect on multi-device accounts. */
  linkPreview?: boolean;
  /** User IDs of users mentioned in the message */
  mentions?: string[];
  /** Extra options */
  extra?: unknown;
}

/** Options for fetching messages from a chat */
export interface MessageSearchOptions {
  /**
   * Maximum number of messages to return.
   * Set to `Infinity` to load all messages.
   */
  limit?: number;
  /** Filter to messages sent by the bot only, or by others only */
  fromMe?: boolean;
}

/** Last edit information on a message */
export interface MessageEditInfo {
  latestEditSenderTimestampMs: number;
  latestEditMsgKey: MessageId;
}

/** Raw shape of a media attachment as used in send options */
export interface RawMessageMedia {
  mimetype: string;
  data: string;
  filename?: string | null;
  filesize?: number | null;
}

/** Options for creating a MessageMedia instance from a URL */
export interface MediaFromURLOptions {
  filename?: string;
  unsafeMime?: boolean;
  reqOptions?: Record<string, unknown>;
}
