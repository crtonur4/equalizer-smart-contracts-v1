export type FlashLoanProviderCreateInput = {
  isActive?: boolean | null;
  providerName?: string | null;
  apiUrl?: string | null;
  maximumLoanAmount?: number | null;
  fees?: number | null;
};
