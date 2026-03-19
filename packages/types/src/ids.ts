/** Serialized ID for a chat */
export interface ChatId {
  /** WhatsApp server domain, e.g. `c.us` or `g.us` */
  server: string;
  /** User's WhatsApp number, e.g. `554199999999` */
  user: string;
  /** Serialized form, e.g. `554199999999@c.us` */
  _serialized: string;
}

/** Serialized ID for a contact */
export interface ContactId {
  server: string;
  user: string;
  _serialized: string;
}

/** Serialized ID for a message */
export interface MessageId {
  fromMe: boolean;
  remote: string;
  id: string;
  _serialized: string;
}
