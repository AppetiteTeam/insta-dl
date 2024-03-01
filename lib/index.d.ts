export declare function getReelInfo(url: string): Promise<ReelDataType | undefined>;

export type ReelDataType = {
  url: string,
  title: string,
  cover_url: string | null | undefined,
}
