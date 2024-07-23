export type FlashLoanProvider = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean | null;
  providerName: string | null;
  apiUrl: string | null;
  maximumLoanAmount: number | null;
  fees: number | null;
};
