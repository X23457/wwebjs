import type { ContactId, ChatId } from './ids.js';
import type { GroupNotificationTypes } from './enums.js';
import type { RawMessageMedia } from './message.js';

/** Options for creating a group */
export interface CreateGroupOptions {
  /**
   * Seconds for messages to disappear in the group.
   * @default 0
   */
  messageTimer?: number;
  /** ID of a parent community group to link the new group with */
  parentGroupId?: string;
  /**
   * Send inviteV4 to participants who restrict being auto-added to groups.
   * @default true
   */
  autoSendInviteV4?: boolean;
  /** Comment to add to the inviteV4. @default '' */
  comment?: string;
  /** Only admins can add members. @default false */
  memberAddMode?: boolean;
  /** Admins must approve join requests. @default false */
  membershipApprovalMode?: boolean;
  /** Only admins can change group info. @default true */
  isRestrict?: boolean;
  /** Only admins can send messages. @default false */
  isAnnounce?: boolean;
}

/** Result returned by `createGroup` */
export interface CreateGroupResult {
  title: string;
  gid: ChatId;
  participants: {
    [participantId: string]: {
      statusCode: number;
      message: string;
      isGroupCreator: boolean;
      isInviteV4Sent: boolean;
    };
  };
}

/** Options for creating a channel */
export interface CreateChannelOptions {
  description?: string;
  picture?: RawMessageMedia;
}

/** Result returned by `createChannel` */
export interface CreateChannelResult {
  title: string;
  nid: ChatId;
  /** Channel invite link, starts with `https://whatsapp.com/channel/` */
  inviteLink: string;
  createdAtTs: number;
}

/** Options for unsubscribing from a channel */
export interface UnsubscribeOptions {
  /**
   * If true, completely removes the channel from the local collection,
   * as if the user never interacted with it.
   */
  deleteLocalModels?: boolean;
}

/** Options for searching for channels */
export interface SearchChannelsOptions {
  searchText?: string;
  countryCodes?: string[];
  skipSubscribedNewsletters?: boolean;
  view?: number;
  limit?: number;
}

/** Options for sending a message to a channel */
export interface MessageSendChannelOptions {
  caption?: string;
  mentions?: string[];
  media?: RawMessageMedia;
  extra?: unknown;
}

/** Options for transferring channel ownership */
export interface TransferChannelOwnershipOptions {
  /**
   * If true, the current user is dismissed as admin after the transfer
   * and becomes a regular subscriber.
   */
  shouldDismissSelfAsAdmin?: boolean;
}

/** A group notification event */
export interface GroupNotification {
  /** ContactId of the user who produced the notification */
  author: string;
  /** Extra content */
  body: string;
  /** ID of the chat this notification was sent for */
  chatId: string;
  /** ID representing the notification */
  id: object;
  /** Contact IDs of users affected by this notification */
  recipientIds: string[];
  /** Unix timestamp of when the notification was created */
  timestamp: number;
  /** GroupNotification type */
  type: GroupNotificationTypes;
}

/** A participant in a group */
export type GroupParticipant = {
  id: ContactId;
  isAdmin: boolean;
  isSuperAdmin: boolean;
};

/** Function signature for promoting or demoting group participants */
export type ChangeParticipantsPermissions = (
  participantIds: Array<string>,
) => Promise<{ status: number }>;

/** Result for each participant when using `addParticipants` */
export interface AddParticipantsResult {
  [participantId: string]: {
    code: number;
    message: string;
    isInviteV4Sent: boolean;
  };
}

/** Options for adding participants to a group */
export interface AddParticipantsOptions {
  /**
   * Milliseconds to wait between adding each participant.
   * Can be a number or `[min, max]` range.
   * @default [250, 500]
   */
  sleep?: Array<number> | number;
  /**
   * Send inviteV4 to participants who restrict being auto-added.
   * @default true
   */
  autoSendInviteV4?: boolean;
  /** Comment to add to the inviteV4. @default '' */
  comment?: string;
}

/** A pending group membership request */
export interface GroupMembershipRequest {
  id: object;
  addedBy: object;
  parentGroupId: object | null;
  /** Method used to create the request: NonAdminAdd / InviteLink / LinkedGroupJoin */
  requestMethod: string;
  t: number;
}

/** Result of approving or rejecting a membership request */
export interface MembershipRequestActionResult {
  requesterId: Array<string> | string | null;
  error?: number;
  message: string;
}

/** Options for approving or rejecting membership requests */
export interface MembershipRequestActionOptions {
  /** User ID(s) who requested to join. If null, acts on all pending requests. */
  requesterIds: Array<string> | string | null;
  /**
   * Milliseconds to wait between processing each requester.
   * Can be a number or `[min, max]` range.
   * @default [250, 500]
   */
  sleep: Array<number> | number | null;
}
