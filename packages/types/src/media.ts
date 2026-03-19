/** Options for sending a location message */
export interface LocationSendOptions {
  name?: string;
  address?: string;
  url?: string;
}

/** Options for creating a poll */
export interface PollSendOptions {
  /** false = single choice, true = multiple choice. @default false */
  allowMultipleAnswers?: boolean;
  /**
   * Custom message secret, usable as a poll ID.
   * Must be a unique vector of length 32.
   */
  messageSecret: Array<number> | undefined;
}

/** Options for creating a scheduled event */
export interface ScheduledEventSendOptions {
  description?: string;
  endTime?: Date;
  location?: string;
  /** Type of call link to generate: `'video'` | `'voice'` | `'none'` */
  callType?: string;
  /** @default false */
  isEventCanceled?: boolean;
  /**
   * Custom message secret, usable as an event ID.
   * Must be a unique vector of length 32.
   */
  messageSecret: Array<number> | undefined;
}
