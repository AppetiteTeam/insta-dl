export declare function getReelInfo(url: string): Promise<ReelDataType | undefined>;

export type ReelDataType = {
  url: string,
  text: string,
  cover_url: string | null | undefined,
}
