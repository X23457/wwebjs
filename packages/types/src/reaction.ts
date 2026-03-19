import type { MessageId } from './ids.js';

/** A single reaction on a message */
export interface Reaction {
  id: MessageId;
  orphan: number;
  orphanReason?: string;
  timestamp: number;
  reaction: string;
  read: boolean;
  msgId: MessageId;
  senderId: string;
  ack?: number;
}

/** An aggregated reaction list entry for a message */
export type ReactionList = {
  id: string;
  aggregateEmoji: string;
  hasReactionByMe: boolean;
  senders: Array<Reaction>;
};
