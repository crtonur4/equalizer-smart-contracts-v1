import { FlashLoanProviderWhereInput } from "./FlashLoanProviderWhereInput";
import { FlashLoanProviderOrderByInput } from "./FlashLoanProviderOrderByInput";

export type FlashLoanProviderFindManyArgs = {
  where?: FlashLoanProviderWhereInput;
  orderBy?: Array<FlashLoanProviderOrderByInput>;
  skip?: number;
  take?: number;
};
