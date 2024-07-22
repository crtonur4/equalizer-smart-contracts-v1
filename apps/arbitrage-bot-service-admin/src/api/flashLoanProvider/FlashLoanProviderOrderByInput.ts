import { SortOrder } from "../../util/SortOrder";

export type FlashLoanProviderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isActive?: SortOrder;
  providerName?: SortOrder;
  apiUrl?: SortOrder;
  maximumLoanAmount?: SortOrder;
  fees?: SortOrder;
};
