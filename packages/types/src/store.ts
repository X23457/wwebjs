/** Interface that RemoteAuth storage adapters must implement */
export interface Store {
  sessionExists: (options: { session: string }) => Promise<boolean> | boolean;
  delete: (options: { session: string }) => Promise<unknown> | unknown;
  save: (options: { session: string }) => Promise<unknown> | unknown;
  extract: (options: {
    session: string;
    path: string;
  }) => Promise<unknown> | unknown;
}
