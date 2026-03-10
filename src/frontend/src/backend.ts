// Stub backend - this app uses frontend-only logic, no canister calls needed
export type backendInterface = Record<string, never>;
export type CreateActorOptions = {
  agentOptions?: Record<string, unknown>;
};
export class ExternalBlob {
  static fromURL(_url: string): ExternalBlob { return new ExternalBlob(); }
  async getBytes(): Promise<Uint8Array> { return new Uint8Array(); }
  onProgress?: (progress: number) => void;
}
export function createActor(
  _canisterId: string,
  _uploadFile: unknown,
  _downloadFile: unknown,
  _options?: unknown,
): backendInterface {
  return {};
}
