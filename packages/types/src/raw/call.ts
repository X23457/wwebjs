/**
 * Raw call data as received from the WhatsApp Web internal API.
 * This is the DataType used by the Call structure in @wwebjs/structs.
 */
export interface RawCall {
  id: string;
  from?: string;
  timestamp: number;
  isVideo: boolean;
  isGroup: boolean;
  fromMe: boolean;
  canHandleLocally: boolean;
  webClientShouldHandle: boolean;
  participants: object;
}
