/**
 * Raw label data as received from the WhatsApp Web internal API.
 * This is the DataType used by the Label structure in @wwebjs/structs.
 */
export interface RawLabel {
  id: string;
  name: string;
  hexColor: string;
}
